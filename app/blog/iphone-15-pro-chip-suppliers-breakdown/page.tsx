'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, CheckCircle2, ArrowRight, Smartphone, Cpu, Radio, Zap, Building2, Factory, Layers, Target, Network, Battery, Shield, Camera, Headphones, Wifi } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      
      <div className="container mx-auto px-4 relative max-w-[900px] w-full pb-20 pt-20 md:pt-24">
        {/* Back to blog */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to blog
        </Link>

        {/* Article Header */}
        <div className="mb-8">
          <div className="text-purple-500 text-sm font-medium mb-4">
            Industry Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            iPhone 15 Pro Chip Suppliers: The Global Network Behind Apple's Flagship
          </h1>
          
          {/* Article Meta */}
          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span>Ali Kamaly</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Aug 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 min read</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden">
          <Image
            src="https://favikon-medias.s3.eu-west-3.amazonaws.com/m/linkedin_7350494280215416833.jpg"
            alt="iPhone 15 Pro chip suppliers breakdown showing global semiconductor collaboration"
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
            <p className="text-xl text-gray-300 mb-6">
              The iPhone 15 Pro isn't just an Apple product—it's a masterpiece of global semiconductor collaboration. Behind Apple's sleek design lies a complex network of over 10 specialized chip suppliers, each contributing critical components that make the device work seamlessly. This teardown reveals the hidden semiconductor ecosystem powering one of the world's most popular smartphones.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>10+ global semiconductor suppliers in one device</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Complex supply chain across 3 main boards</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>Specialized chips for every major function</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                <span>TestFlow validates similar complex chip designs</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Architecture: Three Boards, Countless Innovations</h2>
          <p>
            The iPhone 15 Pro's sophisticated design distributes functionality across three main circuit boards, each optimized for specific functions and housing chips from different semiconductor specialists. This modular approach enables optimal performance while managing thermal and electrical constraints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Cpu className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Logic Board</h4>
              </div>
              <p className="text-gray-300 mb-2">The computational heart of the device</p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• Apple A17 Pro processor</li>
                <li>• Power management ICs</li>
                <li>• Audio processing</li>
                <li>• Wireless charging</li>
                <li>• Motion sensors</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-green-500/10 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold">Memory Board</h4>
              </div>
              <p className="text-gray-300 mb-2">High-speed storage and display management</p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• 256GB NAND flash storage</li>
                <li>• Display power management</li>
                <li>• Audio amplification</li>
                <li>• NFC secure elements</li>
                <li>• Additional power regulation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-center gap-2 mb-3">
                <Radio className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">RF Board</h4>
              </div>
              <p className="text-gray-300 mb-2">Connectivity and communication hub</p>
              <ul className="space-y-1 text-gray-400 text-sm">
                <li>• 5G modem and transceivers</li>
                <li>• RF front-end modules</li>
                <li>• Filters and amplifiers</li>
                <li>• NFC controllers</li>
                <li>• Security microcontrollers</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Logic Board: The Computational Powerhouse</h2>
          <p>
            The logic board houses the iPhone 15 Pro's most critical processing components, combining Apple's custom silicon with specialized chips from leading semiconductor suppliers.
          </p>

          <div className="my-12 space-y-6">
            {/* Apple A17 Pro */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-blue-400 mb-2">Apple A17 Pro Processor (Apple/TSMC)</h4>
                  <p className="text-gray-300 mb-4">
                    Apple's custom-designed system-on-chip, manufactured by TSMC using their advanced 3nm process. This chip integrates CPU, GPU, Neural Engine, and memory controllers into a single, highly optimized package.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-400 text-sm mb-1">Key Features</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• 6-core CPU (2P + 4E cores)</li>
                        <li>• 6-core GPU with ray tracing</li>
                        <li>• 16-core Neural Engine</li>
                        <li>• Advanced ISP for cameras</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400 text-sm mb-1">Manufacturing</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• TSMC 3nm process (N3B)</li>
                        <li>• 19 billion transistors</li>
                        <li>• Advanced packaging technology</li>
                        <li>• Optimized for power efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Broadcom */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-6 rounded-xl border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-purple-400 mb-2">Broadcom: Wireless Infrastructure</h4>
                  <p className="text-gray-300 mb-4">
                    Broadcom supplies critical wireless components including the wireless charging receiver that enables MagSafe functionality and various RF components throughout the device.
                  </p>
                  <div className="text-purple-400 text-sm">
                    <strong>Specialization:</strong> Wireless charging, RF front-end modules, connectivity solutions
                  </div>
                </div>
              </div>
            </div>

            {/* SK Hynix */}
            <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-green-400 mb-2">SK Hynix: High-Performance Memory</h4>
                  <p className="text-gray-300 mb-4">
                    SK Hynix provides the 8GB LPDDR5 DRAM that enables the iPhone 15 Pro's multitasking capabilities and supports the demanding memory requirements of the A17 Pro processor and advanced camera features.
                  </p>
                  <div className="text-green-400 text-sm">
                    <strong>Technology:</strong> LPDDR5 DRAM optimized for mobile applications and power efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Memory Board: Storage and Display Management</h2>
          <p>
            The memory board focuses on high-capacity storage and display power management, featuring components from leading memory and power management specialists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Factory className="w-5 h-5 text-orange-400" />
                <h4 className="font-semibold">Kioxia: Flash Storage Leader</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Kioxia (formerly Toshiba Memory) supplies the 256GB NAND flash memory that stores the iPhone's operating system, applications, photos, and user data. This high-density storage enables the device's extensive multimedia capabilities.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Type:</span>
                  <span className="text-orange-400">3D NAND Flash</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Capacity:</span>
                  <span className="text-orange-400">256GB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Technology:</span>
                  <span className="text-orange-400">Advanced 3D stacking</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Headphones className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Cirrus Logic: Audio Excellence</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Cirrus Logic provides both the audio codec and amplifier systems that deliver the iPhone 15 Pro's high-quality audio experience, from calls to music playback to spatial audio processing.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-400">Function:</span>
                  <span className="text-blue-400">Audio codec & amplifier</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Features:</span>
                  <span className="text-blue-400">High-fidelity processing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Applications:</span>
                  <span className="text-blue-400">Calls, music, spatial audio</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">RF Board: The Connectivity Hub</h2>
          <p>
            The radio frequency board manages all wireless communications, from 5G cellular connectivity to NFC payments. This board showcases some of the most advanced RF semiconductor technology available.
          </p>

          <div className="my-12 space-y-6">
            {/* Qualcomm */}
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-6 rounded-xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                  <Radio className="w-6 h-6 text-red-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-red-400 mb-2">Qualcomm: 5G Modem and RF Transceivers</h4>
                  <p className="text-gray-300 mb-4">
                    Despite Apple's efforts to develop in-house modems, Qualcomm continues to provide the critical 5G modem and RF transceiver components that enable the iPhone 15 Pro's advanced cellular connectivity across global networks.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-red-400 text-sm mb-1">5G Capabilities</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Sub-6GHz and mmWave support</li>
                        <li>• Global carrier compatibility</li>
                        <li>• Advanced MIMO technology</li>
                        <li>• Power-optimized design</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-red-400 text-sm mb-1">RF Performance</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>• Multi-band operation</li>
                        <li>• Carrier aggregation</li>
                        <li>• Enhanced signal processing</li>
                        <li>• Thermal management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RF Front-End Suppliers */}
            <div className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 p-6 rounded-xl border border-orange-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center flex-shrink-0">
                  <Network className="w-6 h-6 text-orange-400" />
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg text-orange-400 mb-2">Skyworks & Qorvo: RF Front-End Mastery</h4>
                  <p className="text-gray-300 mb-4">
                    These specialized RF companies provide the sophisticated filters, amplifiers, and front-end modules that enable the iPhone's multi-band cellular and Wi-Fi performance. Their components ensure clean signal transmission and reception across all supported frequency bands.
                  </p>
                  <div className="text-orange-400 text-sm">
                    <strong>Expertise:</strong> RF filters, power amplifiers, antenna tuning, signal conditioning
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Power Management: The Unsung Heroes</h2>
          <p>
            Multiple companies contribute to the iPhone 15 Pro's sophisticated power management system, ensuring optimal battery life and thermal performance across all operating conditions.
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white/5 rounded-xl overflow-hidden border border-white/10">
              <thead>
                <tr className="bg-white/10">
                  <th className="py-3 px-4 text-left">Company</th>
                  <th className="py-3 px-4 text-left">Component</th>
                  <th className="py-3 px-4 text-left">Function</th>
                  <th className="py-3 px-4 text-left">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Texas Instruments</td>
                  <td className="py-3 px-4 text-gray-400">USB Interface & PMIC</td>
                  <td className="py-3 px-4">Power regulation and USB-C management</td>
                  <td className="py-3 px-4">Logic Board</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Texas Instruments</td>
                  <td className="py-3 px-4 text-gray-400">AMOLED Power Supply</td>
                  <td className="py-3 px-4">Display power management</td>
                  <td className="py-3 px-4">Memory Board</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">Renesas</td>
                  <td className="py-3 px-4 text-gray-400">Power Management ICs</td>
                  <td className="py-3 px-4">Voltage regulation and power distribution</td>
                  <td className="py-3 px-4">Logic Board</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="py-3 px-4 font-medium">STMicroelectronics</td>
                  <td className="py-3 px-4 text-gray-400">Power Management ICs</td>
                  <td className="py-3 px-4">Additional power regulation</td>
                  <td className="py-3 px-4">Logic Board</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-8">
            "No smartphone is truly built by one company. Your iPhone 15 is a collaboration between over 10 global chip suppliers, each specializing in RF, memory, power management, or logic."
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">Specialized Functions: Sensors and Security</h2>
          <p>
            Beyond the primary processing and connectivity components, the iPhone 15 Pro incorporates numerous specialized chips that enable advanced features and security functions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">Motion and Environmental Sensing</h4>
              </div>
              <p className="text-gray-400 mb-4">
                Bosch provides the MEMS accelerometer and gyroscope that enable features like screen rotation, step counting, and camera stabilization. These sensors are critical for the iPhone's spatial awareness and user interface responsiveness.
              </p>
              <div className="space-y-1 text-gray-400 text-sm">
                <li>• 3-axis accelerometer for motion detection</li>
                <li>• 3-axis gyroscope for orientation</li>
                <li>• High precision for camera stabilization</li>
                <li>• Low power consumption design</li>
              </div>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Security and NFC</h4>
              </div>
              <p className="text-gray-400 mb-4">
                NXP supplies both the NFC controller that enables Apple Pay and contactless interactions, as well as secure elements that protect sensitive data and cryptographic operations.
              </p>
              <div className="space-y-1 text-gray-400 text-sm">
                <li>• NFC controller for payments and data transfer</li>
                <li>• Secure element for cryptographic functions</li>
                <li>• Hardware-based security features</li>
                <li>• Compliance with payment industry standards</li>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Supply Chain Complexity: Global Semiconductor Collaboration</h2>
          <p>
            The iPhone 15 Pro's chip supplier network spans multiple continents and represents the pinnacle of global semiconductor collaboration. Each supplier brings decades of specialized expertise:
          </p>

          <div className="my-12 rounded-xl overflow-hidden border border-white/10">
            <div className="relative aspect-[16/9]">
              <Image
                src="/images/TestFlow slide 1 .webp"
                alt="TestFlow platform supporting complex semiconductor supply chains like iPhone 15 Pro"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 py-4 px-6">
              <h3 className="text-lg font-bold">TestFlow: Validating Complex Supply Chains</h3>
              <p className="text-gray-400 text-sm">AI-powered validation platform that helps companies like these suppliers ensure their chips work perfectly in complex multi-vendor systems</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20 my-8">
            <h3 className="text-xl font-bold mb-4">Geographic Distribution of iPhone 15 Pro Suppliers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-400 mb-3">Asia-Pacific Region</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>South Korea:</strong> SK Hynix (memory)</li>
                  <li>• <strong>Japan:</strong> Kioxia (storage), Renesas (power)</li>
                  <li>• <strong>Taiwan:</strong> TSMC (A17 Pro manufacturing)</li>
                  <li>• <strong>Germany:</strong> Bosch (sensors)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-3">Americas & Europe</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>United States:</strong> Apple (design), Broadcom, Qualcomm, TI, Cirrus Logic</li>
                  <li>• <strong>Netherlands:</strong> NXP (security & NFC)</li>
                  <li>• <strong>Switzerland:</strong> STMicroelectronics (power management)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Validation Challenges: Testing Multi-Vendor Integration</h2>
          <p>
            Creating a device like the iPhone 15 Pro requires extensive validation to ensure that chips from different suppliers work together seamlessly. This presents unique challenges for testing and validation teams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Network className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Inter-Chip Communication</h4>
              </div>
              <p className="text-gray-400">
                Validating communication protocols between chips from different vendors requires sophisticated testing approaches that can verify signal integrity, timing relationships, and protocol compliance.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Battery className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">Power Management Integration</h4>
              </div>
              <p className="text-gray-400">
                Coordinating power management across multiple PMICs from different suppliers requires careful validation of power sequencing, voltage regulation, and thermal management.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold">System-Level Validation</h4>
              </div>
              <p className="text-gray-400">
                Ensuring that all components work together as a cohesive system requires comprehensive testing that goes beyond individual chip validation to system-level integration testing.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">The Economics of Smartphone Semiconductor Integration</h2>
          <p>
            The iPhone 15 Pro's semiconductor bill of materials (BOM) represents a significant portion of the device's total cost, with each supplier capturing value through their specialized expertise:
          </p>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-green-500/20 my-8">
            <h3 className="text-xl font-bold mb-4">Estimated Semiconductor BOM Breakdown</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">A17 Pro Processor (Apple/TSMC)</span>
                <span className="text-green-400 font-semibold">~$40-50</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">5G Modem & RF (Qualcomm)</span>
                <span className="text-blue-400 font-semibold">~$25-30</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Memory (SK Hynix, Kioxia)</span>
                <span className="text-purple-400 font-semibold">~$20-25</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">RF Front-End (Broadcom, Skyworks, Qorvo)</span>
                <span className="text-orange-400 font-semibold">~$15-20</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Power Management (TI, Renesas, STMicro)</span>
                <span className="text-yellow-400 font-semibold">~$10-15</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Audio & Sensors (Cirrus Logic, Bosch)</span>
                <span className="text-cyan-400 font-semibold">~$8-12</span>
              </div>
              <div className="flex items-center justify-between border-t border-white/20 pt-4">
                <span className="text-white font-semibold">Total Semiconductor Content</span>
                <span className="text-green-400 font-bold">~$118-152</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Lessons for the Semiconductor Industry</h2>
          <p>
            The iPhone 15 Pro's supplier network offers valuable insights for the broader semiconductor industry:
          </p>

          <ul className="space-y-3 my-8">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Specialization Wins:</strong> Each supplier focuses on their core competency rather than trying to do everything</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Integration Complexity:</strong> Success requires sophisticated system-level design and validation</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Global Collaboration:</strong> No single country or region can provide all necessary capabilities</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-1" />
              <span><strong>Validation Critical:</strong> Multi-vendor systems require comprehensive testing to ensure reliability</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-300 my-8">
            "From Broadcom's wireless chips to SK hynix's memory and Qualcomm's modems, it's a complex supply chain that makes the device work. The iPhone 15 is a testament to global semiconductor collaboration."
          </blockquote>

          <h2 className="text-2xl font-bold mb-4">The Future of Smartphone Semiconductor Integration</h2>
          <p>
            As smartphones continue to evolve, several trends will shape the future of semiconductor integration in mobile devices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Increased Integration</h4>
              </div>
              <p className="text-gray-400">
                Apple and other OEMs are working to integrate more functions into their main processors, potentially reducing the number of discrete components while improving performance and power efficiency.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Camera className="w-5 h-5 text-green-400" />
                <h4 className="font-semibold">AI at the Edge</h4>
              </div>
              <p className="text-gray-400">
                Advanced AI capabilities are moving to dedicated neural processing units and specialized accelerators, requiring new validation approaches for machine learning workloads.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Conclusion: The Symphony of Silicon</h2>
          <p>
            The iPhone 15 Pro represents the pinnacle of global semiconductor collaboration, showcasing how specialized companies can work together to create products that exceed what any single company could achieve alone. From Apple's custom A17 Pro to Qualcomm's 5G modems, each component represents years of research, development, and optimization.
          </p>

          <p>
            This complex integration also highlights the critical importance of comprehensive validation and testing. As devices become more sophisticated and incorporate chips from multiple suppliers, ensuring seamless operation requires advanced testing methodologies that can validate both individual components and system-level interactions.
          </p>

          <p>
            The success of devices like the iPhone 15 Pro demonstrates that the future of semiconductors lies not in vertical integration by single companies, but in sophisticated collaboration between specialized leaders, each contributing their unique expertise to create extraordinary products.
          </p>

          <div className="mt-12 p-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-4">Validate Your Multi-Vendor Designs</h3>
            <p className="text-gray-300 mb-6">
              Creating products with chips from multiple suppliers requires sophisticated validation approaches. TestFlow's AI-powered platform helps ensure seamless integration and system-level reliability, just like the complex designs powering today's most advanced devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 rounded-full px-6 py-3 text-center font-medium transition-all duration-300"
              >
                Schedule a Demo
              </Link>
              <Link 
                href="/" 
                className="border border-blue-500/30 hover:bg-blue-500/5 rounded-full px-6 py-3 text-center font-medium transition-all duration-300"
              >
                Learn More About TestFlow
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
