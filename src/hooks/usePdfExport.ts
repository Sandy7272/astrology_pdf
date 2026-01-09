import { useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'sonner';

interface UsePdfExportOptions {
  filename?: string;
  quality?: number;
  scale?: number;
}

export const usePdfExport = (options: UsePdfExportOptions = {}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [progress, setProgress] = useState(0);

  const {
    filename = 'Destiny-Unveiled-Report',
    quality = 0.95,
    scale = 2,
  } = options;

  const exportToPdf = useCallback(async (elementId: string) => {
    setIsExporting(true);
    setProgress(0);

    try {
      const element = document.getElementById(elementId);
      if (!element) {
        throw new Error('Element not found');
      }

      toast.info('Preparing your cinematic report...', {
        duration: 2000,
      });

      setProgress(10);

      // Get all sections
      const sections = element.querySelectorAll('section');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let currentPage = 0;
      const totalSections = sections.length;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement;
        
        setProgress(10 + Math.floor((i / totalSections) * 80));

        // Capture section
        const canvas = await html2canvas(section, {
          scale: scale,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#0a0e1a',
          logging: false,
          windowWidth: 1200,
          windowHeight: section.scrollHeight,
        });

        const imgData = canvas.toDataURL('image/jpeg', quality);
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        // Handle multi-page sections
        let heightLeft = imgHeight;
        let position = 0;

        while (heightLeft > 0) {
          if (currentPage > 0) {
            pdf.addPage();
          }

          pdf.addImage(
            imgData,
            'JPEG',
            0,
            position,
            imgWidth,
            imgHeight,
            undefined,
            'FAST'
          );

          heightLeft -= pdfHeight;
          position -= pdfHeight;
          currentPage++;
        }
      }

      setProgress(95);

      // Add metadata
      pdf.setProperties({
        title: 'Destiny Unveiled - Personal Life Journey Report',
        subject: 'Cinematic Astrology Report',
        author: 'Cosmic Destiny',
        keywords: 'astrology, birth chart, horoscope, destiny',
        creator: 'Cosmic Destiny Report Generator',
      });

      // Save the PDF
      pdf.save(`${filename}.pdf`);
      
      setProgress(100);
      
      toast.success('Your cinematic report has been downloaded!', {
        description: 'Check your downloads folder',
        duration: 4000,
      });
    } catch (error) {
      console.error('PDF export failed:', error);
      toast.error('Failed to export PDF', {
        description: 'Please try again',
      });
    } finally {
      setIsExporting(false);
      setProgress(0);
    }
  }, [filename, quality, scale]);

  return { exportToPdf, isExporting, progress };
};
