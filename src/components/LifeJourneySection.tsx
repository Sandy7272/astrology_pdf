import { motion } from 'framer-motion';
import { Baby, GraduationCap, Briefcase, Star, Heart, Trophy } from 'lucide-react';
import GoldDivider from './GoldDivider';

const LifeJourneySection = () => {
  const timeline = [
    {
      period: 'Childhood',
      years: '0-12 years',
      icon: Baby,
      type: 'foundation',
      description: 'A sensitive soul navigating a world of wonder. Early challenges built resilience that would define your character.',
      highlight: 'Foundation of Strength',
    },
    {
      period: 'Adolescence',
      years: '13-21 years',
      icon: GraduationCap,
      type: 'growth',
      description: 'The awakening of your true potential. Struggles with identity gave way to self-discovery and purpose.',
      highlight: 'Path of Discovery',
    },
    {
      period: 'Early Adulthood',
      years: '22-32 years',
      icon: Briefcase,
      type: 'challenge',
      description: 'The crucible years. Professional challenges and personal trials forge the hero within.',
      highlight: 'The Forge',
    },
    {
      period: 'Prime Years',
      years: '33-45 years',
      icon: Star,
      type: 'success',
      description: 'Your golden era approaches. Recognition, achievement, and the fruits of patience manifest.',
      highlight: 'Rising Glory',
    },
    {
      period: 'Fulfillment',
      years: '46-60 years',
      icon: Heart,
      type: 'wisdom',
      description: 'Wisdom earned through experience. Legacy building and meaningful connections define this chapter.',
      highlight: 'Harvest Season',
    },
    {
      period: 'Legacy',
      years: '60+ years',
      icon: Trophy,
      type: 'legacy',
      description: 'The sage emerges. Your journey inspires generations, and your story becomes legend.',
      highlight: 'Eternal Impact',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'foundation': return 'from-blue-500/20 to-transparent';
      case 'growth': return 'from-green-500/20 to-transparent';
      case 'challenge': return 'from-orange-500/20 to-transparent';
      case 'success': return 'from-primary/20 to-transparent';
      case 'wisdom': return 'from-purple-500/20 to-transparent';
      case 'legacy': return 'from-primary/30 to-transparent';
      default: return 'from-primary/20 to-transparent';
    }
  };

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
            Flashback Scene
          </span>
          <h2 className="section-title mb-6">Your Life Journey</h2>
          <GoldDivider />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.period}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Timeline Dot */}
              <motion.div
                className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="timeline-dot" />
              </motion.div>

              {/* Content Card */}
              <motion.div
                className={`card-cosmic rounded-2xl p-6 md:p-8 relative overflow-hidden ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}
                whileHover={{ scale: 1.02 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(item.type)} opacity-50`} />

                <div className={`relative z-10 ${index % 2 === 0 ? 'md:flex md:flex-row-reverse md:gap-6' : 'md:flex md:gap-6'}`}>
                  {/* Icon */}
                  <div className={`zodiac-icon mb-4 md:mb-0 ${index % 2 === 0 ? '' : ''}`}>
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Text Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-body bg-primary/20 text-primary mb-3">
                      {item.highlight}
                    </span>
                    <h3 className="font-display text-2xl text-gold-shimmer mb-1">
                      {item.period}
                    </h3>
                    <p className="text-primary/70 font-body text-sm mb-3">{item.years}</p>
                    <p className="font-elegant text-lg text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifeJourneySection;
