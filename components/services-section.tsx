"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Globe, Layout, Server, Figma } from "lucide-react"

const services = [
  {
    icon: Globe,
    titleKey: "service1Title",
    descKey: "service1Desc",
    gradient: "from-emerald-500 to-teal-500",
    tech: ["WordPress", "Custom CMS", "SEO"],
  },
  {
    icon: Layout,
    titleKey: "service2Title",
    descKey: "service2Desc",
    gradient: "from-sky-500 to-blue-500",
    tech: ["React", "Vue", "Tailwind CSS"],
  },
  {
    icon: Server,
    titleKey: "service3Title",
    descKey: "service3Desc",
    gradient: "from-rose-500 to-pink-500",
    tech: ["Laravel", "Node.js", "PostgreSQL"],
  },
  {
    icon: Figma,
    titleKey: "service4Title",
    descKey: "service4Desc",
    gradient: "from-amber-500 to-orange-500",
    tech: ["Figma", "Adobe XD", "Prototyping"],
  },
]

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("servicesTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("servicesDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-card rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{t(service.titleKey)}</h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">{t(service.descKey)}</p>

              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
