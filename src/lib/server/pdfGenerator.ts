import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { contactInfo, summary, skills, experiences, educations, research, awards } from '$lib/data/resume';

function wrapText(text: string, font: PDFFont, fontSize: number, maxWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, fontSize);
        if (testWidth <= maxWidth) {
            currentLine = testLine;
        } else {
            if (currentLine) lines.push(currentLine);
            currentLine = word;
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
}

export async function generateResumePdf(): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    // US Letter: 612 x 792 pt
    const pageWidth = 612;
    const pageHeight = 792;
    const page = pdfDoc.addPage([pageWidth, pageHeight]);

    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    const marginX = 36; // 0.5 in
    const contentWidth = pageWidth - marginX * 2; // 540 pt
    let currentY = pageHeight - 32;

    const textColor = rgb(0.1, 0.1, 0.1);
    const mutedColor = rgb(0.35, 0.35, 0.35);
    const borderColor = rgb(0.39, 0.29, 0.21); // #634936 Wood Beige
    const lightBorderColor = rgb(0.7, 0.7, 0.7);

    // --- 1. Header ---
    page.drawText(contactInfo.name, {
        x: marginX,
        y: currentY,
        size: 16,
        font: fontBold,
        color: textColor
    });

    // Top right links
    const webText = contactInfo.websiteDisplay;
    const emailText = contactInfo.email;
    const webWidth = fontRegular.widthOfTextAtSize(webText, 9);
    const emailWidth = fontRegular.widthOfTextAtSize(emailText, 9);

    page.drawText(webText, {
        x: marginX + contentWidth - webWidth,
        y: currentY + 4,
        size: 9,
        font: fontBold,
        color: textColor
    });

    page.drawText(emailText, {
        x: marginX + contentWidth - emailWidth,
        y: currentY - 8,
        size: 9,
        font: fontRegular,
        color: textColor
    });

    currentY -= 14;
    page.drawText(`${contactInfo.location}  |  ${contactInfo.phone}`, {
        x: marginX,
        y: currentY,
        size: 9,
        font: fontRegular,
        color: mutedColor
    });

    currentY -= 14;

    // --- 2. Top 3-Column Box (Languages, Skills, Education) ---
    const topBoxY = currentY;
    const topBoxHeight = 150;
    
    // Draw outer box
    page.drawRectangle({
        x: marginX,
        y: topBoxY - topBoxHeight,
        width: contentWidth,
        height: topBoxHeight,
        borderWidth: 1,
        borderColor: borderColor
    });

    const col1Width = 110;
    const col2Width = 260;
    const col3Width = contentWidth - col1Width - col2Width; // 170

    // Vertical dividers
    page.drawLine({
        start: { x: marginX + col1Width, y: topBoxY },
        end: { x: marginX + col1Width, y: topBoxY - topBoxHeight },
        thickness: 0.75,
        color: lightBorderColor
    });

    page.drawLine({
        start: { x: marginX + col1Width + col2Width, y: topBoxY },
        end: { x: marginX + col1Width + col2Width, y: topBoxY - topBoxHeight },
        thickness: 0.75,
        color: lightBorderColor
    });

    // Col 1: Languages
    let col1Y = topBoxY - 14;
    page.drawText('Languages', {
        x: marginX + 10,
        y: col1Y,
        size: 10,
        font: fontBold,
        color: textColor
    });
    col1Y -= 16;
    for (const lang of skills.languages) {
        page.drawText(lang.name, {
            x: marginX + 10,
            y: col1Y,
            size: 8.5,
            font: fontRegular,
            color: textColor
        });
        col1Y -= 13;
    }

    // Col 2: Skills
    let col2X = marginX + col1Width + 10;
    let col2Y = topBoxY - 14;
    page.drawText('Skills', {
        x: col2X,
        y: col2Y,
        size: 10,
        font: fontBold,
        color: textColor
    });
    col2Y -= 14;
    page.drawText('Professional', {
        x: col2X,
        y: col2Y,
        size: 8,
        font: fontBold,
        color: mutedColor
    });
    col2Y -= 11;
    const profLines = wrapText(skills.proficiency.join(', '), fontRegular, 7.5, col2Width - 20);
    for (const line of profLines) {
        page.drawText(line, {
            x: col2X,
            y: col2Y,
            size: 7.5,
            font: fontRegular,
            color: textColor
        });
        col2Y -= 10;
    }

    col2Y -= 3;
    page.drawText('Research, Coursework & Projects', {
        x: col2X,
        y: col2Y,
        size: 8,
        font: fontBold,
        color: mutedColor
    });
    col2Y -= 11;
    const expLines = wrapText(skills.experience.join(', '), fontRegular, 7.5, col2Width - 20);
    for (const line of expLines) {
        page.drawText(line, {
            x: col2X,
            y: col2Y,
            size: 7.5,
            font: fontRegular,
            color: textColor
        });
        col2Y -= 10;
    }

    // Col 3: Education
    const col3X = marginX + col1Width + col2Width + 10;
    let col3Y = topBoxY - 14;
    page.drawText('Education', {
        x: col3X,
        y: col3Y,
        size: 10,
        font: fontBold,
        color: textColor
    });

    // Try embedding uottawa logo if it exists
    try {
        const logoPath = path.resolve('static/uottawa_logo.jpeg');
        if (fs.existsSync(logoPath)) {
            const logoBytes = fs.readFileSync(logoPath);
            const logoImg = await pdfDoc.embedJpg(logoBytes);
            page.drawImage(logoImg, {
                x: col3X + col3Width - 45,
                y: topBoxY - 38,
                width: 28,
                height: 28
            });
        }
    } catch {
        // Continue if logo fails
    }

    col3Y -= 16;
    for (let i = 0; i < educations.length; i++) {
        const edu = educations[i];
        if (i > 0) col3Y -= 6;
        page.drawText(edu.institution, {
            x: col3X,
            y: col3Y,
            size: 8.5,
            font: fontBold,
            color: textColor
        });
        col3Y -= 12;
        const degreeLines = wrapText(edu.degree, fontRegular, 8, col3Width - 20);
        for (const line of degreeLines) {
            page.drawText(line, {
                x: col3X,
                y: col3Y,
                size: 8,
                font: fontRegular,
                color: textColor
            });
            col3Y -= 11;
        }
        page.drawText(`(${edu.period}), Grad: ${edu.expectedGrad}`, {
            x: col3X,
            y: col3Y,
            size: 7.5,
            font: fontRegular,
            color: mutedColor
        });
        col3Y -= 12;
    }

    currentY = topBoxY - topBoxHeight - 12;

    // --- 3. Professional Summary Box ---
    const summaryLines = wrapText(summary, fontRegular, 8, contentWidth - 20);
    const summaryBoxHeight = 16 + summaryLines.length * 11 + 6;

    page.drawRectangle({
        x: marginX,
        y: currentY - summaryBoxHeight,
        width: contentWidth,
        height: summaryBoxHeight,
        borderWidth: 1,
        borderColor: borderColor
    });

    let sumY = currentY - 14;
    page.drawText('Professional Summary', {
        x: marginX + 10,
        y: sumY,
        size: 9.5,
        font: fontBold,
        color: textColor
    });
    sumY -= 13;

    for (const line of summaryLines) {
        page.drawText(line, {
            x: marginX + 10,
            y: sumY,
            size: 8,
            font: fontRegular,
            color: textColor
        });
        sumY -= 11;
    }

    currentY = currentY - summaryBoxHeight - 12;

    // --- 4. Experience Box ---
    const expBoxTop = currentY;
    // Calculate total height needed for Experience
    const expBoxHeight = currentY - 24; // Fill down to bottom margin

    page.drawRectangle({
        x: marginX,
        y: 24,
        width: contentWidth,
        height: expBoxTop - 24,
        borderWidth: 1,
        borderColor: borderColor
    });

    let expY = expBoxTop - 15;
    page.drawText('Experience', {
        x: marginX + 10,
        y: expY,
        size: 10,
        font: fontBold,
        color: textColor
    });
    expY -= 15;

    for (const exp of experiences) {
        // Job title line
        const roleLine = `${exp.role}, ${exp.type} (${exp.period})`;
        page.drawText(roleLine, {
            x: marginX + 10,
            y: expY,
            size: 8.5,
            font: fontBold,
            color: textColor
        });
        expY -= 11;

        // Company line
        const compLine = `${exp.team}, ${exp.company}`;
        page.drawText(compLine, {
            x: marginX + 10,
            y: expY,
            size: 8,
            font: fontOblique,
            color: mutedColor
        });
        expY -= 11;

        // Metrics line (bold, monochrome for ATS/print readability)
        if (exp.metrics && exp.metrics.length > 0) {
            const metricsLine = exp.metrics.join(',  ');
            page.drawText(metricsLine, {
                x: marginX + 10,
                y: expY,
                size: 7.5,
                font: fontBold,
                color: textColor
            });
            expY -= 11;
        }

        // Bullets
        for (const bullet of exp.highlights) {
            const wrappedBullet = wrapText(bullet, fontRegular, 7.5, contentWidth - 30);
            
            // Draw bullet dot
            page.drawText('•', {
                x: marginX + 14,
                y: expY,
                size: 7.5,
                font: fontRegular,
                color: textColor
            });

            for (let i = 0; i < wrappedBullet.length; i++) {
                page.drawText(wrappedBullet[i], {
                    x: marginX + 24,
                    y: expY,
                    size: 7.5,
                    font: fontRegular,
                    color: textColor
                });
                expY -= 9.5;
            }
        }
        expY -= 5; // space between jobs
    }

    // Research & Awards section inside same box (compact, keeps 1 page)
    expY -= 2;
    page.drawText('Research & Awards', {
        x: marginX + 10,
        y: expY,
        size: 10,
        font: fontBold,
        color: textColor
    });
    expY -= 14;

    for (const item of research) {
        const line = `• ${item.title}, ${item.course}`;
        page.drawText(line.slice(0, 120), {
            x: marginX + 10,
            y: expY,
            size: 7.5,
            font: fontRegular,
            color: textColor
        });
        expY -= 11;
    }

    expY -= 4;

    for (const award of awards) {
        const line = `• ${award.title}, ${award.event}`;
        page.drawText(line.slice(0, 120), {
            x: marginX + 10,
            y: expY,
            size: 7.5,
            font: fontRegular,
            color: textColor
        });
        expY -= 11;
    }

    return await pdfDoc.save();
}
