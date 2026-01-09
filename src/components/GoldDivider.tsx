import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  showSymbol?: boolean;
}

const GoldDivider = ({ className = '', showSymbol = true }: GoldDividerProps) => {
  return (
    <motion.div 
      className={`flex items-center justify-center gap-4 py-8 ${className}`}
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex-1 divider-gold" />
      {showSymbol && (
        <motion.div
          className="text-primary text-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          ✧
        </motion.div>
      )}
      <div className="flex-1 divider-gold" />
    </motion.div>
  );
};

export default GoldDivider;
