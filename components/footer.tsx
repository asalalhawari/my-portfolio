"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/asal-alhawari" },
  { icon: Linkedin, href: "https://linkedin.com/in/asal-alhawari" },
  { icon: Twitter, href: "https://twitter.com/asal_alhawari" },
]

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span>{t("footerText")}</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Asal AL-Hawari. {t("allRights")}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
