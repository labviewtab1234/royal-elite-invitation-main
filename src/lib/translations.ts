export type Language = 'en' | 'es' | 'fr' | 'pt' | 'it' | 'de' | 'ar';

export interface Translations {
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  vipInvitationOnly: string;
  ctaRequestInvitation: string;
  
  // Benefits
  benefitsTitle: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  benefit5: string;
  benefit6: string;
  
  // Social Proof
  socialProofText: string;
  
  // Exclusivity
  exclusivityTitle: string;
  exclusivityText: string;
  limitedSpots: string;
  
  // How it Works
  howItWorksTitle: string;
  step1: string;
  step2: string;
  step3: string;
  
  // FAQ
  faqTitle: string;
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
  faq4Question: string;
  faq4Answer: string;
  faq5Question: string;
  faq5Answer: string;
  faq6Question: string;
  faq6Answer: string;
  
  // Final CTA
  finalCtaTitle: string;
  finalCtaButton: string;
  
  // Language Names
  languageName: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    heroTitle: "Travel Like The Elite. Pay Like a Privileged Member.",
    heroSubtitle: "Access the private membership that lets you enjoy luxury cruises for a fraction of the real price.",
    vipInvitationOnly: "VIP INVITATION ONLY",
    ctaRequestInvitation: "Request Your VIP Invitation Now",
    
    benefitsTitle: "Exclusive VIP Privileges",
    benefit1: "Save up to 50% on Luxury Cruises",
    benefit2: "Access to Cruises NOT Listed on Public Agencies",
    benefit3: "VIP Rewards Program: Every Dollar Multiplies",
    benefit4: "Private Events & International Networking with VIP Members",
    benefit5: "Personalized 24/7 Concierge Service",
    benefit6: "Earning Opportunities for Recommending the Membership",
    
    socialProofText: "Over 1 Million Elite Travelers Already Enjoy This Private Membership.",
    
    exclusivityTitle: "ULTRA-EXCLUSIVE ACCESS",
    exclusivityText: "This is NOT open to the public. Invitation-only and VERY limited spots.",
    limitedSpots: "Few VIP spots available this month.",
    
    howItWorksTitle: "How It Works",
    step1: "Request Your VIP Invitation",
    step2: "Activate Your Exclusive Membership",
    step3: "Start Traveling Like an Elite Member",
    
    faqTitle: "Frequently Asked Questions",
    faq1Question: "What exactly is the VIP Membership?",
    faq1Answer: "The VIP Membership is an exclusive invitation-only program that provides access to luxury cruises at significant discounts, premium rewards, and private networking events with elite travelers worldwide.",
    faq2Question: "How do I save on luxury cruises?",
    faq2Answer: "Members enjoy up to 50% savings on luxury cruises through our private booking platform, plus access to exclusive deals not available to the general public.",
    faq3Question: "Is this open to everyone?",
    faq3Answer: "No, this is strictly by invitation only. We maintain exclusivity by carefully selecting members who align with our luxury travel community values.",
    faq4Question: "Can I really earn money by recommending?",
    faq4Answer: "Yes, our VIP members can earn substantial rewards by introducing other qualified individuals to the membership. It's one of our most valued benefits.",
    faq5Question: "Is my money secure with inCruises?",
    faq5Answer: "Absolutely. inCruises is a fully licensed and regulated travel company with millions of satisfied members worldwide. Your investment is protected and secure.",
    faq6Question: "How soon can I start traveling after joining?",
    faq6Answer: "Once your VIP membership is activated, you can start booking exclusive cruise deals immediately. Most members book their first luxury cruise within 30 days.",
    
    finalCtaTitle: "Request Your VIP Invitation Today and Join The Elite of Travelers.",
    finalCtaButton: "I Want My VIP Invitation",
    
