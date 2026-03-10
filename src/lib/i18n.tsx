"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "tr";

const translations = {
  en: {
    nav: {
      services: "Services",
      ventures: "Ventures",
      contact: "Contact",
      cta: "Get in Touch",
    },
    hero: {
      badge: "Saints Technologies",
      h1_1: "Engineering",
      h1_2: "Intelligent",
      h1_3: "Solutions.",
      sub: "We build custom AI, scalable data systems, and industrial software for companies that refuse to settle.",
      cta1: "Start a Project",
      cta2: "See what we do",
      trusted: "Trusted by forward-thinking companies worldwide",
    },
    stats: {
      items: [
        { value: "50+", label: "Projects Delivered" },
        { value: "99.9%", label: "Uptime SLA" },
        { value: "3×", label: "Faster Delivery" },
        { value: "24h", label: "Response Time" },
      ],
    },
    marquee: {
      label: "Technologies We Work With",
    },
    services: {
      label: "Services",
      title: "What we build",
      desc: "We focus on a few things and do them exceptionally well.",
      items: [
        {
          title: "Custom AI & RAG",
          desc: "Enterprise-grade LLM implementations and retrieval-augmented generation pipelines tailored to your data.",
          details: ["Vector Database Integration", "LLM Fine-tuning & Optimization", "Enterprise Data Security", "Conversational AI Agents"],
        },
        {
          title: "B2B SaaS & ERP",
          desc: "Custom platforms that scale your business operations — from CRM to full ERP suites.",
          details: ["Multi-tenant Architecture", "Role-based Access Control", "Workflow Automation", "Real-time Dashboards"],
        },
        {
          title: "Full-Stack Development",
          desc: "End-to-end web and mobile solutions with pixel-perfect interfaces and robust architectures.",
          details: ["React / Next.js / React Native", "Cloud-native Deployment", "CI/CD Pipeline Setup", "Performance Optimization"],
        },
        {
          title: "Data Engineering",
          desc: "Scalable data pipelines, real-time analytics, and infrastructure that powers decisions.",
          details: ["ETL Pipeline Design", "Data Warehouse Architecture", "Real-time Stream Processing", "BI & Visualization Layer"],
        },
      ],
    },
    process: {
      label: "How We Work",
      title: "From idea to production in weeks, not months.",
      steps: [
        {
          num: "01",
          title: "Discovery & Strategy",
          desc: "Deep dive into your business needs, technical landscape, and growth objectives. We define scope, success metrics, and a clear roadmap.",
        },
        {
          num: "02",
          title: "Architecture & Design",
          desc: "Blueprint the solution with scalable, future-proof architecture. Every system is designed for performance, security, and maintainability.",
        },
        {
          num: "03",
          title: "Agile Development",
          desc: "Two-week sprints with weekly demos and continuous feedback loops. You see progress in real-time, not after months of silence.",
        },
        {
          num: "04",
          title: "Launch & Scale",
          desc: "Production deployment with monitoring, alerting, and optimization. We stay on as your technical partner to scale what works.",
        },
      ],
    },
    whyUs: {
      label: "Why Saints",
      title: "Built different. Engineered to last.",
      items: [
        { title: "End-to-End Ownership", desc: "We don't just write code. We architect, build, deploy, monitor, and scale — full lifecycle ownership." },
        { title: "Battle-Tested Stack", desc: "Enterprise-grade infrastructure and security practices. No shortcuts, no technical debt." },
        { title: "Radical Transparency", desc: "Weekly demos, shared repositories, real-time dashboards. You always know exactly where your project stands." },
        { title: "Senior-Only Team", desc: "Every engineer on your project has 5+ years of production experience. No juniors learning on your dime." },
        { title: "Security-First", desc: "Encrypted data at rest and in transit, role-based access controls, audit logging — built in from day one." },
        { title: "Long-Term Partnership", desc: "We don't disappear after launch. Ongoing support, optimization, and evolution as your business grows." },
      ],
    },
    ctaBanner: {
      label: "Ready?",
      title: "Let's build something extraordinary together.",
      desc: "Book a free discovery call and get a tailored technical roadmap for your project within 48 hours.",
      cta: "Schedule a Call",
      note: "No commitment required",
    },
    ventures: {
      label: "Ventures & Partnerships",
      title: "Let's build the future together",
      desc: "Have a vision but lack the technical power? We partner with ambitious founders to co-build transformative technology.",
      cta: "Propose a venture",
      items: [
        {
          num: "01",
          title: "Concept to Product",
          desc: "We transform raw ideas into market-ready products with full technical execution and strategic guidance.",
        },
        {
          num: "02",
          title: "Equity Partnerships",
          desc: "Strategic co-founding model where we invest our engineering capabilities in exchange for shared ownership.",
        },
        {
          num: "03",
          title: "Scale Together",
          desc: "Long-term partnerships built on shared success. Your growth is our growth — aligned incentives.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's talk",
      desc: "Tell us what you're building. We respond within 24 hours with a tailored plan.",
      checks: [
        "Discovery call within 24h",
        "Detailed scope & timeline",
        "Transparent, fixed pricing",
      ],
      form: {
        name: "Name",
        namePh: "Your name",
        company: "Company",
        companyPh: "Company name",
        email: "Email",
        emailPh: "your@email.com",
        phone: "Phone (optional)",
        phonePh: "Phone number",
        type: "Project Type",
        typePh: "Select type",
        budget: "Budget",
        budgetPh: "e.g. $50,000",
        details: "Project Details",
        detailsPh: "Describe what you're building...",
        submit: "Send Message",
        sending: "Sending...",
        successTitle: "Message received",
        successDesc: "Our team will review your project and respond within 24 hours.",
        errorTitle: "Something went wrong",
        errorDesc: "Please try again or email us directly at info@saintstechnologies.com",
      },
      projectTypes: [
        "Custom AI / RAG System",
        "B2B SaaS / ERP Platform",
        "Full-Stack Web Application",
        "Mobile Application",
        "Data Engineering / Analytics",
        "Venture Partnership",
        "Other",
      ],
    },
    contactPage: {
      back: "Back to Home",
      title: "Get in touch",
      subtitle: "Tell us about your project, idea, or question. We'll get back to you within 24 hours.",
      reasonLabel: "What brings you here?",
      reasons: [
        "New Project",
        "Technical Consultation",
        "Venture / Partnership",
        "Ongoing Support",
        "Career Opportunity",
        "General Inquiry",
      ],
      form: {
        name: "Full Name",
        namePh: "Your full name",
        email: "Email Address",
        emailPh: "your@email.com",
        company: "Company (optional)",
        companyPh: "Company name",
        phone: "Phone (optional)",
        phonePh: "Phone number",
        budget: "Estimated Budget (optional)",
        budgetPh: "e.g. $50,000",
        message: "Your Message",
        messagePh: "Tell us about your project, idea, or how we can help...",
        submit: "Send Message",
        sending: "Sending...",
        successTitle: "Message sent successfully!",
        successDesc: "We've received your message and will respond within 24 hours.",
        successBack: "Back to Home",
        errorTitle: "Something went wrong",
        errorDesc: "Please try again or email us directly at info@saintstechnologies.com",
        retry: "Try Again",
      },
      info: {
        emailLabel: "Email Us",
        emailValue: "info@saintstechnologies.com",
        responseLabel: "Response Time",
        responseValue: "Within 24 hours",
        locationLabel: "Based In",
        locationValue: "Izmir, Turkey",
      },
    },
    footer: {
      desc: "Engineering intelligent solutions for companies that refuse to settle.",
      navigate: "Navigate",
      connect: "Connect",
    },
  },
  tr: {
    nav: {
      services: "Hizmetler",
      ventures: "Girişimler",
      contact: "İletişim",
      cta: "İletişime Geç",
    },
    hero: {
      badge: "Saints Technologies",
      h1_1: "Akıllı",
      h1_2: "Çözümler",
      h1_3: "Üretiyoruz.",
      sub: "Sıradan olmayı reddeden şirketler için özel yapay zeka, ölçeklenebilir veri sistemleri ve endüstriyel yazılımlar geliştiriyoruz.",
      cta1: "Projeye Başla",
      cta2: "Neler yapıyoruz",
      trusted: "Dünya çapında ileri görüşlü şirketlerin güvendiği teknoloji ortağı",
    },
    stats: {
      items: [
        { value: "50+", label: "Teslim Edilen Proje" },
        { value: "99.9%", label: "Çalışma Süresi SLA" },
        { value: "3×", label: "Daha Hızlı Teslimat" },
        { value: "24s", label: "Yanıt Süresi" },
      ],
    },
    marquee: {
      label: "Çalıştığımız Teknolojiler",
    },
    services: {
      label: "Hizmetler",
      title: "Neler inşa ediyoruz",
      desc: "Birkaç konuya odaklanıyor ve o konularda olağanüstü işler çıkarıyoruz.",
      items: [
        {
          title: "Özel AI & RAG",
          desc: "Verilerinize özel kurumsal düzeyde LLM implementasyonları ve bilgi erişim sistemleri.",
          details: ["Vektör Veritabanı Entegrasyonu", "LLM Fine-tuning & Optimizasyon", "Kurumsal Veri Güvenliği", "Konuşmacı AI Ajanları"],
        },
        {
          title: "B2B SaaS & ERP",
          desc: "İş operasyonlarınızı ölçeklendiren özel platformlar — CRM'den tam ERP paketlerine.",
          details: ["Çok Kiracılı Mimari", "Rol Tabanlı Erişim Kontrolü", "İş Akışı Otomasyonu", "Gerçek Zamanlı Panolar"],
        },
        {
          title: "Full-Stack Geliştirme",
          desc: "Piksel hassasiyetinde arayüzler ve sağlam mimarilerle uçtan uca web ve mobil çözümler.",
          details: ["React / Next.js / React Native", "Bulut-native Dağıtım", "CI/CD Pipeline Kurulumu", "Performans Optimizasyonu"],
        },
        {
          title: "Veri Mühendisliği",
          desc: "Ölçeklenebilir veri hattı, gerçek zamanlı analitik ve stratejik kararları güçlendiren altyapı.",
          details: ["ETL Pipeline Tasarımı", "Veri Ambarı Mimarisi", "Gerçek Zamanlı Akış İşleme", "BI & Görselleştirme Katmanı"],
        },
      ],
    },
    process: {
      label: "Nasıl Çalışıyoruz",
      title: "Fikirden üretime aylar değil, haftalar içinde.",
      steps: [
        {
          num: "01",
          title: "Keşif & Strateji",
          desc: "İş ihtiyaçlarınıza, teknik yapınıza ve büyüme hedeflerinize derinlemesine dalıyoruz. Kapsam, başarı metrikleri ve net bir yol haritası belirliyoruz.",
        },
        {
          num: "02",
          title: "Mimari & Tasarım",
          desc: "Ölçeklenebilir, geleceğe dönük mimariyle çözümü planlıyoruz. Her sistem performans, güvenlik ve sürdürülebilirlik için tasarlanır.",
        },
        {
          num: "03",
          title: "Çevik Geliştirme",
          desc: "Haftalık demolar ve sürekli geri bildirim döngüleriyle iki haftalık sprintler. İlerlemeyi aylarca sessizlikten sonra değil, gerçek zamanlı görürsünüz.",
        },
        {
          num: "04",
          title: "Lansman & Ölçekleme",
          desc: "İzleme, uyarı ve optimizasyon ile üretim dağıtımı. İşe yarayanı ölçeklendirmek için teknik ortağınız olarak kalıyoruz.",
        },
      ],
    },
    whyUs: {
      label: "Neden Saints",
      title: "Farklı inşa ediyoruz. Kalıcı olsun diye.",
      items: [
        { title: "Uçtan Uca Sahiplik", desc: "Sadece kod yazmıyoruz. Mimari tasarım, geliştirme, dağıtım, izleme ve ölçekleme — tam yaşam döngüsü." },
        { title: "Savaşta Test Edilmiş Yığın", desc: "Kurumsal düzeyde altyapı ve güvenlik pratikleri. Kestirme yok, teknik borç yok." },
        { title: "Radikal Şeffaflık", desc: "Haftalık demolar, paylaşılan repolar, gerçek zamanlı panolar. Projenizin nerede olduğunu her zaman bilirsiniz." },
        { title: "Sadece Kıdemli Ekip", desc: "Projenizde çalışan her mühendis 5+ yıl üretim deneyimine sahip. Sizin paranızla öğrenen junior yok." },
        { title: "Güvenlik Öncelikli", desc: "Durağan ve aktarım halinde şifreli veri, rol tabanlı erişim kontrolü, denetim günlükleri — birinci günden yerleşik." },
        { title: "Uzun Vadeli Ortaklık", desc: "Lansmandan sonra kaybolmuyoruz. İşletmeniz büyüdükçe sürekli destek, optimizasyon ve evrim." },
      ],
    },
    ctaBanner: {
      label: "Hazır mısınız?",
      title: "Birlikte olağanüstü bir şey inşa edelim.",
      desc: "Ücretsiz keşif görüşmesi ayırtın ve 48 saat içinde projenize özel teknik yol haritası alın.",
      cta: "Görüşme Planla",
      note: "Taahhüt gerektirmez",
    },
    ventures: {
      label: "Girişimler & Ortaklıklar",
      title: "Geleceği birlikte inşa edelim",
      desc: "Vizyonunuz var ama teknik güç eksik mi? Hırslı kurucularla dönüştürücü teknolojiyi birlikte inşa ediyoruz.",
      cta: "Girişim öner",
      items: [
        {
          num: "01",
          title: "Konseptten Ürüne",
          desc: "Ham fikirleri tam teknik uygulama ve stratejik rehberlikle pazara hazır ürünlere dönüştürüyoruz.",
        },
        {
          num: "02",
          title: "Hisse Ortaklıkları",
          desc: "Mühendislik yeteneklerimizi ortak mülkiyet karşılığında yatırdığımız stratejik kurucu ortaklık modeli.",
        },
        {
          num: "03",
          title: "Birlikte Büyü",
          desc: "Ortak başarı üzerine kurulu uzun vadeli ortaklıklar. Sizin büyümeniz bizim büyümemiz.",
        },
      ],
    },
    contact: {
      label: "İletişim",
      title: "Konuşalım",
      desc: "Ne inşa ettiğinizi anlatın. 24 saat içinde size özel bir planla dönüş yapıyoruz.",
      checks: [
        "24 saat içinde keşif görüşmesi",
        "Detaylı kapsam & zaman planı",
        "Şeffaf, sabit fiyatlandırma",
      ],
      form: {
        name: "İsim",
        namePh: "Adınız",
        company: "Şirket",
        companyPh: "Şirket adı",
        email: "E-posta",
        emailPh: "ornek@email.com",
        phone: "Telefon (opsiyonel)",
        phonePh: "Telefon numarası",
        type: "Proje Tipi",
        typePh: "Tip seçin",
        budget: "Bütçe",
        budgetPh: "örn. ₺1.000.000",
        details: "Proje Detayları",
        detailsPh: "Ne inşa ettiğinizi anlatın...",
        submit: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        successTitle: "Mesaj alındı",
        successDesc: "Ekibimiz projenizi inceleyecek ve 24 saat içinde dönüş yapacak.",
        errorTitle: "Bir sorun oluştu",
        errorDesc: "Lütfen tekrar deneyin veya doğrudan info@saintstechnologies.com adresine yazın.",
      },
      projectTypes: [
        "Özel AI / RAG Sistemi",
        "B2B SaaS / ERP Platformu",
        "Full-Stack Web Uygulaması",
        "Mobil Uygulama",
        "Veri Mühendisliği / Analitik",
        "Girişim Ortaklığı",
        "Diğer",
      ],
    },
    contactPage: {
      back: "Ana Sayfaya Dön",
      title: "İletişime geçin",
      subtitle: "Projenizi, fikrinizi veya sorunuzu bize anlatın. 24 saat içinde size dönüş yapalım.",
      reasonLabel: "Sizi buraya ne getirdi?",
      reasons: [
        "Yeni Proje",
        "Teknik Danışmanlık",
        "Girişim / Ortaklık",
        "Sürekli Destek",
        "Kariyer Fırsatı",
        "Genel Bilgi",
      ],
      form: {
        name: "Ad Soyad",
        namePh: "Adınız ve soyadınız",
        email: "E-posta Adresi",
        emailPh: "ornek@email.com",
        company: "Şirket (opsiyonel)",
        companyPh: "Şirket adı",
        phone: "Telefon (opsiyonel)",
        phonePh: "Telefon numarası",
        budget: "Tahmini Bütçe (opsiyonel)",
        budgetPh: "örn. ₺1.000.000",
        message: "Mesajınız",
        messagePh: "Projenizi, fikrinizi veya nasıl yardımcı olabileceğimizi anlatın...",
        submit: "Mesaj Gönder",
        sending: "Gönderiliyor...",
        successTitle: "Mesajınız başarıyla gönderildi!",
        successDesc: "Mesajınızı aldık ve 24 saat içinde size dönüş yapacağız.",
        successBack: "Ana Sayfaya Dön",
        errorTitle: "Bir sorun oluştu",
        errorDesc: "Lütfen tekrar deneyin veya doğrudan info@saintstechnologies.com adresine yazın.",
        retry: "Tekrar Dene",
      },
      info: {
        emailLabel: "E-posta",
        emailValue: "info@saintstechnologies.com",
        responseLabel: "Yanıt Süresi",
        responseValue: "24 saat içinde",
        locationLabel: "Konum",
        locationValue: "İzmir, Türkiye",
      },
    },
    footer: {
      desc: "Sıradan olmayı reddeden şirketler için akıllı çözümler üretiyoruz.",
      navigate: "Gezinti",
      connect: "Bağlantı",
    },
  },
};

type Translations = (typeof translations)["en"];

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
