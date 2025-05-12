'use client'

import { ArrowRight, FileText, Video, Book, BarChart4, BookOpen, Microscope } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ResourceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link: string
  category: string
  bgClass: string
}

const ResourceCard = ({ title, description, icon, link, category, bgClass }: ResourceCardProps) => {
  return (
    <Link href={link} className="group block">
      <div className={`relative overflow-hidden rounded-xl border border-white/10 h-full transition-all duration-200 hover:border-white/20 hover:shadow-lg hover:shadow-${bgClass}/5 ${bgClass}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="p-6 relative">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-white/10 text-white">
              {icon}
            </div>
            <div className="space-y-2 flex-1">
              <div className="text-sm text-blue-400">{category}</div>
              <h3 className="text-lg font-semibold group-hover:text-white transition-colors duration-200">{title}</h3>
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">{description}</p>
              <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-200 pt-2">
                <span className="text-sm">Read more</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function ResourcesSection() {
  const resources = [
    {
      title: "TestFlow Quick Start Guide",
      description: "Get up and running with TestFlow in under an hour with this comprehensive quick start guide.",
      icon: <FileText className="w-5 h-5" />,
      link: "/docs",
      category: "Guide",
      bgClass: "bg-blue-500/10"
    },
    {
      title: "Video Tutorial: Setting Up Your First Test",
      description: "Watch our step-by-step video guide on setting up your first automated validation test with TestFlow.",
      icon: <Video className="w-5 h-5" />,
      link: "/docs",
      category: "Video",
      bgClass: "bg-purple-500/10"
    },
    {
      title: "TestFlow API Documentation",
      description: "Complete reference for the TestFlow API, including integration options, endpoints, and examples.",
      icon: <Book className="w-5 h-5" />,
      link: "/docs",
      category: "Documentation",
      bgClass: "bg-green-500/10"
    },
    {
      title: "Semiconductor Validation Best Practices",
      description: "Industry-leading practices for efficient and thorough validation of semiconductor products.",
      icon: <Microscope className="w-5 h-5" />,
      link: "/docs",
      category: "White Paper",
      bgClass: "bg-orange-500/10"
    },
    {
      title: "Validation ROI Calculator",
      description: "Calculate your potential time and cost savings when implementing TestFlow in your validation process.",
      icon: <BarChart4 className="w-5 h-5" />,
      link: "/docs",
      category: "Tool",
      bgClass: "bg-red-500/10"
    },
    {
      title: "TestFlow Integration Guide",
      description: "Detailed instructions for integrating TestFlow with your existing testing infrastructure and CI/CD pipeline.",
      icon: <BookOpen className="w-5 h-5" />,
      link: "/docs",
      category: "Guide",
      bgClass: "bg-blue-500/10"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resources & Guides</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Explore our collection of guides, tutorials, and resources to help you get the most out of Atoms TestFlow
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ResourceCard
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              link={resource.link}
              category={resource.category}
              bgClass={resource.bgClass}
            />
          </motion.div>
        ))}
      </div>

      {/* Docs Library CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>View our complete documentation library</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  )
} 