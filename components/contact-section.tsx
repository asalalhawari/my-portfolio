"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Send, Mail, Phone, MapPin, MessageCircle, Sparkles, CheckCircle, ArrowRight } from "lucide-react"

export function ContactSection() {
  const { t, isRTL, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: language === "ar" ? "البريد الإلكتروني" : "Email",
      value: "ASALHAWARI2000@gmail.com",
      color: "from-rose-500 to-pink-500",
      bgColor: "bg-rose-50",
      href: "mailto:ASALHAWARI2000@gmail.com",
    },
    {
      icon: Phone,
      label: language === "ar" ? "رقم الهاتف" : "Phone",
      value: "+962 775 696 927",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      href: "tel:+962775696927",
    },
    {
      icon: MapPin,
      label: language === "ar" ? "الموقع" : "Location",
      value: language === "ar" ? "العقبة، الأردن" : "Aqaba, Jordan",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4"
          >
            <MessageCircle className="w-4 h-4" />
            {language === "ar" ? "تواصل معي" : "Get in Touch"}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{t("contactTitle")}</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("contactDesc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex items-center gap-4 p-5 ${info.bgColor} rounded-2xl cursor-pointer group transition-all duration-300 hover:shadow-lg`}
              >
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${info.color} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 mb-1">{info.label}</p>
                  <p className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors">
                    {info.value}
                  </p>
                </div>
                <ArrowRight
                  className={`w-5 h-5 text-slate-400 group-hover:text-indigo-500 transition-all ${isRTL ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                />
              </motion.a>
            ))}

            {/* Quick message card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">{language === "ar" ? "متاحة للعمل" : "Available for Work"}</span>
              </div>
              <p className="text-indigo-100 text-sm leading-relaxed">
                {language === "ar"
                  ? "أبحث حالياً عن فرص عمل جديدة. دعنا نتحدث عن مشروعك القادم!"
                  : "Currently looking for new opportunities. Let's talk about your next project!"}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {language === "ar" ? "تم الإرسال بنجاح!" : "Message Sent!"}
                  </h3>
                  <p className="text-slate-500">
                    {language === "ar" ? "سأتواصل معك قريباً" : "I'll get back to you soon"}
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t("yourName")}</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                        placeholder={language === "ar" ? "أدخل اسمك" : "Enter your name"}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t("yourEmail")}</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                        placeholder={language === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {language === "ar" ? "الموضوع" : "Subject"}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                      placeholder={language === "ar" ? "موضوع الرسالة" : "Message subject"}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t("yourMessage")}</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-slate-50 rounded-xl border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all resize-none text-slate-800 placeholder:text-slate-400"
                      placeholder={language === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg group shadow-lg shadow-indigo-500/25 transition-all hover:shadow-xl hover:shadow-indigo-500/30"
                  >
                    {t("sendMessage")}
                    <Send
                      className={`w-5 h-5 ${isRTL ? "mr-2 group-hover:-translate-x-1 rotate-180" : "ml-2 group-hover:translate-x-1"} transition-transform`}
                    />
                  </Button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
