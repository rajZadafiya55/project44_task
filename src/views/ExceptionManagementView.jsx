import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MoveRight,
  Map, AlertTriangle, Sparkles, User, Check, Truck, MapPin, Ship
} from 'lucide-react';

import fourPoster from '../assets/fourposter.png';

// --- 4. Exception Management View ---
const ExceptionManagementView = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 2000);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const timer = setTimeout(() => setStep(2), 2500);
      return () => clearTimeout(timer);
    } else if (step === 2) {
      const timer = setTimeout(() => setStep(3), 2000);
      return () => clearTimeout(timer);
    } else if (step === 3) {
      const timer = setTimeout(() => setStep(4), 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const bluePoints = [
    { id: 'bp1', x: 45, y: 15, label: 'Port of loading', type: 'pin' },
    { id: 'bp2', x: 49, y: 19, type: 'boat' },
    { id: 'bp3', x: 52, y: 23, type: 'dot' },
    { id: 'bp4', x: 55, y: 26, label: '2', type: 'num' },
    { id: 'bp5', x: 57, y: 31, type: 'dot' },
    { id: 'bp6', x: 59, y: 35, type: 'dot' },
    { id: 'bp7', x: 61, y: 40, label: '6', type: 'num' },
    { id: 'bp8', x: 60, y: 45, type: 'dot' },
    { id: 'bp9', x: 60, y: 50, type: 'alert' }
  ];

  const redPoints = [
    { id: 'rp1', x: 60, y: 50, type: 'alert' },
    { id: 'rp2', x: 61, y: 56, type: 'dot' },
    { id: 'rp3', x: 56, y: 58, label: '11', type: 'num' },
    { id: 'rp4', x: 52, y: 59, type: 'dot' },
    { id: 'rp5', x: 49, y: 56, label: '14', type: 'num' },
    { id: 'rp6', x: 46, y: 53, type: 'dot' },
    { id: 'rp7', x: 43, y: 50, type: 'dot' },
    { id: 'rp8', x: 40, y: 47, label: '20', type: 'num' },
    { id: 'rp9', x: 37, y: 45, type: 'dot' },
    { id: 'rp10', x: 33, y: 46, type: 'dot' },
  ];

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-10 p-6 lg:p-6 pb-16">


      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-lg bg-black">
        <img src={fourPoster} alt="Exception Management Background" className="w-full h-full object-cover opacity-60" />

        {/* Animated Map Routes */}
        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(24,123,245,0.8)]">
          {/* Blue lines */}
          {bluePoints.map((pt, i) => {
            if (i === bluePoints.length - 1) return null;
            const next = bluePoints[i + 1];
            return (
              <motion.line key={`b-line-${i}`}
                x1={`${pt.x}%`} y1={`${pt.y}%`}
                x2={`${next.x}%`} y2={`${next.y}%`}
                stroke="#187bf5" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.15, delay: i * 0.15 }}
              />
            )
          })}

          {/* Red lines */}
          {step >= 1 && redPoints.map((pt, i) => {
            if (i === redPoints.length - 1) return null;
            const next = redPoints[i + 1];
            return (
              <motion.line key={`r-line-${i}`}
                x1={`${pt.x}%`} y1={`${pt.y}%`}
                x2={`${next.x}%`} y2={`${next.y}%`}
                stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 0.15, delay: i * 0.15 }}
                className="drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
              />
            )
          })}
        </svg>

        {/* Node Points */}
        {bluePoints.map((pt, i) => {
          return (
            <motion.div key={pt.id}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            >
              {pt.type === 'pin' && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg relative left-[10px]">
                    <MapPin size={12} className="text-gray-500 fill-gray-300" />
                  </div>
                  <div className="bg-[#4a5568]/80 text-blue-100 text-[10px] px-2 py-0.5 rounded border border-blue-400/30 whitespace-nowrap relative left-[10px]">
                    Port of loading
                  </div>
                </div>
              )}
              {pt.type === 'boat' && (
                <div className="w-5 h-5 bg-[#187bf5] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(24,123,245,0.8)]">
                  <Ship size={10} className="text-white" />
                </div>
              )}
              {pt.type === 'num' && (
                <div className="w-4 h-4 bg-white border-[2px] border-[#187bf5] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(24,123,245,0.5)]">
                  <span className="text-[#187bf5] text-[9px] font-bold">{pt.label}</span>
                </div>
              )}
              {pt.type === 'dot' && (
                <div className="w-2.5 h-2.5 bg-white border-[2.5px] border-[#187bf5] rounded-full shadow-[0_0_5px_rgba(24,123,245,0.5)]" />
              )}
              {pt.type === 'alert' && (
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.8)] z-20">
                  <AlertTriangle size={12} className="text-white" />
                </div>
              )}
            </motion.div>
          )
        })}

        {step >= 1 && redPoints.map((pt, i) => {
          if (pt.type === 'alert') return null; // Already rendered
          return (
            <motion.div key={pt.id}
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.15 }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            >
              {pt.type === 'num' && (
                <div className="w-4 h-4 bg-white border-[2px] border-red-500 rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                  <span className="text-red-500 text-[9px] font-bold">{pt.label}</span>
                </div>
              )}
              {pt.type === 'dot' && (
                <div className="w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)]" />
              )}
            </motion.div>
          )
        })}
      </div>

      <div className="lg:w-[33%] mb-40 flex flex-col justify-center relative z-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-6 shadow-2xl max-w-[480px]"
        >
          <h1 className="text-xl font-bold mb-4 tracking-tight leading-tight text-white">
            Exception Management Agent
          </h1>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Resolution is about to change from a manual stress to AI.
          </p>
          <p className="text-gray-200 text-xs leading-relaxed mb-6 font-medium">
            The Exception Management Agent anticipates delays, disruptions, and route deviations across your shipments and automatically engages carriers to drive resolution before costs compound.
          </p>
          <button className="bg-[#1860ff] text-sm hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(24,96,255,0.4)] transition-all cursor-pointer w-max">
            Get a Demo
          </button>
        </motion.div>
      </div>

      {step !== 0 && (
        <div className="relative flex flex-col w-[420px]  p-5 border rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl border-[#222] shadow-2xl shrink-0 transition-all duration-300 h-[320px] overflow-y-auto no-scrollbar">
          <AnimatePresence mode="wait">


            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex flex-col w-full">
                <div className="font-bold text-lg text-white mb-6">Route Details</div>
                <div className="bg-[#141414]/90 border border-[#222] rounded-xl p-4 mb-4 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#187bf5]/20 text-[#187bf5] p-2 rounded-lg"><Truck size={18} /></div>
                    <div>
                      <div className="font-bold text-white text-sm tracking-tight">23216449</div>
                      <div className="text-xs text-gray-400 mt-0.5">ZIM Integrated Shipping</div>
                    </div>
                  </div>
                  <div className="bg-[#187bf5]/20 text-[#187bf5] text-[10px] font-bold px-2 py-1 rounded">In Transit</div>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#222] ml-2">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#187bf5] rounded-full shadow-[0_0_10px_rgba(24,123,245,0.8)]"></div>
                    <div className="font-bold text-white text-sm">Vessel departed from port of origin</div>
                    <div className="text-xs text-gray-500 mt-1">May 28 • 08:30 AM</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#222] border-2 border-gray-500 rounded-full"></div>
                    <div className="font-bold text-gray-500 text-sm">Expected Arrival</div>
                    <div className="text-xs text-gray-600 mt-1">Jun 2 • 14:00 PM</div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col w-full">
                <div className="font-bold text-lg text-white mb-6 flex justify-between items-center">
                  Route Details
                  <div className="bg-red-500/20 text-red-500 text-[10px] font-bold px-2 py-1 rounded animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.4)]">Exception Detected</div>
                </div>

                <div className="bg-[#2a1111]/90 border border-red-500/40 rounded-xl p-4 mb-4 flex items-center justify-between relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-red-500/5"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <div className="bg-red-500/20 text-red-500 p-2 rounded-lg"><AlertTriangle size={18} /></div>
                    <div>
                      <div className="font-bold text-white text-sm tracking-tight">Port Congestion Delay</div>
                      <div className="text-xs text-gray-400 mt-0.5">Vessel stuck outside Miami Port</div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#222] ml-2">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#187bf5] rounded-full"></div>
                    <div className="font-bold text-gray-400 text-sm">Vessel departed from port of origin</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                    <div className="font-bold text-red-400 text-sm">Expected Arrival Delayed</div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="bg-[#222] text-gray-400 text-xs px-2 py-1 rounded line-through decoration-red-500 font-mono">Jun 2, 2026</div>
                      <MoveRight size={14} className="text-gray-500" />
                      <div className="bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold px-2 py-1 rounded font-mono">Jun 7, 2026</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col w-full">
                <div className="font-bold text-lg text-white mb-4">Agent Resolution</div>

                <div className="space-y-4">
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#187bf5] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(24,123,245,0.5)]"><Sparkles size={14} /></div>
                    <div className="flex-1 bg-[#187bf5]/10 border border-[#187bf5]/20 rounded-2xl rounded-tl-sm p-4 text-white shadow-lg">
                      <div className="font-bold text-sm mb-1.5 text-blue-400">AI Agent</div>
                      <div className="text-sm leading-relaxed">We noticed a 5-day delay at Miami port. Should we reroute shipment #23216449 via Savannah to save 3 days?</div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }} className="flex gap-3 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-[#333] border border-[#444] text-gray-400 flex items-center justify-center shrink-0"><User size={14} /></div>
                    <div className="flex-1 bg-[#222] border border-[#333] rounded-2xl rounded-tr-sm p-4 text-white shadow-lg">
                      <div className="font-bold text-sm mb-1.5 text-gray-400">You</div>
                      <div className="text-sm leading-relaxed">Yes, please proceed with Savannah reroute immediately.</div>
                    </div>
                  </motion.div>

                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3 }} className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#187bf5] text-white flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(24,123,245,0.5)]"><Sparkles size={14} /></div>
                    <div className="flex-1 bg-[#187bf5]/10 border border-[#187bf5]/20 rounded-2xl rounded-tl-sm p-4 text-white shadow-lg">
                      <div className="font-bold text-sm mb-1.5 text-blue-400">AI Agent</div>
                      <div className="text-sm leading-relaxed">Rerouting confirmed. ETA updated and carriers notified.</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col w-full">
                <div className="font-bold text-lg text-white mb-6 flex justify-between items-center">
                  Route Details
                  <div className="bg-green-500/20 text-green-500 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(34,197,94,0.3)]"><Check size={12} strokeWidth={3} /> Resolved</div>
                </div>

                <div className="bg-[#141414]/90 border border-green-500/30 rounded-xl p-4 mb-4 flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 text-green-500 p-2 rounded-lg"><Map size={18} /></div>
                    <div>
                      <div className="font-bold text-white text-sm tracking-tight">New Route Active</div>
                      <div className="text-xs text-gray-400 mt-0.5">Shipment diverted to Savannah</div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[#222] ml-2">
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#187bf5] rounded-full"></div>
                    <div className="font-bold text-gray-400 text-sm">Vessel departed from port of origin</div>
                  </div>
                  <div className="relative opacity-50">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-[#333] rounded-full"></div>
                    <div className="font-bold text-gray-500 text-sm line-through">Miami Arrival (Delayed)</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                    <div className="font-bold text-green-400 text-sm">Rerouted to Savannah Port</div>
                    <div className="text-xs text-green-500/80 mt-1 font-mono">Jun 4, 2026</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};


export default ExceptionManagementView;
