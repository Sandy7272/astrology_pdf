// Vedic Astrology Types

export type Language = 'en' | 'hi' | 'mr';

// Planet symbols in Sanskrit/Devanagari
export const PLANET_SYMBOLS: Record<string, { en: string; hi: string; symbol: string }> = {
  Sun: { en: 'Sun', hi: 'सूर्य', symbol: 'सू' },
  Moon: { en: 'Moon', hi: 'चंद्र', symbol: 'चं' },
  Mars: { en: 'Mars', hi: 'मंगल', symbol: 'मं' },
  Mercury: { en: 'Mercury', hi: 'बुध', symbol: 'बु' },
  Jupiter: { en: 'Jupiter', hi: 'गुरु', symbol: 'गु' },
  Venus: { en: 'Venus', hi: 'शुक्र', symbol: 'शु' },
  Saturn: { en: 'Saturn', hi: 'शनि', symbol: 'श' },
  Rahu: { en: 'Rahu', hi: 'राहु', symbol: 'रा' },
  Ketu: { en: 'Ketu', hi: 'केतु', symbol: 'के' },
  Ascendant: { en: 'Asc', hi: 'लग्न', symbol: 'ल' },
};

// Rashi (Zodiac Signs) in Sanskrit
export const RASHI_NAMES: Record<number, { en: string; hi: string; mr: string }> = {
  1: { en: 'Aries', hi: 'मेष', mr: 'मेष' },
  2: { en: 'Taurus', hi: 'वृषभ', mr: 'वृषभ' },
  3: { en: 'Gemini', hi: 'मिथुन', mr: 'मिथुन' },
  4: { en: 'Cancer', hi: 'कर्क', mr: 'कर्क' },
  5: { en: 'Leo', hi: 'सिंह', mr: 'सिंह' },
  6: { en: 'Virgo', hi: 'कन्या', mr: 'कन्या' },
  7: { en: 'Libra', hi: 'तुला', mr: 'तुला' },
  8: { en: 'Scorpio', hi: 'वृश्चिक', mr: 'वृश्चिक' },
  9: { en: 'Sagittarius', hi: 'धनु', mr: 'धनु' },
  10: { en: 'Capricorn', hi: 'मकर', mr: 'मकर' },
  11: { en: 'Aquarius', hi: 'कुंभ', mr: 'कुंभ' },
  12: { en: 'Pisces', hi: 'मीन', mr: 'मीन' },
};

// Planet data from API
export interface PlanetPosition {
  planet: string;
  sign: number; // 1-12
  signName: string;
  degree: number;
  nakshatra: string;
  nakshatraPada: number;
  house: number; // 1-12
  isRetrograde?: boolean;
}

// D1 Chart data structure
export interface D1ChartData {
  ascendant: number; // Sign number 1-12
  houses: {
    [key: number]: string[]; // House number -> array of planet names
  };
  planets: PlanetPosition[];
}

// Panchang data
export interface PanchangData {
  tithi: string;
  nakshatra: string;
  nakshatraPada: number;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
}

// Dosha data
export interface DoshaData {
  mangal_dosha: boolean;
  mangal_dosha_details?: {
    house: number;
    severity: 'mild' | 'moderate' | 'severe';
  };
  kaal_sarp_dosha: boolean;
  kaal_sarp_type?: string;
  sade_sati: {
    active: boolean;
    phase?: 'rising' | 'peak' | 'setting';
    startDate?: string;
    endDate?: string;
  };
}

// Gemstone recommendation
export interface GemstoneRecommendation {
  name: string;
  hindi: string;
  planet: string;
  weight: string;
  metal: string;
  finger: string;
  day: string;
  time: string;
  paksha: 'shukla' | 'krishna';
  mantra: string;
}

// Lucky factors
export interface LuckyFactors {
  color: string;
  colorHindi: string;
  day: string;
  dayHindi: string;
  number: number;
  ishtaDevata: string;
  ishtaDevataHindi: string;
}

// Complete astrology data from API
export interface AstrologyData {
  userDetails: {
    name: string;
    dateOfBirth: string;
    timeOfBirth: string;
    placeOfBirth: string;
    latitude: number;
    longitude: number;
  };
  charts: {
    d1: D1ChartData;
  };
  panchang: PanchangData;
  doshas: DoshaData;
  gemstones: GemstoneRecommendation[];
  luckyFactors: LuckyFactors;
  mahadasha: {
    current: string;
    startDate: string;
    endDate: string;
    antardasha: string;
  };
}

// Sample/Mock data for development
export const SAMPLE_ASTROLOGY_DATA: AstrologyData = {
  userDetails: {
    name: 'Arjun Sharma',
    dateOfBirth: '1990-03-15',
    timeOfBirth: '05:30',
    placeOfBirth: 'Mumbai, Maharashtra',
    latitude: 19.076,
    longitude: 72.8777,
  },
  charts: {
    d1: {
      ascendant: 4, // Cancer
      houses: {
        1: ['Ascendant'],
        2: ['Venus'],
        3: [],
        4: ['Sun', 'Mercury'],
        5: ['Mars'],
        6: [],
        7: ['Jupiter'],
        8: ['Rahu'],
        9: [],
        10: ['Moon', 'Saturn'],
        11: [],
        12: ['Ketu'],
      },
      planets: [
        { planet: 'Sun', sign: 11, signName: 'Aquarius', degree: 24.56, nakshatra: 'Purva Bhadrapada', nakshatraPada: 3, house: 4, isRetrograde: false },
        { planet: 'Moon', sign: 1, signName: 'Aries', degree: 12.34, nakshatra: 'Ashwini', nakshatraPada: 4, house: 10, isRetrograde: false },
        { planet: 'Mars', sign: 8, signName: 'Scorpio', degree: 5.67, nakshatra: 'Anuradha', nakshatraPada: 1, house: 5, isRetrograde: false },
        { planet: 'Mercury', sign: 10, signName: 'Capricorn', degree: 18.90, nakshatra: 'Shravana', nakshatraPada: 2, house: 4, isRetrograde: true },
        { planet: 'Jupiter', sign: 3, signName: 'Gemini', degree: 8.12, nakshatra: 'Ardra', nakshatraPada: 2, house: 7, isRetrograde: false },
        { planet: 'Venus', sign: 12, signName: 'Pisces', degree: 28.45, nakshatra: 'Revati', nakshatraPada: 4, house: 2, isRetrograde: false },
        { planet: 'Saturn', sign: 10, signName: 'Capricorn', degree: 22.78, nakshatra: 'Shravana', nakshatraPada: 4, house: 10, isRetrograde: true },
        { planet: 'Rahu', sign: 11, signName: 'Aquarius', degree: 15.23, nakshatra: 'Shatabhisha', nakshatraPada: 2, house: 8, isRetrograde: true },
        { planet: 'Ketu', sign: 5, signName: 'Leo', degree: 15.23, nakshatra: 'Purva Phalguni', nakshatraPada: 2, house: 12, isRetrograde: true },
      ],
    },
  },
  panchang: {
    tithi: 'Shukla Panchami',
    nakshatra: 'Ashwini',
    nakshatraPada: 4,
    yoga: 'Siddhi',
    karana: 'Bava',
    sunrise: '06:42',
    sunset: '18:35',
  },
  doshas: {
    mangal_dosha: true,
    mangal_dosha_details: {
      house: 5,
      severity: 'moderate',
    },
    kaal_sarp_dosha: false,
    sade_sati: {
      active: true,
      phase: 'peak',
      startDate: '2023-01-17',
      endDate: '2025-03-29',
    },
  },
  gemstones: [
    {
      name: 'Yellow Sapphire',
      hindi: 'पुखराज',
      planet: 'Jupiter',
      weight: '3.25 Ratti',
      metal: 'Gold',
      finger: 'Index Finger (Right Hand)',
      day: 'Thursday',
      time: 'Morning (6-8 AM)',
      paksha: 'shukla',
      mantra: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः',
    },
    {
      name: 'Pearl',
      hindi: 'मोती',
      planet: 'Moon',
      weight: '4.5 Ratti',
      metal: 'Silver',
      finger: 'Little Finger (Right Hand)',
      day: 'Monday',
      time: 'Morning (6-8 AM)',
      paksha: 'shukla',
      mantra: 'ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः',
    },
  ],
  luckyFactors: {
    color: 'Yellow',
    colorHindi: 'पीला',
    day: 'Thursday',
    dayHindi: 'गुरुवार',
    number: 3,
    ishtaDevata: 'Lord Vishnu',
    ishtaDevataHindi: 'श्री विष्णु भगवान',
  },
  mahadasha: {
    current: 'Jupiter',
    startDate: '2020-05-15',
    endDate: '2036-05-15',
    antardasha: 'Saturn',
  },
};
