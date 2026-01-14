import { motion } from 'framer-motion';
import { D1ChartData, PLANET_SYMBOLS, RASHI_NAMES, Language } from '@/types/astrology';

interface KundaliChartProps {
  chartData: D1ChartData;
  language: Language;
  size?: number;
}

// North Indian diamond chart house positions
// Houses are arranged in a diamond pattern
// House 1 is at top center, then clockwise
const HOUSE_POSITIONS: Record<number, { path: string; labelX: number; labelY: number; planetsX: number; planetsY: number }> = {
  1: { 
    path: 'M 200 0 L 300 100 L 200 100 L 100 100 Z', 
    labelX: 200, labelY: 35,
    planetsX: 200, planetsY: 65 
  },
  2: { 
    path: 'M 300 100 L 400 0 L 400 100 L 300 100 Z', 
    labelX: 350, labelY: 45,
    planetsX: 350, planetsY: 75 
  },
  3: { 
    path: 'M 300 100 L 400 100 L 400 200 L 300 200 Z', 
    labelX: 350, labelY: 150,
    planetsX: 350, planetsY: 170 
  },
  4: { 
    path: 'M 300 200 L 400 200 L 400 300 L 300 200 Z', 
    labelX: 350, labelY: 240,
    planetsX: 360, planetsY: 260 
  },
  5: { 
    path: 'M 200 300 L 300 200 L 300 300 L 200 300 Z', 
    labelX: 255, labelY: 270,
    planetsX: 255, planetsY: 290 
  },
  6: { 
    path: 'M 100 300 L 200 300 L 200 400 L 100 300 Z', 
    labelX: 155, labelY: 330,
    planetsX: 160, planetsY: 355 
  },
  7: { 
    path: 'M 100 300 L 200 300 L 200 400 L 0 400 L 0 300 Z', 
    labelX: 100, labelY: 350,
    planetsX: 100, planetsY: 380 
  },
  8: { 
    path: 'M 0 200 L 0 300 L 100 300 L 100 200 Z', 
    labelX: 50, labelY: 250,
    planetsX: 50, planetsY: 270 
  },
  9: { 
    path: 'M 0 100 L 100 200 L 0 200 Z', 
    labelX: 40, labelY: 160,
    planetsX: 45, planetsY: 180 
  },
  10: { 
    path: 'M 0 0 L 100 100 L 100 200 L 0 200 L 0 0 Z', 
    labelX: 50, labelY: 100,
    planetsX: 50, planetsY: 130 
  },
  11: { 
    path: 'M 0 0 L 100 100 L 0 100 Z', 
    labelX: 40, labelY: 55,
    planetsX: 45, planetsY: 75 
  },
  12: { 
    path: 'M 100 100 L 200 0 L 200 100 Z', 
    labelX: 155, labelY: 55,
    planetsX: 155, planetsY: 80 
  },
};

