import { motion } from 'framer-motion';
import { Plane, Globe, MapPin, Calendar } from 'lucide-react';
import GoldDivider from './GoldDivider';

const ForeignSection = () => {
  const destinations = [
    { region: 'North America', probability: 85, years: '2027-2030' },
    { region: 'Europe', probability: 70, years: '2029-2032' },
    { region: 'Middle East', probability: 60, years: '2026-2028' },
    { region: 'Southeast Asia', probability: 45, years: '2025-2027' },
  ];

  const insights = [
    'Strong 9th house indicates international travels and foreign connections',
    'Jupiter\'s aspect suggests academic or professional opportunities abroad',
    'Rahu placement favors settlement in Western directions',
    'Most favorable travel periods align with Jupiter and Venus transits',
  ];

  return (
    <section className="min-h-screen py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-primary text-sm tracking-[0.3em] uppercase mb-4 block">
            Journey Beyond
          </span>
          <h2 className="section-title mb-6">Destiny Abroad</h2>
          <GoldDivider />
        </motion.div>

        {/* Globe Visualization */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 mb-12 border-glow relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated plane trail */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="absolute"
              animate={{
                x: ['-40%', '40%'],
                y: ['-20%', '20%', '-20%'],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Plane className="w-8 h-8 text-primary rotate-45" />
            </motion.div>
          </div>

          <div className="flex justify-center mb-8">
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            >
              <Globe className="w-32 h-32 text-primary/30" />
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />
            </motion.div>
          </div>

          <h3 className="font-display text-xl text-gold-shimmer mb-6 text-center">
            Foreign Opportunity Map
          </h3>

          {/* Destination Bars */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.region}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-display text-sm text-foreground/90">{dest.region}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{dest.years}</span>
                  </div>
                </div>
                <div className="relative h-3 rounded-full bg-secondary/50 overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/70 to-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${dest.probability}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                  />
                </div>
                <div className="text-right">
                  <span className="text-xs text-primary">{dest.probability}% probability</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div
          className="card-cosmic rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-lg text-gold-shimmer mb-4">
            Planetary Insights
          </h3>
          <ul className="space-y-3">
            {insights.map((insight, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-foreground/80 font-elegant"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <span className="text-primary mt-1">✧</span>
                {insight}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeignSection;
