import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    // Import the markdown module to get its metadata
    const module = await import('./+page.md');
    const metadata = module.metadata || {};
    
    // Extract slug from the URL path
    const slug = url.pathname.split('/').filter(Boolean).pop() || 'plans';
    
    // Construct image path (same logic as blog listing)
    let imagePath = metadata.image;
    const baseUrl = 'https://www.seofernando.com';
    
    if (imagePath) {
        if (!imagePath.startsWith('http') && !imagePath.startsWith('/')) {
            imagePath = `/blog/${slug}/${imagePath}`;
        }
    } else {
        imagePath = `/blog/${slug}/thumbnail.jpg`;
    }
    
    // Construct full URLs
    const ogImage = imagePath.startsWith('http') 
        ? imagePath 
        : `${baseUrl}${imagePath}`;
    const ogUrl = `${baseUrl}${url.pathname}`;
    
    return {
        title: metadata.title || 'Untitled',
        date: metadata.date || '',
        excerpt: metadata.excerpt || '',
        image: imagePath,
        ogImage,
        ogUrl,
        siteName: 'Fernando Nogueira'
    };
};
