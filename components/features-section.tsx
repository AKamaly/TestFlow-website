import { Check, Zap, Clock, LayoutTemplateIcon as Template, Users, MessageSquare, FileText, Cable, Share2 } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "No-Code Platform",
      description: "Build and run complex validation workflows without writing a single line of code"
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Automated testing runs continuously, maximizing efficiency and reducing time to market"
    },
    {
      icon: Template,
      title: "Pre-built Templates",
      description: "Start with industry-standard validation templates and customize them to your needs"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time dashboard for team collaboration and project monitoring"
    },
    {
      icon: MessageSquare,
      title: "Human Language Automation",
      description: "Build automation workflows using natural language commands"
    },
    {
      icon: FileText,
      title: "Advanced Reporting",
      description: "Automated report generation with detailed analysis and insights"
    },
    {
      icon: Cable,
      title: "Universal Compatibility",
      description: "Supports all major testing instruments and hardware platforms"
    },
    {
      icon: Share2,
      title: "Rich Integrations",
      description: "Seamlessly integrate with email, Google Sheets, and 30+ other apps"
    }
  ]

  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Everything you need for hardware validation
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive platform that streamlines your validation process from start to finish
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-white/5 rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/10"
            >
              <feature.icon className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

