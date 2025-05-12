'use client'

import { useState } from 'react'
import { ChevronDown, Clock, ArrowRight, BrainCircuit, Cable, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface FAQItemProps {
  question: string
  answer: React.ReactNode
  category: string
}

// FAQ Item Component
const FAQItem = ({ question, answer, category }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full p-5 text-left bg-white/[0.03] hover:bg-white/[0.05] transition-colors duration-200"
      >
        <div className="flex items-center gap-3">
          <div className="text-sm px-2 py-1 rounded-full bg-white/10 text-gray-300">
            {category}
          </div>
          <h3 className="text-lg font-medium">{question}</h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 bg-white/[0.01] text-gray-300 space-y-3">
          {answer}
        </div>
      </div>
    </div>
  )
}

// Main FAQs Component
export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'General', 'TestFlow', 'AI Features', 'Integration', 'Getting Started']

  const faqs: FAQItemProps[] = [
    {
      question: "What is Atoms TestFlow?",
      answer: (
        <>
          <p>
            Atoms TestFlow is an AI-powered validation platform designed specifically for semiconductor and electronics companies. 
            It automates the testing and validation process, dramatically reducing time-to-market and validation costs.
          </p>
          <p className="mt-2">
            Our platform utilizes advanced machine learning algorithms to adapt to your specific validation needs, 
            helping you identify and resolve issues faster than traditional manual testing methods.
          </p>
        </>
      ),
      category: "General"
    },
    {
      question: "How does TestFlow accelerate semiconductor validation?",
      answer: (
        <>
          <p>
            TestFlow accelerates semiconductor validation in several key ways:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Automated Test Generation:</strong> Our AI automatically creates comprehensive test cases based on your specifications, eliminating hours of manual test writing.
            </li>
            <li>
              <strong>Parallel Testing:</strong> TestFlow can run thousands of tests simultaneously across different environments, drastically reducing validation time.
            </li>
            <li>
              <strong>Intelligent Issue Detection:</strong> Our platform identifies potential issues earlier in the validation process, preventing costly delays later.
            </li>
            <li>
              <strong>Continuous Learning:</strong> TestFlow gets smarter with each validation cycle, optimizing tests based on previous runs for greater efficiency.
            </li>
          </ul>
          <p className="mt-2">
            Customers report an average 85% reduction in validation time, allowing them to bring products to market significantly faster.
          </p>
        </>
      ),
      category: "TestFlow"
    },
    {
      question: "What types of hardware can TestFlow validate?",
      answer: (
        <>
          <p>
            TestFlow is designed to validate a wide range of hardware, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Semiconductor devices (processors, memory, ASICs, FPGAs)</li>
            <li>Integrated circuits and chipsets</li>
            <li>Electronic control units (ECUs)</li>
            <li>Sensors and actuators</li>
            <li>Communication modules (WiFi, Bluetooth, cellular, etc.)</li>
            <li>Power management systems</li>
            <li>Mixed-signal devices</li>
          </ul>
          <p className="mt-2">
            Our platform is highly adaptable and can be configured to test virtually any electronic hardware component or system.
          </p>
        </>
      ),
      category: "TestFlow"
    },
    {
      question: "What AI capabilities does TestFlow offer?",
      answer: (
        <>
          <p>
            TestFlow leverages several advanced AI capabilities:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Machine Learning Test Optimization:</strong> Automatically optimizes test sequences based on historical data and current requirements.
            </li>
            <li>
              <strong>Predictive Fault Analysis:</strong> Identifies potential issues before they occur by recognizing patterns in test results.
            </li>
            <li>
              <strong>Anomaly Detection:</strong> Instantly flags unusual behavior that might indicate hardware defects.
            </li>
            <li>
              <strong>Adaptive Test Coverage:</strong> Intelligently adjusts test coverage to focus on high-risk areas based on real-time results.
            </li>
            <li>
              <strong>Natural Language Processing:</strong> Understand requirements written in plain English and convert them to formal test specifications.
            </li>
          </ul>
        </>
      ),
      category: "AI Features"
    },
    {
      question: "How does TestFlow integrate with existing testing equipment?",
      answer: (
        <>
          <p>
            TestFlow is designed for seamless integration with your existing testing infrastructure:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Universal Compatibility:</strong> Works with all major testing equipment vendors including Advantest, Teradyne, National Instruments, and Keysight.
            </li>
            <li>
              <strong>Standard Protocol Support:</strong> Supports industry-standard protocols like JTAG, I2C, SPI, MIPI, and more.
            </li>
            <li>
              <strong>API-First Architecture:</strong> Our comprehensive API allows for easy integration with your existing systems and workflows.
            </li>
            <li>
              <strong>Custom Adapters:</strong> For specialized equipment, our team can develop custom adapters to ensure compatibility.
            </li>
          </ul>
          <p className="mt-2">
            We offer dedicated integration support to ensure TestFlow works perfectly with your specific testing environment.
          </p>
        </>
      ),
      category: "Integration"
    },
    {
      question: "How secure is my test data with TestFlow?",
      answer: (
        <>
          <p>
            Security is a top priority at Atoms. TestFlow implements multiple layers of protection:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>End-to-End Encryption:</strong> All data is encrypted in transit and at rest using industry-standard encryption.
            </li>
            <li>
              <strong>On-Premises Option:</strong> For maximum security, TestFlow can be deployed entirely within your own infrastructure.
            </li>
            <li>
              <strong>Access Controls:</strong> Granular user permissions and role-based access control.
            </li>
            <li>
              <strong>Compliance:</strong> Our platform is compliant with major security standards including ISO 27001 and SOC 2.
            </li>
            <li>
              <strong>Audit Logging:</strong> Comprehensive audit trails for all activities.
            </li>
          </ul>
          <p className="mt-2">
            We regularly conduct security audits and penetration testing to ensure your data remains protected.
          </p>
        </>
      ),
      category: "General"
    },
    {
      question: "How long does it take to implement TestFlow?",
      answer: (
        <>
          <p>
            Typical implementation timelines:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Basic Integration:</strong> 1-2 weeks for standard environments with minimal customization.
            </li>
            <li>
              <strong>Standard Implementation:</strong> 3-4 weeks for typical semiconductor validation environments.
            </li>
            <li>
              <strong>Complex Implementation:</strong> 6-8 weeks for large enterprises with multiple testing facilities and custom requirements.
            </li>
          </ul>
          <p className="mt-2">
            Our implementation team works closely with your engineers to ensure a smooth transition. We also offer expedited implementation for time-sensitive projects.
          </p>
        </>
      ),
      category: "Getting Started"
    },
    {
      question: "What kind of support does Atoms provide?",
      answer: (
        <>
          <p>
            We offer multiple tiers of support to meet your needs:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Standard Support:</strong> Business hours support via email and chat with 24-hour response time.
            </li>
            <li>
              <strong>Premium Support:</strong> 24/7 support with 2-hour response time, dedicated support engineer, and quarterly reviews.
            </li>
            <li>
              <strong>Enterprise Support:</strong> 24/7 support with 1-hour response time, dedicated team, on-site support options, and monthly reviews.
            </li>
          </ul>
          <p className="mt-2">
            All customers receive access to our comprehensive documentation, knowledge base, and community forums.
          </p>
        </>
      ),
      category: "General"
    },
    {
      question: "Can TestFlow integrate with our CI/CD pipeline?",
      answer: (
        <>
          <p>
            Yes, TestFlow is designed to seamlessly integrate with modern CI/CD pipelines:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>CI/CD Integration:</strong> Native support for Jenkins, GitLab CI, GitHub Actions, Azure DevOps, and more.
            </li>
            <li>
              <strong>Automated Validation:</strong> Trigger validation automatically when code changes are detected.
            </li>
            <li>
              <strong>Feedback Loop:</strong> Validation results are automatically reported back to your development team.
            </li>
            <li>
              <strong>Custom Webhooks:</strong> Support for custom webhooks to integrate with any CI/CD system.
            </li>
          </ul>
          <p className="mt-2">
            This integration enables a true shift-left approach, allowing you to catch and fix issues earlier in the development cycle.
          </p>
        </>
      ),
      category: "Integration"
    },
    {
      question: "How does pricing work for TestFlow?",
      answer: (
        <>
          <p>
            TestFlow is offered in several pricing tiers:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Standard:</strong> For small teams and basic validation needs.
            </li>
            <li>
              <strong>Professional:</strong> For mid-sized teams with more advanced validation requirements.
            </li>
            <li>
              <strong>Enterprise:</strong> For large organizations with complex validation needs across multiple products.
            </li>
            <li>
              <strong>Custom:</strong> Tailored pricing for unique requirements.
            </li>
          </ul>
          <p className="mt-2">
            Pricing is typically based on a combination of validation throughput, number of devices under test, and features required. 
            Contact our sales team for a detailed quote based on your specific needs.
          </p>
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Contact us for pricing details
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </>
      ),
      category: "Getting Started"
    }
  ]

  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Get answers to common questions about Atoms TestFlow and semiconductor validation
        </p>
      </motion.div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${
              activeCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <FAQItem
              question={faq.question}
              answer={faq.answer}
              category={faq.category}
            />
          </motion.div>
        ))}
      </div>

      {/* Not Finding Answer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 border border-white/10 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01]"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Can't find what you're looking for?</h3>
            <p className="text-gray-400">
              Contact our support team for personalized assistance with your specific questions.
            </p>
          </div>
          <Link 
            href="/contact" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-2.5 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
          >
            Contact Support
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </div>
  )
} 