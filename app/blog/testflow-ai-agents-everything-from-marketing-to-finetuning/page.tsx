'use client'

import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, User, Calendar, Clock, Bot, Zap, BarChart3, Megaphone, ShoppingCart, Cpu, Settings, Rocket, CheckCircle2, Code, Brain, Layers, Target, TrendingUp, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { BlogPostLayout } from "@/components/blog-post-layout"

export default function BlogPost() {
    return (
        <BlogPostLayout>
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
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Ali Kamaly</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Feb 8, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>14 min read</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
                        We Used Claude Agent to Train an Open LLM!
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed">
                        At TestFlow, we&apos;re not just building AI-powered hardware validation. We&apos;re literally using AI agents for everything — marketing, product development, sales, customer success, and yes, even fine-tuning the models themselves. Here&apos;s how we did it, and how you can too.
                    </p>
                </div>

                {/* Featured Image */}
                <div className="relative aspect-[16/9] mb-12 rounded-xl overflow-hidden bg-white">
                    <Image
                        src="/blog/testflow-ai-agents-training-metrics.png"
                        alt="Training metrics dashboard showing learning rate, loss, mean token accuracy, and token count during LLM fine-tuning"
                        fill
                        className="object-contain p-4"
                    />
                </div>

                {/* Article Content */}
                <div className="prose prose-invert max-w-none">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            We gave AI agents the ability to run every function at TestFlow. Not just write code or generate content — but to actually orchestrate marketing campaigns, qualify sales leads, build product features, manage customer onboarding, and fine-tune the very language models that power our platform. This post shows you how it works and why we believe this is the future of every company.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            AI coding agents like Claude Code can use &quot;skills&quot; — packaged instructions, scripts, and domain knowledge — to accomplish specialized tasks. But we took this concept much further. We built skills for <strong>every department</strong>. Marketing agents that generate and schedule campaigns. Sales agents that research prospects and draft personalized outreach. Product agents that write specs, build features, and ship code. And yes — training agents that fine-tune open-source LLMs on cloud GPUs.
                        </p>

                        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-xl p-6 mb-6">
                            <p className="text-lg text-gray-200 font-medium mb-2">💡 The TestFlow Agent Philosophy</p>
                            <p className="text-gray-300">
                                Every repeatable process in the company gets an agent. Every agent gets a skill. Every skill gets better over time. The result? A team of 10 that operates like a team of 100.
                            </p>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            With this approach, you can tell an agent things like:
                        </p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-green-400">
                            Fine-tune Qwen3-0.6B on our semiconductor test dataset for instruction following.
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-4">
                            And the agent will:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-6">
                            <li>Validate your dataset format</li>
                            <li>Select appropriate hardware (t4-small for a 0.6B model)</li>
                            <li>Generate and configure the training script with monitoring</li>
                            <li>Submit the job to cloud GPUs</li>
                            <li>Report the job ID and estimated cost</li>
                            <li>Check on progress when you ask</li>
                            <li>Help you debug if something goes wrong</li>
                        </ol>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            The model trains on cloud GPUs while you do other things. When it&apos;s done, your fine-tuned model appears on the Hub, ready to deploy into TestFlow&apos;s validation pipeline. This isn&apos;t a toy demo. The skill supports the same training methods used in production: supervised fine-tuning, direct preference optimization, and reinforcement learning with verifiable rewards.
                        </p>
                    </div>

                    {/* The Agent Stack */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Bot className="w-8 h-8 text-purple-400" />
                            The TestFlow Agent Stack: Every Department, Automated
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Here&apos;s how we&apos;ve deployed agents across every function at TestFlow. Each agent is powered by skills — structured knowledge packs that teach the agent exactly what it needs to know for that domain.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-800/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-pink-500/20 p-2.5 rounded-lg">
                                        <Megaphone className="w-6 h-6 text-pink-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Marketing Agent</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Generates blog posts, social media campaigns, email sequences, and SEO content. It knows our brand voice, target audience (semiconductor engineers), and competitive positioning.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-3 font-mono text-xs text-green-400">
                                    Write a LinkedIn campaign about TestFlow&apos;s new AI-powered test generation feature targeting validation engineers at Tier 1 semicon companies.
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-800/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-blue-500/20 p-2.5 rounded-lg">
                                        <Settings className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Product Agent</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Writes feature specs, generates code, builds UI components, creates test cases, and ships to production. It understands our entire codebase, design system, and product roadmap.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-3 font-mono text-xs text-green-400">
                                    Build a new dashboard widget that shows real-time test execution metrics with pass/fail rates and trend analysis.
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-800/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-500/20 p-2.5 rounded-lg">
                                        <ShoppingCart className="w-6 h-6 text-green-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Sales Agent</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Researches prospects, drafts personalized outreach, qualifies inbound leads, prepares demo scripts, and follows up automatically. It knows our ICP, pricing, and competitive landscape.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-3 font-mono text-xs text-green-400">
                                    Research the top 5 validation engineers at Qualcomm and draft personalized outreach based on their recent conference talks.
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-900/20 to-amber-900/20 border border-orange-800/30 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-orange-500/20 p-2.5 rounded-lg">
                                        <Brain className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">Model Fine-Tuning Agent</h3>
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    Fine-tunes open-source LLMs for our specific use cases — semiconductor test generation, validation analysis, and hardware diagnostics. Handles the full lifecycle from data prep to deployment.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-3 font-mono text-xs text-green-400">
                                    Fine-tune Qwen3-0.6B on our semiconductor test dataset using SFT with LoRA on a10g-large hardware.
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Setup and Install */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Zap className="w-8 h-8 text-yellow-400" />
                            Setup and Install
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Before starting with model fine-tuning, you&apos;ll need:
                        </p>

                        <ul className="list-disc pl-6 space-y-3 text-gray-300 mb-8">
                            <li>A <Link href="https://hf.co/pro" className="text-blue-400 hover:text-blue-300 underline">Hugging Face Pro</Link> or <Link href="https://hf.co/enterprise" className="text-blue-400 hover:text-blue-300 underline">Team / Enterprise</Link> plan (Jobs require a paid plan)</li>
                            <li>A write-access token from <Link href="https://huggingface.co/settings/tokens" className="text-blue-400 hover:text-blue-300 underline">huggingface.co/settings/tokens</Link></li>
                            <li>A coding agent like Claude Code, OpenAI Codex, or Google&apos;s Gemini CLI</li>
                        </ul>

                        <p className="text-gray-300 mb-6">
                            Hugging Face skills are compatible with Claude Code, Codex, and Gemini CLI, with integrations on the way for Cursor, Windsurf, and Continue.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Claude Code</h3>
                        <p className="text-gray-300 mb-3">1. Register the repository as a marketplace plugin:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            /plugin marketplace add huggingface/skills
                        </div>
                        <p className="text-gray-300 mb-3">2. To install a skill, run:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            /plugin install hf-llm-trainer@huggingface-skills
                        </div>

                        <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Codex</h3>
                        <p className="text-gray-300 mb-3">Codex identifies skills via the <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">AGENTS.md</code> file. Verify instructions are loaded with:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            codex --ask-for-approval never &quot;Summarize the current instructions.&quot;
                        </div>

                        <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Gemini CLI</h3>
                        <p className="text-gray-300 mb-3">Install locally:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            gemini extensions install . --consent
                        </div>
                        <p className="text-gray-300 mb-3">Or use the GitHub URL:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            gemini extensions install https://github.com/huggingface/skills.git --consent
                        </div>

                        <h3 className="text-2xl font-bold mb-4 mt-8 text-white">Connect to Hugging Face</h3>
                        <p className="text-gray-300 mb-3">
                            Authenticate with your Hugging Face account using a <Link href="https://huggingface.co/settings/tokens" className="text-blue-400 hover:text-blue-300 underline">write-access token</Link> so the job can create a model repo.
                        </p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            hf auth login # or export HF_TOKEN=hf_your_write_access_token_here
                        </div>
                        <p className="text-gray-300 mb-3">
                            For Claude Code, configure the MCP Server:
                        </p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400 break-all">
                            claude mcp add --transport http hf-skills https://huggingface.co/mcp?bouquet=skills --header &quot;Authorization: Bearer $HF_TOKEN&quot;
                        </div>
                    </section>

                    {/* Your First Training Run */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Rocket className="w-8 h-8 text-cyan-400" />
                            Your First Training Run
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Let&apos;s walk through a complete example. We&apos;ll fine-tune a small model to see the full workflow, then explore more advanced capabilities.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Instruct the Coding Agent to Fine-Tune</h3>
                        <p className="text-gray-300 mb-4">Start with a simple and clear instruction to fine-tune a specific model:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-green-400">
                            Fine-tune Qwen3-0.6B on the open-r1/codeforces-cots dataset for instruction following.
                        </div>
                        <p className="text-gray-300 mb-6">
                            The coding agent analyzes your request and prepares a training configuration. For a 0.6B model on a demo dataset, it selects <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">t4-small</code> — enough GPU for this model size and the cheapest option available. This works for vision language models too! You can simply run &quot;Fine-tune Qwen/Qwen3-VL-2B-Instruct on llava-instruct-mix.&quot;
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Review Before Submitting</h3>
                        <p className="text-gray-300 mb-4">Before the agent submits anything, you&apos;ll see the configuration:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-cyan-400">
                            <p className="mb-2">I&apos;ll fine-tune Qwen/Qwen3-0.6B on open-r1/codeforces-cots using SFT.</p>
                            <p className="mb-1">Configuration:</p>
                            <p className="mb-1">- Hardware: t4-small (~$0.75/hour)</p>
                            <p className="mb-1">- Estimated time: ~20 minutes</p>
                            <p className="mb-1">- Estimated cost: ~$0.30</p>
                            <p className="mb-2">- Output: username/qwen-codeforces-cots-sft</p>
                            <p>The model will be pushed to Hub automatically. Should I submit?</p>
                        </div>
                        <p className="text-gray-300 mb-6">
                            This is your chance to adjust anything. Change the output repo name, pick different hardware, or ask the agent to modify training parameters. Once you approve, the agent submits the job. For example, you can ask: <code className="bg-gray-800 px-2 py-0.5 rounded text-sm">Do a quick test run on 100 examples.</code>
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Track Progress</h3>
                        <p className="text-gray-300 mb-4">After submission, you get job details:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-green-400">
                            <p>✅ Job submitted successfully!</p>
                            <p>Job ID: abc123xyz</p>
                            <p>Monitor: https://huggingface.co/jobs/username/abc123xyz</p>
                            <p>Expected time: ~20 minutes</p>
                            <p>Estimated cost: ~$0.30</p>
                            <p>View real-time metrics at: https://huggingface.co/spaces/username/trackio</p>
                        </div>
                        <p className="text-gray-300 mb-6">
                            The skill includes Trackio integration so you can watch training loss decrease in real-time. Jobs run asynchronously — close your terminal and come back later. When you want an update:
                        </p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            How&apos;s my training job doing?
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">Use Your Model</h3>
                        <p className="text-gray-300 mb-4">When training completes, your model is on the Hub:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-blue-400">
                            <p className="text-gray-500 mb-1"># Python</p>
                            <p>from transformers import AutoModelForCausalLM, AutoTokenizer</p>
                            <p className="mt-2">model = AutoModelForCausalLM.from_pretrained(&quot;username/qwen-codeforces-cots-sft&quot;)</p>
                            <p>tokenizer = AutoTokenizer.from_pretrained(&quot;username/qwen-codeforces-cots-sft&quot;)</p>
                        </div>
                        <p className="text-gray-300 mb-6">
                            That&apos;s the full loop. You described what you wanted in plain English, and the agent handled GPU selection, script generation, job submission, authentication, and persistence. The whole thing cost about thirty cents.
                        </p>
                    </section>

                    {/* Training Methods */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Layers className="w-8 h-8 text-emerald-400" />
                            Training Methods
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            The skill supports three training approaches. Understanding when to use each one helps you get better results.
                        </p>

                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-800/30 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <Target className="w-5 h-5 text-blue-400" />
                                    Supervised Fine-Tuning (SFT)
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    SFT is where most projects start. You provide demonstration data — examples of inputs and desired outputs — and training adjusts the model to match those patterns. Use SFT when you have high-quality examples of the behavior you want: customer support conversations, code generation pairs, domain-specific Q&A, or semiconductor test procedures.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-4 font-mono text-sm text-green-400">
                                    Fine-tune Qwen3-0.6B on my-org/support-conversations for 3 epochs.
                                </div>
                                <p className="text-sm text-gray-400 mt-3">
                                    For models larger than 3B parameters, the agent automatically uses LoRA (Low-Rank Adaptation) to reduce memory requirements.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-800/30 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-purple-400" />
                                    Direct Preference Optimization (DPO)
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    DPO trains on preference pairs — responses where one is &quot;chosen&quot; and another is &quot;rejected.&quot; This aligns model outputs with human preferences, typically after an initial SFT stage. Use DPO when you have preference annotations from human labelers or automated comparisons.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-4 font-mono text-sm text-green-400">
                                    Run DPO on my-org/preference-data to align the SFT model I just trained. The dataset has &apos;chosen&apos; and &apos;rejected&apos; columns.
                                </div>
                                <p className="text-sm text-gray-400 mt-3">
                                    DPO is sensitive to dataset format. It requires columns named exactly <code className="bg-gray-800 px-1.5 py-0.5 rounded">chosen</code> and <code className="bg-gray-800 px-1.5 py-0.5 rounded">rejected</code>. The agent validates this first.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-amber-900/20 to-yellow-900/20 border border-amber-800/30 rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-400" />
                                    Group Relative Policy Optimization (GRPO)
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    GRPO is a reinforcement learning method proven effective on verifiable tasks like solving math problems, writing code, or any task with a programmatic success criterion — including hardware test validation.
                                </p>
                                <div className="bg-gray-900/60 rounded-lg p-4 font-mono text-sm text-green-400">
                                    Train a math reasoning model using GRPO on the openai/gsm8k dataset based on Qwen3-0.6B.
                                </div>
                                <p className="text-sm text-gray-400 mt-3">
                                    The model generates responses, receives rewards based on correctness, and learns from the outcomes. More complex than SFT or DPO, but the configuration is similar.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Hardware and Cost */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Cpu className="w-8 h-8 text-red-400" />
                            Hardware and Cost
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            The agent selects hardware based on your model size, but understanding the tradeoffs helps you make better decisions.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 text-white">Model Size to GPU Mapping</h3>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Model Size</th>
                                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">GPU</th>
                                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Est. Cost</th>
                                        <th className="text-left py-3 px-4 text-gray-300 font-semibold">Use Case</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-3 px-4 text-gray-300">&lt;1B params</td>
                                        <td className="py-3 px-4"><code className="bg-gray-800 px-2 py-0.5 rounded text-sm text-green-400">t4-small</code></td>
                                        <td className="py-3 px-4 text-gray-300">$1-2</td>
                                        <td className="py-3 px-4 text-gray-400">Educational / experimental</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-3 px-4 text-gray-300">1-3B params</td>
                                        <td className="py-3 px-4"><code className="bg-gray-800 px-2 py-0.5 rounded text-sm text-green-400">t4-medium / a10g-small</code></td>
                                        <td className="py-3 px-4 text-gray-300">$5-15</td>
                                        <td className="py-3 px-4 text-gray-400">Small production models</td>
                                    </tr>
                                    <tr className="border-b border-gray-800">
                                        <td className="py-3 px-4 text-gray-300">3-7B params</td>
                                        <td className="py-3 px-4"><code className="bg-gray-800 px-2 py-0.5 rounded text-sm text-green-400">a10g-large / a100-large + LoRA</code></td>
                                        <td className="py-3 px-4 text-gray-300">$15-40</td>
                                        <td className="py-3 px-4 text-gray-400">Production with LoRA</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 px-4 text-gray-300">7B+</td>
                                        <td className="py-3 px-4 text-gray-400">Not suitable for HF Skills jobs</td>
                                        <td className="py-3 px-4 text-gray-300">—</td>
                                        <td className="py-3 px-4 text-gray-400">Use dedicated infra</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">Demo vs Production</h3>
                        <p className="text-gray-300 mb-4">When testing a workflow, start small:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            Do a quick test run to SFT Qwen-0.6B with 100 examples of my-org/support-conversations.
                        </div>
                        <p className="text-gray-300 mb-4">For production, be explicit:</p>
                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            SFT Qwen-0.6B for production on the full my-org/support-conversations. Checkpoints every 500 steps, 3 epochs, cosine learning rate.
                        </div>

                        <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border border-yellow-700/30 rounded-xl p-5 mt-6">
                            <p className="text-yellow-400 font-semibold mb-2">⚡ Pro Tip</p>
                            <p className="text-gray-300 text-sm">
                                Always run a demo before committing to a multi-hour production job. A $0.50 demo that catches a format error saves a $30 failed run.
                            </p>
                        </div>
                    </section>

                    {/* Dataset Validation */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                            Dataset Validation
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Dataset format is the most common source of training failures. The agent can validate datasets before you spend GPU time.
                        </p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            Check if my-org/conversation-data works for SFT training.
                        </div>

                        <p className="text-gray-300 mb-4">The agent runs a quick inspection on CPU (fractions of a penny) and reports:</p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-cyan-400">
                            <p className="mb-2">Dataset validation for my-org/conversation-data:</p>
                            <p className="text-green-400">SFT: ✓ READY</p>
                            <p className="text-green-400 mb-1">Found &apos;messages&apos; column with conversation format</p>
                            <p className="text-red-400">DPO: ✗ INCOMPATIBLE</p>
                            <p className="text-red-400">Missing &apos;chosen&apos; and &apos;rejected&apos; columns</p>
                        </div>
                    </section>

                    {/* Monitoring Training */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <BarChart3 className="w-8 h-8 text-blue-400" />
                            Monitoring Training
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            Real-time monitoring helps you catch problems early. The skill configures Trackio by default — after submitting a job, watch metrics at your Trackio dashboard. A healthy run shows steadily decreasing loss.
                        </p>

                        <p className="text-gray-300 mb-4">Ask the agent about status anytime:</p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-5 my-6 font-mono text-sm text-cyan-400">
                            <p>Job abc123xyz is running (45 minutes elapsed)</p>
                            <p>Current step: 850/1200</p>
                            <p>Training loss: 1.23 (↓ from 2.41 at start)</p>
                            <p>Learning rate: 1.2e-5</p>
                            <p>Estimated completion: ~20 minutes</p>
                        </div>

                        <p className="text-gray-300">
                            If something goes wrong, the agent helps diagnose. Out of memory? It suggests reducing batch size or upgrading hardware. Dataset error? It identifies the mismatch. Timeout? It recommends longer duration or faster training settings.
                        </p>
                    </section>

                    {/* Converting to GGUF */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Code className="w-8 h-8 text-violet-400" />
                            Converting to GGUF
                        </h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            After training, you might want to run your model locally. The GGUF format works with llama.cpp and tools like LM Studio, Ollama, etc.
                        </p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            Convert my fine-tuned model to GGUF with Q4_K_M quantization. Push to username/my-model-gguf.
                        </div>

                        <p className="text-gray-300 mb-4">
                            The agent submits a conversion job that merges LoRA adapters, converts to GGUF, applies quantization, and pushes to Hub. Then use it locally:
                        </p>

                        <div className="bg-gray-900/80 border border-gray-700 rounded-lg p-4 my-4 font-mono text-sm text-green-400">
                            llama-server -hf username/model-name:Q4_K_M
                        </div>
                    </section>

                    {/* Why This Matters for TestFlow */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <Sparkles className="w-8 h-8 text-purple-400" />
                            Why This Matters: The Agent-First Company
                        </h2>

                        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/20 rounded-xl p-8 mb-8">
                            <p className="text-lg text-gray-200 leading-relaxed mb-6">
                                At TestFlow, we&apos;re not using agents as a side experiment. We&apos;re building the company around them. Every function, every workflow, every repeatable process has an agent assigned to it.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold">Marketing</p>
                                        <p className="text-sm text-gray-400">Blog posts, social campaigns, email sequences, SEO — all agent-generated, human-reviewed.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold">Product Development</p>
                                        <p className="text-sm text-gray-400">Feature specs, code generation, UI components, test suites — agents build it, we ship it.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold">Sales</p>
                                        <p className="text-sm text-gray-400">Prospect research, outreach drafting, lead qualification, follow-ups — all automated.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-white font-semibold">Model Fine-Tuning</p>
                                        <p className="text-sm text-gray-400">SFT, DPO, GRPO — our agents fine-tune the very models that power TestFlow&apos;s validation engine.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            The traditional startup playbook says you need to hire 50 people to cover marketing, sales, engineering, and operations. We think differently. We hire the best humans for judgment, creativity, and strategy — and let agents handle the execution at scale.
                        </p>

                        <p className="text-lg text-gray-300 leading-relaxed">
                            This is the future. Not &quot;AI tools&quot; tacked on to existing workflows. But AI agents as first-class team members, with their own skills, their own workflows, and their own accountability. And it starts with something as simple as telling your coding agent to fine-tune a model.
                        </p>
                    </section>

                    {/* What's Next */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8">What&apos;s Next</h2>

                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            We&apos;ve shown that coding agents can handle the full lifecycle of model fine-tuning: validating data, selecting hardware, generating scripts, submitting jobs, monitoring progress, and converting outputs. But more importantly, we&apos;ve shown that agents can power an entire company.
                        </p>

                        <p className="text-gray-300 mb-4">Some things to try:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                            <li>Fine-tune a model on your own dataset</li>
                            <li>Build a preference-aligned model with SFT → DPO</li>
                            <li>Train a reasoning model with GRPO on math or code</li>
                            <li>Convert a model to GGUF and run it with Ollama</li>
                            <li>Build your own department-specific agent skills</li>
                        </ul>

                        <p className="text-gray-300 mb-6">
                            The <Link href="https://github.com/huggingface/skills" className="text-blue-400 hover:text-blue-300 underline">skill is open source</Link>. You can extend it, customize it for your workflows, or use it as a starting point for other training scenarios.
                        </p>
                    </section>

                    {/* Resources */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-8">Resources</h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="https://github.com/huggingface/skills/blob/main/hf-llm-trainer/skills/model-trainer/SKILL.md" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">SKILL.md</p>
                                <p className="text-sm text-gray-400">Full skill documentation</p>
                            </Link>
                            <Link href="https://github.com/huggingface/skills/blob/main/hf-llm-trainer/skills/model-trainer/references/training_methods.md" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">Training Methods</p>
                                <p className="text-sm text-gray-400">SFT, DPO, GRPO explained</p>
                            </Link>
                            <Link href="https://github.com/huggingface/skills/blob/main/hf-llm-trainer/skills/model-trainer/references/hardware_guide.md" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">Hardware Guide</p>
                                <p className="text-sm text-gray-400">GPU selection and costs</p>
                            </Link>
                            <Link href="https://huggingface.co/docs/trl" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">TRL Documentation</p>
                                <p className="text-sm text-gray-400">The underlying training library</p>
                            </Link>
                            <Link href="https://huggingface.co/docs/huggingface_hub/guides/jobs" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">Hugging Face Jobs</p>
                                <p className="text-sm text-gray-400">Cloud training infrastructure</p>
                            </Link>
                            <Link href="https://huggingface.co/docs/trackio" className="block bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-blue-500/50 transition-colors">
                                <p className="text-blue-400 font-semibold mb-1">Trackio</p>
                                <p className="text-sm text-gray-400">Real-time training monitoring</p>
                            </Link>
                        </div>
                    </section>

                    {/* CTA Section */}
                </div>
            </div>
        </BlogPostLayout>
    )
}
