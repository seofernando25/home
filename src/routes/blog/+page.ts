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
        
        // Support image paths - can be relative to static or absolute
        let imagePath = metadata.image;
        if (imagePath && !imagePath.startsWith('http') && !imagePath.startsWith('/')) {
            // If relative, assume it's in /static/blog/{slug}/
            imagePath = `/blog/${slug}/${imagePath}`;
        } else if (imagePath && imagePath.startsWith('/blog/')) {
            // Already a proper path
        } else if (!imagePath) {
            // Try convention: /static/blog/{slug}.jpg or /static/blog/{slug}/image.jpg
            // We'll check this in the component or use a default
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
