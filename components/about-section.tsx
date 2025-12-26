"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Code2, Palette, Zap, Users } from "lucide-react"

const skills = [
  { icon: Code2, title: "Clean Code", color: "text-emerald-500" },
  { icon: Palette, title: "Creative Design", color: "text-rose-500" },
  { icon: Zap, title: "Fast Performance", color: "text-amber-500" },
  { icon: Users, title: "User Focused", color: "text-sky-500" },
]

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("aboutTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("aboutDesc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutText1")}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t("aboutText2")}</p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "Next.js",
                "Laravel",
                "PHP",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "MySQL",
                "Node.js",
                "Git",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all"
              >
                <skill.icon className={`w-10 h-10 ${skill.color} mb-4`} />
                <h3 className="font-semibold text-foreground">{skill.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
