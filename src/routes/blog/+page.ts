import type { PageLoad } from './$types';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
    image?: string;
    badge?: string;
}

export const load: PageLoad = async () => {
    // Use Vite's glob to automatically discover all blog posts
    // mdsvex exposes frontmatter as the default export's metadata property
    const modules = import.meta.glob('/src/routes/blog/**/+page.md', { 
        eager: true 
    });

    const posts: BlogPost[] = [];

    for (const path in modules) {
        const module = modules[path] as any;
        
        // mdsvex exposes frontmatter as metadata on the module
        const metadata = module.metadata || (module.default?.metadata) || {};
        
        // Extract slug from path: /src/routes/blog/{slug}/+page.md
        const slugMatch = path.match(/\/blog\/([^/]+)\/\+page\.md$/);
        if (!slugMatch) continue;
        
        const slug = slugMatch[1];
        
        // Support image paths with convenient conventions:
        // 1. Explicit in frontmatter: `image: "thumbnail.jpg"` → /blog/{slug}/thumbnail.jpg
        // 2. Explicit absolute: `image: "/blog/slug/image.jpg"` → use as-is
        // 3. Auto-convention: If no image specified, try /blog/{slug}/thumbnail.jpg
        //    (component will gracefully handle if file doesn't exist)
        let imagePath = metadata.image;
        
        if (imagePath) {
            // User provided an image path
            if (!imagePath.startsWith('http') && !imagePath.startsWith('/')) {
                // Relative path: assume it's in /static/blog/{slug}/
                imagePath = `/blog/${slug}/${imagePath}`;
            }
            // If it starts with / or http, use as-is
        } else {
            // No image in frontmatter - use convention: /static/blog/{slug}/thumbnail.jpg
            // The component will hide the image if it doesn't exist
            imagePath = `/blog/${slug}/thumbnail.jpg`;
        }
        
        posts.push({
            slug,
            title: metadata.title || 'Untitled',
            date: metadata.date || '',
            excerpt: metadata.excerpt,
            image: imagePath,
            badge: metadata.badge
        });
    }

    // Sort by date (newest first)
    posts.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
    });

    return {
        posts
    };
};
