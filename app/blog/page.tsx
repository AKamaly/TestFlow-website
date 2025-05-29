'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, User, Tag, ArrowUpRight, Clock, Calendar, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { SectionTracker, trackButtonClick, trackFormSubmission, trackPageSpecificEvent } from '@/components/analytics-tracker'

// Helper function to create slug from title
const createSlug = (title: string) => {
  return title
    .split(' ')
    .slice(0, 3)
    .join('-')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '');
};

// Sample blog post data
const blogPosts = [
  {
    id: 7,
    title: "The Journey of a Chip: Understanding the Semiconductor Manufacturing Cycle",
    slug: "semiconductor-manufacturing-cycle",
    excerpt: "Dive deep into the fascinating journey of how semiconductors are designed, manufactured, tested, and brought to market - from initial circuit design to final validation.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/Semiconductor%20Cycle%20From%20Design%20to%20Market-TOtU5YHS8FdCl0vrO4wrHIDFxGpaXt.jpg",
    category: "Industry Insights",
    author: "Ali Kamaly",
    date: "Apr 15, 2025",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 8,
    title: "NVIDIA's AI Revolution: Breaking Down Their $29.8B Profit Engine",
    slug: "nvidia-profit-breakdown",
    excerpt: "A deep dive into how NVIDIA transformed $60.9B in revenue into nearly $30B in net profit, marking their evolution from a gaming company to an AI infrastructure powerhouse.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/NVIDIA%20Revenue%20by%20segment-1A8LeHhFO9NHtnpRtMO0aTFNhMF8pG.png",
    category: "Industry Analysis",
    author: "Ali Kamaly",
    date: "Apr 10, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 1,
    title: "Revolutionizing Semiconductor Validation with AI",
    slug: "revolutionizing-semiconductor-validation",
    excerpt: "How artificial intelligence is transforming the validation process for semiconductor manufacturers.",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 3,
    title: "The Future of Hardware Validation: Trends to Watch",
    slug: "the-future-of",
    excerpt: "Exploring upcoming technologies and methodologies that will shape validation processes in the next decade.",
    coverImage: "https://images.unsplash.com/photo-1520869562399-e772f042f422?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnV0dXJlfGVufDB8fDB8fHww",
    category: "Industry Insights",
    author: "Ahmed Hassan",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    title: "Compliance Made Easy: JEDEC Standards and Automated Testing",
    slug: "compliance-made-easy",
    excerpt: "How automation is helping manufacturers meet industry standards with less effort and greater accuracy.",
    coverImage: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Compliance",
    author: "Ali Kamaly",
    date: "Mar 8, 2025",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 5,
    title: "Optimizing Test Coverage with Machine Learning",
    slug: "optimizing-test-coverage",
    excerpt: "How ML algorithms can identify testing gaps and prioritize test cases for maximum efficiency.",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    category: "Technology",
    author: "Ahmed Hassan",
    date: "Mar 25, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 6,
    title: "Reducing Time-to-Market: A Competitive Advantage",
    slug: "reducing-time-to-market",
    excerpt: "Why faster validation processes are becoming the key differentiator in today's competitive hardware market.",
    coverImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1c2luZXNzJTIwdGltZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "Business",
    author: "Ali Kamaly",
    date: "Apr 5, 2025",
    readTime: "5 min read",
    featured: false
  }
];

