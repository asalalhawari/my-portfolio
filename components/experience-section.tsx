"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Calendar, MapPin, Building2, Clock, ChevronRight } from "lucide-react"

const experiences = [
  {
    title: "IT Developer",
    titleAr: "مطور تقنية المعلومات",
    company: "Kayan Healthcare Technologies",
    companyAr: "كيان لتقنيات الرعاية الصحية",
    period: "Sep 2025 - Present",
    periodAr: "سبتمبر 2025 - حالياً",
    duration: "4 months",
    durationAr: "4 أشهر",
    location: "Dubai, UAE",
    locationAr: "دبي، الإمارات",
    workType: "Remote",
    workTypeAr: "عن بُعد",
    description:
      "Developing healthcare technology solutions using React.js, building scalable and maintainable web applications.",
    descriptionAr: "تطوير حلول تقنية للرعاية الصحية باستخدام React.js، وبناء تطبيقات ويب قابلة للتطوير والصيانة.",
    tech: ["React.js", "TypeScript", "Healthcare Tech"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    current: true,
  },
  {
    title: "Full Stack Developer",
    titleAr: "مطورة ويب متكاملة",
    company: "JoLife for Information Technology",
    companyAr: "جولايف لتقنية المعلومات",
    period: "Nov 2024 - Aug 2025",
    periodAr: "نوفمبر 2024 - أغسطس 2025",
    duration: "10 months",
    durationAr: "10 أشهر",
    location: "Jordan",
    locationAr: "الأردن",
    workType: "Remote",
    workTypeAr: "عن بُعد",
    description:
      "Full-stack development with focus on front-end development, quality assurance, and delivering high-quality web applications.",
    descriptionAr:
      "تطوير ويب متكامل مع التركيز على تطوير الواجهات الأمامية وضمان الجودة وتقديم تطبيقات ويب عالية الجودة.",
    tech: ["Front-End Development", "Quality Assurance", "Full Stack"],
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    current: false,
  },
  {
    title: "Full-Stack Developer Trainee",
    titleAr: "متدربة تطوير ويب متكامل",
    company: "Orange Coding Academy",
    companyAr: "أكاديمية أورانج للبرمجة",
    period: "May 2024 - Nov 2024",
    periodAr: "مايو 2024 - نوفمبر 2024",
    duration: "7 months",
    durationAr: "7 أشهر",
    location: "Aqaba, Jordan",
    locationAr: "العقبة، الأردن",
    workType: "On-site",
    workTypeAr: "حضوري",
    description:
      "Intensive full-stack development training program covering modern web technologies, best practices, and real-world project development.",
    descriptionAr:
      "برنامج تدريب مكثف على تطوير الويب المتكامل يغطي تقنيات الويب الحديثة وأفضل الممارسات وتطوير المشاريع الحقيقية.",
    tech: ["React", "Laravel", "Node.js", "MySQL"],
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
    current: false,
  },
]

export function ExperienceSection() {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4"
          >
            {language === "ar" ? "مسيرتي المهنية" : "Career Journey"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{t("experienceTitle")}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("experienceDesc")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className={`relative overflow-hidden rounded-3xl ${exp.bgColor} p-1`}>
                <div className="bg-white rounded-3xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg`}>
                        <Building2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl md:text-2xl font-bold text-slate-800">
                            {language === "ar" ? exp.titleAr : exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-600 rounded-full text-xs font-semibold animate-pulse">
                              {language === "ar" ? "حالياً" : "Current"}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 font-medium">{language === "ar" ? exp.companyAr : exp.company}</p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-slate-600">
                        <Calendar className="w-4 h-4" />
                        <span>{language === "ar" ? exp.periodAr : exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 rounded-full text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>{language === "ar" ? exp.durationAr : exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location & Work Type */}
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <MapPin className="w-4 h-4" />
                      <span>{language === "ar" ? exp.locationAr : exp.location}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}
                    >
                      {language === "ar" ? exp.workTypeAr : exp.workType}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {language === "ar" ? exp.descriptionAr : exp.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-600 transition-colors"
                      >
                        <ChevronRight className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
