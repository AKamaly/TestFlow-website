'use client'

import { motion } from 'framer-motion'
import { Mail, PhoneCall, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ContactMethodProps {
  title: string
  description: string
  icon: React.ReactNode
  action: {
    text: string
    link: string
  }
  availability?: string
  color: string
}

const ContactMethod = ({ title, description, icon, action, availability, color }: ContactMethodProps) => {
  return (
    <div className={`border border-white/10 rounded-xl p-6 bg-gradient-to-br from-${color}-500/10 via-${color}-500/5 to-transparent hover:border-${color}-500/20 transition-all duration-300 h-full group`}>
      <div className="space-y-4">
        <div className={`p-3 rounded-lg w-fit bg-${color}-500/10 border border-${color}-500/20 group-hover:border-${color}-500/40 transition-all duration-300`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-200">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          
          {availability && (
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span>{availability}</span>
            </div>
          )}
          
          <Link
            href={action.link}
            className={`inline-flex items-center gap-2 text-${color}-400 hover:text-${color}-300 transition-colors group-hover:translate-x-1 duration-200`}
          >
            {action.text}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ContactSection() {
  const contactMethods: ContactMethodProps[] = [
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue and we'll respond promptly.",
      icon: <Mail className="w-5 h-5 text-purple-400" />,
      action: {
        text: "Email us",
        link: "/contact"
      },
      availability: "Response within 24 hours",
      color: "purple"
    },
    {
      title: "Schedule a Call",
      description: "Book a call with one of our TestFlow specialists for personalized assistance.",
      icon: <PhoneCall className="w-5 h-5 text-green-400" />,
      action: {
        text: "Book a call",
        link: "/contact"
      },
      color: "green"
    }
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Need help with TestFlow? Our support team is ready to assist you through various channels
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ContactMethod
              title={method.title}
              description={method.description}
              icon={method.icon}
              action={method.action}
              availability={method.availability}
              color={method.color}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
} 