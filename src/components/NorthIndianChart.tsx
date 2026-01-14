import { motion } from 'framer-motion';
import { D1ChartData, PLANET_SYMBOLS, RASHI_NAMES, Language } from '@/types/astrology';

interface NorthIndianChartProps {
  chartData: D1ChartData;
  language: Language;
  size?: number;
  title?: string;
}

// North Indian Diamond Chart - Traditional Layout
// The diamond is inscribed in a square, with 12 houses
const NorthIndianChart = ({ chartData, language, size = 380, title }: NorthIndianChartProps) => {
  
  const getPlanetSymbol = (planet: string) => {
    const symbolData = PLANET_SYMBOLS[planet];
    if (!symbolData) return planet.substring(0, 2);
    return language === 'en' ? symbolData.en.substring(0, 2) : symbolData.symbol;
  };

  const getSignName = (signNumber: number) => {
    const sign = RASHI_NAMES[signNumber];
    if (!sign) return '';
    return language === 'en' ? sign.en : sign[language] || sign.hi;
  };

  // Calculate actual sign for each house based on ascendant
  const getHouseSign = (houseNumber: number) => {
    const signNumber = ((chartData.ascendant + houseNumber - 2) % 12) + 1;
    return signNumber;
  };

  // House positions for North Indian Diamond style
  // This creates the classic diamond-in-square layout
  const houseLayout = [
    // House 1 - Center Top (Lagna)
    { house: 1, cx: 190, cy: 60, textAnchor: 'middle' as const },
    // House 2 - Top Right Triangle
    { house: 2, cx: 300, cy: 60, textAnchor: 'middle' as const },
    // House 3 - Right Upper
    { house: 3, cx: 335, cy: 120, textAnchor: 'middle' as const },
    // House 4 - Right Center
    { house: 4, cx: 335, cy: 190, textAnchor: 'middle' as const },
    // House 5 - Right Lower
    { house: 5, cx: 335, cy: 260, textAnchor: 'middle' as const },
    // House 6 - Bottom Right Triangle
    { house: 6, cx: 300, cy: 320, textAnchor: 'middle' as const },
    // House 7 - Center Bottom (Descendant)
    { house: 7, cx: 190, cy: 320, textAnchor: 'middle' as const },
    // House 8 - Bottom Left Triangle
    { house: 8, cx: 80, cy: 320, textAnchor: 'middle' as const },
    // House 9 - Left Lower
    { house: 9, cx: 45, cy: 260, textAnchor: 'middle' as const },
    // House 10 - Left Center (MC)
    { house: 10, cx: 45, cy: 190, textAnchor: 'middle' as const },
    // House 11 - Left Upper
    { house: 11, cx: 45, cy: 120, textAnchor: 'middle' as const },
    // House 12 - Top Left Triangle
    { house: 12, cx: 80, cy: 60, textAnchor: 'middle' as const },
  ];

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {title && (
        <h3 className="text-gold-soft font-display text-lg mb-3">
          {title}
        </h3>
      )}
      
      <svg
        width={size}
        height={size}
        viewBox="0 0 380 380"
        className="mx-auto drop-shadow-2xl"
      >
        <defs>
          {/* Gold gradient for borders */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#B8860B" />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          {/* Background pattern */}
          <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.5" fill="#D4AF37" opacity="0.1"/>
          </pattern>
        </defs>

        {/* Background */}
        <rect x="0" y="0" width="380" height="380" fill="#0B0F1A" rx="12" />
        <rect x="0" y="0" width="380" height="380" fill="url(#gridPattern)" rx="12" />
        
        {/* Outer decorative border */}
        <rect 
          x="4" y="4" 
          width="372" height="372" 
          fill="none" 
          stroke="url(#goldGradient)" 
          strokeWidth="2"
          rx="10"
          filter="url(#goldGlow)"
        />
        
        {/* Main outer square */}
        <rect 
          x="15" y="15" 
          width="350" height="350" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
        />
        
        {/* Inner diamond (rhombus) - connects midpoints */}
        <polygon 
          points="190,15 365,190 190,365 15,190" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
        />
        
        {/* Center diamond - this is where houses 1 and 7 touch */}
        <polygon 
          points="190,95 285,190 190,285 95,190" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1"
          opacity="0.7"
        />

        {/* Cross lines for corner divisions */}
        {/* Top-left to center */}
        <line x1="15" y1="15" x2="190" y2="190" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
        {/* Top-right to center */}
        <line x1="365" y1="15" x2="190" y2="190" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
        {/* Bottom-left to center */}
        <line x1="15" y1="365" x2="190" y2="190" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />
        {/* Bottom-right to center */}
        <line x1="365" y1="365" x2="190" y2="190" stroke="#D4AF37" strokeWidth="0.75" opacity="0.5" />

        {/* House content */}
        {houseLayout.map(({ house, cx, cy }) => {
          const signNum = getHouseSign(house);
          const planets = chartData.houses[house] || [];
          
          return (
            <g key={house}>
              {/* House number - small indicator */}
              <text
                x={cx}
                y={cy - 15}
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="9"
                fontFamily="'Noto Sans Devanagari', sans-serif"
                opacity="0.6"
              >
                {house}
              </text>
              
              {/* Sign name */}
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="'Noto Sans Devanagari', sans-serif"
                fontWeight="500"
              >
                {getSignName(signNum)}
              </text>
              
              {/* Planets */}
              {planets.map((planet, idx) => {
                const planetInfo = chartData.planets.find(p => p.planet === planet);
                const isRetrograde = planetInfo?.isRetrograde;
                const isAscendant = planet === 'Ascendant';
                
                return (
                  <text
                    key={planet}
                    x={cx}
                    y={cy + 12 + (idx * 13)}
                    textAnchor="middle"
                    fill={isAscendant ? '#FFD700' : isRetrograde ? '#FF6B6B' : '#E8E8E8'}
                    fontSize={isAscendant ? "11" : "10"}
                    fontFamily="'Noto Sans Devanagari', sans-serif"
                    fontWeight={isAscendant ? "700" : "600"}
                  >
                    {getPlanetSymbol(planet)}
                    {isRetrograde && <tspan fill="#FF6B6B" fontSize="8">(र)</tspan>}
                  </text>
                );
              })}
            </g>
          );
        })}

        {/* Center emblem */}
        <g>
          <circle cx="190" cy="190" r="35" fill="#0B0F1A" stroke="#D4AF37" strokeWidth="1" />
          <text
            x="190"
            y="185"
            textAnchor="middle"
            fill="#FFD700"
            fontSize="12"
            fontFamily="'Playfair Display', serif"
            fontWeight="700"
          >
            {language === 'en' ? 'D-1' : 'डी-१'}
          </text>
          <text
            x="190"
            y="200"
            textAnchor="middle"
            fill="#D4AF37"
            fontSize="9"
            fontFamily="'Noto Sans Devanagari', sans-serif"
          >
            {language === 'en' ? 'Rashi' : 'राशि'}
          </text>
        </g>

        {/* Corner decorations - Om symbols */}
        <text x="25" y="30" fill="#D4AF37" fontSize="14" opacity="0.4">ॐ</text>
        <text x="350" y="30" fill="#D4AF37" fontSize="14" opacity="0.4">ॐ</text>
        <text x="25" y="365" fill="#D4AF37" fontSize="14" opacity="0.4">ॐ</text>
        <text x="350" y="365" fill="#D4AF37" fontSize="14" opacity="0.4">ॐ</text>
      </svg>

      {/* Legend */}
      <motion.div 
        className="mt-4 flex flex-wrap justify-center gap-4 text-xs"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="text-gold-soft font-body">
            {language === 'en' ? 'Lagna (Ascendant)' : 'लग्न'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="text-red-400 font-body">
            {language === 'en' ? 'Vakri (Retrograde)' : 'वक्री ग्रह'}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          <span className="text-gray-300 font-body">
            {language === 'en' ? 'Grahas (Planets)' : 'ग्रह'}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NorthIndianChart;
