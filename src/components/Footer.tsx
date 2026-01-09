import { motion } from 'framer-motion';

interface FooterProps {
  brandName?: string;
  pageNumber?: number;
  totalPages?: number;
}

const Footer = ({ brandName = 'Cosmic Destiny', pageNumber, totalPages }: FooterProps) => {
  return (
    <motion.footer
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-gradient-to-t from-background via-background/80 to-transparent pt-8 pb-4 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">✧</span>
            <span className="font-display text-sm text-gold-shimmer">{brandName}</span>
          </div>

          {/* Watermark */}
          <span className="font-body text-xs text-muted-foreground/50 tracking-wider">
            CONFIDENTIAL REPORT
          </span>

          {/* Page number */}
          {pageNumber && totalPages && (
            <span className="font-body text-xs text-muted-foreground">
              {pageNumber} / {totalPages}
            </span>
          )}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
