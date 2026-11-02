import type { RequestHandler } from './$types';
import { generateResumePdf } from '$lib/server/pdfGenerator';

export const prerender = true;

export const GET: RequestHandler = async () => {
    const pdfBytes = await generateResumePdf();

    return new Response(pdfBytes.buffer as ArrayBuffer, {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="Fernando_Nogueira_Resume.pdf"'
        }
    });
};