// Categories for filter
const categories = [
  "All",
  "Technology",
  "Case Study",
  "Industry Insights",
  "Compliance",
  "Business"
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    trackPageSpecificEvent('blog_search', { query, results_count: filteredPosts.length })
  }

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category)
    trackPageSpecificEvent('blog_filter', { category, results_count: filteredPosts.length })
  }

  const handleBlogPostClick = (post: any) => {
    trackPageSpecificEvent('blog_post_click', { 
      post_title: post.title, 
      post_category: post.category,
      post_id: post.id 
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackFormSubmission('newsletter', true, { page: 'blog' })
    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Section Trackers */}
      <SectionTracker sectionId="featured" sectionName="Featured Blog Posts" />
      <SectionTracker sectionId="search-filter" sectionName="Blog Search and Filter" />
      <SectionTracker sectionId="articles" sectionName="Blog Articles Grid" />
      <SectionTracker sectionId="cta" sectionName="Blog CTA" />
      
      {/* Blog Content Container */}
      <div className="container mx-auto px-4 relative max-w-[1200px] w-full pb-20 pt-20 md:pt-24">
        {/* Featured Post like in the image */}
        {featuredPosts.length > 0 && (
          <div id="featured" className="mb-16">
            <div className="flex flex-col space-y-8">
              {featuredPosts.slice(0, 1).map((post) => (
                <div key={post.id} className="bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left side - Image */}
                    <div className="relative h-[300px] md:h-auto">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="text-purple-500 text-sm font-medium mb-2">
                          {post.category}
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                          {post.title}
                        </h2>
                        <p className="text-gray-400 mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-white">{post.author}</div>
                            <div className="text-xs text-gray-400 flex items-center gap-2">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          onClick={() => handleBlogPostClick(post)}
                          className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Read more
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filter Bar */}
        <div id="search-filter" className="mb-10 py-5 border-y border-white/10 sticky top-16 z-10 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-auto md:min-w-[300px]">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
            </div>
            
            <div className="hidden md:flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryFilter(category)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                      : "bg-white/5 text-gray-400 border border-transparent hover:border-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="md:hidden flex w-full">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 w-full justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white"
              >
                <span>{selectedCategory} Posts</span>
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Mobile filters */}
          {showFilters && (
            <div className="md:hidden mt-4 grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    handleCategoryFilter(category);
                    setShowFilters(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                      : "bg-white/5 text-gray-400 border border-transparent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Articles Grid - Clean Artisan Style */}
        <div id="articles" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredPosts.map((post) => (
            <div key={post.id} className="group flex flex-col h-full">
              <Link 
                href={`/blog/${post.slug}`} 
                onClick={() => handleBlogPostClick(post)}
                className="block flex-grow"
              >
                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mb-2">
                  <span className="inline-block rounded-full px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/40">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              </Link>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-400">No articles found</h3>
            <p className="text-gray-500 mt-2">Try changing your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section from home page */}
        <section id="cta" className="relative py-24 mt-10 overflow-hidden">
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl opacity-30" />
            <div className="relative">
              <div className="space-y-4 mb-8">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                  Ready to transform your<br />validation process?
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Join leading companies who trust Atoms TestFlow to validate their products faster and more efficiently.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  href="/contact" 
                  onClick={() => trackButtonClick('Get Started', 'Blog CTA', { page: 'blog' })}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-11 px-6 text-base w-full sm:w-auto min-w-[160px]"
                >
                  Get Started
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
                </Link>
                <Link 
                  href="/docs" 
                  onClick={() => trackButtonClick('View Documentation', 'Blog CTA', { page: 'blog' })}
                  className="rounded-full border border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 h-11 px-6 text-base w-full sm:w-auto min-w-[160px] flex items-center justify-center"
                >
                  View Documentation
                </Link>
              </div>

              <div className="mt-12 flex flex-col items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-black bg-gradient-to-br from-blue-400 to-purple-400"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">Join 10,000+ engineers</div>
                    <div className="text-sm text-gray-400">who are already using Atoms TestFlow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-white/10">
          <div className="container px-4">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
              {/* Brand Column - Takes 2 columns */}
              <div className="lg:col-span-2 space-y-4">
                <Link href="/" className="text-xl font-bold block">
                  Atoms Testflow
                </Link>
                <p className="text-gray-400 text-sm">
                  The AI validation platform that accelerates your product launch.
                </p>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/atomstestflow' },
                    { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com' }
                  ].map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">{social.name}</span>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors">
                        {social.icon === 'linkedin' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>}
                        {social.icon === 'youtube' && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Industries Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Industries</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Semiconductor', href: '/semiconductor' },
                    { label: 'Electronics', href: '/electronics' },
                    { label: 'Automotive', href: '/automotive' },
                    { label: 'Research Labs', href: '/research-labs' }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sections Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Sections</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Solutions', href: '/#solutions' },
                    { label: 'TestFlow', href: '/#demo' },
                    { label: 'Features', href: '/#features' },
                    { label: 'Help Center', href: '/help-center' }
                  ].map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter - Takes 1 column */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Stay Updated</h3>
                <p className="text-sm text-gray-400">Subscribe to our newsletter for the latest updates and features.</p>
                <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm hover:from-blue-600 hover:to-purple-600 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Atoms. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
} 