'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, User, Tag, ArrowUpRight, Clock, Calendar, Filter, Check } from 'lucide-react'
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
    id: 26,
    title: "The Complete Guide to Lab Automation in 2025: Beyond Traditional Testing Methods",
    slug: "complete-guide-lab-automation-2025-modern-testing",
    excerpt: "Discover how modern lab automation is revolutionizing semiconductor testing, chip validation, and hardware verification. Learn why traditional tools are being replaced by AI-powered platforms that deliver 10x faster results.",
    coverImage: "/images/TestFlow CTA Image .webp",
    category: "Lab Automation",
    author: "Ali Kamaly",
    date: "Jul 25, 2025",
    readTime: "12 min read",
    featured: true
  },
  {
    id: 25,
    title: "Hardware Testing Best Practices: Modern Approaches Beyond Legacy Tools",
    slug: "hardware-testing-best-practices-modern-approaches",
    excerpt: "Explore cutting-edge hardware testing methodologies that are replacing traditional approaches. From automated test generation to AI-powered analysis, discover how leading companies are accelerating their validation cycles.",
    coverImage: "/images/AI-powerd Validation.webp",
    category: "Hardware Testing",
    author: "Ali Kamaly",
    date: "Jul 23, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 24,
    title: "LabVIEW vs TestFlow: Why AI-Powered Validation Beats Traditional Lab Automation",
    slug: "labview-vs-testflow-ai-powered-validation-comparison",
    excerpt: "Compare LabVIEW and TestFlow head-to-head for semiconductor testing and chip validation. Discover why engineers are switching to AI-powered platforms that offer 5x faster test execution, automated analysis, and seamless team collaboration.",
    coverImage: "/images/TestFlow slide 1 .webp",
    category: "Comparison",
    author: "Ali Kamaly",
    date: "Jul 22, 2025",
    readTime: "15 min read",
    featured: false
  },
  {
    id: 23,
    title: "Digital vs Analog vs Mixed Signal Design: Understanding the Three Chip Design Domains",
    slug: "digital-analog-mixed-signal-chip-design-domains",
    excerpt: "From binary logic to continuous signals, discover how digital, analog, and mixed-signal designs work together in modern chips. Learn why understanding these three domains is crucial for effective chip validation and testing.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Digital%20vs%20analog%20vs%20mixed%20signal-sSUeVmJS3uwxYMUQhdE0dFInriw1kV.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jul 20, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 22,
    title: "What's the Difference Between CPU and GPU? The Chef vs Sous Chef Analogy",
    slug: "cpu-vs-gpu-difference-chef-analogy",
    excerpt: "CPUs are like head chefs—skilled at complex decisions and timing. GPUs are like teams of sous chefs—excelling at simple, parallel tasks. Discover why modern computing needs both for optimal performance and validation.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Diffrance%20between%20CPU%20and%20GPU-BzSCqpcyybRnJyXZOfEqXSzpa2PQZB.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jul 18, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 21,
    title: "The Semiconductor Ecosystem: 8 Key Player Types Powering the Chip Industry",
    slug: "semiconductor-ecosystem-eight-key-player-types",
    excerpt: "From IP cores to OSAT companies, discover the 8 essential types of companies that make up the complex semiconductor ecosystem. Understand how each player contributes to creating the chips powering our modern world.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Semiconductor%20Ecosystem-30OhRjUMDpIyfDGVQqAYQ3MmiXltQ5.jpg",
    category: "Industry Insights",
    author: "Ali Kamaly",
    date: "Jul 15, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 20,
    title: "What is the Difference Between Wafer, Chip and Die? The Silicon Hierarchy Explained",
    slug: "difference-wafer-chip-die-silicon-hierarchy",
    excerpt: "Confused by wafer, chip, and die terminology? Think of it like pizza: the wafer is the whole pizza, each die is a slice, and the chip is that slice boxed and ready to deliver. Master semiconductor fundamentals with this clear breakdown.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Diffrence%20between%20wafer%2C%20chips%2C%20and%20die-qcB8np7oj7kbDFA1L23i62YiUr4sGD.png",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jul 12, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 19,
    title: "4 Major Companies Monopolizing the AI Chip Supply Chain",
    slug: "ai-chip-supply-chain-monopoly-nvidia-asml-tsmc-aws",
    excerpt: "From NVIDIA's 95% AI chip dominance to ASML's 100% EUV monopoly, discover how just four companies control the entire AI hardware ecosystem. Explore the critical supply chain dependencies shaping the future of artificial intelligence.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/AI%20Semiconductor%20Ecosystem-Gnn4DGzJvLO1KROcSjaaxpdmzJl4rU.png",
    category: "Industry Analysis",
    author: "Ali Kamaly",
    date: "Jul 10, 2025",
    readTime: "9 min read",
    featured: false
  },
  {
    id: 18,
    title: "What is Wafer Sort Testing? How Wafers Are Validated Before Packaging",
    slug: "wafer-sort-testing-semiconductor-validation-probe",
    excerpt: "Before any chip is packaged or shipped, it must pass through wafer-level testing—the first critical checkpoint of validation. Discover how probe stations test every die on a wafer and why this step is the gatekeeper of silicon quality.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Wafer%20testing%20in%20semiconductors-MJh36nf85dYrG2T9MekcgKH1BytuSv.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jul 8, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 17,
    title: "Why Silicon Wafers Are Round: 5 Engineering Reasons Behind Semiconductor Manufacturing's Most Important Design Choice",
    slug: "why-silicon-wafers-round-semiconductor-manufacturing-design",
    excerpt: "Ever wondered why every chip begins life on a perfectly round wafer? From Czochralski crystal growth to automated testing systems, discover the 5 critical engineering reasons why round wafers dominate semiconductor fabrication and chip validation processes.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Why%20silicon%20wafer%20is%20round-9zXnlHDG2VAhXcFvSS60GIea2DR6ma.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jul 5, 2025",
    readTime: "14 min read",
    featured: false
  },
  {
    id: 16,
    title: "What's Defect Rate in Semiconductors? Understanding the Bathtub Curve",
    slug: "semiconductor-defect-rate-bathtub-curve",
    excerpt: "Defect rate is the probability that a chip will fail at any point in its lifecycle—and it's one of the most critical factors in yield, reliability, and validation strategy. Explore the bathtub curve and why validation teams focus on early detection.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Defect%20rate%20in%20semiconductors-QOmXM2WbQ8u170KF3gt8EQlzZPOK4I.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 30, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 15,
    title: "Microprocessor vs Microcontroller: Understanding the Key Differences",
    slug: "microprocessor-vs-microcontroller-differences",
    excerpt: "They're both called the 'brain' of electronic systems, but they serve very different roles. Understand the key differences between microprocessors and microcontrollers and when to use each in your design.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Micro%20processor%20vs%20micro%20controller-wW3R4Tt3uKeXHzffd2i1nwz44laAUL.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 28, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 14,
    title: "What's Driving the $25.1B Power Semiconductor Market? Complete Market Breakdown",
    slug: "power-semiconductor-market-breakdown-igbt-sic-gan",
    excerpt: "The global power semiconductor market reached $25.1B in 2022, with Power IGBT claiming $8.2B, SiC at $1.6B, and GaN growing 60% YoY. Discover which companies dominate each segment and why SiC and GaN are no longer emerging—they're strategic.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Power%20semiconductor%20market%20share-yBttEKtzyvzVqh55t2u4ySaaGVDwFF.jpeg",
    category: "Industry Analysis",
    author: "Ali Kamaly",
    date: "Jun 25, 2025",
    readTime: "11 min read",
    featured: false
  },
  {
    id: 13,
    title: "What's Wire Bonding: How Chips Actually Connect to the World",
    slug: "wire-bonding-semiconductor-packaging-interconnects",
    excerpt: "Behind advanced packaging conversations about 2.5D and 3D ICs, wire bonding remains the most widely used interconnect method. Discover how ultrathin wires create the electrical bridge between silicon dies and the external world.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Wire%20bonding%20in%20semiconductors-AZEM0GsOINMZ37XGpQYFSmJWnaIIsM.jpg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 20, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 12,
    title: "2.5D vs 3D ICs: The Future of Advanced Packaging and Microprocessors vs Microcontrollers",
    slug: "advanced-packaging-2d-3d-ics-microprocessors-microcontrollers",
    excerpt: "As Moore's Law slows, advanced packaging becomes the new performance lever. Explore the differences between 2.5D and 3D ICs, plus understand when to choose microprocessors vs microcontrollers for your next design.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/2.5%20vs%203D%20chips-c8gSuLDBbH9ClljIC489Br4Mho1NAA.jpg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 15, 2025",
    readTime: "12 min read",
    featured: false
  },
  {
    id: 11,
    title: "How Chips Are Made: A Visual Journey Through Semiconductor Manufacturing",
    slug: "how-chips-are-made",
    excerpt: "From bare silicon wafer to powerful microchip—explore the step-by-step semiconductor manufacturing process that combines chemistry, physics, and nanotechnology with zero room for error.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/How%20chips%20are%20made%20-RJigbaZyxUTy8rnIdkPZmCdUwTNXJg.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 10, 2025",
    readTime: "10 min read",
    featured: false
  },
  {
    id: 10,
    title: "What is Yield in Semiconductor Fabs? Understanding the Critical Manufacturing Metric",
    slug: "semiconductor-yield-explained",
    excerpt: "Discover how yield impacts semiconductor manufacturing costs and profitability. Learn why TSMC leads in yield optimization and how companies like Samsung are catching up in advanced nodes.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/Whats%20yeild%20in%20semiconductors-D9Wia6RH2NAmMDP0fikJIgccjVDPFl.jpeg",
    category: "Technology",
    author: "Ali Kamaly",
    date: "Jun 5, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 9,
    title: "Ripples and Tsunamis in the Semiconductor Supply Chain",
    slug: "semiconductor-supply-chain-ripples",
    excerpt: "Data center demand now drives 38% of the global semiconductor market, reshaping every layer of the industry. Explore how pressure points are shifting across the entire value chain.",
    coverImage: "https://9zog2la6l29pbfba.public.blob.vercel-storage.com/blog/semiconductor%20value%20chain-VlFADb0mZLm7bb5VXeSRMG7jA7QE6H.jpeg",
    category: "Industry Analysis",
    author: "Ali Kamaly",
    date: "Jun 1, 2025",
    readTime: "9 min read",
    featured: false
  },
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
    featured: false
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
    coverImage: "/images/AI-powerd Validation.webp",
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

        {/* CTA Section */}
        <section className="relative overflow-hidden py-16 md:py-24 mt-10">
          <div className="container mx-auto px-4 max-w-[1400px] w-full">
            {/* Main rounded container with glassy black background */}
            <div className="relative rounded-3xl overflow-hidden bg-black/60 backdrop-blur-xl border border-white/20">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10" />
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-30" />
              
              <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                  >
                    Ready to transform your{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      validation process?
                    </span>
                  </motion.h2>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-300 leading-relaxed max-w-lg"
                  >
                    Join leading companies who trust Atoms TestFlow to validate their products faster and more efficiently.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link 
                      href="/contact" 
                      onClick={() => trackButtonClick('Get Started', 'Blog CTA', { page: 'blog' })}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2 h-12 px-8 text-lg font-semibold w-fit"
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
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Link>
                    <Link 
                      href="/docs" 
                      onClick={() => trackButtonClick('View Documentation', 'Blog CTA', { page: 'blog' })}
                      className="border-2 border-blue-500/30 hover:border-blue-500/50 hover:bg-blue-500/5 rounded-full transition-all duration-300 flex items-center justify-center gap-2 h-12 px-8 text-lg font-medium w-fit"
                    >
                      View Documentation
                    </Link>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-6 pt-4"
                  >
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>10,000+ Engineers</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Trusted Platform</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Image Container */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center"
                >
                  {/* Image with layered effects like about page */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-[2rem] blur-2xl transform rotate-3" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transform -rotate-3" />
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[1.75rem] transform translate-x-2 translate-y-2" />
                      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-[1.75rem] overflow-hidden border-2 border-white/10 shadow-2xl transform hover:scale-[1.01] transition-transform duration-500">
                        <Image
                          src="/images/TestFlow CTA Image .png"
                          alt="TestFlow Platform Interface"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                      </div>
                    </div>
                    <div className="absolute -top-5 -right-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform">
                      <div className="bg-black rounded-full p-2.5">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
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

              {/* Solutions Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Solutions</h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Startups', href: '/startups' },
                    { label: 'Midmarket', href: '/midmarket' },
                    { label: 'Enterprise', href: '/enterprise' }
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
                    { label: 'TestFlow', href: '#demo' },
                    { label: 'Features', href: '#features' },
                    { label: 'Contact', href: '/contact' }
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