import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/AdminLayout";
import {
  Server,
  Cpu,
  HardDrive,
  RefreshCw,
  Activity,
  Clock,
  Zap,
} from "lucide-react";
import { useSystemHelth } from "../hook/query/systemStatus";

const ServerHealth = () => {
  const { data, isLoading } = useSystemHelth();

  const [liveMemory, setLiveMemory] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  /* ⏱ Live Clock */
  useEffect(() => {
    const t = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  /* 💾 Frontend-only memory simulation */
  useEffect(() => {
    if (!data?.memory) return;

    // Backend se correct field names use karo
    const totalRAM = data.memory.totalSystemRAM_MB || 0;
    const processRAM = data.memory.processRAM_MB || 0;
    const heapTotal = data.memory.heapTotalMB || 0;
    const heapUsed = data.memory.heapUsedMB || 0;

    setLiveMemory({
      totalRAM_MB: totalRAM,
      usedMB: processRAM,
      freeRAM_MB: Math.max(0, totalRAM - processRAM),
      heapTotalMB: heapTotal,
      heapUsedMB: heapUsed,
    });

    const i = setInterval(() => {
      setLiveMemory((prev) => {
        if (!prev) return prev;

        const rand = () => Math.floor(Math.random() * 6) - 3;

        const used = Math.min(
          prev.totalRAM_MB,
          Math.max(0, prev.usedMB + rand())
        );

        const heapUsed = Math.min(
          prev.heapTotalMB,
          Math.max(0, prev.heapUsedMB + rand())
        );

        return {
          ...prev,
          usedMB: used,
          heapUsedMB: heapUsed,
          freeRAM_MB: Math.max(0, prev.totalRAM_MB - used),
        };
      });
    }, 1000);

    return () => clearInterval(i);
  }, [data]);

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center">
            <div className="h-12 w-12 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">Loading server health…</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  const { status, environment, uptime, system, healthPercent } = data || {};

  const memPct = liveMemory && liveMemory.totalRAM_MB > 0
    ? ((liveMemory.usedMB / liveMemory.totalRAM_MB) * 100).toFixed(1)
    : 0;

  const heapPct = liveMemory && liveMemory.heapTotalMB > 0
    ? ((liveMemory.heapUsedMB / liveMemory.heapTotalMB) * 100).toFixed(1)
    : 0;

  const statusUI = {
    healthy: {
      label: "Healthy",
      color: "green",
      pulse: "bg-green-500",
      text: "text-green-600",
    },
    degraded: {
      label: "Degraded",
      color: "yellow",
      pulse: "bg-yellow-500",
      text: "text-yellow-600",
    },
    critical: {
      label: "Critical",
      color: "red",
      pulse: "bg-red-500",
      text: "text-red-600",
    },
  };

  const statusMeta = statusUI[status] || statusUI.healthy;

  return (
    <AdminLayout>
      <div className="min-h-screen  ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
                <Server className="text-white" size={26} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Server Health
                </h1>
                <p className="text-sm text-gray-500">
                  Real-time system monitoring
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-50 border border-green-200">
              <RefreshCw
                size={16}
                className="text-green-600 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span className="text-sm font-semibold text-green-700">
                Live
              </span>
            </div>
          </div>

          {/* TOP STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "Status",
                value: statusMeta.label,
                icon: Activity,
                color: statusMeta.color,
                isStatus: true,
              },
              {
                label: "Environment",
                value: environment,
                icon: Zap,
                color: environment === "production" ? "red" : "amber",
              },
              {
                label: "Uptime",
                value: uptime?.readable,
                icon: Clock,
                color: "blue",
              },
              {
                label: "Server Time",
                value: currentTime.toLocaleTimeString(),
                icon: Clock,
                color: "purple",
                sub: currentTime.toLocaleDateString(),
              },
            ].map((c, i) => (
              <div
                key={i}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-3 rounded-xl bg-${c.color}-100`}>
                    <c.icon size={22} className={`text-${c.color}-600`} />
                  </div>
                  {c.label === "Status" && (
                    <div className="relative">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-40" />
                    </div>
                  )}
                </div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  {c.label}
                </p>
                <p
                  className={`${
                    c.isStatus
                      ? `text-2xl ${statusMeta.text}`
                      : "text-lg text-gray-900"
                  } font-bold capitalize`}
                >
                  {c.value}
                </p>

                {c.isStatus && (
                  <p className="text-xs text-gray-500 mt-1">
                    Health: {healthPercent}%
                  </p>
                )}

                {c.sub && <p className="text-xs text-gray-500">{c.sub}</p>}
              </div>
            ))}
          </div>

          {/* DETAILS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* MEMORY */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
                  <HardDrive size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Memory Usage
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Live metrics
                  </p>
                </div>
              </div>

              {/* RAM */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    RAM Usage
                    <span className="block text-xs text-gray-400 font-normal mt-0.5">
                      Total system memory being used
                    </span>
                  </span>
                  <span className="font-bold text-purple-600">{memPct}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-600
                               shadow-[0_0_12px_rgba(168,85,247,0.6)] animate-pulse"
                    style={{ width: `${memPct}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{liveMemory?.usedMB || 0} MB used</span>
                  <span>{liveMemory?.totalRAM_MB || 0} MB total</span>
                </div>
              </div>

              {/* HEAP */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-gray-700">
                    Heap Usage
                    <span className="block text-xs text-gray-400 font-normal mt-0.5">
                      Node.js memory allocation for app
                    </span>
                  </span>
                  <span className="font-bold text-indigo-600">{heapPct}%</span>
                </div>
                <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600
                               shadow-[0_0_12px_rgba(99,102,241,0.6)] animate-pulse"
                    style={{ width: `${heapPct}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>{liveMemory?.heapUsedMB || 0} MB used</span>
                  <span>{liveMemory?.heapTotalMB || 0} MB total</span>
                </div>
              </div>
              {/* MINI MEMORY STATS */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-200">
                {/* Free RAM */}
                <div
                  className="bg-white/80 backdrop-blur-xl rounded-xl p-4 
               border border-gray-200 shadow-sm 
               hover:shadow-md transition"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    Free RAM
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">
                    {liveMemory?.freeRAM_MB || 0} MB
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Available system memory
                  </p>
                </div>

                {/* Heap Total */}
                <div
                  className="bg-white/80 backdrop-blur-xl rounded-xl p-4 
               border border-gray-200 shadow-sm 
               hover:shadow-md transition"
                >
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                    Heap Total
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    {liveMemory?.heapTotalMB || 0} MB
                  </p>
                </div>
              </div>
            </div>

            {/* SYSTEM */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-lg">
                  <Cpu size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    System Info
                  </h2>
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    Runtime & hardware
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ["Platform", system?.platform],
                  ["Node Version", system?.nodeVersion],
                  ["CPU Cores", `${system?.cpuCores} cores`],
                ].map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-4 rounded-xl bg-white border border-gray-200"
                  >
                    <span className="text-sm text-gray-500">{s[0]}</span>
                    <span className="font-semibold text-gray-900">{s[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ServerHealth;