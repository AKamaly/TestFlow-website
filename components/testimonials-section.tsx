'use client'

import React from "react";
import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/blocks/testimonials-columns-1";

const testimonials = [
  {
    text: "TestFlow reduced our validation time from weeks to hours. The AI-powered script generation is incredible - it understands our datasheets better than most engineers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "David Chen",
    role: "Validation Research Lead"
  },
  {
    text: "We've eliminated 90% of manual SCPI scripting. TestFlow's instrument automation is a game-changer for our semiconductor testing workflows.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3c5?w=150&h=150&fit=crop&crop=face",
    name: "Sarah Martinez",
    role: "Chief Technology Officer"
  },
  {
    text: "The real-time analytics and automated reporting saved us countless hours. Our compliance reports are now generated automatically.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Michael Thompson",
    role: "Hardware Test Lead"
  },
  {
    text: "TestFlow's workflow builder is intuitive and powerful. We can now create complex test sequences without writing a single line of code.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    name: "Emily Rodriguez",
    role: "Test Automation Lead"
  },
  {
    text: "The AI copilot feature is like having a senior engineer available 24/7. It catches edge cases we would have missed manually.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "James Wilson",
    role: "Principal Researcher"
  },
  {
    text: "Remote lab control through TestFlow has revolutionized our distributed testing approach. We can run tests from anywhere in the world.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    name: "Lisa Park",
    role: "Automation CTO"
  }
];

const testimonials2 = [
  {
    text: "TestFlow's integration with our existing lab equipment was seamless. No more compatibility issues or driver headaches.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    name: "Robert Kim",
    role: "Lab Operations Manager"
  },
  {
    text: "The cost savings are incredible. We reduced our validation budget by 60% while improving test coverage and reliability.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Amanda Foster",
    role: "Engineering Director"
  },
  {
    text: "TestFlow's team collaboration features transformed how our global teams work together. Everyone stays in sync effortlessly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Mendez",
    role: "Senior Hardware Engineer"
  },
  {
    text: "The learning curve was minimal. Our entire team was productive with TestFlow within days, not months like other platforms.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Jennifer Liu",
    role: "Test Development Engineer"
  },
  {
    text: "TestFlow's predictive analytics helped us identify potential failures before they happened. Our yield rates improved by 25%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Alex Johnson",
    role: "Quality Assurance Lead"
  },
  {
    text: "The automated test generation from datasheets is pure magic. What used to take weeks now takes minutes.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    name: "Rachel Green",
    role: "Validation Specialist"
  }
];

const testimonials3 = [
  {
    text: "TestFlow's cloud-native architecture scales with our needs. From startup to enterprise, it grows with us.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Mark Stevens",
    role: "Chief Technology Officer"
  },
  {
    text: "The ROI was immediate. We recovered our TestFlow investment in the first month through time savings alone.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c3c5?w=150&h=150&fit=crop&crop=face",
    name: "Diana Chang",
    role: "VP Engineering"
  },
  {
    text: "TestFlow's customer support is exceptional. They understand our industry and provide solutions, not just answers.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    name: "Kevin O'Brien",
    role: "Test Engineering Consultant"
  },
  {
    text: "The platform's reliability is outstanding. Zero downtime in 18 months of continuous operation across our global labs.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    name: "Priya Patel",
    role: "Operations Director"
  },
  {
    text: "TestFlow transformed our startup from manual testing chaos to automated excellence. We couldn't have scaled without it.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    name: "Thomas Anderson",
    role: "Founder & CEO"
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-purple-500/6 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-violet-500/6 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-purple-500/8 to-violet-500/8 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              ✨ Customer Success Stories
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Trusted by{' '}
            <span className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent">
              Leading
            </span>{' '}
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              Validation Teams
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            See how validation engineers worldwide are transforming their workflows with TestFlow's AI-powered automation platform.
          </motion.p>
        </motion.div>

        {/* Testimonials Columns */}
        <div className="relative h-[600px] overflow-hidden">
          <div className="flex gap-6 h-full ml-16">
            <TestimonialsColumn
              testimonials={testimonials}
              duration={15}
              className="flex-1"
            />
            <TestimonialsColumn
              testimonials={testimonials2}
              duration={20}
              className="flex-1"
            />
            <TestimonialsColumn
              testimonials={testimonials3}
              duration={18}
              className="flex-1"
            />
          </div>
          
          {/* Enhanced gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
