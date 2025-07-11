'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowRight, Filter, Search, Clock, Users, Star, ChevronDown, Eye, Download, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SiteHeader } from '@/components/site-header'
import Image from 'next/image'
import Link from 'next/link'

interface DemoItem {
  id: string
  title: string
  description: string
  category: string
  duration: string
  views: string
  rating: number
  thumbnail: string
  isNew?: boolean
  isFeatured?: boolean
}

const demoCategories = [
  { id: 'all', name: 'All Demos', count: 12 },
  { id: 'ai-validation', name: 'AI Validation', count: 4 },
  { id: 'analytics', name: 'Analytics', count: 3 },
  { id: 'collaboration', name: 'Collaboration', count: 2 },
  { id: 'automation', name: 'Automation', count: 3 }
]

const demoItems: DemoItem[] = [
  {
    id: '1',
    title: 'AI-Powered Test Script Generation',
    description: 'Watch how TestFlow automatically generates comprehensive test scripts from natural language requirements.',
    category: 'ai-validation',
    duration: '5:30',
    views: '2.4K',
    rating: 4.9,
    thumbnail: '/images/demo-placeholder-1.jpg',
    isFeatured: true,
    isNew: true
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    description: 'Explore our advanced analytics dashboard with live data visualization and predictive insights.',
    category: 'analytics',
    duration: '7:15',
    views: '1.8K',
    rating: 4.8,
    thumbnail: '/images/demo-placeholder-2.jpg',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Team Collaboration Workflow',
    description: 'See how teams collaborate seamlessly with shared workspaces and real-time updates.',
    category: 'collaboration',
    duration: '4:45',
    views: '1.2K',
    rating: 4.7,
    thumbnail: '/images/demo-placeholder-3.jpg'
  },
  {
    id: '4',
    title: 'Automated Hardware Validation',
    description: 'Complete walkthrough of automated validation processes for semiconductor devices.',
    category: 'automation',
    duration: '8:20',
    views: '3.1K',
    rating: 4.9,
    thumbnail: '/images/demo-placeholder-4.jpg',
    isFeatured: true
  },
  {
    id: '5',
    title: 'Universal Instrument Integration',
    description: 'Learn how TestFlow connects with various lab instruments and testing equipment.',
    category: 'automation',
    duration: '6:10',
    views: '1.5K',
    rating: 4.6,
    thumbnail: '/images/demo-placeholder-5.jpg'
  },
  {
    id: '6',
    title: 'Advanced Data Processing',
    description: 'Deep dive into our data processing capabilities and machine learning algorithms.',
    category: 'ai-validation',
    duration: '9:30',
    views: '2.7K',
    rating: 4.8,
    thumbnail: '/images/demo-placeholder-6.jpg',
    isNew: true
  }
]

export default function DemosPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDemos, setFilteredDemos] = useState(demoItems)
  const [showFilters, setShowFilters] = useState(false)
  const [sortBy, setSortBy] = useState('newest')

  useEffect(() => {
    let filtered = demoItems

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(demo => demo.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(demo => 
        demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        demo.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort demos
    if (sortBy === 'newest') {
      filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    } else if (sortBy === 'popular') {
      filtered = [...filtered].sort((a, b) => parseFloat(b.views) - parseFloat(a.views))
    } else if (sortBy === 'rating') {
      filtered = [...filtered].sort((a, b) => b.rating - a.rating)
    }

    setFilteredDemos(filtered)
  }, [selectedCategory, searchQuery, sortBy])

  const featuredDemos = demoItems.filter(demo => demo.isFeatured)

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 -left-1/4 w-3/4 h-3/4 bg-gradient-to-br from-blue-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 -right-1/4 w-3/4 h-3/4 bg-gradient-to-tl from-purple-500/20 via-blue-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-4 relative max-w-[1400px] w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-xl mb-8 relative overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <span className="relative bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                ✨ Interactive Product Demonstrations
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
                Experience TestFlow
              </span>
              <br />
              <span className="text-white/90">in Action</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Discover the power of AI-driven hardware validation through our comprehensive demo library. 
              Watch real-world scenarios and see how TestFlow transforms your testing workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] h-12 px-8 text-lg font-semibold">
                <Play className="w-5 h-5 mr-2" />
                Watch Featured Demo
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5">
                <Link href="/contact" className="flex items-center">
                  Request Live Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Demos Carousel */}
      <section className="relative py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Demonstrations
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our most popular and comprehensive demos showcasing TestFlow's core capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video">
                    {/* Placeholder for demo thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-blue-400" />
                        </div>
                        <p className="text-sm text-gray-400">Demo Thumbnail</p>
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {demo.isNew && (
                        <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          NEW
                        </span>
                      )}
                      {demo.isFeatured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          FEATURED
                        </span>
                      )}
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {demo.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {demo.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {demo.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {demo.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          {demo.rating}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white/10">
                          <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-white/10">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Demos Section */}
      <section className="relative py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Demo Library
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Browse our comprehensive collection of product demonstrations and tutorials
            </p>
          </motion.div>

          {/* Filters and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search demos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {demoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-70">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  Sort by
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                <AnimatePresence>
                  {showFilters && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-10"
                    >
                      {[
                        { id: 'newest', name: 'Newest First' },
                        { id: 'popular', name: 'Most Popular' },
                        { id: 'rating', name: 'Highest Rated' }
                      ].map((option) => (
                        <button
                          key={option.id}
                          onClick={() => {
                            setSortBy(option.id)
                            setShowFilters(false)
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-white/10 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                            sortBy === option.id ? 'text-blue-400' : 'text-gray-300'
                          }`}
                        >
                          {option.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Demo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredDemos.map((demo, index) => (
                <motion.div
                  key={demo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 hover:scale-[1.02]">
                    {/* Thumbnail Container */}
                    <div className="relative aspect-video">
                      {/* Placeholder for demo thumbnail */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Play className="w-6 h-6 text-blue-400" />
                          </div>
                          <p className="text-xs text-gray-500">Demo Preview</p>
                        </div>
                      </div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 text-white ml-0.5" />
                        </div>
                      </div>

                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex gap-1">
                        {demo.isNew && (
                          <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                            NEW
                          </span>
                        )}
                      </div>

                      {/* Duration */}
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {demo.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                        {demo.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {demo.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {demo.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            {demo.rating}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-white/10">
                            <Share2 className="w-3 h-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 w-7 p-0 hover:bg-white/10">
                            <Download className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredDemos.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No demos found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                variant="outline"
                className="rounded-full"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 max-w-[1400px] w-full">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5" />
            <div className="relative p-8 md:p-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to see TestFlow in your environment?
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Schedule a personalized demo tailored to your specific hardware validation needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full h-12 px-8 text-lg font-semibold">
                    <Link href="/contact" className="flex items-center">
                      Schedule Live Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-12 px-8 text-lg rounded-full border-white/20 hover:border-white/40 hover:bg-white/5">
                    Download Demo Guide
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
} 