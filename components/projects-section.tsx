"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    titleAr: "منصة التجارة الإلكترونية",
    description: "A full-featured e-commerce platform with payment integration and admin dashboard.",
    descriptionAr: "منصة تجارة إلكترونية كاملة الميزات مع تكامل الدفع ولوحة تحكم للمدير.",
    image: "/modern-ecommerce-website-dashboard-light-theme.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Restaurant Booking System",
    titleAr: "نظام حجز المطاعم",
    description: "Online restaurant reservation system with real-time availability.",
    descriptionAr: "نظام حجز مطاعم عبر الإنترنت مع التوفر في الوقت الفعلي.",
    image: "/restaurant-booking-website-modern-clean-design.jpg",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Healthcare Management System",
    titleAr: "نظام إدارة الرعاية الصحية",
    description: "Comprehensive healthcare platform for managing patient records and appointments.",
    descriptionAr: "منصة رعاية صحية شاملة لإدارة سجلات المرضى والمواعيد.",
    image: "/healthcare-management-dashboard-modern-clean-light.jpg",
    tech: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Corporate Website",
    titleAr: "موقع شركة",
    description: "Professional corporate website with modern design and content management.",
    descriptionAr: "موقع شركة احترافي بتصميم حديث ونظام إدارة محتوى.",
    image: "/corporate-business-website-modern-professional-lig.jpg",
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    titleAr: "موقع بورتفوليو",
    description: "Creative portfolio website for a photography studio.",
    descriptionAr: "موقع بورتفوليو إبداعي لاستوديو تصوير.",
    image: "/photography-portfolio-website-minimal-elegant.jpg",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    titleAr: "تطبيق إدارة المهام",
    description: "Collaborative task management application with team features.",
    descriptionAr: "تطبيق إدارة مهام تعاوني مع ميزات الفريق.",
    image: "/task-management-app-dashboard-clean-modern.jpg",
    tech: ["React", "Laravel", "PostgreSQL", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    titleAr: "منصة العقارات",
    description: "Property listing and management platform with advanced search.",
    descriptionAr: "منصة عرض وإدارة العقارات مع بحث متقدم.",
    image: "/real-estate-website-modern-listings-property.jpg",
    tech: ["PHP", "JavaScript", "MySQL", "Google Maps"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Learning Management System",
    titleAr: "نظام إدارة التعلم",
    description: "Online learning platform with courses and progress tracking.",
    descriptionAr: "منصة تعلم عبر الإنترنت مع دورات وتتبع التقدم.",
    image: "/learning-management-system-dashboard-education.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const { t, language } = useLanguage()

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{t("projectsTitle")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("projectsDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "ar" ? project.titleAr : project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg text-center text-sm font-medium flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t("viewProject")}
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === "ar" ? project.titleAr : project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                  {language === "ar" ? project.descriptionAr : project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
