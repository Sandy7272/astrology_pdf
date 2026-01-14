import { Language } from '@/components/LanguageSelector';

export const translations = {
  // Cover Page
  cover: {
    vipBadge: {
      en: 'VIP Premium Report',
      hi: 'वीआईपी प्रीमियम रिपोर्ट',
      mr: 'व्हीआयपी प्रीमियम अहवाल',
    },
    title1: {
      en: 'DESTINY',
      hi: 'भाग्य',
      mr: 'नशीब',
    },
    title2: {
      en: 'UNVEILED',
      hi: 'उजागर',
      mr: 'उघड',
    },
    subtitle: {
      en: 'A Personal Life Journey Report',
      hi: 'एक व्यक्तिगत जीवन यात्रा रिपोर्ट',
      mr: 'एक वैयक्तिक जीवन प्रवास अहवाल',
    },
    basedOn: {
      en: 'Based on your birth chart analysis',
      hi: 'आपकी जन्म कुंडली के विश्लेषण पर आधारित',
      mr: 'तुमच्या जन्मपत्रिकेच्या विश्लेषणावर आधारित',
    },
    name: {
      en: 'Name',
      hi: 'नाम',
      mr: 'नाव',
    },
    dob: {
      en: 'Date of Birth',
      hi: 'जन्म तिथि',
      mr: 'जन्म तारीख',
    },
    time: {
      en: 'Time',
      hi: 'समय',
      mr: 'वेळ',
    },
    place: {
      en: 'Place',
      hi: 'स्थान',
      mr: 'ठिकाण',
    },
    ascendant: {
      en: 'Ascendant',
      hi: 'लग्न',
      mr: 'लग्न',
    },
    moonSign: {
      en: 'Moon Sign',
      hi: 'चंद्र राशि',
      mr: 'चंद्र राशी',
    },
    nakshatra: {
      en: 'Nakshatra',
      hi: 'नक्षत्र',
      mr: 'नक्षत्र',
    },
    confidenceScore: {
      en: 'Confidence Score',
      hi: 'विश्वास स्कोर',
      mr: 'विश्वास गुण',
    },
  },

  // Personality Section
  personality: {
    sceneLabel: {
      en: 'Character Introduction Scene',
      hi: 'चरित्र परिचय दृश्य',
      mr: 'व्यक्तिमत्व परिचय दृश्य',
    },
    title: {
      en: "The Hero's Personality",
      hi: 'नायक का व्यक्तित्व',
      mr: 'नायकाचे व्यक्तिमत्व',
    },
    intro: {
      en: 'You are a <gold>calm thinker</gold> with a <gold>deep emotional world</gold>. The stars have woven your soul with threads of wisdom, intuition, and an unwavering spirit that commands respect wherever you go...',
      hi: 'आप एक <gold>शांत विचारक</gold> हैं जिसके पास <gold>गहरी भावनात्मक दुनिया</gold> है। सितारों ने आपकी आत्मा को ज्ञान, अंतर्ज्ञान और अटूट भावना के धागों से बुना है जो जहां भी जाते हैं सम्मान प्राप्त करता है...',
      mr: 'तुम्ही एक <gold>शांत विचारवंत</gold> आहात ज्याच्याकडे <gold>खोल भावनिक जग</gold> आहे। ताऱ्यांनी तुमच्या आत्म्याला ज्ञान, अंतर्ज्ञान आणि अढळ भावनेने विणले आहे जे तुम्ही जिथे जाता तिथे आदर मिळवते...',
    },
    thinkingStyle: {
      title: { en: 'Thinking Style', hi: 'सोचने की शैली', mr: 'विचार शैली' },
      description: {
        en: 'Your mind operates like a strategic commander, analyzing every situation with depth and precision. You see patterns others miss and connect ideas across distant domains.',
        hi: 'आपका मन एक रणनीतिक कमांडर की तरह काम करता है, हर स्थिति का गहराई और सटीकता से विश्लेषण करता है। आप वो पैटर्न देखते हैं जो दूसरों को दिखाई नहीं देते।',
        mr: 'तुमचे मन एक रणनीतिक कमांडर सारखे काम करते, प्रत्येक परिस्थितीचे सखोल आणि अचूक विश्लेषण करते. तुम्ही असे नमुने पाहता जे इतरांना दिसत नाहीत.',
      },
      highlights: { en: ['Analytical', 'Strategic', 'Visionary'], hi: ['विश्लेषणात्मक', 'रणनीतिक', 'दूरदर्शी'], mr: ['विश्लेषणात्मक', 'रणनीतिक', 'दूरदर्शी'] },
    },
    emotionalNature: {
      title: { en: 'Emotional Nature', hi: 'भावनात्मक स्वभाव', mr: 'भावनिक स्वभाव' },
      description: {
        en: 'Beneath your calm exterior lies an ocean of profound emotions. You feel deeply but express selectively, revealing your true heart only to those who earn your trust.',
        hi: 'आपके शांत बाहरी आवरण के नीचे गहरी भावनाओं का सागर है। आप गहराई से महसूस करते हैं लेकिन चुनिंदा रूप से व्यक्त करते हैं।',
        mr: 'तुमच्या शांत बाह्य स्वरूपाखाली खोल भावनांचा सागर आहे. तुम्ही खोलवर अनुभवता पण निवडकपणे व्यक्त करता.',
      },
      highlights: { en: ['Deep', 'Reserved', 'Loyal'], hi: ['गहरा', 'संयमित', 'वफादार'], mr: ['खोल', 'संयमित', 'निष्ठावान'] },
    },
    coreStrengths: {
      title: { en: 'Core Strengths', hi: 'मुख्य शक्तियां', mr: 'मुख्य शक्ती' },
      description: {
        en: 'Your resilience is legendary. When others falter, you rise. Your determination combined with natural intuition creates an unstoppable force for achievement.',
        hi: 'आपकी लचीलापन महान है। जब दूसरे डगमगाते हैं, आप उठ खड़े होते हैं। आपका दृढ़ संकल्प स्वाभाविक अंतर्ज्ञान के साथ मिलकर सफलता की अजेय शक्ति बनाता है।',
        mr: 'तुमची लवचिकता महान आहे. जेव्हा इतर डगमगतात, तुम्ही उठता. तुमचा दृढनिश्चय नैसर्गिक अंतर्ज्ञानासह अजिंक्य शक्ती निर्माण करतो.',
      },
      highlights: { en: ['Resilient', 'Intuitive', 'Determined'], hi: ['लचीला', 'सहज ज्ञानी', 'दृढ़'], mr: ['लवचिक', 'अंतर्ज्ञानी', 'दृढ'] },
    },
    growthAreas: {
      title: { en: 'Growth Areas', hi: 'विकास क्षेत्र', mr: 'विकास क्षेत्रे' },
      description: {
        en: 'Your greatest challenge is learning to release control. Trust in the flow of life and allow others to carry some of your burdens. Vulnerability is not weakness.',
        hi: 'आपकी सबसे बड़ी चुनौती नियंत्रण छोड़ना सीखना है। जीवन की धारा पर भरोसा रखें और दूसरों को अपने कुछ बोझ उठाने दें।',
        mr: 'तुमचे सर्वात मोठे आव्हान नियंत्रण सोडायला शिकणे आहे. जीवनाच्या प्रवाहावर विश्वास ठेवा आणि इतरांना तुमचे काही ओझे वाहू द्या.',
      },
      highlights: { en: ['Trust', 'Delegation', 'Openness'], hi: ['विश्वास', 'प्रतिनिधित्व', 'खुलापन'], mr: ['विश्वास', 'प्रतिनिधित्व', 'मोकळेपणा'] },
    },
  },

  // Life Journey Section
  lifeJourney: {
    sceneLabel: { en: 'Flashback Scene', hi: 'फ्लैशबैक दृश्य', mr: 'फ्लॅशबॅक दृश्य' },
    title: { en: 'Your Life Journey', hi: 'आपकी जीवन यात्रा', mr: 'तुमचा जीवन प्रवास' },
    childhood: {
      period: { en: 'Childhood', hi: 'बचपन', mr: 'बालपण' },
      years: { en: '0-12 years', hi: '0-12 वर्ष', mr: '0-12 वर्षे' },
      description: { en: 'A sensitive soul navigating a world of wonder. Early challenges built resilience that would define your character.', hi: 'एक संवेदनशील आत्मा अद्भुत दुनिया में नेविगेट कर रही है। शुरुआती चुनौतियों ने लचीलापन बनाया।', mr: 'एक संवेदनशील आत्मा अद्भुत जगात मार्गक्रमण करत आहे. सुरुवातीच्या आव्हानांनी लवचिकता निर्माण केली.' },
      highlight: { en: 'Foundation of Strength', hi: 'शक्ति की नींव', mr: 'शक्तीचा पाया' },
    },
    adolescence: {
      period: { en: 'Adolescence', hi: 'किशोरावस्था', mr: 'किशोरवय' },
      years: { en: '13-21 years', hi: '13-21 वर्ष', mr: '13-21 वर्षे' },
      description: { en: 'The awakening of your true potential. Struggles with identity gave way to self-discovery and purpose.', hi: 'आपकी वास्तविक क्षमता का जागरण। पहचान के संघर्षों ने आत्म-खोज का मार्ग दिया।', mr: 'तुमच्या खऱ्या क्षमतेचे जागृत होणे. ओळखीच्या संघर्षांनी आत्म-शोधाचा मार्ग दिला.' },
      highlight: { en: 'Path of Discovery', hi: 'खोज का मार्ग', mr: 'शोधाचा मार्ग' },
    },
    earlyAdulthood: {
      period: { en: 'Early Adulthood', hi: 'प्रारंभिक वयस्कता', mr: 'सुरुवातीचे प्रौढत्व' },
      years: { en: '22-32 years', hi: '22-32 वर्ष', mr: '22-32 वर्षे' },
      description: { en: 'The crucible years. Professional challenges and personal trials forge the hero within.', hi: 'परीक्षा के वर्ष। पेशेवर चुनौतियां और व्यक्तिगत परीक्षाएं आपके भीतर के नायक को गढ़ती हैं।', mr: 'परीक्षेची वर्षे. व्यावसायिक आव्हाने आणि वैयक्तिक कसोट्या तुमच्यातील नायकाला घडवतात.' },
      highlight: { en: 'The Forge', hi: 'भट्टी', mr: 'भट्टी' },
    },
    primeYears: {
      period: { en: 'Prime Years', hi: 'सर्वोत्तम वर्ष', mr: 'सुवर्ण वर्षे' },
      years: { en: '33-45 years', hi: '33-45 वर्ष', mr: '33-45 वर्षे' },
      description: { en: 'Your golden era approaches. Recognition, achievement, and the fruits of patience manifest.', hi: 'आपका स्वर्णिम युग आ रहा है। मान्यता, उपलब्धि और धैर्य के फल प्रकट होते हैं।', mr: 'तुमचा सुवर्णकाळ जवळ येत आहे. मान्यता, यश आणि धीराची फळे प्रकट होतात.' },
      highlight: { en: 'Rising Glory', hi: 'उदय गौरव', mr: 'उदय गौरव' },
    },
    fulfillment: {
      period: { en: 'Fulfillment', hi: 'पूर्णता', mr: 'पूर्णता' },
      years: { en: '46-60 years', hi: '46-60 वर्ष', mr: '46-60 वर्षे' },
      description: { en: 'Wisdom earned through experience. Legacy building and meaningful connections define this chapter.', hi: 'अनुभव से अर्जित ज्ञान। विरासत निर्माण और सार्थक संबंध इस अध्याय को परिभाषित करते हैं।', mr: 'अनुभवातून मिळवलेले ज्ञान. वारसा निर्माण आणि अर्थपूर्ण संबंध या अध्यायाची व्याख्या करतात.' },
      highlight: { en: 'Harvest Season', hi: 'फसल का मौसम', mr: 'कापणीचा हंगाम' },
    },
    legacy: {
      period: { en: 'Legacy', hi: 'विरासत', mr: 'वारसा' },
      years: { en: '60+ years', hi: '60+ वर्ष', mr: '60+ वर्षे' },
      description: { en: 'The sage emerges. Your journey inspires generations, and your story becomes legend.', hi: 'ऋषि का उदय। आपकी यात्रा पीढ़ियों को प्रेरित करती है, और आपकी कहानी किंवदंती बन जाती है।', mr: 'ऋषी उदयास येतो. तुमचा प्रवास पिढ्यांना प्रेरणा देतो आणि तुमची गोष्ट दंतकथा बनते.' },
      highlight: { en: 'Eternal Impact', hi: 'शाश्वत प्रभाव', mr: 'शाश्वत प्रभाव' },
    },
  },

  // Career Section
  career: {
    sceneLabel: { en: 'Success Arc', hi: 'सफलता का आर्क', mr: 'यशाचा आर्क' },
    title: { en: 'Rise of Your Career', hi: 'आपके करियर का उदय', mr: 'तुमच्या करिअरचा उदय' },
    growthTitle: { en: 'Career Growth Trajectory', hi: 'करियर विकास प्रक्षेपवक्र', mr: 'करिअर वाढ प्रक्षेपण' },
    milestones: {
      firstRole: { en: 'First Major Role', hi: 'पहली प्रमुख भूमिका', mr: 'पहिली प्रमुख भूमिका' },
      leadership: { en: 'Leadership Position', hi: 'नेतृत्व पद', mr: 'नेतृत्व पद' },
      peakGrowth: { en: 'Peak Growth', hi: 'चरम विकास', mr: 'शिखर वाढ' },
      recognition: { en: 'Recognition Era', hi: 'मान्यता युग', mr: 'मान्यता युग' },
      mastery: { en: 'Mastery Achieved', hi: 'महारत हासिल', mr: 'कौशल्य प्राप्त' },
    },
    insights: {
      careerNature: {
        title: { en: 'Career Nature', hi: 'करियर स्वभाव', mr: 'करिअर स्वभाव' },
        content: { en: 'Your chart reveals a natural affinity for leadership roles in creative or analytical fields. You thrive where strategy meets innovation.', hi: 'आपकी कुंडली रचनात्मक या विश्लेषणात्मक क्षेत्रों में नेतृत्व भूमिकाओं के लिए स्वाभाविक रुचि दर्शाती है।', mr: 'तुमची कुंडली सर्जनशील किंवा विश्लेषणात्मक क्षेत्रांत नेतृत्व भूमिकांसाठी नैसर्गिक आवड दर्शवते.' },
      },
      growthTimeline: {
        title: { en: 'Growth Timeline', hi: 'विकास समयरेखा', mr: 'वाढ टाइमलाइन' },
        content: { en: 'Ages 33-42 mark your golden professional decade. Patience before this period builds the foundation for extraordinary success.', hi: 'आयु 33-42 आपका स्वर्णिम पेशेवर दशक है। इस अवधि से पहले का धैर्य असाधारण सफलता की नींव रखता है।', mr: 'वय 33-42 तुमचा सुवर्ण व्यावसायिक दशक आहे. या कालावधीपूर्वीचा धीर अद्भुत यशाचा पाया घालतो.' },
      },
      businessVsJob: {
        title: { en: 'Business vs Job', hi: 'व्यापार vs नौकरी', mr: 'व्यवसाय vs नोकरी' },
        content: { en: 'Your entrepreneurial spirit is strong, but partnership ventures after 35 yield better results than solo endeavors in early years.', hi: 'आपकी उद्यमशीलता मजबूत है, लेकिन 35 के बाद साझेदारी उद्यम शुरुआती वर्षों में एकल प्रयासों से बेहतर परिणाम देते हैं।', mr: 'तुमची उद्योजकता मजबूत आहे, पण 35 नंतर भागीदारी उपक्रम सुरुवातीच्या वर्षांतील एकट्या प्रयत्नांपेक्षा चांगले परिणाम देतात.' },
      },
      peakYears: {
        title: { en: 'Peak Years', hi: 'चरम वर्ष', mr: 'शिखर वर्षे' },
        content: { en: '2027, 2031, and 2035 shine brightest in your professional sky. Major promotions, recognition, or business expansion likely.', hi: '2027, 2031 और 2035 आपके पेशेवर आकाश में सबसे चमकदार हैं। प्रमुख पदोन्नति, मान्यता या व्यापार विस्तार की संभावना।', mr: '2027, 2031 आणि 2035 तुमच्या व्यावसायिक आकाशात सर्वात तेजस्वी आहेत. मोठी पदोन्नती, मान्यता किंवा व्यवसाय विस्ताराची शक्यता.' },
      },
    },
  },

  // Love Section
  love: {
    sceneLabel: { en: 'Romantic Scene', hi: 'रोमांटिक दृश्य', mr: 'रोमँटिक दृश्य' },
    title: { en: 'Love & Destiny', hi: 'प्रेम और भाग्य', mr: 'प्रेम आणि नशीब' },
    mainReading: {
      en: 'Venus whispers of a <gold>profound love</gold> written in your stars. Your partner will be someone of <gold>intellectual depth</gold> and emotional maturity, drawn to your authentic spirit...',
      hi: 'शुक्र आपके सितारों में लिखे <gold>गहरे प्रेम</gold> की फुसफुसाहट करता है। आपका साथी <gold>बौद्धिक गहराई</gold> और भावनात्मक परिपक्वता वाला होगा...',
      mr: 'शुक्र तुमच्या ताऱ्यांमध्ये लिहिलेल्या <gold>गहन प्रेमाची</gold> कुजबुज करतो. तुमचा जोडीदार <gold>बौद्धिक खोली</gold> आणि भावनिक परिपक्वता असलेला असेल...',
    },
    loveType: { title: { en: 'Love Type', hi: 'प्रेम प्रकार', mr: 'प्रेम प्रकार' }, value: { en: 'Love Marriage', hi: 'प्रेम विवाह', mr: 'प्रेम विवाह' }, subtitle: { en: 'Strong romantic connection indicated', hi: 'मजबूत रोमांटिक कनेक्शन संकेतित', mr: 'मजबूत रोमँटिक कनेक्शन दर्शविले' } },
    marriageWindow: { title: { en: 'Marriage Window', hi: 'विवाह का समय', mr: 'विवाहाची वेळ' }, value: { en: '2026-2028', hi: '2026-2028', mr: '2026-2028' }, subtitle: { en: 'Most auspicious period', hi: 'सबसे शुभ अवधि', mr: 'सर्वात शुभ काळ' } },
    partnerNature: { title: { en: 'Partner Nature', hi: 'साथी का स्वभाव', mr: 'जोडीदाराचा स्वभाव' }, value: { en: 'Intellectual & Caring', hi: 'बुद्धिमान और देखभाल करने वाला', mr: 'बुद्धिमान आणि काळजी घेणारा' }, subtitle: { en: 'Complementary energies', hi: 'पूरक ऊर्जाएं', mr: 'पूरक ऊर्जा' } },
    phasesTitle: { en: 'Your Love Story Phases', hi: 'आपकी प्रेम कहानी के चरण', mr: 'तुमच्या प्रेमकथेचे टप्पे' },
    phases: {
      meeting: { phase: { en: 'Meeting', hi: 'मिलन', mr: 'भेट' }, description: { en: 'Your destined encounter comes through unexpected channels—perhaps a professional setting or during travels.', hi: 'आपकी नियत मुलाकात अप्रत्याशित माध्यमों से आती है—शायद पेशेवर सेटिंग या यात्रा के दौरान।', mr: 'तुमची नियतीची भेट अनपेक्षित मार्गांनी येते—कदाचित व्यावसायिक सेटिंग किंवा प्रवासादरम्यान.' } },
      courtship: { phase: { en: 'Courtship', hi: 'प्रेमालाप', mr: 'प्रेमालाप' }, description: { en: 'A slow-burning romance built on intellectual connection and deep conversations.', hi: 'बौद्धिक संबंध और गहरी बातचीत पर बना एक धीमा प्रेम।', mr: 'बौद्धिक संबंध आणि खोल संभाषणांवर बांधलेले मंद प्रेम.' } },
      union: { phase: { en: 'Union', hi: 'मिलन', mr: 'विवाह' }, description: { en: 'Marriage brings stability and growth. Your partnership becomes a source of strength.', hi: 'विवाह स्थिरता और विकास लाता है। आपकी साझेदारी शक्ति का स्रोत बन जाती है।', mr: 'विवाह स्थिरता आणि वाढ आणतो. तुमची भागीदारी शक्तीचा स्रोत बनते.' } },
      evolution: { phase: { en: 'Evolution', hi: 'विकास', mr: 'विकास' }, description: { en: 'Years 5-10 of marriage bring deepest bonding and shared accomplishments.', hi: 'विवाह के 5-10 वर्ष सबसे गहरे बंधन और साझा उपलब्धियां लाते हैं।', mr: 'विवाहाची 5-10 वर्षे सर्वात खोल बंधन आणि सामायिक यश आणतात.' } },
    },
  },

  // Wealth Section
  wealth: {
    sceneLabel: { en: 'Wealth Journey', hi: 'धन यात्रा', mr: 'संपत्ती प्रवास' },
    title: { en: 'Path of Prosperity', hi: 'समृद्धि का मार्ग', mr: 'समृद्धीचा मार्ग' },
    timelineTitle: { en: 'Financial Growth Timeline', hi: 'वित्तीय विकास समयरेखा', mr: 'आर्थिक वाढ टाइमलाइन' },
    phases: {
      foundation: { en: 'Foundation Phase', hi: 'नींव चरण', mr: 'पाया टप्पा' },
      accumulation: { en: 'Accumulation', hi: 'संचय', mr: 'संचय' },
      wealthPeak: { en: 'Wealth Peak', hi: 'धन शिखर', mr: 'संपत्ती शिखर' },
      stability: { en: 'Stability', hi: 'स्थिरता', mr: 'स्थिरता' },
      legacy: { en: 'Legacy', hi: 'विरासत', mr: 'वारसा' },
    },
    insights: {
      wealthNature: { title: { en: 'Wealth Nature', hi: 'धन स्वभाव', mr: 'संपत्ती स्वभाव' }, content: { en: 'Your chart indicates wealth through intellect and strategic investments rather than inheritance. Self-made prosperity is your destiny.', hi: 'आपकी कुंडली विरासत के बजाय बुद्धि और रणनीतिक निवेश के माध्यम से धन इंगित करती है।', mr: 'तुमची कुंडली वारशाऐवजी बुद्धी आणि रणनीतिक गुंतवणुकीद्वारे संपत्ती दर्शवते.' } },
      propertyYoga: { title: { en: 'Property Yoga', hi: 'संपत्ति योग', mr: 'मालमत्ता योग' }, content: { en: 'Strong planetary combinations for real estate. Property investments after age 32 yield exceptional returns. Multiple properties indicated.', hi: 'रियल एस्टेट के लिए मजबूत ग्रहीय संयोजन। 32 वर्ष की आयु के बाद संपत्ति निवेश असाधारण रिटर्न देता है।', mr: 'रिअल इस्टेटसाठी मजबूत ग्रह संयोग. 32 वर्षानंतर मालमत्ता गुंतवणूक अद्भुत परतावा देते.' } },
      investmentStyle: { title: { en: 'Investment Style', hi: 'निवेश शैली', mr: 'गुंतवणूक शैली' }, content: { en: 'Long-term investments suit you best. Avoid speculation. Gold, land, and blue-chip stocks align with your planetary energies.', hi: 'दीर्घकालिक निवेश आपके लिए सबसे उपयुक्त है। अटकलों से बचें। सोना, जमीन और ब्लू-चिप स्टॉक आपकी ग्रहीय ऊर्जाओं के अनुरूप हैं।', mr: 'दीर्घकालीन गुंतवणूक तुम्हाला सर्वात योग्य आहे. सट्टेबाजी टाळा. सोने, जमीन आणि ब्लू-चिप स्टॉक तुमच्या ग्रह ऊर्जांशी सुसंगत आहेत.' } },
      peakWealthYears: { title: { en: 'Peak Wealth Years', hi: 'चरम धन वर्ष', mr: 'शिखर संपत्ती वर्षे' }, content: { en: '2030-2038 marks your golden financial decade. Major acquisitions and wealth multiplication during this period.', hi: '2030-2038 आपका स्वर्णिम वित्तीय दशक है। इस अवधि के दौरान प्रमुख अधिग्रहण और धन गुणन।', mr: '2030-2038 तुमचा सुवर्ण आर्थिक दशक आहे. या काळात मोठे अधिग्रहण आणि संपत्ती गुणाकार.' } },
    },
  },

  // Foreign Section
  foreign: {
    sceneLabel: { en: 'Journey Beyond', hi: 'सीमाओं से परे यात्रा', mr: 'सीमांपलीकडे प्रवास' },
    title: { en: 'Destiny Abroad', hi: 'विदेश में भाग्य', mr: 'परदेशातील नशीब' },
    mapTitle: { en: 'Foreign Opportunity Map', hi: 'विदेशी अवसर मानचित्र', mr: 'परदेशी संधी नकाशा' },
    probability: { en: 'probability', hi: 'संभावना', mr: 'शक्यता' },
    regions: {
      northAmerica: { en: 'North America', hi: 'उत्तरी अमेरिका', mr: 'उत्तर अमेरिका' },
      europe: { en: 'Europe', hi: 'यूरोप', mr: 'युरोप' },
      middleEast: { en: 'Middle East', hi: 'मध्य पूर्व', mr: 'मध्य पूर्व' },
      southeastAsia: { en: 'Southeast Asia', hi: 'दक्षिण पूर्व एशिया', mr: 'आग्नेय आशिया' },
    },
    insightsTitle: { en: 'Planetary Insights', hi: 'ग्रहीय अंतर्दृष्टि', mr: 'ग्रह अंतर्दृष्टी' },
    insights: [
      { en: 'Strong 9th house indicates international travels and foreign connections', hi: 'मजबूत 9वां भाव अंतर्राष्ट्रीय यात्राओं और विदेशी संबंधों का संकेत देता है', mr: 'मजबूत 9वे घर आंतरराष्ट्रीय प्रवास आणि परदेशी संबंध दर्शवते' },
      { en: "Jupiter's aspect suggests academic or professional opportunities abroad", hi: 'बृहस्पति का पहलू विदेश में शैक्षिक या पेशेवर अवसरों का सुझाव देता है', mr: 'गुरूचा पैलू परदेशात शैक्षणिक किंवा व्यावसायिक संधी सुचवतो' },
      { en: 'Rahu placement favors settlement in Western directions', hi: 'राहु की स्थिति पश्चिम दिशाओं में बसने का पक्षधर है', mr: 'राहूची स्थिती पश्चिम दिशेत स्थायिक होण्यास अनुकूल आहे' },
      { en: 'Most favorable travel periods align with Jupiter and Venus transits', hi: 'सबसे अनुकूल यात्रा अवधि बृहस्पति और शुक्र के गोचर के साथ संरेखित होती है', mr: 'सर्वात अनुकूल प्रवास काळ गुरू आणि शुक्र गोचराशी सुसंगत आहे' },
    ],
  },

  // Health Section
  health: {
    sceneLabel: { en: 'Wellness Scene', hi: 'कल्याण दृश्य', mr: 'आरोग्य दृश्य' },
    title: { en: 'Mind & Body', hi: 'मन और शरीर', mr: 'मन आणि शरीर' },
    cosmicStrength: { en: 'Cosmic Strength', hi: 'कॉस्मिक शक्ति', mr: 'कॉस्मिक शक्ती' },
    areas: {
      mentalWellness: { area: { en: 'Mental Wellness', hi: 'मानसिक कल्याण', mr: 'मानसिक आरोग्य' }, advice: { en: 'Strong mental resilience. Practice meditation during stressful planetary transits. Avoid overthinking in Saturn periods.', hi: 'मजबूत मानसिक लचीलापन। तनावपूर्ण ग्रह गोचर के दौरान ध्यान का अभ्यास करें।', mr: 'मजबूत मानसिक लवचिकता. तणावपूर्ण ग्रह गोचर दरम्यान ध्यानाचा सराव करा.' } },
      heartVitals: { area: { en: 'Heart & Vitals', hi: 'हृदय और महत्वपूर्ण अंग', mr: 'हृदय आणि महत्वाचे अवयव' }, advice: { en: 'Generally robust cardiovascular health. Extra care needed during Mars transits. Regular exercise benefits greatly.', hi: 'आमतौर पर मजबूत हृदय स्वास्थ्य। मंगल गोचर के दौरान अतिरिक्त देखभाल की जरूरत।', mr: 'सामान्यतः मजबूत हृदय आरोग्य. मंगळ गोचर दरम्यान अतिरिक्त काळजी आवश्यक.' } },
      energyLevels: { area: { en: 'Energy Levels', hi: 'ऊर्जा स्तर', mr: 'ऊर्जा पातळी' }, advice: { en: 'Natural vitality from Sun placement. Energy peaks in morning hours. Maintain consistent sleep schedule.', hi: 'सूर्य की स्थिति से प्राकृतिक जीवन शक्ति। सुबह के घंटों में ऊर्जा चरम पर। लगातार नींद का समय बनाए रखें।', mr: 'सूर्य स्थानातून नैसर्गिक जीवनशक्ती. सकाळच्या तासांत ऊर्जा शिखरावर. सुसंगत झोप वेळापत्रक राखा.' } },
      emotionalBalance: { area: { en: 'Emotional Balance', hi: 'भावनात्मक संतुलन', mr: 'भावनिक संतुलन' }, advice: { en: 'Moon influences emotional fluctuations. Water-based activities bring calm. Practice gratitude daily.', hi: 'चंद्रमा भावनात्मक उतार-चढ़ाव को प्रभावित करता है। जल-आधारित गतिविधियां शांति लाती हैं।', mr: 'चंद्र भावनिक चढ-उतारांवर प्रभाव टाकतो. पाणी-आधारित क्रियाकलाप शांतता आणतात.' } },
    },
    ritualsTitle: { en: 'Daily Wellness Rituals', hi: 'दैनिक कल्याण अनुष्ठान', mr: 'दैनिक आरोग्य विधी' },
    rituals: [
      { en: 'Morning meditation for 15 minutes', hi: '15 मिनट सुबह का ध्यान', mr: '15 मिनिटे सकाळचे ध्यान' },
      { en: 'Drink water from copper vessel', hi: 'तांबे के बर्तन से पानी पिएं', mr: 'तांब्याच्या भांड्यातून पाणी प्या' },
      { en: 'Include green vegetables daily', hi: 'दैनिक हरी सब्जियां शामिल करें', mr: 'दररोज हिरव्या भाज्या समाविष्ट करा' },
      { en: 'Sun gazing at sunrise (briefly)', hi: 'सूर्योदय पर संक्षिप्त सूर्य दर्शन', mr: 'सूर्योदयाला थोडक्यात सूर्य दर्शन' },
    ],
  },

  // Dasha Section
  dasha: {
    sceneLabel: { en: 'Cosmic Timeline', hi: 'कॉस्मिक समयरेखा', mr: 'कॉस्मिक टाइमलाइन' },
    title: { en: 'Planetary Time Cycle', hi: 'ग्रहीय समय चक्र', mr: 'ग्रह काळ चक्र' },
    mahadasha: { en: 'Mahadasha', hi: 'महादशा', mr: 'महादशा' },
    current: { en: 'Current', hi: 'वर्तमान', mr: 'सध्याचे' },
    active: { en: 'Active', hi: 'सक्रिय', mr: 'सक्रिय' },
    periodsTitle: { en: 'Your Planetary Periods', hi: 'आपकी ग्रहीय अवधि', mr: 'तुमचे ग्रह काळ' },
    planets: {
      Sun: { en: 'Sun', hi: 'सूर्य', mr: 'सूर्य' },
      Moon: { en: 'Moon', hi: 'चंद्र', mr: 'चंद्र' },
      Mars: { en: 'Mars', hi: 'मंगल', mr: 'मंगळ' },
      Mercury: { en: 'Mercury', hi: 'बुध', mr: 'बुध' },
      Jupiter: { en: 'Jupiter', hi: 'बृहस्पति', mr: 'गुरू' },
      Venus: { en: 'Venus', hi: 'शुक्र', mr: 'शुक्र' },
      Saturn: { en: 'Saturn', hi: 'शनि', mr: 'शनी' },
      Rahu: { en: 'Rahu', hi: 'राहु', mr: 'राहू' },
      Ketu: { en: 'Ketu', hi: 'केतु', mr: 'केतू' },
    },
    natures: {
      expansionWisdom: { en: 'Expansion & Wisdom', hi: 'विस्तार और ज्ञान', mr: 'विस्तार आणि ज्ञान' },
      disciplineLegacy: { en: 'Discipline & Legacy', hi: 'अनुशासन और विरासत', mr: 'शिस्त आणि वारसा' },
      communicationLearning: { en: 'Communication & Learning', hi: 'संवाद और सीखना', mr: 'संवाद आणि शिक्षण' },
    },
  },

  // Summary Section
  summary: {
    sceneLabel: { en: 'Grand Finale', hi: 'महान समापन', mr: 'भव्य समारोप' },
    title: { en: 'Your Destiny Summary', hi: 'आपका भाग्य सारांश', mr: 'तुमचा नशीब सारांश' },
    climax: {
      en: 'Your life reveals a story of <gold>late but spectacular success</gold>. The struggles of early years transform into <gold>unshakeable stability</gold>. You are destined not just to succeed, but to <gold>inspire generations</gold>...',
      hi: 'आपका जीवन <gold>देर से लेकिन शानदार सफलता</gold> की कहानी प्रकट करता है। शुरुआती वर्षों के संघर्ष <gold>अटूट स्थिरता</gold> में बदल जाते हैं। आपका भाग्य सिर्फ सफल होना नहीं, बल्कि <gold>पीढ़ियों को प्रेरित करना</gold> है...',
      mr: 'तुमचे जीवन <gold>उशीरा पण भव्य यश</gold>ाची गोष्ट प्रकट करते. सुरुवातीच्या वर्षांचे संघर्ष <gold>अढळ स्थिरतेत</gold> रूपांतरित होतात. तुमचे नशीब फक्त यशस्वी होणे नाही, तर <gold>पिढ्यांना प्रेरणा देणे</gold> आहे...',
    },
    coreStrengths: { en: 'Core Strengths', hi: 'मुख्य शक्तियां', mr: 'मुख्य शक्ती' },
    strengths: [
      { en: 'Natural leadership with magnetic presence', hi: 'चुंबकीय उपस्थिति के साथ प्राकृतिक नेतृत्व', mr: 'चुंबकीय उपस्थितीसह नैसर्गिक नेतृत्व' },
      { en: 'Deep analytical thinking and wisdom', hi: 'गहन विश्लेषणात्मक सोच और ज्ञान', mr: 'खोल विश्लेषणात्मक विचार आणि ज्ञान' },
      { en: 'Resilience through adversity', hi: 'विपरीत परिस्थितियों में लचीलापन', mr: 'प्रतिकूलतेतून लवचिकता' },
      { en: 'Strong intuition and foresight', hi: 'मजबूत अंतर्ज्ञान और दूरदर्शिता', mr: 'मजबूत अंतर्ज्ञान आणि दूरदृष्टी' },
      { en: 'Loyal and dependable nature', hi: 'वफादार और भरोसेमंद स्वभाव', mr: 'निष्ठावान आणि विश्वासार्ह स्वभाव' },
    ],
    goldenYears: { en: 'Golden Years', hi: 'स्वर्णिम वर्ष', mr: 'सुवर्ण वर्षे' },
    carefulYears: { en: 'Careful Years', hi: 'सावधान वर्ष', mr: 'सावध वर्षे' },
    cautionNote: { en: 'Extra caution advised during these periods', hi: 'इन अवधियों के दौरान अतिरिक्त सावधानी बरतें', mr: 'या काळात अतिरिक्त सावधगिरी बाळगा' },
  },

  // Remedies Section
  remedies: {
    sceneLabel: { en: 'Credits Scene', hi: 'क्रेडिट दृश्य', mr: 'क्रेडिट दृश्य' },
    title: { en: 'Powerful Remedies', hi: 'शक्तिशाली उपाय', mr: 'शक्तिशाली उपाय' },
    intro: {
      en: 'These cosmic prescriptions are designed to <gold>harmonize your energies</gold>, strengthen benefic planets, and <gold>neutralize malefic influences</gold> in your birth chart...',
      hi: 'ये कॉस्मिक नुस्खे आपकी <gold>ऊर्जाओं को सामंजस्य</gold> करने, शुभ ग्रहों को मजबूत करने और आपकी जन्म कुंडली में <gold>अशुभ प्रभावों को निष्क्रिय</gold> करने के लिए डिज़ाइन किए गए हैं...',
      mr: 'हे कॉस्मिक प्रिस्क्रिप्शन तुमच्या <gold>ऊर्जांना सुसंवादी</gold> करण्यासाठी, शुभ ग्रहांना मजबूत करण्यासाठी आणि तुमच्या जन्मपत्रिकेतील <gold>अशुभ प्रभावांना निष्प्रभ</gold> करण्यासाठी डिझाइन केलेले आहेत...',
    },
    categories: {
      mantras: {
        category: { en: 'Mantras', hi: 'मंत्र', mr: 'मंत्र' },
        title: { en: 'Sacred Chants', hi: 'पवित्र जाप', mr: 'पवित्र जप' },
        items: [
          { en: 'Om Namah Shivaya - 108 times daily', hi: 'ओम नमः शिवाय - प्रतिदिन 108 बार', mr: 'ओम नमः शिवाय - रोज 108 वेळा' },
          { en: 'Gayatri Mantra at sunrise', hi: 'सूर्योदय पर गायत्री मंत्र', mr: 'सूर्योदयाला गायत्री मंत्र' },
          { en: 'Hanuman Chalisa on Tuesdays', hi: 'मंगलवार को हनुमान चालीसा', mr: 'मंगळवारी हनुमान चालीसा' },
        ],
      },
      gemstones: {
        category: { en: 'Gemstones', hi: 'रत्न', mr: 'रत्ने' },
        title: { en: 'Power Stones', hi: 'शक्ति पत्थर', mr: 'शक्ती दगड' },
        items: [
          { en: 'Yellow Sapphire (Pukhraj) - 5+ carats', hi: 'पीला पुखराज - 5+ कैरेट', mr: 'पिवळा पुखराज - 5+ कॅरेट' },
          { en: 'Pearl (Moti) for emotional balance', hi: 'भावनात्मक संतुलन के लिए मोती', mr: 'भावनिक संतुलनासाठी मोती' },
          { en: 'Wear on right index finger', hi: 'दाहिनी तर्जनी पर पहनें', mr: 'उजव्या तर्जनी बोटात घाला' },
        ],
      },
      donations: {
        category: { en: 'Donations', hi: 'दान', mr: 'दान' },
        title: { en: 'Acts of Grace', hi: 'कृपा के कार्य', mr: 'कृपेची कृत्ये' },
        items: [
          { en: 'Feed cows on Thursdays', hi: 'गुरुवार को गायों को खिलाएं', mr: 'गुरुवारी गायींना खायला द्या' },
          { en: 'Donate yellow items to temples', hi: 'मंदिरों में पीली वस्तुएं दान करें', mr: 'मंदिरांना पिवळ्या वस्तू दान करा' },
          { en: 'Support education for underprivileged', hi: 'वंचितों की शिक्षा का समर्थन करें', mr: 'वंचितांच्या शिक्षणाला पाठिंबा द्या' },
        ],
      },
      rituals: {
        category: { en: 'Rituals', hi: 'अनुष्ठान', mr: 'विधी' },
        title: { en: 'Sacred Practices', hi: 'पवित्र अभ्यास', mr: 'पवित्र प्रथा' },
        items: [
          { en: 'Light ghee lamp every evening', hi: 'प्रत्येक शाम घी का दीपक जलाएं', mr: 'प्रत्येक संध्याकाळी तूप दिवा लावा' },
          { en: 'Visit Vishnu temple on Thursdays', hi: 'गुरुवार को विष्णु मंदिर जाएं', mr: 'गुरुवारी विष्णू मंदिराला भेट द्या' },
          { en: 'Perform Rudrabhishek annually', hi: 'वार्षिक रुद्राभिषेक करें', mr: 'वार्षिक रुद्राभिषेक करा' },
        ],
      },
    },
    note: {
      en: '✨ Perform these remedies with faith and devotion for maximum benefits. Consult a qualified astrologer before wearing gemstones.',
      hi: '✨ अधिकतम लाभ के लिए इन उपायों को विश्वास और भक्ति के साथ करें। रत्न पहनने से पहले किसी योग्य ज्योतिषी से परामर्श करें।',
      mr: '✨ जास्तीत जास्त फायद्यांसाठी हे उपाय श्रद्धा आणि भक्तीने करा. रत्ने घालण्यापूर्वी योग्य ज्योतिषाचा सल्ला घ्या.',
    },
  },
};