const KundaliChart = ({ chartData, language, size = 400 }: KundaliChartProps) => {
  const scale = size / 400;
  
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

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        className="mx-auto"
      >
        {/* Background */}
        <rect x="0" y="0" width="400" height="400" fill="#0B0F1A" rx="8" />
        
        {/* Outer border */}
        <rect 
          x="2" y="2" 
          width="396" height="396" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="2"
          rx="6"
        />

        {/* Diamond structure */}
        {/* Outer square */}
        <rect 
          x="0" y="0" 
          width="400" height="400" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
        />
        
        {/* Inner diamond */}
        <polygon 
          points="200,0 400,200 200,400 0,200" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
        />
        
        {/* Center diamond (House 1) */}
        <polygon 
          points="200,100 300,200 200,300 100,200" 
          fill="none" 
          stroke="#D4AF37" 
          strokeWidth="1.5"
        />

        {/* Diagonal lines for corner houses */}
        <line x1="0" y1="0" x2="200" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="400" y1="0" x2="200" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="0" y1="400" x2="200" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="400" y1="400" x2="200" y2="200" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.5" />

        {/* House labels and planets */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((houseNum) => {
          const signNum = getHouseSign(houseNum);
          const planets = chartData.houses[houseNum] || [];
          
          // Calculate positions based on house number
          const positions = getHousePositions(houseNum);
          
          return (
            <g key={houseNum}>
              {/* Sign abbreviation */}
              <text
                x={positions.labelX}
                y={positions.labelY}
                textAnchor="middle"
                fill="#D4AF37"
                fontSize="11"
                fontFamily="'Noto Sans Devanagari', sans-serif"
                fontWeight="500"
              >
                {getSignName(signNum).substring(0, 3)}
              </text>
              
              {/* Planets in this house */}
              {planets.map((planet, idx) => {
                const planetInfo = chartData.planets.find(p => p.planet === planet);
                const isRetrograde = planetInfo?.isRetrograde;
                
                return (
                  <text
                    key={planet}
                    x={positions.planetsX}
                    y={positions.planetsY + (idx * 14)}
                    textAnchor="middle"
                    fill={planet === 'Ascendant' ? '#FFD700' : isRetrograde ? '#FF6B6B' : '#FFFFFF'}
                    fontSize="12"
                    fontFamily="'Noto Sans Devanagari', sans-serif"
                    fontWeight="600"
                  >
                    {getPlanetSymbol(planet)}
                    {isRetrograde && '॰'}
                  </text>
                );
              })}
            </g>
          );
        })}

        {/* Center label - Lagna/Ascendant indicator */}
        <text
          x="200"
          y="195"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="14"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
        >
          {language === 'en' ? 'D-1' : 'डी-१'}
        </text>
        <text
          x="200"
          y="212"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="10"
          fontFamily="'Noto Sans Devanagari', sans-serif"
        >
          {language === 'en' ? 'Lagna Chart' : 'लग्न कुंडली'}
        </text>
      </svg>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="text-gold-soft font-body">
            {language === 'en' ? 'Ascendant' : 'लग्न'}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-red-400"></span>
          <span className="text-red-400 font-body">
            {language === 'en' ? 'Retrograde' : 'वक्री'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Helper function for house positions in North Indian chart
function getHousePositions(houseNum: number): { labelX: number; labelY: number; planetsX: number; planetsY: number } {
  const positions: Record<number, { labelX: number; labelY: number; planetsX: number; planetsY: number }> = {
    // Top row
    1: { labelX: 200, labelY: 25, planetsX: 200, planetsY: 50 },      // Top center
    12: { labelX: 100, labelY: 25, planetsX: 100, planetsY: 50 },     // Top left
    2: { labelX: 300, labelY: 25, planetsX: 300, planetsY: 50 },      // Top right
    
    // Left column
    11: { labelX: 25, labelY: 100, planetsX: 25, planetsY: 125 },     // Left top
    10: { labelX: 25, labelY: 200, planetsX: 25, planetsY: 225 },     // Left center
    9: { labelX: 25, labelY: 300, planetsX: 25, planetsY: 325 },      // Left bottom
    
    // Right column
    3: { labelX: 375, labelY: 100, planetsX: 375, planetsY: 125 },    // Right top
    4: { labelX: 375, labelY: 200, planetsX: 375, planetsY: 225 },    // Right center
    5: { labelX: 375, labelY: 300, planetsX: 375, planetsY: 325 },    // Right bottom
    
    // Bottom row
    8: { labelX: 100, labelY: 375, planetsX: 100, planetsY: 350 },    // Bottom left
    7: { labelX: 200, labelY: 375, planetsX: 200, planetsY: 350 },    // Bottom center
    6: { labelX: 300, labelY: 375, planetsX: 300, planetsY: 350 },    // Bottom right
  };
  
  return positions[houseNum] || { labelX: 200, labelY: 200, planetsX: 200, planetsY: 220 };
}

export default KundaliChart;
