import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Shield, MapPin, Calendar, IndianRupee } from 'lucide-react';
import { Language } from './LanguageSelector';
import { DoshaData } from '@/types/astrology';
import GoldDivider from './GoldDivider';

interface DoshaAnalysisProps {
  doshas: DoshaData;
  language: Language;
}

const translations = {
  en: {
    title: 'Dosha Analysis',
    subtitle: 'Planetary Afflictions & Remedies',
    mangalDosha: {
      title: 'Mangal Dosha',
      titleHindi: '(मांगलिक दोष)',
      detected: 'Manglik Dosha Detected',
      notDetected: 'Non-Manglik',
      description: 'Mars is placed in a malefic house causing Mangal Dosha',
      noDescription: 'Mars placement is auspicious. No Mangal Dosha present.',
      severity: {
        mild: 'Mild',
        moderate: 'Moderate', 
        severe: 'Severe'
      },
      remedy: 'Mangal Shanti Pooja',
      temples: ['Ujjain Mangalnath Temple', 'Trimbakeshwar Temple'],
      benefits: 'Reduces marriage obstacles, improves marital harmony',
      cost: '₹2,100 - ₹11,000'
    },
    kaalSarp: {
      title: 'Kaal Sarp Dosha',
      titleHindi: '(काल सर्प दोष)',
      detected: 'Kaal Sarp Dosha Present',
      notDetected: 'No Kaal Sarp Dosha',
      description: 'All planets are hemmed between Rahu and Ketu',
      noDescription: 'Planets are not confined between Rahu-Ketu axis.',
      remedy: 'Kaal Sarp Dosh Nivaran Pooja',
      temples: ['Trimbakeshwar Temple', 'Kalahasti Temple', 'Ujjain Mahakal'],
      benefits: 'Removes obstacles, brings success in endeavors',
      cost: '₹5,100 - ₹21,000'
    },
    sadeSati: {
      title: 'Sade Sati',
      titleHindi: '(साढ़े साती)',
      active: 'Sade Sati Active',
      notActive: 'Sade Sati Not Active',
      phase: {
        rising: 'Rising Phase (ढैया)',
        peak: 'Peak Phase (शनि)',
        setting: 'Setting Phase (ढैया)'
      },
      description: 'Saturn is transiting over your Moon sign',
      noDescription: 'Saturn transit is favorable currently.',
      remedy: 'Shani Tailabhishek',
      when: 'Every Saturday',
      temples: ['Shani Shingnapur', 'Shani Dev Temple, Thirunallar'],
      benefits: 'Reduces Saturn\'s malefic effects, brings stability',
      cost: '₹1,100 - ₹5,100'
    },
    recommendedTemples: 'Recommended Temples',
    estimatedCost: 'Estimated Cost',
    benefits: 'Benefits',
    performOn: 'Perform On'
  },
  hi: {
    title: 'दोष विश्लेषण',
    subtitle: 'ग्रह दोष एवं उपाय',
    mangalDosha: {
      title: 'मांगलिक दोष',
      titleHindi: '',
      detected: 'मांगलिक दोष है',
      notDetected: 'अमांगलिक',
      description: 'मंगल ग्रह अशुभ स्थान में स्थित है',
      noDescription: 'मंगल ग्रह शुभ स्थान में है। कोई दोष नहीं।',
      severity: {
        mild: 'हल्का',
        moderate: 'मध्यम',
        severe: 'तीव्र'
      },
      remedy: 'मंगल शांति पूजा',
      temples: ['उज्जैन मंगलनाथ मंदिर', 'त्रंबकेश्वर मंदिर'],
      benefits: 'विवाह में आने वाली बाधाओं को दूर करता है',
      cost: '₹2,100 - ₹11,000'
    },
    kaalSarp: {
      title: 'काल सर्प दोष',
      titleHindi: '',
      detected: 'काल सर्प दोष है',
      notDetected: 'काल सर्प दोष नहीं',
      description: 'सभी ग्रह राहु-केतु के बीच में हैं',
      noDescription: 'ग्रह राहु-केतु अक्ष में नहीं हैं।',
      remedy: 'काल सर्प दोष निवारण पूजा',
      temples: ['त्रंबकेश्वर मंदिर', 'कालहस्ती मंदिर', 'उज्जैन महाकाल'],
      benefits: 'बाधाओं को दूर करता है, सफलता प्रदान करता है',
      cost: '₹5,100 - ₹21,000'
    },
    sadeSati: {
      title: 'साढ़े साती',
      titleHindi: '',
      active: 'साढ़े साती चल रही है',
      notActive: 'साढ़े साती नहीं है',
      phase: {
        rising: 'प्रथम ढैया',
        peak: 'मध्य चरण',
        setting: 'अंतिम ढैया'
      },
      description: 'शनि आपकी चंद्र राशि पर गोचर कर रहा है',
      noDescription: 'शनि का गोचर अनुकूल है।',
      remedy: 'शनि तैलाभिषेक',
      when: 'प्रत्येक शनिवार',
      temples: ['शनि शिंगणापुर', 'शनि देव मंदिर, तिरुनल्लार'],
      benefits: 'शनि के अशुभ प्रभावों को कम करता है',
      cost: '₹1,100 - ₹5,100'
    },
    recommendedTemples: 'अनुशंसित मंदिर',
    estimatedCost: 'अनुमानित लागत',
    benefits: 'लाभ',
    performOn: 'कब करें'
  },
  mr: {
    title: 'दोष विश्लेषण',
    subtitle: 'ग्रह दोष आणि उपाय',
    mangalDosha: {
      title: 'मांगलिक दोष',
      titleHindi: '',
      detected: 'मांगलिक दोष आहे',
      notDetected: 'अमांगलिक',
      description: 'मंगळ ग्रह अशुभ स्थानी आहे',
      noDescription: 'मंगळ ग्रह शुभ स्थानी आहे। दोष नाही।',
      severity: {
        mild: 'सौम्य',
        moderate: 'मध्यम',
        severe: 'तीव्र'
      },
      remedy: 'मंगळ शांती पूजा',
      temples: ['उज्जैन मंगळनाथ मंदिर', 'त्र्यंबकेश्वर मंदिर'],
      benefits: 'विवाहातील अडथळे दूर करते',
      cost: '₹2,100 - ₹11,000'
    },
    kaalSarp: {
      title: 'काल सर्प दोष',
      titleHindi: '',
      detected: 'काल सर्प दोष आहे',
      notDetected: 'काल सर्प दोष नाही',
      description: 'सर्व ग्रह राहू-केतू मध्ये आहेत',
      noDescription: 'ग्रह राहू-केतू अक्षात नाहीत।',
      remedy: 'काल सर्प दोष निवारण पूजा',
      temples: ['त्र्यंबकेश्वर मंदिर', 'कालहस्ती मंदिर', 'उज्जैन महाकाल'],
      benefits: 'अडथळे दूर करते, यश देते',
      cost: '₹5,100 - ₹21,000'
    },
    sadeSati: {
      title: 'साडेसाती',
      titleHindi: '',
      active: 'साडेसाती सुरू आहे',
      notActive: 'साडेसाती नाही',
      phase: {
        rising: 'पहिला टप्पा',
        peak: 'मध्य टप्पा',
        setting: 'शेवटचा टप्पा'
      },
      description: 'शनी तुमच्या चंद्र राशीवर गोचर करत आहे',
      noDescription: 'शनीचा गोचर अनुकूल आहे।',
      remedy: 'शनी तैलाभिषेक',
      when: 'प्रत्येक शनिवार',
      temples: ['शनी शिंगणापूर', 'शनी देव मंदिर, तिरुनल्लार'],
      benefits: 'शनीचे अशुभ प्रभाव कमी करते',
      cost: '₹1,100 - ₹5,100'
    },
    recommendedTemples: 'शिफारस केलेली मंदिरे',
    estimatedCost: 'अंदाजित खर्च',
    benefits: 'फायदे',
    performOn: 'केव्हा करावे'
  }
};

