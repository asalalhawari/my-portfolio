"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    projects: "Projects",
    experience: "Experience",
    contact: "Contact",

    // Hero
    greeting: "Hello, I'm",
    name: "Asal AL-Hawari",
    title: "Full Stack Developer",
    subtitle: "I build exceptional digital experiences",
    description:
      "Passionate about creating beautiful, functional websites and applications. Specializing in modern web technologies to bring your ideas to life.",
    viewWork: "View My Work",
    downloadCV: "Download CV",

    // Stats
    yearsExp: "Years Experience",
    projectsCompleted: "Projects Completed",
    happyClients: "Happy Clients",

    // About
    aboutTitle: "About Me",
    aboutDesc: "I'm a dedicated Full Stack Developer with expertise in building modern web applications",
    aboutText1:
      "With a passion for clean code and intuitive design, I create web solutions that not only look great but also perform exceptionally. My journey in web development has equipped me with a diverse skill set spanning both frontend and backend technologies.",
    aboutText2:
      "I believe in continuous learning and staying up-to-date with the latest industry trends. Every project is an opportunity to push boundaries and deliver something truly remarkable.",

    // Services
    servicesTitle: "My Services",
    servicesDesc: "Comprehensive web development solutions tailored to your needs",
    service1Title: "Web Development",
    service1Desc: "Custom websites built with modern frameworks and best practices for optimal performance.",
    service2Title: "Frontend Development",
    service2Desc: "Beautiful, responsive user interfaces using React, Vue, and modern CSS frameworks.",
    service3Title: "Backend Development",
    service3Desc: "Robust server-side solutions with Laravel, PHP, Node.js, and secure databases.",
    service4Title: "UI/UX Design",
    service4Desc: "User-centered design that creates engaging and intuitive digital experiences.",

    // Projects
    projectsTitle: "My Projects",
    projectsDesc: "A selection of my recent work showcasing my skills and expertise",
    viewProject: "View Project",
    viewCode: "View Code",

    // Experience
    experienceTitle: "Experience",
    experienceDesc: "My professional journey and achievements",
    present: "Present",

    // Contact
    contactTitle: "Get In Touch",
    contactDesc: "Have a project in mind? Let's work together to bring it to life",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourMessage: "Your Message",
    sendMessage: "Send Message",

    // Footer
    footerText: "Designed & Built with ❤️",
    allRights: "All rights reserved",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "عني",
    services: "خدماتي",
    projects: "أعمالي",
    experience: "خبراتي",
    contact: "تواصل معي",

    // Hero
    greeting: "مرحباً، أنا",
    name: "أسل الهواري",
    title: "مطور ويب متكامل",
    subtitle: "أبني تجارب رقمية استثنائية",
    description: "شغوفة بإنشاء مواقع وتطبيقات جميلة وعملية. متخصصة في تقنيات الويب الحديثة لتحويل أفكارك إلى حقيقة.",
    viewWork: "شاهد أعمالي",
    downloadCV: "تحميل السيرة الذاتية",

    // Stats
    yearsExp: "سنوات خبرة",
    projectsCompleted: "مشروع منجز",
    happyClients: "عميل سعيد",

    // About
    aboutTitle: "عني",
    aboutDesc: "أنا مطورة ويب متكاملة متخصصة في بناء تطبيقات الويب الحديثة",
    aboutText1:
      "بشغف للكود النظيف والتصميم البديهي، أقوم بإنشاء حلول ويب لا تبدو رائعة فحسب، بل تعمل بشكل استثنائي أيضاً. رحلتي في تطوير الويب زودتني بمجموعة متنوعة من المهارات التي تشمل تقنيات الواجهة الأمامية والخلفية.",
    aboutText2: "أؤمن بالتعلم المستمر ومواكبة أحدث اتجاهات الصناعة. كل مشروع هو فرصة لدفع الحدود وتقديم شيء مميز حقاً.",

    // Services
    servicesTitle: "خدماتي",
    servicesDesc: "حلول تطوير ويب شاملة مصممة لتلبية احتياجاتك",
    service1Title: "تطوير المواقع",
    service1Desc: "مواقع مخصصة مبنية بأطر عمل حديثة وأفضل الممارسات للأداء الأمثل.",
    service2Title: "تطوير الواجهات",
    service2Desc: "واجهات مستخدم جميلة ومتجاوبة باستخدام React و Vue وأطر CSS الحديثة.",
    service3Title: "تطوير الخوادم",
    service3Desc: "حلول خادم قوية مع Laravel و PHP و Node.js وقواعد بيانات آمنة.",
    service4Title: "تصميم UI/UX",
    service4Desc: "تصميم يركز على المستخدم يخلق تجارب رقمية جذابة وبديهية.",

    // Projects
    projectsTitle: "أعمالي",
    projectsDesc: "مجموعة مختارة من أعمالي الأخيرة تعرض مهاراتي وخبراتي",
    viewProject: "عرض المشروع",
    viewCode: "عرض الكود",

    // Experience
    experienceTitle: "خبراتي",
    experienceDesc: "رحلتي المهنية وإنجازاتي",
    present: "حالياً",

    // Contact
    contactTitle: "تواصل معي",
    contactDesc: "لديك مشروع في ذهنك؟ دعنا نعمل معاً لتحقيقه",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    yourMessage: "رسالتك",
    sendMessage: "إرسال الرسالة",

    // Footer
    footerText: "صُمم وبُني بـ ❤️",
    allRights: "جميع الحقوق محفوظة",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const isRTL = language === "ar"

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language, isRTL])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