export const t = (key: string, lang: Language): string => {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    value = value?.[k];
    if (!value) return key;
  }
  
  if (typeof value === 'object' && value[lang]) {
    return value[lang];
  }
  
  return typeof value === 'string' ? value : key;
};

// Helper to get a translation value from a language-keyed object
export const getTranslationValue = <T>(obj: { en: T; hi: T; mr: T }, lang: Language): T => {
  return obj[lang];
};

// Helper to get all translations for a language - recursively extracts values
const extractLangValues = (obj: any, lang: Language): any => {
  if (obj === null || obj === undefined) return obj;
  
  // If it's a translation object with language keys
  if (typeof obj === 'object' && 'en' in obj && 'hi' in obj && 'mr' in obj && 
      (typeof obj.en === 'string' || Array.isArray(obj.en))) {
    return obj[lang];
  }
  
  // If it's an array, map over it
  if (Array.isArray(obj)) {
    return obj.map(item => extractLangValues(item, lang));
  }
  
  // If it's an object, recurse
  if (typeof obj === 'object') {
    const result: any = {};
    for (const key in obj) {
      result[key] = extractLangValues(obj[key], lang);
    }
    return result;
  }
  
  return obj;
};

export const getTranslation = (lang: Language) => {
  return extractLangValues(translations, lang);
};
