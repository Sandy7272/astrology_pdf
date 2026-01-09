import { motion } from 'framer-motion';

const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

const ZodiacBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Central zodiac wheel */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 300, repeat: Infinity, ease: "linear" }}
      >
        {zodiacSymbols.map((symbol, index) => {
          const angle = (index * 30 * Math.PI) / 180;
          const radius = 350;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.span
              key={symbol}
              className="absolute text-4xl text-primary/10 font-display"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 4,
                delay: index * 0.3,
                repeat: Infinity,
              }}
            >
              {symbol}
            </motion.span>
          );
        })}
      </motion.div>
      
      {/* Light rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[400px] origin-bottom"
            style={{
              background: 'linear-gradient(to top, hsl(43 74% 49% / 0.1), transparent)',
              transform: `rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ZodiacBackground;
