'use client'

import { useState, useCallback, useEffect } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  useReactFlow,
  ReactFlowProvider,
  Panel,
  EdgeProps,
  getBezierPath,
  Position,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { WorkflowNode } from './workflow/custom-nodes'
import { INSTRUMENT_TYPES } from './workflow/node-types'
import { Button } from '@/components/ui/button'
import { ArrowRight, ZoomIn, ZoomOut, Play, Share2, Pause } from 'lucide-react'
import { Particle } from './workflow/particle-animation'
import Link from 'next/link'

const nodeTypes = {
  workflow: WorkflowNode,
}

// Custom edge with particle animation
function CustomEdge(props: EdgeProps) {
  const { id, sourceX, sourceY, targetX, targetY, style = {}, animated, data } = props
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY: sourceY - 5,
    sourcePosition: Position.Bottom,
    targetX,
    targetY: targetY + 5,
    targetPosition: Position.Top,
    curvature: 0.5
  })

  return (
    <>
      <path
        d={edgePath}
        fill="none"
        className="react-flow__edge-path"
        style={{
          ...style,
          strokeWidth: 2,
          stroke: 'rgba(255, 255, 255, 0.2)',
          filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))',
        }}
      />
      <Particle
        edge={{
          id,
          path: edgePath
        }}
        animated={animated || false}
        progress={data?.progress || 0}
      />
    </>
  )
}

const edgeTypes = {
  custom: CustomEdge,
}

const initialNodes = [
  {
    id: '1',
    type: 'workflow',
    position: { x: 300, y: 20 },
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
    position: { x: 150, y: 170 },
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
    position: { x: 450, y: 170 },
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
    position: { x: 300, y: 320 },
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
    position: { x: 300, y: 470 },
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
    position: { x: 300, y: 620 },
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

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const { zoomIn, zoomOut } = useReactFlow()
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1)

  const updateNodeState = useCallback((index: number) => {
    setNodes((nds) =>
      nds.map((node, i) => {
        if (i === index) {
          return {
            ...node,
            data: {
              ...node.data,
              isActive: true,
              isCompleted: false,
            },
          }
        }
        if (i === index - 1) {
          return {
            ...node,
            data: {
              ...node.data,
              isActive: false,
              isCompleted: true,
            },
          }
        }
        return {
          ...node,
          data: {
            ...node.data,
            isActive: false,
            isCompleted: i < index - 1,
          },
        }
      })
    )
  }, [setNodes])

  const updateEdgeProgress = useCallback((index: number) => {
    setEdges((eds) =>
      eds.map((edge, i) => ({
        ...edge,
        data: {
          progress: i < index ? 100 : i === index ? 50 : 0,
        },
      }))
    )
  }, [setEdges])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveNodeIndex((current) => {
          const next = current + 1
          if (next >= nodes.length) {
            setIsPlaying(false)
            return -1
          }
          return next
        })
      }, 2000)

      return () => clearInterval(interval)
    }
  }, [isPlaying, nodes.length])

  useEffect(() => {
    if (activeNodeIndex >= 0) {
      updateNodeState(activeNodeIndex)
      updateEdgeProgress(activeNodeIndex)
    } else {
      // Reset all nodes and edges
      updateNodeState(-1)
      updateEdgeProgress(-1)
    }
  }, [activeNodeIndex, updateNodeState, updateEdgeProgress])

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false)
      setActiveNodeIndex(-1)
    } else {
      setIsPlaying(true)
      setActiveNodeIndex(0)
    }
  }

  const handleShare = () => {
    // Add your share logic here
  }

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge({
      ...params,
      type: 'custom',
      animated: true,
      data: { progress: 0 },
      style: { strokeWidth: 3 },
    }, eds)),
    [setEdges]
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      proOptions={{ hideAttribution: true }}
      defaultViewport={{ x: 0, y: 0, zoom: 0.7 }}
      minZoom={0.5}
      maxZoom={1.5}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      panOnScroll={false}
      panOnDrag={true}
      className="transition-transform duration-200"
    >
      <Background
        gap={20}
        color="currentColor"
        size={1}
        style={{ opacity: 0.05 }}
      />
      <Panel position="bottom-right" className="flex gap-2 bg-black/50 p-2 rounded-lg border border-white/10 backdrop-blur-sm">
        <button
          onClick={() => zoomOut()}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4 text-white/70" />
        </button>
        <button
          onClick={() => zoomIn()}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4 text-white/70" />
        </button>
        <div className="w-px bg-white/10" />
        <button
          onClick={handlePlay}
          className={`p-2 rounded-lg hover:bg-white/10 transition-colors ${
            isPlaying ? 'text-green-400' : 'text-white/70'
          }`}
          title={isPlaying ? 'Pause Workflow' : 'Play Workflow'}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4" />
          ) : (
            <Play className="w-4 h-4" />
          )}
        </button>
        <button
          onClick={handleShare}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          title="Share Workflow"
        >
          <Share2 className="w-4 h-4 text-white/70" />
        </button>
      </Panel>
    </ReactFlow>
  )
}

export function DemoSection() {
  return (
    <section className="relative py-20 md:py-32 border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container px-4 relative">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full px-4 py-1.5 text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            What is TestFlow?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Future of Hardware Validation
          </h2>
          <p className="text-gray-400 text-lg">
            Create sophisticated validation workflows in minutes with our intuitive drag-and-drop interface
          </p>
        </div>

        {/* Main Demo Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Flow Demo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
            <div className="relative aspect-square w-full max-w-xl mx-auto rounded-2xl border border-white/10 bg-black/90 backdrop-blur-sm overflow-hidden shadow-2xl">
              <ReactFlowProvider>
                <Flow />
              </ReactFlowProvider>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Build Your Workflow</h3>
              <div className="grid gap-4">
                {[
                  {
                    title: "Drag & Drop Interface",
                    description: "Intuitively create complex validation workflows with simple drag and drop actions",
                    gradient: "from-blue-500/20 to-blue-500/0"
                  },
                  {
                    title: "Smart Connections",
                    description: "AI-powered automatic connections between compatible instruments",
                    gradient: "from-purple-500/20 to-purple-500/0"
                  },
                  {
                    title: "Real-time Preview",
                    description: "See your validation workflow come to life as you build it",
                    gradient: "from-green-500/20 to-green-500/0"
                  }
                ].map((feature) => (
                  <div
                    key={feature.title}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                    <div className="relative p-4 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-sm">
                      <h4 className="font-semibold mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "85%", label: "Faster Setup" },
                { value: "24/7", label: "Operation" },
                { value: "100%", label: "Accuracy" }
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/10">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button asChild className="w-full group" size="lg">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg px-6 py-2.5 transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]"
              >
                Schadule A Call
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Bottom Section - Steps */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Instruments",
                description: "Choose from our library of supported testing equipment"
              },
              {
                step: "02",
                title: "Configure Tests",
                description: "Set up your testing parameters and conditions"
              },
              {
                step: "03",
                title: "Run & Monitor",
                description: "Execute tests and monitor results in real-time"
              }
            ].map((step) => (
              <div key={step.step} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <div className="relative p-6 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-sm font-mono text-blue-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}