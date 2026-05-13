"use client";

import { motion } from "framer-motion";

import { GlassCard } from "@/components/shared/glass-card";

const columns = [
  {
    title: "Pending",
    color: "bg-yellow-400",
    tasks: [
      "Refactor RBAC validation",
      "Realtime sync optimization",
    ],
  },
  {
    title: "In Progress",
    color: "bg-blue-400",
    tasks: [
      "Pusher event orchestration",
      "Task lifecycle testing",
    ],
  },
  {
    title: "Done",
    color: "bg-emerald-400",
    tasks: [
      "Project architecture",
      "Auth middleware system",
    ],
  },
];

export function TaskflowBoard() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
      >
        <GlassCard className="overflow-hidden rounded-[2rem] p-0">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
            <div>
              <h3 className="text-lg font-medium">
                Realtime Collaboration Workspace
              </h3>

              <p className="mt-1 text-sm text-white/40">
                Multi-user synchronized project management system
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400" />

              <span className="text-sm text-emerald-200">
                Live Sync Active
              </span>
            </div>
          </div>

          {/* Board */}
          <div className="grid gap-6 p-6 lg:grid-cols-3">
            {columns.map((column) => (
              <GlassCard
                key={column.title}
                className="rounded-[1.75rem] bg-white/2"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${column.color}`}
                  />

                  <h4 className="text-lg font-medium">
                    {column.title}
                  </h4>
                </div>

                <div className="mt-6 space-y-4">
                  {column.tasks.map((task) => (
                    <motion.div
                      key={task}
                      whileHover={{
                        y: -2,
                      }}
                      className="rounded-2xl border border-white/5 bg-black/20 p-4"
                    >
                      <p className="text-sm text-white/70">
                        {task}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex -space-x-2">
                          <div className="h-8 w-8 rounded-full border border-black bg-blue-400" />
                          <div className="h-8 w-8 rounded-full border border-black bg-violet-400" />
                        </div>

                        <div className="text-xs text-white/30">
                          Updated now
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}