const DoshaCard = ({ 
  isActive, 
  title, 
  titleHindi,
  status,
  description,
  severity,
  remedy,
  temples,
  benefits,
  cost,
  when,
  language,
  t
}: {
  isActive: boolean;
  title: string;
  titleHindi: string;
  status: string;
  description: string;
  severity?: string;
  remedy: string;
  temples: string[];
  benefits: string;
  cost: string;
  when?: string;
  language: Language;
  t: typeof translations.en;
}) => (
  <motion.div
    className={`rounded-2xl p-6 border-2 ${
      isActive 
        ? 'bg-red-950/30 border-red-500/50' 
        : 'bg-green-950/20 border-green-500/30'
    }`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Header */}
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="font-display text-xl text-foreground flex items-center gap-2">
          {title}
          {titleHindi && <span className="text-gold-soft text-sm">{titleHindi}</span>}
        </h3>
        <div className={`flex items-center gap-2 mt-2 ${isActive ? 'text-red-400' : 'text-green-400'}`}>
          {isActive ? (
            <AlertTriangle className="w-5 h-5" />
          ) : (
            <CheckCircle className="w-5 h-5" />
          )}
          <span className="font-body font-medium">{status}</span>
          {severity && isActive && (
            <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded-full ml-2">
              {severity}
            </span>
          )}
        </div>
      </div>
      <div className={`p-3 rounded-full ${isActive ? 'bg-red-500/20' : 'bg-green-500/20'}`}>
        <Shield className={`w-6 h-6 ${isActive ? 'text-red-400' : 'text-green-400'}`} />
      </div>
    </div>

    {/* Description */}
    <p className="text-muted-foreground font-body text-sm mb-4">
      {description}
    </p>

    {/* Remedy Section - Only show if dosha is active */}
    {isActive && (
      <motion.div 
        className="mt-4 pt-4 border-t border-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h4 className="font-display text-gold-soft text-lg mb-3 flex items-center gap-2">
          <span className="text-xl">🙏</span>
          {language === 'en' ? 'Recommended Upay' : 'अनुशंसित उपाय'}
        </h4>
        
        <div className="bg-card/50 rounded-xl p-4 space-y-3">
          {/* Remedy Name */}
          <div className="flex items-center gap-2">
            <span className="text-primary">✦</span>
            <span className="font-body text-foreground font-medium">{remedy}</span>
          </div>

          {/* When to perform */}
          {when && (
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-gold-soft" />
              <span className="text-muted-foreground">{t.performOn}:</span>
              <span className="text-foreground">{when}</span>
            </div>
          )}

          {/* Temples */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-gold-soft">
              <MapPin className="w-4 h-4" />
              <span>{t.recommendedTemples}:</span>
            </div>
            <ul className="ml-6 space-y-1">
              {temples.map((temple, idx) => (
                <li key={idx} className="text-sm text-foreground/80 font-body">
                  • {temple}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="flex items-start gap-2 text-sm">
            <span className="text-green-400 mt-0.5">✓</span>
            <div>
              <span className="text-muted-foreground">{t.benefits}: </span>
              <span className="text-foreground/80">{benefits}</span>
            </div>
          </div>

          {/* Cost */}
          <div className="flex items-center gap-2 text-sm">
            <IndianRupee className="w-4 h-4 text-gold-soft" />
            <span className="text-muted-foreground">{t.estimatedCost}:</span>
            <span className="text-foreground font-medium">{cost}</span>
          </div>
        </div>
      </motion.div>
    )}
  </motion.div>
);

const DoshaAnalysis = ({ doshas, language }: DoshaAnalysisProps) => {
  const t = translations[language];

  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-gold-shimmer mb-3">
            {t.title}
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Dosha Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mangal Dosha */}
          <DoshaCard
            isActive={doshas.mangal_dosha}
            title={t.mangalDosha.title}
            titleHindi={t.mangalDosha.titleHindi}
            status={doshas.mangal_dosha ? t.mangalDosha.detected : t.mangalDosha.notDetected}
            description={doshas.mangal_dosha ? t.mangalDosha.description : t.mangalDosha.noDescription}
            severity={doshas.mangal_dosha_details?.severity ? t.mangalDosha.severity[doshas.mangal_dosha_details.severity] : undefined}
            remedy={t.mangalDosha.remedy}
            temples={t.mangalDosha.temples}
            benefits={t.mangalDosha.benefits}
            cost={t.mangalDosha.cost}
            language={language}
            t={t}
          />

          {/* Kaal Sarp Dosha */}
          <DoshaCard
            isActive={doshas.kaal_sarp_dosha}
            title={t.kaalSarp.title}
            titleHindi={t.kaalSarp.titleHindi}
            status={doshas.kaal_sarp_dosha ? t.kaalSarp.detected : t.kaalSarp.notDetected}
            description={doshas.kaal_sarp_dosha ? t.kaalSarp.description : t.kaalSarp.noDescription}
            remedy={t.kaalSarp.remedy}
            temples={t.kaalSarp.temples}
            benefits={t.kaalSarp.benefits}
            cost={t.kaalSarp.cost}
            language={language}
            t={t}
          />

          {/* Sade Sati */}
          <DoshaCard
            isActive={doshas.sade_sati.active}
            title={t.sadeSati.title}
            titleHindi={t.sadeSati.titleHindi}
            status={doshas.sade_sati.active ? t.sadeSati.active : t.sadeSati.notActive}
            description={doshas.sade_sati.active ? t.sadeSati.description : t.sadeSati.noDescription}
            severity={doshas.sade_sati.phase ? t.sadeSati.phase[doshas.sade_sati.phase] : undefined}
            remedy={t.sadeSati.remedy}
            temples={t.sadeSati.temples}
            benefits={t.sadeSati.benefits}
            cost={t.sadeSati.cost}
            when={t.sadeSati.when}
            language={language}
            t={t}
          />
        </div>

        {/* Disclaimer */}
        <motion.p 
          className="text-center text-muted-foreground text-sm mt-10 font-body italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {language === 'en' 
            ? 'Astrology is a spiritual guidance system. Results depend on individual Karma.'
            : language === 'hi'
              ? 'ज्योतिष एक आध्यात्मिक मार्गदर्शन प्रणाली है। परिणाम व्यक्तिगत कर्म पर निर्भर करते हैं।'
              : 'ज्योतिष ही एक आध्यात्मिक मार्गदर्शन प्रणाली आहे। परिणाम वैयक्तिक कर्मावर अवलंबून असतात।'}
        </motion.p>
      </div>

      <GoldDivider />
    </section>
  );
};

export default DoshaAnalysis;
