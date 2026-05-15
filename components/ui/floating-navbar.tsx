"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { trackEvent, trackExternalLink } from "@/components/analytics-tracker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const FloatingNav = ({
  navItems,
  solutionItems,
  resourceItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  solutionItems: any[];
  resourceItems: any;
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Add timeout refs for delayed dropdown closing
  const resourcesTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Always visible - no scroll-based hiding
  React.useEffect(() => {
    setVisible(true);
  }, []);


  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
      resourcesTimeoutRef.current = null;
    }
    setIsResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = setTimeout(() => {
      setIsResourcesOpen(false);
    }, 150);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
        className={cn(
          "hidden md:flex fixed top-6 inset-x-0 mx-auto border border-white/20 rounded-2xl bg-black/5 backdrop-blur-3xl shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.1),inset_0_0_12px_rgba(255,255,255,0.1)] z-[5000] px-8 py-3 items-center justify-between max-w-6xl w-full",
          className
        )}
      >
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          TestFlow
        </Link>

        {/* Navigation Items - Moved right with flex-1 and justify-center */}
        <div className="flex-1 flex items-center justify-center space-x-6 ml-16">
          {/* Resources Dropdown */}
          <DropdownMenu open={isResourcesOpen} onOpenChange={setIsResourcesOpen}>
            <div
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
              className="relative"
            >
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white transition-colors group">
                Resources
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </DropdownMenuTrigger>
              {/* Invisible bridge */}
              {isResourcesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-[140px] h-8 bottom-0 translate-y-full z-50 bg-transparent"
                  onMouseEnter={handleResourcesMouseEnter}
                ></div>
              )}
            </div>
            <DropdownMenuContent
              className="w-[700px] mt-4 bg-black/5 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-[0px_4px_24px_-1px_rgba(0,0,0,0.1),inset_0_0_12px_rgba(255,255,255,0.1)]"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
              align="center"
              style={{
                position: 'fixed',
                left: '50%',
                transform: 'translateX(-40%)',
                top: '10px'
              }}
            >
              <div className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  {/* Company Section */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Company</h3>
                    <div className="space-y-2">
                      {resourceItems.company.map((item: any) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => trackEvent('nav_click', { item: item.label, section: 'resources_company' })}
                            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/[0.03] border border-transparent hover:border-white/10 group/item"
                          >
                            <div className="p-1 rounded-md bg-white/10">
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-white group-hover/item:text-gray-300 transition-colors">
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 text-[10px] bg-white/10 text-white rounded-full border border-white/20">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Learn Section */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Learn</h3>
                    <div className="space-y-2">
                      {resourceItems.learn.map((item: any) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => trackEvent('nav_click', { item: item.label, section: 'resources_learn' })}
                            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/[0.03] border border-transparent hover:border-white/10 group/item"
                          >
                            <div className="p-1 rounded-md bg-white/10">
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-white group-hover/item:text-gray-300 transition-colors">
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 text-[10px] bg-white/10 text-white rounded-full border border-white/20">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Discover Section */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-300 mb-3 uppercase tracking-wider">Discover</h3>
                    <div className="space-y-2">
                      {resourceItems.discover.map((item: any) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => trackEvent('nav_click', { item: item.label, section: 'resources_discover' })}
                            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:bg-white/[0.03] border border-transparent hover:border-white/10 group/item"
                          >
                            <div className="p-1 rounded-md bg-white/10">
                              <Icon className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-white group-hover/item:text-gray-300 transition-colors">
                                  {item.label}
                                </span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 text-[10px] bg-white/10 text-white rounded-full border border-white/20">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* TestFlow Link Removed */}


          {/* Pricing Link */}
          <Link
            href="/pricing"
            onClick={() => trackEvent('nav_click', { item: 'Pricing', section: 'main_nav' })}
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Pricing
          </Link>

          {/* Blog Link */}
          <Link
            href="/blog"
            onClick={() => trackEvent('nav_click', { item: 'Blog', section: 'main_nav' })}
            className="text-sm text-neutral-300 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="https://app.testflowinc.com/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackExternalLink('https://app.testflowinc.com/sign-in', 'Login')}
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Button asChild size="sm">
            <Link
              href="/contact"
              className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-4 py-2 text-sm transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Book a demo
              <ArrowRight className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
