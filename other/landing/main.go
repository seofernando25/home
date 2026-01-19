package main

import (
	"embed"
	"html/template"
	"io/fs"
	"log"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/nasharena/ui"
)

//go:embed templates/* public/images/*
var localFS embed.FS

// multiFS implements fs.FS by trying multiple filesystems in order.
type multiFS []fs.FS

func (m multiFS) Open(name string) (fs.File, error) {
	for _, f := range m {
		file, err := f.Open(name)
		if err == nil {
			return file, nil
		}
	}
	return nil, fs.ErrNotExist
}

// subFS is a helper to get a sub-filesystem or panic.
func subFS(f fs.FS, path string) fs.FS {
	s, err := fs.Sub(f, path)
	if err != nil {
		panic(err)
	}
	return s
}

type NavLink struct {
	Number string
	Label  string
	URL    string
}

type BlogPost struct {
	ID          string
	Title       string
	Date        string
	Description string
	Href        string
	Image       string
	Badge       string
	ContentHTML template.HTML
}

var blogPosts = []BlogPost{
	{
		ID:          "introducing-ohrats",
		Title:       "Introducing OhRats",
		Date:        "January 10, 2026",
		Description: "An Ottawa-based R&D company building an ecosystem to empower the next generation of competitive intellect.",
		Href:        "/blog/introducing-ohrats",
		Image:       "/images/blog/rat-banner.png",
		Badge:       "Announcement",
		ContentHTML: template.HTML(`
      <p>OhRats is an Ottawa-based R&D company founded by Fernando Nogueira in 2026. We build ecosystems that empower competitive intellect. We democratize intelligence by providing the infrastructure and tools required to navigate a volatile world, rather than hoarding data.</p>
      
      <p>We believe that true robustness is not found in static benchmarks, but in the capability to survive dynamic environments.</p>

      <h2>Our Masterplan</h2>
      <ol>
        <li>Deploy Nash. A deterministic, high-frequency sandbox designed for decision-making agents.</li>
        <li>Fund the mission through competition, seasonal tournaments, and technical education.</li>
        <li>Reinvest in open intelligence. Channel resources back into open-source datasets, environments and tools that benefit the wider ecosystem.</li>
      </ol>

      <h2>Nash</h2>
    <p>Nash is our flagship simulation environment. It is a pure-logic adversarial arena where intellect determines the outcome.</p>
    <p>Developers use Nash to stress-test agents against adversarial peers in games of pure strategy. This high-speed cat and mouse game exposes failures in logic and planning that static tests miss. It reveals failure modes that only appear when an opponent is actively trying to defeat the agent.</p>

    <h2>Sustainability</h2>
    <p>OhRats is sustainable from Day 1. Knowledge and core tools are never paywalled.</p>

    <p>To truly democratize intelligence, access to educational resources and the Nash platform will always be free. We want every student, developer, and researcher to have the tools they need to learn adversarial agent design without a credit card.</p>

    <p>For those seeking to validate their models in a professional setting, we offer a <strong>Pro Membership</strong> (approx. $5/mo). This subscription supports the platform and unlocks the Competitive League with zero per-tournament fees, prize pool eligibility, and advanced telemetry tools.</p>

    <p>Revenue is reinvested directly into the ecosystem:</p>
    <ul>
    <li><strong>Infrastructure & Incentives:</strong> Subscriptions fund platform operations and merit-based rewards for high-performing agents.</li>
    <li><strong>Open Research:</strong> We channel resources into building better public simulation environments and datasets.</li>
    </ul>

    <p>We are building a platform that aligns our incentives with yours: we provide the free knowledge to build a capable agent, and you provide the talent to push the boundaries of intelligence.</p>
    `),
	},
}

var companyNavLinks = []NavLink{
	{"01", "Nash", "/#nash"},
	{"02", "Research", "/#research"},
	{"03", "Blog", "/blog"},
}

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Static file serving using MultiFS
	// Order: Local public/assets -> UI shared css
	assetsFS := multiFS{
		subFS(localFS, "public/assets"),
		subFS(ui.GetAssets(), "css"),
	}
	r.Handle("/assets/*", http.StripPrefix("/assets/", http.FileServer(http.FS(assetsFS))))

	// Order: Local public/images -> UI shared images
	imagesFS := multiFS{
		subFS(localFS, "public/images"),
		subFS(ui.GetAssets(), "images"),
	}
	r.Handle("/images/*", http.StripPrefix("/images/", http.FileServer(http.FS(imagesFS))))

	// Routes
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]interface{}{
			"RecentPosts": blogPosts,
			"NavLinks":    companyNavLinks,
		}
		renderTemplate(w, r, "templates/company_landing.html", data)
	})

	r.Get("/blog", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]interface{}{
			"Posts":    blogPosts,
			"NavLinks": companyNavLinks,
		}
		renderTemplate(w, r, "templates/blog_list.html", data)
	})

	r.Get("/blog/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := chi.URLParam(r, "id")
		var post *BlogPost
		for _, p := range blogPosts {
			if p.ID == id {
				post = &p
				break
			}
		}

		if post == nil {
			http.NotFound(w, r)
			return
		}

		data := map[string]interface{}{
			"Post":     post,
			"NavLinks": companyNavLinks,
		}
		renderTemplate(w, r, "templates/blog_post.html", data)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	log.Printf("Starting OhRats Landing server on port %s", port)
	http.ListenAndServe(":"+port, r)
}

func renderTemplate(w http.ResponseWriter, r *http.Request, tmplPath string, data map[string]interface{}) {
	// 1. Create a template named layout.html so we can execute it later
	tmpl := template.New("layout.html")

	// 2. Parse shared partials from UI
	var err error
	tmpl, err = tmpl.ParseFS(ui.GetTemplates(), "templates/partials/*.html")
	if err != nil {
		log.Printf("Error parsing shared templates: %v", err)
		http.Error(w, "Template error", http.StatusInternalServerError)
		return
	}

	// 3. Parse local templates: layout, partials AND the specific page template
	// We MUST include layout.html and the requested tmplPath
	tmpl, err = tmpl.ParseFS(localFS, "templates/layout.html", "templates/partials/*.html", tmplPath)
	if err != nil {
		log.Printf("Error parsing local templates (%s): %v", tmplPath, err)
		http.Error(w, "Template error", http.StatusInternalServerError)
		return
	}

	if data == nil {
		data = map[string]interface{}{}
	}

	// 4. Execute the "layout.html" template which uses the blocks defined in tmplPath
	err = tmpl.ExecuteTemplate(w, "layout.html", data)
	if err != nil {
		log.Printf("Execute error: %v", err)
	}
}
