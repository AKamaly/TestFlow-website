'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, ArrowRight, Cable, Terminal, Activity, Gauge, Download, Code2, BookOpen, Layers, CheckCircle2, Workflow, FileBarChart, Sparkles, Linkedin, Twitter, Facebook } from 'lucide-react'
import { RainbowButton } from '@/components/ui/rainbow-button'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BlogPostLayout } from "@/components/blog-post-layout"

const TOC_ITEMS = [
    { id: 'what-you-need', label: 'What You Need' },
    { id: 'step-1', label: 'Step 1: Install & Connect' },
    { id: 'step-2', label: 'Step 2: Configure via SCPI' },
    { id: 'step-3', label: 'Step 3: Capture Waveform Data' },
    { id: 'step-4', label: 'Step 4: Automated Measurements' },
    { id: 'step-5', label: 'Step 5: Export Data' },
    { id: 'reusable-class', label: 'Reusable Scope Class' },
    { id: 'scpi-reference', label: 'Quick SCPI Reference' },
    { id: 'scripts-stop-scaling', label: 'When Scripts Stop Scaling' },
    { id: 'testflow-showcase', label: 'What TestFlow Replaces' },
    { id: 'summary', label: 'Summary' },
] as const

export default function BlogPost() {
    const [activeId, setActiveId] = useState<string>(TOC_ITEMS[0].id)

    // Scrollspy: highlight active TOC item based on which section is in view.
    useEffect(() => {
        const sections = TOC_ITEMS
            .map(({ id }) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)

        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry closest to the top of the viewport that is intersecting
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
                if (visible[0]) {
                    setActiveId(visible[0].target.id)
                }
            },
            {
                rootMargin: '-120px 0px -65% 0px',
                threshold: 0,
            }
        )

        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    return (
        <BlogPostLayout>
            <SiteHeader />

            {/* Dark backdrop behind the floating navbar — only on this blog post.
                Matches FloatingNav's fixed top-6, max-w-6xl, mx-auto, z-[5000] minus 1. */}
            <div
                aria-hidden
                className="hidden md:block fixed top-6 inset-x-0 mx-auto max-w-6xl h-[52px] rounded-2xl bg-zinc-950 z-[4999] pointer-events-none"
            />

            {/* White-theme page wrapper */}
            <div className="blog-white-theme bg-white text-gray-900">

            <div className="container mx-auto px-4 relative max-w-[1200px] w-full pb-20 pt-32 md:pt-40">
                {/* Back to blog */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to blog
                </Link>

                {/* Article Header (constrained width) */}
                <div className="mb-8 max-w-[900px]">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="inline-block w-6 h-6 rounded-full overflow-hidden">
                                <Image src="/images/Alikamaly-photo.webp" alt="Ali Kamaly" width={24} height={24} className="w-full h-full object-cover" />
                            </span>
                            <span>Ali Kamaly</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>May 11, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>13 min read</span>
                        </div>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 mb-4">
                        Instrument Automation
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 leading-[1.15] tracking-tight">
                        How to Automate a Tektronix Oscilloscope with Python (SCPI + PyVISA Guide for 2026)
                    </h1>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        Stop configuring your scope by hand. Here&apos;s exactly how to control any Tektronix oscilloscope remotely, capture waveform data automatically, and plug it into a real validation workflow.
                    </p>
                </div>

                {/* Featured Image (full content width) */}
                <div className="relative w-full mb-12 rounded-xl overflow-hidden">
                    <Image
                        src="/blog/Automate-Tektronix .svg"
                        alt="Automating a Tektronix oscilloscope with Python, SCPI, and PyVISA"
                        width={1600}
                        height={900}
                        className="w-full h-auto block"
                        priority
                    />
                </div>

                {/* Two-column layout: article on left, sticky rail on right */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

                {/* Article Content */}
                <div className="prose max-w-none lg:col-span-2 min-w-0">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                            If you&apos;ve ever run the same oscilloscope measurement 40 times across a voltage sweep, you already know why this matters.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                            Tektronix oscilloscopes are on more validation benches than any other brand in the world. The MSO4, MSO5, MSO6, TBS2000, MDO3000, they&apos;re excellent instruments. They&apos;re also entirely manual unless you tell them otherwise.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed mb-6">
                            Every waveform capture, every timebase adjustment, every trigger configuration: by default, that&apos;s a human at the front panel. Multiply that by the number of test points in a real chip validation plan and you&apos;ve just identified where most of your validation cycle time is going.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed">
                            The fix is <strong>SCPI over VISA</strong>. Every modern Tektronix scope supports remote control via USB, LAN, or GPIB. You can automate the entire measurement sequence with Python and PyVISA, configuration, acquisition, data export, and all.
                        </p>
                        <p className="text-base text-gray-700 leading-relaxed mt-6">
                            This guide shows you exactly how to do it, from first connection to a reusable class you can drop into a real workflow.
                        </p>
                    </div>

                    {/* What You Need */}
                    <section id="what-you-need" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Cable className="w-6 h-6 text-gray-600" />
                            What You Need Before You Start
                        </h2>

                        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-900">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Component</th>
                                        <th className="px-6 py-4 font-semibold">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Oscilloscope</td>
                                        <td className="px-6 py-4">Any Tektronix scope with VISA support: MSO4/5/6 Series, MDO3000/4000, TBS2000, DPO5000/7000</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Interface</td>
                                        <td className="px-6 py-4">USB-TMC (easiest), LAN/VXI-11, or GPIB</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">VISA Backend</td>
                                        <td className="px-6 py-4">NI-VISA (recommended) or pyvisa-py (pure Python, no NI install required)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Python Libraries</td>
                                        <td className="px-6 py-4"><code className="text-gray-900">pyvisa</code>, <code className="text-gray-900">numpy</code>, <code className="text-gray-900">matplotlib</code></td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">SCPI Reference</td>
                                        <td className="px-6 py-4">Tektronix Programmer Manual for your model (free PDF from tek.com)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Step 1 */}
                    <section id="step-1" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Terminal className="w-6 h-6 text-gray-600" />
                            Step 1: Install PyVISA and Connect to the Scope
                        </h2>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`pip install pyvisa pyvisa-py numpy matplotlib`}</code></pre>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`import pyvisa

rm = pyvisa.ResourceManager()

# List all connected VISA instruments
print(rm.list_resources())
# Output example: ('USB0::0x0699::0x0527::C012345::INSTR',)

# Connect to oscilloscope
scope = rm.open_resource('USB0::0x0699::0x0527::C012345::INSTR')
scope.timeout = 10000  # 10s timeout, important for slow acquisitions

# Verify connection
print(scope.query('*IDN?'))
# Expected: TEKTRONIX,MSO64,C012345,CF:91.1CT FV:...`}</code></pre>

                        <p className="text-gray-700 leading-relaxed">
                            If <code className="text-gray-900">*IDN?</code> returns your instrument model and serial number, you are connected. If you get a timeout, check that NI-VISA is installed and that the USB driver for the scope is loaded. On Windows, Tektronix scopes use a USB-TMC driver that ships with NI-VISA. On Linux, the kernel handles it natively.
                        </p>
                    </section>

                    {/* Step 2 */}
                    <section id="step-2" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Code2 className="w-6 h-6 text-gray-600" />
                            Step 2: Configure the Oscilloscope via SCPI
                        </h2>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            SCPI (Standard Commands for Programmable Instruments) maps every front-panel control to a text command. Here is a complete configuration block for a 3.3V power rail measurement, the kind of setup you&apos;d use during power-on characterization or a bring-up validation sequence:
                        </p>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`# Reset to known state, always start here
scope.write('*RST')
scope.write('*CLS')

# Channel 1: 3.3V power rail, DC-coupled
scope.write('CH1:COUPLING DC')
scope.write('CH1:SCALE 1.0')           # 1V/div, 3.3V fits in 4 divs
scope.write('CH1:POSITION -1.5')       # Shift down to center on display
scope.write('CH1:BANDWIDTH FULL')
scope.write('SELECT:CH1 ON')

# Timebase: 100us/div for power-on transient
scope.write('HORIZONTAL:SCALE 100E-6')
scope.write('HORIZONTAL:POSITION 10')  # Trigger at 10% from left edge

# Trigger: rising edge on CH1 at 1.0V
scope.write('TRIGGER:A:TYPE EDGE')
scope.write('TRIGGER:A:EDGE:SOURCE CH1')
scope.write('TRIGGER:A:EDGE:SLOPE RISE')
scope.write('TRIGGER:A:LEVEL 1.0')
scope.write('TRIGGER:A:MODE NORMAL')

# Acquisition: 16-point average for noise reduction
scope.write('ACQUIRE:MODE AVERAGE')
scope.write('ACQUIRE:NUMAVG 16')
scope.write('ACQUIRE:STOPAFTER SEQUENCE')`}</code></pre>

                        <div className="border-l-4 border-gray-900 bg-gray-50 rounded-r-xl p-6">
                            <p className="text-gray-800 leading-relaxed">
                                <strong className="text-gray-900">Always start with <code className="text-gray-900">*RST</code>.</strong> Scopes accumulate state from previous sessions. Front panel settings, previous trigger configurations, partial acquisitions, they all persist across power cycles. A cold reset before every automated sequence is not optional; it&apos;s the difference between reproducible measurements and mysterious failures at 2am.
                            </p>
                        </div>
                    </section>

                    {/* Step 3 */}
                    <section id="step-3" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Activity className="w-6 h-6 text-gray-600" />
                            Step 3: Capture and Scale Waveform Data
                        </h2>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`import numpy as np

# Arm and wait for acquisition
scope.write('ACQUIRE:STATE RUN')
scope.query('*OPC?')  # Blocks until acquisition completes

# Configure data transfer
scope.write('DATA:SOURCE CH1')
scope.write('DATA:ENCDG RIBINARY')    # Binary is 10x faster than ASCII
scope.write('DATA:WIDTH 2')            # 16-bit samples
scope.write('DATA:START 1')
scope.write('DATA:STOP 10000')

# Read scaling factors before reading data
x_increment  = float(scope.query('WFMPRE:XINCR?'))
x_zero       = float(scope.query('WFMPRE:XZERO?'))
y_multiplier = float(scope.query('WFMPRE:YMULT?'))
y_zero       = float(scope.query('WFMPRE:YZERO?'))
y_offset     = float(scope.query('WFMPRE:YOFF?'))

# Read raw binary waveform
raw = scope.query_binary_values('CURVE?', datatype='h', is_big_endian=True)

# Convert to physical units
voltage = (np.array(raw) - y_offset) * y_multiplier + y_zero
time    = x_zero + x_increment * np.arange(len(voltage))

print(f"Samples: {len(voltage)}")
print(f"Voltage range: {voltage.min():.3f}V to {voltage.max():.3f}V")`}</code></pre>

                        <div className="border-l-4 border-gray-900 bg-gray-50 rounded-r-xl p-6">
                            <p className="text-gray-700 leading-relaxed">
                                <strong className="text-gray-900">Note:</strong> read the scaling factors (<code className="text-gray-900">XINCR</code>, <code className="text-gray-900">YMULT</code>, etc.) <em>before</em> reading the waveform data. If you read waveform data first and then query scaling, there is a race condition in some firmware versions that returns stale scaling values.
                            </p>
                        </div>
                    </section>

                    {/* Step 4 */}
                    <section id="step-4" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Gauge className="w-6 h-6 text-gray-600" />
                            Step 4: Query Automated Measurements
                        </h2>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            For validation purposes, querying the scope&apos;s built-in measurement engine is faster and more accurate than computing values from raw waveform arrays:
                        </p>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`# Set up measurements on CH1
measurements = {
    'MEAS1': 'AMPLITUDE',
    'MEAS2': 'FREQUENCY',
    'MEAS3': 'RISETIME',
    'MEAS4': 'OVERSHOOT',
    'MEAS5': 'PERIOD',
}

for meas_id, meas_type in measurements.items():
    scope.write(f'MEASUREMENT:{meas_id}:SOURCE CH1')
    scope.write(f'MEASUREMENT:{meas_id}:TYPE {meas_type}')

# Acquire
scope.write('ACQUIRE:STATE RUN')
scope.query('*OPC?')

# Read results
results = {}
for meas_id, meas_type in measurements.items():
    value = float(scope.query(f'MEASUREMENT:{meas_id}:VALUE?'))
    results[meas_type] = value

print(f"Amplitude:  {results['AMPLITUDE']:.4f} V")
print(f"Frequency:  {results['FREQUENCY']/1e6:.4f} MHz")
print(f"Rise Time:  {results['RISETIME']*1e9:.2f} ns")
print(f"Overshoot:  {results['OVERSHOOT']:.2f} %")`}</code></pre>
                    </section>

                    {/* Step 5 */}
                    <section id="step-5" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Download className="w-6 h-6 text-gray-600" />
                            Step 5: Export Data and Screenshots
                        </h2>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`from datetime import datetime
import csv

# Save waveform to CSV
timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
csv_filename = f'waveform_ch1_{timestamp}.csv'

with open(csv_filename, 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Time_s', 'Voltage_V'])
    writer.writerows(zip(time, voltage))

# Save screenshot
scope.write('SAVE:IMAGE:FILEFORMAT PNG')
scope.write('HARDCOPY START')
raw_image = scope.read_raw()

with open(f'scope_capture_{timestamp}.png', 'wb') as f:
    f.write(raw_image)

print(f"Exported: {csv_filename}")`}</code></pre>
                    </section>

                    {/* Reusable Class */}
                    <section id="reusable-class" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <Layers className="w-6 h-6 text-gray-600" />
                            Reusable Tektronix Scope Class
                        </h2>

                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Here is a clean class you can import into any validation script:
                        </p>

                        <pre className="bg-gray-900 border border-gray-200 rounded-xl p-5 overflow-x-auto text-sm text-gray-100 mb-6"><code>{`import pyvisa
import numpy as np
import csv
from datetime import datetime

class TektronixScope:
    def __init__(self, resource_address, timeout=10000):
        rm = pyvisa.ResourceManager()
        self.inst = rm.open_resource(resource_address)
        self.inst.timeout = timeout
        self.idn = self.inst.query('*IDN?').strip()
        print(f"Connected: {self.idn}")

    def reset(self):
        self.inst.write('*RST')
        self.inst.write('*CLS')

    def configure_channel(self, ch, scale_v, coupling='DC', bw='FULL'):
        self.inst.write(f'CH{ch}:SCALE {scale_v}')
        self.inst.write(f'CH{ch}:COUPLING {coupling}')
        self.inst.write(f'CH{ch}:BANDWIDTH {bw}')
        self.inst.write(f'SELECT:CH{ch} ON')

    def set_timebase(self, scale_s):
        self.inst.write(f'HORIZONTAL:SCALE {scale_s}')

    def set_trigger(self, ch, level_v, slope='RISE'):
        self.inst.write('TRIGGER:A:TYPE EDGE')
        self.inst.write(f'TRIGGER:A:EDGE:SOURCE CH{ch}')
        self.inst.write(f'TRIGGER:A:EDGE:SLOPE {slope}')
        self.inst.write(f'TRIGGER:A:LEVEL {level_v}')

    def measure(self, ch, meas_type):
        self.inst.write(f'MEASUREMENT:MEAS1:SOURCE CH{ch}')
        self.inst.write(f'MEASUREMENT:MEAS1:TYPE {meas_type}')
        self.inst.write('ACQUIRE:STATE RUN')
        self.inst.query('*OPC?')
        return float(self.inst.query('MEASUREMENT:MEAS1:VALUE?'))

    def save_csv(self, filename, time_arr, voltage_arr):
        with open(filename, 'w', newline='') as f:
            writer = csv.writer(f)
            writer.writerow(['Time_s', 'Voltage_V', 'Captured'])
            ts = datetime.now().isoformat()
            writer.writerows([[t, v, ts] for t, v in zip(time_arr, voltage_arr)])

    def close(self):
        self.inst.close()`}</code></pre>
                    </section>

                    {/* Quick Reference */}
                    <section id="scpi-reference" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-gray-600" />
                            Quick SCPI Reference: Tektronix Oscilloscopes
                        </h2>

                        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-900">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Action</th>
                                        <th className="px-6 py-4 font-semibold">SCPI Command</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 divide-y divide-gray-200">
                                    <tr><td className="px-6 py-3">Identify instrument</td><td className="px-6 py-3"><code className="text-gray-900">*IDN?</code></td></tr>
                                    <tr><td className="px-6 py-3">Reset to defaults</td><td className="px-6 py-3"><code className="text-gray-900">*RST</code></td></tr>
                                    <tr><td className="px-6 py-3">CH1 vertical scale</td><td className="px-6 py-3"><code className="text-gray-900">CH1:SCALE &lt;V/div&gt;</code></td></tr>
                                    <tr><td className="px-6 py-3">CH1 coupling</td><td className="px-6 py-3"><code className="text-gray-900">CH1:COUPLING &#123;DC|AC|GND&#125;</code></td></tr>
                                    <tr><td className="px-6 py-3">Set timebase</td><td className="px-6 py-3"><code className="text-gray-900">HORIZONTAL:SCALE &lt;sec/div&gt;</code></td></tr>
                                    <tr><td className="px-6 py-3">Trigger level</td><td className="px-6 py-3"><code className="text-gray-900">TRIGGER:A:LEVEL &lt;volts&gt;</code></td></tr>
                                    <tr><td className="px-6 py-3">Trigger slope</td><td className="px-6 py-3"><code className="text-gray-900">TRIGGER:A:EDGE:SLOPE &#123;RISE|FALL&#125;</code></td></tr>
                                    <tr><td className="px-6 py-3">Single acquisition</td><td className="px-6 py-3"><code className="text-gray-900">ACQUIRE:STOPAFTER SEQUENCE</code></td></tr>
                                    <tr><td className="px-6 py-3">Run acquisition</td><td className="px-6 py-3"><code className="text-gray-900">ACQUIRE:STATE RUN</code></td></tr>
                                    <tr><td className="px-6 py-3">Wait for complete</td><td className="px-6 py-3"><code className="text-gray-900">*OPC?</code></td></tr>
                                    <tr><td className="px-6 py-3">Set data source</td><td className="px-6 py-3"><code className="text-gray-900">DATA:SOURCE CH&#123;n&#125;</code></td></tr>
                                    <tr><td className="px-6 py-3">Read waveform</td><td className="px-6 py-3"><code className="text-gray-900">CURVE?</code></td></tr>
                                    <tr><td className="px-6 py-3">Measure amplitude</td><td className="px-6 py-3"><code className="text-gray-900">MEASUREMENT:MEAS1:TYPE AMPLITUDE</code></td></tr>
                                    <tr><td className="px-6 py-3">Measure frequency</td><td className="px-6 py-3"><code className="text-gray-900">MEASUREMENT:MEAS1:TYPE FREQUENCY</code></td></tr>
                                    <tr><td className="px-6 py-3">Measure rise time</td><td className="px-6 py-3"><code className="text-gray-900">MEASUREMENT:MEAS1:TYPE RISETIME</code></td></tr>
                                    <tr><td className="px-6 py-3">Measure overshoot</td><td className="px-6 py-3"><code className="text-gray-900">MEASUREMENT:MEAS1:TYPE OVERSHOOT</code></td></tr>
                                    <tr><td className="px-6 py-3">Screenshot</td><td className="px-6 py-3"><code className="text-gray-900">HARDCOPY START</code></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* TestFlow transition */}
                    <section id="scripts-stop-scaling" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-gray-600" />
                            When Individual Scripts Stop Scaling
                        </h2>

                        <div className="space-y-5 text-gray-700 leading-relaxed">
                            <p>
                                Everything above works well for a single instrument and a handful of test points. You can automate a Tektronix scope measurement in an afternoon.
                            </p>
                            <p>
                                What you hit next is the harder problem: in a real chip validation workflow, the oscilloscope is one of five instruments. You&apos;re also coordinating a power supply, a signal generator, a DMM, and a load. The test sequence spans 300 measurement points. Each result needs to be checked against datasheet limits. And at the end, someone needs a professional validation report, not a folder of CSVs.
                            </p>
                            <p>
                                At that point your Python script has grown to 1,500 lines with no structure a new engineer can follow. Adding a new test condition requires understanding the entire file. Reports are still assembled manually in Word.
                            </p>
                            <p>
                                This is the ceiling that instrument-level scripts always hit. <strong className="text-gray-900">TestFlow was built for exactly what comes after.</strong>
                            </p>
                        </div>
                    </section>

                    {/* TestFlow Product Showcase */}
                    <section id="testflow-showcase" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">What TestFlow Replaces in Your Stack</h2>
                        <p className="text-gray-700 leading-relaxed mb-10">
                            Instead of a single Python script wrapping one Tektronix scope, you get a validation workspace where the entire bench, the test plan, the execution, and the reporting live in one place. Here is what that looks like in practice.
                        </p>

                        {/* Feature 1: AI Test Planner */}
                        <div className="mb-10 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                            <div className="grid md:grid-cols-5 gap-0">
                                <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-3">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        AI Test Planner
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">From datasheet to test plan</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Upload a chip datasheet and TestFlow generates the full structured test plan, parameters, limits, and instrument requirements included. No more building 1,500-line scripts by hand.
                                    </p>
                                </div>
                                <div className="md:col-span-3 relative bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200">
                                    <Image
                                        src="/images/testplanner-explore.webp"
                                        alt="TestFlow AI Test Planner generating structured test plans"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Feature 2: Executer */}
                        <div className="mb-10 rounded-2xl border border-gray-200 bg-white overflow-hidden">
                            <div className="grid md:grid-cols-5 gap-0">
                                <div className="md:col-span-3 relative bg-gray-50 order-2 md:order-1 border-t md:border-t-0 md:border-r border-gray-200">
                                    <Image
                                        src="/images/executer-explore.webp"
                                        alt="TestFlow Executer running multi-instrument validation sequences"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-center order-1 md:order-2">
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-3">
                                        <Workflow className="w-3.5 h-3.5" />
                                        Executer
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-instrument sequencing</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Your Tektronix scope, power supply, signal generator, DMM, and load run together as one sequence. Pass/fail logic, retries, and limits applied to every measurement, not just stored in CSVs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3: Schematic + Playground (2 col) */}
                        <div className="grid md:grid-cols-2 gap-5 mb-10">
                            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col">
                                <div className="relative bg-gray-50">
                                    <Image
                                        src="/images/schamatic-explore.webp"
                                        alt="TestFlow visual schematic for connecting instruments"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        <Cable className="w-3.5 h-3.5" />
                                        Visual Schematic
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Wire the bench, not the script</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Define your bench setup visually. TestFlow handles the SCPI wiring underneath.
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden flex flex-col">
                                <div className="relative bg-gray-50">
                                    <Image
                                        src="/images/playground-explore.webp"
                                        alt="TestFlow Playground for interactive instrument control"
                                        width={800}
                                        height={500}
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        <Terminal className="w-3.5 h-3.5" />
                                        Playground
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Direct SCPI, without the boilerplate</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Interactive instrument control for debugging, the part you used PyVISA for, built in.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 4: Reports + Dashboard */}
                        <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                            <div className="grid md:grid-cols-5 gap-0">
                                <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 mb-3">
                                        <FileBarChart className="w-3.5 h-3.5" />
                                        Analytics &amp; Reports
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional reports, generated</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Every run produces a structured validation report with charts, pass/fail summaries, and data lineage. No Word, no manual assembly.
                                    </p>
                                </div>
                                <div className="md:col-span-3 relative bg-gray-50 border-t md:border-t-0 md:border-l border-gray-200">
                                    <Image
                                        src="/images/dashboard-explore.webp"
                                        alt="TestFlow dashboard with analytics and validation reports"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA matching home-style */}
                    <section className="mb-12">
                        <div className="rounded-2xl bg-white border border-gray-200 shadow-sm px-6 md:px-10 py-8 md:py-10">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                                <div className="flex-1">
                                    <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-gray-900 leading-snug">
                                        Ready to retire the 1,500-line Python script?
                                    </h2>
                                    <p className="mt-2 max-w-lg text-sm md:text-base text-gray-500 leading-relaxed">
                                        Coordinate your Tektronix scope and the rest of your bench in one structured workflow. See how validation teams use TestFlow.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                                    <Link
                                        href="/contact"
                                        className="inline-flex h-11 items-center justify-center rounded-xl bg-gray-900 px-7 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                                    >
                                        Book a Demo
                                    </Link>
                                    <Link
                                        href="/testflow-agent"
                                        className="inline-flex h-11 items-center justify-center rounded-xl bg-white border border-gray-300 px-7 text-sm font-medium text-gray-900 transition-all hover:bg-gray-50 hover:border-gray-400"
                                    >
                                        Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Summary */}
                    <section id="summary" className="mb-12 scroll-mt-28">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Summary</h2>
                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                Automating a Tektronix oscilloscope with Python is straightforward: install PyVISA, connect via USB or LAN, send SCPI commands for configuration, and query measurements or raw waveform data. The code in this guide covers every common measurement task.
                            </p>
                            <p>
                                For teams building structured validation workflows across multiple instruments, TestFlow handles the workflow layer, so your engineers spend time validating chips, not maintaining infrastructure.
                            </p>
                        </div>
                    </section>

                    {/* Tags */}
                    <section className="mb-10">
                        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                'automate Tektronix oscilloscope',
                                'SCPI commands Tektronix',
                                'PyVISA oscilloscope',
                                'oscilloscope automated measurement script',
                                'Tektronix Python automation',
                                'VISA instrument control Python',
                                'instrument control Python VISA',
                                'MSO4 Python',
                                'MSO6 automation',
                                'bench automation Python script',
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* Share + Author */}
                    <section className="pt-8 border-t border-gray-200">
                        {/* Share row */}
                        <div className="flex items-center justify-between mb-6">
                            <span className="text-sm text-gray-700">Share this article:</span>
                            <div className="flex items-center gap-2">
                                <Link
                                    href="https://twitter.com/intent/tweet?text=How%20to%20Automate%20a%20Tektronix%20Oscilloscope%20with%20Python%20(SCPI%20%2B%20PyVISA%20Guide%20for%202026)&url=https%3A%2F%2Ftestflow.io%2Fblog%2Fautomate-tektronix-oscilloscope-python-scpi-pyvisa-guide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on X"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Ftestflow.io%2Fblog%2Fautomate-tektronix-oscilloscope-python-scpi-pyvisa-guide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on LinkedIn"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-colors"
                                >
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftestflow.io%2Fblog%2Fautomate-tektronix-oscilloscope-python-scpi-pyvisa-guide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on Facebook"
                                    className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-colors"
                                >
                                    <Facebook className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Author card */}
                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-7">
                            <div className="flex items-start gap-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden">
                                    <Image src="/images/Alikamaly-photo.webp" alt="Ali Kamaly" width={56} height={56} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <div>
                                            <p className="text-xs text-gray-500 mb-0.5">Article by</p>
                                            <h4 className="text-lg font-semibold text-gray-900">Ali Kamaly</h4>
                                        </div>
                                        <Link
                                            href="https://www.linkedin.com/in/ali-kamaly/?skipRedirect=true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Ali Kamaly on LinkedIn"
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300 transition-colors"
                                        >
                                            <Linkedin className="w-4 h-4" />
                                        </Link>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        Ali Kamaly is the Co-Founder &amp; CEO of TestFlow, an AI-native semiconductor post-silicon validation platform. He writes about chip validation, lab automation, and the infrastructure behind modern hardware engineering.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Rail */}
                <aside className="lg:col-span-1 hidden lg:block self-start sticky top-24">
                    <div className="space-y-6 w-full">
                        {/* Mini CTA — matches home CTASection style */}
                        <div className="relative overflow-hidden rounded-[1.5rem] bg-zinc-950 border border-white/10 px-6 py-8 text-center shadow-2xl">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-[200px] bg-gradient-to-b from-white/10 via-white/5 to-transparent blur-[60px] rounded-full pointer-events-none" />
                            <div className="relative z-10 flex flex-col items-center">
                                <h3 className="text-xl font-medium tracking-tight text-white leading-[1.25]">
                                    TestFlow 2.0 is live now.
                                </h3>
                                <p className="mt-2 mb-6 text-xs text-gray-500 leading-relaxed">
                                    The AI-native validation platform for semiconductor teams.
                                </p>
                                <RainbowButton asChild className="w-full h-11 px-6 rounded-xl text-sm font-medium">
                                    <Link href="/contact">
                                        Get Early Access
                                    </Link>
                                </RainbowButton>
                            </div>
                        </div>

                        {/* Table of Contents with scrollspy */}
                        <nav className="rounded-2xl border border-gray-200 bg-white p-6">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Table of contents</h4>
                            <ul className="space-y-1 text-sm">
                                {TOC_ITEMS.map((item) => {
                                    const isActive = activeId === item.id
                                    return (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`relative block leading-snug py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                                                    isActive
                                                        ? 'text-gray-900 border-gray-900 font-medium'
                                                        : 'text-gray-500 border-transparent hover:text-gray-700'
                                                }`}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </aside>

                </div>
            </div>

            </div>
        </BlogPostLayout>
    )
}
