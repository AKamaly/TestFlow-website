'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, MessageSquare, User, Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { submitContactForm } from '@/app/actions/contact'
import { SuccessPopup } from '@/components/success-popup'
import { SiteHeader } from "@/components/site-header"
import { Notification } from "@/components/notification";


export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showSubscribeNotification, setShowSubscribeNotification] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    try {
      await submitContactForm(formData)
      setShowSuccess(true)
      // Reset form
      const form = document.querySelector('form') as HTMLFormElement
      form.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="pt-32"> {/* Added pt-32 here to maintain original top padding */}
      {/* Header section */}
      <div className="container px-4 pb-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
          >
            Contact Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's accelerate your hardware validation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Schedule a call with our team to discuss your specific validation needs
          </motion.p>
        </div>

        {/* Split layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl opacity-50" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Contact Our Solutions Team</h2>
                <p className="text-gray-400 mb-8">
                  We understand that every hardware company has unique validation requirements. Our team will work with you to create a customized solution that fits your specific needs.
                </p>
                <div className="space-y-6">
                  {[
                    "Companies reduce validation time by up to 95% with Atoms Testflow",
                    "500+ hardware companies automate their validation with our platform",
                    "We're backed by leading technology investors",
                    "Most comprehensive automated validation solution in the market"
                  ].map((point, index) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <p className="text-gray-300">{point}</p>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-400">
                    Not ready to schedule a call? Reach out to our team at{' '}
                    <a href="mailto:kamaly@atomsai.net" className="text-blue-400 hover:text-blue-300 transition-colors">
                      kamaly@atomsai.net
                    </a>
                    {' '}with any questions you may have.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-3xl opacity-50" />
            <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Name
                    </Label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Company field */}
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">
                    Company
                  </Label>
                  <div className="relative">
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company name"
                      required
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Company size field */}
                <div className="space-y-2">
                  <Label htmlFor="company-size" className="text-gray-300">
                    Company Size
                  </Label>
                  <Select name="company-size" required>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message
                  </Label>
                  <div className="relative">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your validation needs..."
                      required
                      className="min-h-[150px] pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 group"
                >
                  <span className="flex items-center gap-2">
                    {isLoading ? 'Sending...' : 'Schedule a Call'}
                    <motion.div
                      animate={{
                        x: [0, 4, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success popup */}
      <SuccessPopup 
        isOpen={showSuccess} 
        onClose={() => setShowSuccess(false)} 
      />
      <Notification 
        isOpen={showSubscribeNotification}
        onClose={() => setShowSubscribeNotification(false)}
        message="Thanks for subscribing! We'll keep you updated with the latest news."
      />
      </div>
    </div>
  )
}

