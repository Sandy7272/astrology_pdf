import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Loader2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePdfExport } from '@/hooks/usePdfExport';

interface PdfExportButtonProps {
  targetId: string;
  userName?: string;
}

const PdfExportButton = ({ targetId, userName = 'Report' }: PdfExportButtonProps) => {
  const { exportToPdf, isExporting, progress } = usePdfExport({
    filename: `Destiny-Unveiled-${userName.replace(/\s+/g, '-')}`,
    quality: 0.92,
    scale: 2,
  });

  const handleExport = () => {
    exportToPdf(targetId);
  };

  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <Button
        onClick={handleExport}
        disabled={isExporting}
        className="relative overflow-hidden bg-gradient-to-r from-primary to-gold-soft text-primary-foreground font-display tracking-wide px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-80"
      >
        <AnimatePresence mode="wait">
          {isExporting ? (
            <motion.div
              key="loading"
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Exporting... {progress}%</span>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress bar */}
        {isExporting && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-background/30"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Button>
    </motion.div>
  );
};

export default PdfExportButton;
