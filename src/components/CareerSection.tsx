import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Building, Award } from 'lucide-react';
import GoldDivider from './GoldDivider';

const CareerSection = () => {
  const careerMilestones = [
    { age: 25, label: 'First Major Role', y: 20 },
    { age: 30, label: 'Leadership Position', y: 40 },
    { age: 35, label: 'Peak Growth', y: 65 },
    { age: 40, label: 'Recognition Era', y: 80 },
    { age: 45, label: 'Mastery Achieved', y: 90 },
  ];

  const careerInsights = [
    {
      icon: Briefcase,
      title: 'Career Nature',
      content: 'Your chart reveals a natural affinity for leadership roles in creative or analytical fields. You thrive where strategy meets innovation.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Timeline',
      content: 'Ages 33-42 mark your golden professional decade. Patience before this period builds the foundation for extraordinary success.',
    },
    {
      icon: Building,
      title: 'Business vs Job',
      content: 'Your entrepreneurial spirit is strong, but partnership ventures after 35 yield better results than solo endeavors in early years.',
    },
    {
      icon: Award,
      title: 'Peak Years',
      content: '2027, 2031, and 2035 shine brightest in your professional sky. Major promotions, recognition, or business expansion likely.',
    },
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
            Success Arc
          </span>
          <h2 className="section-title mb-6">Rise of Your Career</h2>
          <GoldDivider />
        </motion.div>

        {/* Career Growth Chart */}
        <motion.div
          className="card-cosmic rounded-2xl p-8 mb-12 border-glow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-display text-xl text-gold-shimmer mb-8 text-center">
            Career Growth Trajectory
          </h3>
          
          {/* Graph */}
          <div className="relative h-64 md:h-80">
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map((level) => (
              <div
                key={level}
                className="absolute w-full border-t border-primary/10"
                style={{ bottom: `${level}%` }}
              />
            ))}

            {/* Growth Curve */}
            <svg className="absolute inset-0 w-full h-full overflow-visible">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(43 74% 49% / 0.3)" />
                  <stop offset="100%" stopColor="hsl(43 74% 49%)" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(43 74% 49% / 0.3)" />
                  <stop offset="100%" stopColor="hsl(43 74% 49% / 0)" />
                </linearGradient>
              </defs>
              
              {/* Area under curve */}
              <motion.path
                d="M 0,100 Q 25,95 50,80 T 100,60 T 150,45 T 200,30 T 250,15 L 250,100 Z"
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ transform: 'scale(1.5, 2.5) translate(0, -10px)' }}
              />
              
              {/* Main curve */}
              <motion.path
                d="M 0,85 Q 60,75 120,55 T 240,30 T 360,15"
                fill="none"
                stroke="url(#curveGradient)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </svg>

            {/* Milestone Points */}
            {careerMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.age}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${(index / (careerMilestones.length - 1)) * 100}%`,
                  bottom: `${milestone.y}%`,
                  transform: 'translate(-50%, 50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.2 }}
              >
                <div className="timeline-dot mb-2" />
                <div className="text-center whitespace-nowrap">
                  <p className="font-display text-sm text-primary">{milestone.age}</p>
                  <p className="font-body text-xs text-muted-foreground hidden md:block">{milestone.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Insights Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {careerInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              className="card-cosmic rounded-2xl p-6 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex gap-4 relative z-10">
                <div className="zodiac-icon shrink-0">
                  <insight.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gold-shimmer mb-2">
                    {insight.title}
                  </h3>
                  <p className="font-elegant text-foreground/80 leading-relaxed">
                    {insight.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