    languageName: "English"
  },
  
  es: {
    heroTitle: "Viaja Como La Elite. Paga Como Un Miembro Privilegiado.",
    heroSubtitle: "Accede a la membresía privada que te permite disfrutar cruceros de lujo por una fracción del precio real.",
    vipInvitationOnly: "SOLO POR INVITACIÓN VIP",
    ctaRequestInvitation: "Solicita Tu Invitación VIP Ahora",
    
    benefitsTitle: "Privilegios VIP Exclusivos",
    benefit1: "Ahorra hasta 50% en Cruceros de Lujo",
    benefit2: "Acceso a Cruceros NO Listados en Agencias Públicas",
    benefit3: "Programa de Recompensas VIP: Cada Dólar se Multiplica",
    benefit4: "Eventos Privados y Networking Internacional con Miembros VIP",
    benefit5: "Servicio de Conserjería Personalizado 24/7",
    benefit6: "Oportunidades de Ganancias por Recomendar la Membresía",
    
    socialProofText: "Más de 1 Millón de Viajeros Elite Ya Disfrutan Esta Membresía Privada.",
    
    exclusivityTitle: "ACCESO ULTRA-EXCLUSIVO",
    exclusivityText: "Esto NO está abierto al público. Solo por invitación y con cupos MUY limitados.",
    limitedSpots: "Pocos cupos VIP disponibles este mes.",
    
    howItWorksTitle: "Cómo Funciona",
    step1: "Solicita Tu Invitación VIP",
    step2: "Activa Tu Membresía Exclusiva",
    step3: "Comienza a Viajar Como Un Miembro Elite",
    
    faqTitle: "Preguntas Frecuentes",
    faq1Question: "¿Qué es exactamente la Membresía VIP?",
    faq1Answer: "La Membresía VIP es un programa exclusivo solo por invitación que brinda acceso a cruceros de lujo con descuentos significativos, recompensas premium y eventos privados de networking con viajeros elite de todo el mundo.",
    faq2Question: "¿Cómo ahorro en cruceros de lujo?",
    faq2Answer: "Los miembros disfrutan hasta 50% de ahorro en cruceros de lujo a través de nuestra plataforma privada de reservas, además de acceso a ofertas exclusivas no disponibles para el público general.",
    faq3Question: "¿Está abierto para todos?",
    faq3Answer: "No, esto es estrictamente solo por invitación. Mantenemos la exclusividad seleccionando cuidadosamente miembros que se alineen con nuestros valores de comunidad de viajes de lujo.",
    faq4Question: "¿Realmente puedo ganar dinero recomendando?",
    faq4Answer: "Sí, nuestros miembros VIP pueden ganar recompensas sustanciales presentando otros individuos calificados a la membresía. Es uno de nuestros beneficios más valorados.",
    faq5Question: "¿Mi dinero está seguro con inCruises?",
    faq5Answer: "Absolutamente. inCruises es una empresa de viajes completamente licenciada y regulada con millones de miembros satisfechos en todo el mundo. Tu inversión está protegida y segura.",
    faq6Question: "¿Qué tan pronto puedo comenzar a viajar después de unirme?",
    faq6Answer: "Una vez que tu membresía VIP está activada, puedes comenzar a reservar ofertas exclusivas de cruceros inmediatamente. La mayoría de los miembros reservan su primer crucero de lujo dentro de 30 días.",
    
    finalCtaTitle: "Solicita Tu Invitación VIP Hoy y Únete a La Elite de Viajeros.",
    finalCtaButton: "Quiero Mi Invitación VIP",
    
    languageName: "Español"
  },
  
  fr: {
    heroTitle: "Voyagez Comme L'Elite. Payez Comme Un Membre Privilégié.",
    heroSubtitle: "Accédez à l'adhésion privée qui vous permet de profiter de croisières de luxe pour une fraction du prix réel.",
    vipInvitationOnly: "INVITATION VIP UNIQUEMENT",
    ctaRequestInvitation: "Demandez Votre Invitation VIP Maintenant",
    
    benefitsTitle: "Privilèges VIP Exclusifs",
    benefit1: "Économisez jusqu'à 50% sur les Croisières de Luxe",
    benefit2: "Accès aux Croisières NON Répertoriées dans les Agences Publiques",
    benefit3: "Programme de Récompenses VIP: Chaque Dollar se Multiplie",
    benefit4: "Événements Privés et Réseautage International avec les Membres VIP",
    benefit5: "Service de Conciergerie Personnalisé 24/7",
    benefit6: "Opportunités de Gains en Recommandant l'Adhésion",
    
    socialProofText: "Plus d'1 Million de Voyageurs Elite Profitent Déjà de Cette Adhésion Privée.",
    
    exclusivityTitle: "ACCÈS ULTRA-EXCLUSIF",
    exclusivityText: "Ce n'est PAS ouvert au public. Uniquement sur invitation et avec des places TRÈS limitées.",
    limitedSpots: "Peu de places VIP disponibles ce mois-ci.",
    
    howItWorksTitle: "Comment Ça Marche",
    step1: "Demandez Votre Invitation VIP",
    step2: "Activez Votre Adhésion Exclusive",
    step3: "Commencez à Voyager Comme Un Membre Elite",
    
    faqTitle: "Questions Fréquemment Posées",
    faq1Question: "Qu'est-ce que l'Adhésion VIP exactement?",
    faq1Answer: "L'Adhésion VIP est un programme exclusif uniquement sur invitation qui donne accès à des croisières de luxe avec des réductions significatives, des récompenses premium et des événements de réseautage privés avec des voyageurs elite du monde entier.",
    faq2Question: "Comment puis-je économiser sur les croisières de luxe?",
    faq2Answer: "Les membres bénéficient d'économies jusqu'à 50% sur les croisières de luxe grâce à notre plateforme de réservation privée, plus l'accès à des offres exclusives non disponibles au grand public.",
    faq3Question: "Est-ce ouvert à tout le monde?",
    faq3Answer: "Non, c'est strictement sur invitation uniquement. Nous maintenons l'exclusivité en sélectionnant soigneusement les membres qui s'alignent avec nos valeurs de communauté de voyage de luxe.",
    faq4Question: "Puis-je vraiment gagner de l'argent en recommandant?",
    faq4Answer: "Oui, nos membres VIP peuvent gagner des récompenses substantielles en présentant d'autres individus qualifiés à l'adhésion. C'est l'un de nos avantages les plus appréciés.",
    faq5Question: "Mon argent est-il en sécurité avec inCruises?",
    faq5Answer: "Absolument. inCruises est une entreprise de voyage entièrement licenciée et réglementée avec des millions de membres satisfaits dans le monde entier. Votre investissement est protégé et sécurisé.",
    faq6Question: "Dans combien de temps puis-je commencer à voyager après avoir adhéré?",
    faq6Answer: "Une fois votre adhésion VIP activée, vous pouvez commencer à réserver des offres de croisières exclusives immédiatement. La plupart des membres réservent leur première croisière de luxe dans les 30 jours.",
    
    finalCtaTitle: "Demandez Votre Invitation VIP Aujourd'hui et Rejoignez L'Elite des Voyageurs.",
    finalCtaButton: "Je Veux Mon Invitation VIP",
    
    languageName: "Français"
  },
  
  pt: {
    heroTitle: "Viaje Como A Elite. Pague Como Um Membro Privilegiado.",
    heroSubtitle: "Acesse a associação privada que permite desfrutar de cruzeiros de luxo por uma fração do preço real.",
    vipInvitationOnly: "APENAS POR CONVITE VIP",
    ctaRequestInvitation: "Solicite Seu Convite VIP Agora",
    
    benefitsTitle: "Privilégios VIP Exclusivos",
    benefit1: "Economize até 50% em Cruzeiros de Luxo",
    benefit2: "Acesso a Cruzeiros NÃO Listados em Agências Públicas",
    benefit3: "Programa de Recompensas VIP: Cada Dólar se Multiplica",
    benefit4: "Eventos Privados e Networking Internacional com Membros VIP",
    benefit5: "Serviço de Concierge Personalizado 24/7",
    benefit6: "Oportunidades de Ganhos por Recomendar a Associação",
    
    socialProofText: "Mais de 1 Milhão de Viajantes Elite Já Desfrutam Desta Associação Privada.",
    
    exclusivityTitle: "ACESSO ULTRA-EXCLUSIVO",
    exclusivityText: "Isso NÃO está aberto ao público. Apenas por convite e com vagas MUITO limitadas.",
    limitedSpots: "Poucas vagas VIP disponíveis este mês.",
    
    howItWorksTitle: "Como Funciona",
    step1: "Solicite Seu Convite VIP",
    step2: "Ative Sua Associação Exclusiva",
    step3: "Comece a Viajar Como Um Membro Elite",
    
    faqTitle: "Perguntas Frequentes",
    faq1Question: "O que é exatamente a Associação VIP?",
    faq1Answer: "A Associação VIP é um programa exclusivo apenas por convite que fornece acesso a cruzeiros de luxo com descontos significativos, recompensas premium e eventos privados de networking com viajantes elite mundialmente.",
    faq2Question: "Como economizo em cruzeiros de luxo?",
    faq2Answer: "Membros desfrutam de até 50% de economia em cruzeiros de luxo através de nossa plataforma privada de reservas, além de acesso a ofertas exclusivas não disponíveis ao público geral.",
    faq3Question: "Está aberto para todos?",
    faq3Answer: "Não, isso é estritamente apenas por convite. Mantemos exclusividade selecionando cuidadosamente membros que se alinham com nossos valores de comunidade de viagem de luxo.",
    faq4Question: "Posso realmente ganhar dinheiro recomendando?",
    faq4Answer: "Sim, nossos membros VIP podem ganhar recompensas substanciais apresentando outros indivíduos qualificados à associação. É um dos nossos benefícios mais valorizados.",
    faq5Question: "Meu dinheiro está seguro com inCruises?",
    faq5Answer: "Absolutamente. inCruises é uma empresa de viagem totalmente licenciada e regulamentada com milhões de membros satisfeitos mundialmente. Seu investimento está protegido e seguro.",
    faq6Question: "Quão cedo posso começar a viajar após me juntar?",
    faq6Answer: "Uma vez que sua associação VIP está ativada, você pode começar a reservar ofertas exclusivas de cruzeiros imediatamente. A maioria dos membros reserva seu primeiro cruzeiro de luxo dentro de 30 dias.",
    
    finalCtaTitle: "Solicite Seu Convite VIP Hoje e Junte-se à Elite dos Viajantes.",
    finalCtaButton: "Quero Meu Convite VIP",
    
    languageName: "Português"
  },
  
  it: {
    heroTitle: "Viaggia Come L'Elite. Paga Come Un Membro Privilegiato.",
    heroSubtitle: "Accedi all'appartenenza privata che ti permette di godere di crociere di lusso per una frazione del prezzo reale.",
    vipInvitationOnly: "SOLO SU INVITO VIP",
    ctaRequestInvitation: "Richiedi Il Tuo Invito VIP Ora",
    
    benefitsTitle: "Privilegi VIP Esclusivi",
    benefit1: "Risparmia fino al 50% su Crociere di Lusso",
    benefit2: "Accesso a Crociere NON Elencate nelle Agenzie Pubbliche",
    benefit3: "Programma Premi VIP: Ogni Dollaro si Moltiplica",
    benefit4: "Eventi Privati e Networking Internazionale con Membri VIP",
    benefit5: "Servizio Concierge Personalizzato 24/7",
    benefit6: "Opportunità di Guadagno Raccomandando l'Appartenenza",
    
    socialProofText: "Oltre 1 Milione di Viaggiatori Elite Già Godono di Questa Appartenenza Privata.",
    
    exclusivityTitle: "ACCESSO ULTRA-ESCLUSIVO",
    exclusivityText: "Questo NON è aperto al pubblico. Solo su invito e con posti MOLTO limitati.",
    limitedSpots: "Pochi posti VIP disponibili questo mese.",
    
    howItWorksTitle: "Come Funziona",
    step1: "Richiedi Il Tuo Invito VIP",
    step2: "Attiva La Tua Appartenenza Esclusiva",
    step3: "Inizia a Viaggiare Come Un Membro Elite",
    
    faqTitle: "Domande Frequenti",
    faq1Question: "Cos'è esattamente l'Appartenenza VIP?",
    faq1Answer: "L'Appartenenza VIP è un programma esclusivo solo su invito che fornisce accesso a crociere di lusso con sconti significativi, premi premium ed eventi privati di networking con viaggiatori elite mondiali.",
    faq2Question: "Come risparmio su crociere di lusso?",
    faq2Answer: "I membri godono di risparmi fino al 50% su crociere di lusso attraverso la nostra piattaforma privata di prenotazioni, più accesso a offerte esclusive non disponibili al pubblico generale.",
    faq3Question: "È aperto a tutti?",
    faq3Answer: "No, questo è strettamente solo su invito. Manteniamo esclusività selezionando attentamente membri che si allineano con i nostri valori di comunità di viaggio di lusso.",
    faq4Question: "Posso davvero guadagnare denaro raccomandando?",
    faq4Answer: "Sì, i nostri membri VIP possono guadagnare ricompense sostanziali presentando altri individui qualificati all'appartenenza. È uno dei nostri benefici più apprezzati.",
    faq5Question: "I miei soldi sono sicuri con inCruises?",
    faq5Answer: "Assolutamente. inCruises è un'azienda di viaggi completamente licenziata e regolamentata con milioni di membri soddisfatti mondialmente. Il tuo investimento è protetto e sicuro.",
    faq6Question: "Quanto presto posso iniziare a viaggiare dopo l'adesione?",
    faq6Answer: "Una volta che la tua appartenenza VIP è attivata, puoi iniziare a prenotare offerte esclusive di crociere immediatamente. La maggior parte dei membri prenota la loro prima crociera di lusso entro 30 giorni.",
    
    finalCtaTitle: "Richiedi Il Tuo Invito VIP Oggi e Unisciti All'Elite dei Viaggiatori.",
    finalCtaButton: "Voglio Il Mio Invito VIP",
    
    languageName: "Italiano"
  },
  
  de: {
    heroTitle: "Reisen Sie Wie Die Elite. Zahlen Sie Wie Ein Privilegiertes Mitglied.",
    heroSubtitle: "Zugang zur privaten Mitgliedschaft, die es Ihnen ermöglicht, Luxuskreuzfahrten für einen Bruchteil des echten Preises zu genießen.",
    vipInvitationOnly: "NUR AUF VIP-EINLADUNG",
    ctaRequestInvitation: "Fordern Sie Ihre VIP-Einladung Jetzt An",
    
    benefitsTitle: "Exklusive VIP-Privilegien",
    benefit1: "Sparen Sie bis zu 50% bei Luxuskreuzfahrten",
    benefit2: "Zugang zu Kreuzfahrten NICHT in öffentlichen Agenturen gelistet",
    benefit3: "VIP-Belohnungsprogramm: Jeder Dollar vervielfacht sich",
    benefit4: "Private Veranstaltungen & Internationales Networking mit VIP-Mitgliedern",
    benefit5: "Personalisierter 24/7 Concierge-Service",
    benefit6: "Verdienstmöglichkeiten durch Empfehlung der Mitgliedschaft",
    
    socialProofText: "Über 1 Million Elite-Reisende Genießen Bereits Diese Private Mitgliedschaft.",
    
    exclusivityTitle: "ULTRA-EXKLUSIVER ZUGANG",
    exclusivityText: "Dies ist NICHT öffentlich zugänglich. Nur auf Einladung und SEHR begrenzte Plätze.",
    limitedSpots: "Wenige VIP-Plätze diesen Monat verfügbar.",
    
    howItWorksTitle: "Wie Es Funktioniert",
    step1: "Fordern Sie Ihre VIP-Einladung An",
    step2: "Aktivieren Sie Ihre Exklusive Mitgliedschaft",
    step3: "Beginnen Sie Als Elite-Mitglied Zu Reisen",
    
    faqTitle: "Häufig Gestellte Fragen",
    faq1Question: "Was genau ist die VIP-Mitgliedschaft?",
    faq1Answer: "Die VIP-Mitgliedschaft ist ein exklusives Nur-Einladung-Programm, das Zugang zu Luxuskreuzfahrten mit erheblichen Rabatten, Premium-Belohnungen und privaten Networking-Veranstaltungen mit Elite-Reisenden weltweit bietet.",
    faq2Question: "Wie spare ich bei Luxuskreuzfahrten?",
    faq2Answer: "Mitglieder genießen bis zu 50% Ersparnis bei Luxuskreuzfahrten über unsere private Buchungsplattform, plus Zugang zu exklusiven Angeboten, die der Öffentlichkeit nicht zugänglich sind.",
    faq3Question: "Ist dies für jeden zugänglich?",
    faq3Answer: "Nein, dies ist strikt nur auf Einladung. Wir wahren Exklusivität durch sorgfältige Auswahl von Mitgliedern, die sich mit unseren Luxusreise-Community-Werten ausrichten.",
    faq4Question: "Kann ich wirklich Geld durch Empfehlungen verdienen?",
    faq4Answer: "Ja, unsere VIP-Mitglieder können erhebliche Belohnungen verdienen, indem sie andere qualifizierte Personen zur Mitgliedschaft vorstellen. Es ist einer unserer geschätztesten Vorteile.",
    faq5Question: "Ist mein Geld bei inCruises sicher?",
    faq5Answer: "Absolut. inCruises ist ein vollständig lizenziertes und reguliertes Reiseunternehmen mit Millionen zufriedener Mitglieder weltweit. Ihre Investition ist geschützt und sicher.",
    faq6Question: "Wie schnell kann ich nach dem Beitritt reisen?",
    faq6Answer: "Sobald Ihre VIP-Mitgliedschaft aktiviert ist, können Sie sofort exklusive Kreuzfahrt-Angebote buchen. Die meisten Mitglieder buchen ihre erste Luxuskreuzfahrt innerhalb von 30 Tagen.",
    
    finalCtaTitle: "Fordern Sie Ihre VIP-Einladung Heute An und Treten Sie Der Elite Der Reisenden Bei.",
    finalCtaButton: "Ich Möchte Meine VIP-Einladung",
    
    languageName: "Deutsch"
  },
  
  ar: {
    heroTitle: "سافر مثل النخبة. ادفع كعضو مميز.",
    heroSubtitle: "احصل على العضوية الخاصة التي تتيح لك الاستمتاع برحلات الكروز الفاخرة بجزء من السعر الحقيقي.",
    vipInvitationOnly: "بدعوة في آي بي فقط",
    ctaRequestInvitation: "اطلب دعوتك في آي بي الآن",
    
    benefitsTitle: "امتيازات في آي بي الحصرية",
    benefit1: "وفر حتى 50% على رحلات الكروز الفاخرة",
    benefit2: "الوصول إلى رحلات الكروز غير المدرجة في الوكالات العامة",
    benefit3: "برنامج مكافآت في آي بي: كل دولار يتضاعف",
    benefit4: "فعاليات خاصة وشبكات دولية مع أعضاء في آي بي",
    benefit5: "خدمة كونسيرج شخصية على مدار 24/7",
    benefit6: "فرص الربح من خلال ترشيح العضوية",
    
    socialProofText: "أكثر من مليون مسافر نخبة يستمتعون بالفعل بهذه العضوية الخاصة.",
    
    exclusivityTitle: "وصول فائق الحصرية",
    exclusivityText: "هذا ليس مفتوحاً للجمهور. بدعوة فقط ومقاعد محدودة جداً.",
    limitedSpots: "مقاعد في آي بي قليلة متاحة هذا الشهر.",
    
    howItWorksTitle: "كيف يعمل",
    step1: "اطلب دعوتك في آي بي",
    step2: "فعل عضويتك الحصرية",
    step3: "ابدأ السفر كعضو نخبة",
    
    faqTitle: "الأسئلة الشائعة",
    faq1Question: "ما هي بالضبط العضوية في آي بي؟",
    faq1Answer: "العضوية في آي بي هي برنامج حصري بدعوة فقط يوفر الوصول إلى رحلات الكروز الفاخرة بخصومات كبيرة، ومكافآت متميزة، وفعاليات شبكات خاصة مع مسافرين نخبة عالمياً.",
    faq2Question: "كيف أوفر في رحلات الكروز الفاخرة؟",
    faq2Answer: "يستمتع الأعضاء بتوفير يصل إلى 50% في رحلات الكروز الفاخرة من خلال منصة الحجز الخاصة بنا، بالإضافة إلى الوصول لعروض حصرية غير متاحة للجمهور العام.",
    faq3Question: "هل هذا مفتوح للجميع؟",
    faq3Answer: "لا، هذا بدعوة فقط بشكل صارم. نحافظ على الحصرية باختيار الأعضاء بعناية الذين يتماشون مع قيم مجتمع السفر الفاخر لدينا.",
    faq4Question: "هل يمكنني حقاً كسب المال من خلال الترشيح؟",
    faq4Answer: "نعم، يمكن لأعضاء في آي بي كسب مكافآت كبيرة من خلال تقديم أفراد مؤهلين آخرين للعضوية. إنها إحدى أكثر مزايانا تقديراً.",
    faq5Question: "هل أموالي آمنة مع إن كروزز؟",
    faq5Answer: "بالطبع. إن كروزز هي شركة سفر مرخصة ومنظمة بالكامل مع ملايين الأعضاء الراضين عالمياً. استثمارك محمي وآمن.",
    faq6Question: "ما مدى سرعة بدء السفر بعد الانضمام؟",
    faq6Answer: "بمجرد تفعيل عضويتك في آي بي، يمكنك البدء في حجز عروض الكروز الحصرية فوراً. معظم الأعضاء يحجزون رحلة الكروز الفاخرة الأولى خلال 30 يوماً.",
    
    finalCtaTitle: "اطلب دعوتك في آي بي اليوم وانضم إلى نخبة المسافرين.",
    finalCtaButton: "أريد دعوتي في آي بي",
    
    languageName: "العربية"
  }
};

export const languageFlags: Record<Language, string> = {
  en: "🇺🇸",
  es: "🇪🇸", 
  fr: "🇫🇷",
  pt: "🇵🇹",
  it: "🇮🇹",
  de: "🇩🇪",
  ar: "🇸🇦"
};