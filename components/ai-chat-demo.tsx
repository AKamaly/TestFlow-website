'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, Sparkles, Terminal, ZoomIn, ZoomOut, Play, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { WorkflowNode } from './workflow/custom-nodes'
import { INSTRUMENT_TYPES } from './workflow/node-types'

interface ChatMessage {
  type: 'user' | 'ai'
  content: string
  workflow?: {
    steps: string[]
    status: 'typing' | 'complete'
  }
}

const nodeTypes = {
  workflow: WorkflowNode,
}

function Flow({ currentNodeIndex, isAnimationComplete }: { currentNodeIndex: number; isAnimationComplete: boolean }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const reactFlowInstance = useReactFlow()
  const [loadingPhase, setLoadingPhase] = useState<'instruments' | 'commands' | 'nodes' | null>(null)

  useEffect(() => {
    const initializeFlow = async () => {
      setLoadingPhase('instruments')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setLoadingPhase('commands')
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setLoadingPhase('nodes')
    }

    initializeFlow()
  }, [])

  useEffect(() => {
    if (loadingPhase === 'nodes' && currentNodeIndex >= 0) {
      const currentNode = initialNodes[currentNodeIndex]
      
      setNodes(prevNodes => {
        const updatedNodes = [...prevNodes]
        
        updatedNodes.forEach(n => {
          n.data = {
            ...n.data,
            isActive: false,
            isCompleted: true
          }
        })

        if (!updatedNodes.find(n => n.id === currentNode.id)) {
          updatedNodes.push({
            ...currentNode,
            data: {
              ...currentNode.data,
              isActive: true,
              isCompleted: false
            }
          })
        }

        return updatedNodes
      })

      const relevantEdges = initialEdges.filter(edge => {
        const sourceIndex = parseInt(edge.source) - 1
        const targetIndex = parseInt(edge.target) - 1
        return sourceIndex <= currentNodeIndex && targetIndex <= currentNodeIndex
      })

      setEdges(relevantEdges)
    }
  }, [currentNodeIndex, loadingPhase, setNodes, setEdges])

  const LoadingMessage = ({ phase }: { phase: string }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"
          />
        </div>
        <div className="text-lg font-medium text-blue-400">
          {phase === 'instruments' && "Checking connecting instruments..."}
          {phase === 'commands' && "Generating SCPI commands..."}
        </div>
      </div>
    </motion.div>
  )

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }} className="overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
          duration: 800,
          maxZoom: 0.8,
          includeHiddenNodes: true,
        }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.7 }} 
        minZoom={0.3}
        maxZoom={1.2}
        className="transition-transform duration-200"
        proOptions={{ hideAttribution: true }}
      >
        <Background
          gap={20}
          color="currentColor"
          size={1}
          style={{ opacity: 0.05 }}
        />
        <div className="absolute bottom-0 right-4 z-50 flex gap-2 bg-black/50 p-2 rounded-lg border border-white/10 backdrop-blur-sm">
          <button
            onClick={() => reactFlowInstance.zoomIn()}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4 text-white/70" />
          </button>
          <button
            onClick={() => reactFlowInstance.zoomOut()}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4 text-white/70" />
          </button>
          <div className="w-px bg-white/10" />
          <button
            onClick={() => {}}
            className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${
              isAnimationComplete ? 'text-green-400 animate-pulse cursor-pointer' : 'text-white/70 cursor-not-allowed'
            }`}
            disabled={!isAnimationComplete}
            title="Play Animation"
          >
            <Play className="w-4 h-4" />
          </button>
          <button
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            title="Share"
          >
            <Share2 className="w-4 h-4 text-white/70" />
          </button>
        </div>
      </ReactFlow>
      <AnimatePresence>
        {(loadingPhase === 'instruments' || loadingPhase === 'commands') && (
          <LoadingMessage phase={loadingPhase} />
        )}
      </AnimatePresence>
    </div>
  )
}

const initialNodes = [
  {
    id: '1',
    type: 'workflow',
    position: { x: 250, y: -200 }, 
    data: { 
      image: INSTRUMENT_TYPES.POWER_SUPPLY.image,
      label: INSTRUMENT_TYPES.POWER_SUPPLY.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
  {
    id: '2',
    type: 'workflow',
    position: { x: 100, y: -120 }, 
    data: { 
      image: INSTRUMENT_TYPES.FUNCTION_GENERATOR.image,
      label: INSTRUMENT_TYPES.FUNCTION_GENERATOR.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
  {
    id: '3',
    type: 'workflow',
    position: { x: 400, y: -120 }, 
    data: { 
      image: INSTRUMENT_TYPES.SOURCE_METER.image,
      label: INSTRUMENT_TYPES.SOURCE_METER.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
  {
    id: '4',
    type: 'workflow',
    position: { x: 250, y: -40 }, 
    data: { 
      image: INSTRUMENT_TYPES.OSCILLOSCOPE.image,
      label: INSTRUMENT_TYPES.OSCILLOSCOPE.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
  {
    id: '5',
    type: 'workflow',
    position: { x: 250, y: 40 }, 
    data: { 
      image: INSTRUMENT_TYPES.EXCEL.image,
      label: INSTRUMENT_TYPES.EXCEL.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
  {
    id: '6',
    type: 'workflow',
    position: { x: 250, y: 120 }, 
    data: { 
      image: INSTRUMENT_TYPES.TEAMS.image,
      label: INSTRUMENT_TYPES.TEAMS.label,
      isEmpty: false,
      isActive: false,
      isCompleted: false
    },
  },
]

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
  {
    id: 'e2-4',
    source: '2',
    target: '4',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'custom',
    animated: true,
    data: { progress: 0 },
    style: { strokeWidth: 3, stroke: 'rgba(255, 255, 255, 0.7)' },
  },
]

function AIChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'ai',
      content: "I'm your AI validation assistant. what Testflow do you want to create?"
    },
    {
      type: 'user',
      content: "I want to validate a Power Management chip, and save results by excel and report the data to my team at Microsoft Teams"
    }
  ])
  const [showFlow, setShowFlow] = useState(false)
  const [currentNodeIndex, setCurrentNodeIndex] = useState(-1)
  const [isThinking, setIsThinking] = useState(false)
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)

  useEffect(() => {
    if (currentNodeIndex >= initialNodes.length - 1) {
      setIsAnimationComplete(true)
    }
  }, [currentNodeIndex])

  const handleCreateFlow = async () => {
    setIsThinking(true)
    
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setMessages(prevMessages => [
      ...prevMessages,
      {
        type: 'ai',
        content: "I'll create a comprehensive validation workflow with Excel reporting and Teams integration. Here's what I'm building:",
        workflow: {
          steps: [
            "Configuring Power Supply for precise voltage input testing (0-20V range)...",
            "Setting up Source Meter for accurate current measurements (0-1A range)...",
            "Initializing Oscilloscope for ripple and noise analysis (100MHz bandwidth)...",
            "Implementing automated test sequences for load regulation...",
            "Setting up data logging to Excel with real-time graphs...",
            "Configuring Microsoft Teams notifications for test completion and alerts...",
            "Adding automated report generation with pass/fail criteria..."
          ],
          status: 'typing'
        }
      }
    ])

    setIsThinking(false)
    setShowFlow(true)
    
    let index = 0
    const createInterval = () => {
      const interval = setInterval(() => {
        if (index >= initialNodes.length) {
          clearInterval(interval)
          return
        }
        setCurrentNodeIndex(index)
        index++
        
        // After node 2 (index 1), clear current interval and create new faster one
        if (index === 2) {
          clearInterval(interval)
          const fasterInterval = setInterval(() => {
            if (index >= initialNodes.length) {
              clearInterval(fasterInterval)
              return
            }
            setCurrentNodeIndex(index)
            index++
          }, 1000) 
        }
      }, 3000) 
    }

    createInterval()
  }

  return (
    <section className="py-20 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="container px-4 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4"
            >
              <Terminal className="w-4 h-4 text-blue-400" />
              AI Chat Demo
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Experience AI-Powered Workflow Creation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg max-w-2xl mx-auto"
            >
              See how our AI assistant understands your requirements and creates optimized validation workflows in real-time
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 divide-x divide-white/10">
                  <div>
                    <div className="h-[600px] overflow-y-auto p-6 space-y-6 scrollbar-none [&::-webkit-scrollbar]:hidden">
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex gap-4 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                        >
                          {message.type === 'ai' ? (
                            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                              <Bot className="w-5 h-5 text-blue-400" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-5 h-5 text-purple-400" />
                            </div>
                          )}
                          <div className={`flex-1 space-y-4 ${message.type === 'user' ? 'text-right' : ''}`}>
                            <div className={`inline-block rounded-xl px-4 py-2 ${
                              message.type === 'user' 
                                ? 'bg-purple-500/20 border border-purple-500/30' 
                                : 'bg-blue-500/20 border border-blue-500/30'
                            }`}>
                              <p className="text-white">{message.content}</p>
                            </div>
                            {message.workflow && (
                              <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
                                {message.workflow.steps.map((step, stepIndex) => (
                                  <motion.div
                                    key={stepIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: stepIndex * 0.1 }}
                                    className="flex items-center gap-3"
                                  >
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sm">
                                      {stepIndex + 1}
                                    </div>
                                    <p className="text-gray-300">{step}</p>
                                    {message.workflow?.status === 'typing' && stepIndex === currentNodeIndex && (
                                      <span className="animate-pulse">|</span>
                                    )}
                                  </motion.div>
                                ))}
                              </div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                      {isThinking && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex gap-4"
                        >
                          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                            <Bot className="w-5 h-5 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <div className="inline-block rounded-xl px-4 py-2 bg-blue-500/20 border border-blue-500/30">
                              <p className="text-white">thinking<span className="animate-pulse">...</span></p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    <div className="p-4 border-t border-white/10 bg-white/5">
                      <div className="flex justify-center">
                        <Button 
                          onClick={handleCreateFlow} 
                          className="gap-2 px-8 py-6 text-lg bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
                          disabled={showFlow || isThinking}
                        >
                          <Sparkles className="w-5 h-5" />
                          {isThinking ? 'AI is thinking...' : 'Create Testflow'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-black/40">
                    <AnimatePresence>
                      {showFlow && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="h-[600px] w-full"
                        >
                          <ReactFlowProvider>
                            <Flow currentNodeIndex={currentNodeIndex} isAnimationComplete={isAnimationComplete} />
                          </ReactFlowProvider>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIChatDemo

