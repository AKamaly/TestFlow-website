import { Handle, Position } from 'reactflow'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface WorkflowNodeProps {
  data: {
    image: string
    label: string
    isEmpty?: boolean
    isActive?: boolean
    isCompleted?: boolean
  }
}

export function WorkflowNode({ data }: WorkflowNodeProps) {
  return (
    <div className="group relative">
      <Handle
        type="target"
        position={Position.Top}
        className={cn(
          "!bg-transparent !border-2 !border-white/20 !w-2 !h-2 !top-[-5px] transition-all",
          "before:content-[''] before:absolute before:inset-[1px] before:bg-white/20 before:rounded-full",
          "after:content-[''] after:absolute after:inset-[-6px] after:bg-white/5 after:rounded-full after:opacity-0",
          "group-hover:!border-white/40 group-hover:before:bg-white/40 group-hover:after:opacity-100",
          data.isActive && "!border-blue-400/50 before:!bg-blue-400/50",
          data.isCompleted && "!border-green-400/50 before:!bg-green-400/50"
        )}
      />
      <motion.div 
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "relative min-w-[180px] bg-black/80 backdrop-blur-xl border rounded-xl p-4 transition-all duration-300",
          "shadow-[0_0_30px_-15px_rgba(0,0,0,0.3)]",
          "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
          data.isActive ? "border-blue-500/30 shadow-[0_0_50px_-15px_rgba(59,130,246,0.5)]" :
          data.isCompleted ? "border-green-500/30 shadow-[0_0_50px_-15px_rgba(34,197,94,0.5)]" :
          "border-white/10 hover:border-white/20"
        )}
      >
        <div className="absolute inset-x-0 -top-[5px] h-[5px] flex justify-center">
          <div className="w-px h-full bg-gradient-to-b from-white/20 to-transparent" />
        </div>
        <div className="absolute inset-x-0 -bottom-[5px] h-[5px] flex justify-center">
          <div className="w-px h-full bg-gradient-to-t from-white/20 to-transparent" />
        </div>

        <div className="flex items-center gap-3">
          <div 
            className={cn(
              "relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300",
              "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/5 before:to-transparent",
              "after:absolute after:inset-0 after:bg-black/5",
              data.isActive && "ring-2 ring-blue-500/30 shadow-[0_0_15px_-5px_rgba(59,130,246,0.5)]",
              data.isCompleted && "ring-2 ring-green-500/30 shadow-[0_0_15px_-5px_rgba(34,197,94,0.5)]"
            )}
          >
            <Image
              src={data.image}
              alt={data.label}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm text-white/90">{data.label}</p>
            <p className="text-xs text-white/50">Click to configure</p>
          </div>
          <div 
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              data.isActive && "bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
              data.isCompleted && "bg-green-400 shadow-[0_0_10px_rgba(34,197,94,0.5)]",
              !data.isActive && !data.isCompleted && "bg-white/20"
            )}
          />
        </div>
      </motion.div>
      <Handle
        type="source"
        position={Position.Bottom}
        className={cn(
          "!bg-transparent !border-2 !border-white/20 !w-2 !h-2 !bottom-[-5px] transition-all",
          "before:content-[''] before:absolute before:inset-[1px] before:bg-white/20 before:rounded-full",
          "after:content-[''] after:absolute after:inset-[-6px] after:bg-white/5 after:rounded-full after:opacity-0",
          "group-hover:!border-white/40 group-hover:before:bg-white/40 group-hover:after:opacity-100",
          data.isActive && "!border-blue-400/50 before:!bg-blue-400/50",
          data.isCompleted && "!border-green-400/50 before:!bg-green-400/50"
        )}
      />
    </div>
  )
}

