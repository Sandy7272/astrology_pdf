import { useState, useCallback } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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
    quality = 0.92,
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
        duration: 3000,
      });

      setProgress(10);

      // Clone the element to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;
      clone.style.position = 'absolute';
      clone.style.left = '-9999px';
      clone.style.top = '0';
      clone.style.width = '1200px';
      clone.style.background = '#0a0e1a';
      document.body.appendChild(clone);

      // Remove problematic elements (canvas-based animations, etc.)
      const canvasElements = clone.querySelectorAll('canvas');
      canvasElements.forEach(canvas => canvas.remove());

      // Remove elements with 0 dimensions or animations that might cause issues
      const allElements = clone.querySelectorAll('*');
      allElements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const style = window.getComputedStyle(htmlEl);
        if (style.opacity === '0' || style.display === 'none') {
          htmlEl.remove();
        }
      });

      setProgress(20);

      // Capture the entire content as one image
      const canvas = await html2canvas(clone, {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#0a0e1a',
        logging: false,
        width: 1200,
        height: clone.scrollHeight,
        windowWidth: 1200,
        windowHeight: clone.scrollHeight,
        removeContainer: false,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          // Additional cleanup in cloned document
          const clonedElement = clonedDoc.body.querySelector(`#${elementId}`);
          if (clonedElement) {
            const problematicElements = clonedElement.querySelectorAll('[style*="animation"], [style*="transform"]');
            problematicElements.forEach((el) => {
              const htmlEl = el as HTMLElement;
              htmlEl.style.animation = 'none';
              htmlEl.style.transform = 'none';
            });
          }
        }
      });

      // Remove clone from DOM
      document.body.removeChild(clone);

      setProgress(60);

      const imgData = canvas.toDataURL('image/jpeg', quality);
      
      // Create PDF
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      setProgress(70);

      // Add pages
      let heightLeft = imgHeight;
      let position = 0;
      let pageCount = 0;

      while (heightLeft > 0) {
        if (pageCount > 0) {
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
        pageCount++;
        
        setProgress(70 + Math.floor((pageCount / Math.ceil(imgHeight / pdfHeight)) * 20));
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
