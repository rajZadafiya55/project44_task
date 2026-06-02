import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle,
  Box, ChevronRight, Sparkles, User, Check, Truck, ScanBarcode, Eye, Clock, MapPin,
} from 'lucide-react';

import secondPoster from '../assets/secondposter.png';


// --- 2. Network Operations View ---
const NetworkOperationsView = () => {
  const [step, setStep] = useState(0);
  const [chatStep, setChatStep] = useState(0);

  useEffect(() => {
    if (step === 2) {
      setChatStep(0);
      const t1 = setTimeout(() => setChatStep(1), 1500);
      const t2 = setTimeout(() => setChatStep(2), 3500);
      const t3 = setTimeout(() => setStep(3), 6000);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [step]);

  const nodes = [
    { id: 'BLB – 002', loc: 'Balboa', date: 'Apr 17, 2026', container: 'MSKU8821049', status: 'In-Transit', isError: false },
    { id: 'CPN – 105', loc: 'Colon', date: 'Apr 17, 2026', container: 'MSKU5502194', status: 'Arrived', isError: false },
    { id: 'CHO – 208', loc: 'La Chorrera', date: 'Apr 17, 2026', container: 'MSKU7730101', status: 'Action Required', isError: true, highlight: true },
    { id: 'BLB – 001', loc: 'Balboa', date: 'Apr 17, 2026', container: 'MSKU9214485', status: 'In-Transit', isError: false },
  ];

  const routePoints = [
    { id: 'end', x: 100, y: 17, type: 'none' },
    { id: 'bend', x: 80, y: 18, type: 'none' },
    { id: 'truck', x: 63, y: 21, type: 'truck' },
    { id: '30', x: 57, y: 23, type: 'node', label: '30' },
    { id: '21', x: 51.5, y: 28, type: 'node', label: '21' },
    { id: '19', x: 49, y: 31, type: 'node', label: '19' },
    { id: '15', x: 45, y: 36, type: 'node', label: '15' },
    { id: '8', x: 45, y: 52, type: 'node', label: '8' },
    { id: '4', x: 45, y: 66, type: 'node', label: '4' },
    { id: 'pin', x: 45, y: 73, type: 'pin' },
  ];

  return (
    <div className="w-full h-full flex flex-col lg:flex-row  justify-between relative z-10 p-6 lg:p-6 ">
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-lg bg-black">
        <img src={secondPoster} alt="Network Operations Background" className="w-full h-full object-cover opacity-60" />

        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(24,123,245,0.8)]">
          {routePoints.map((pt, i) => {
            if (i === routePoints.length - 1) return null;
            const next = routePoints[i + 1];
            return (
              <motion.line
                key={i}
                x1={`${pt.x}%`} y1={`${pt.y}%`}
                x2={`${next.x}%`} y2={`${next.y}%`}
                stroke="#187bf5"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.4, ease: "easeInOut" }}
              />
            );
          })}
        </svg>

        {/* Route Nodes */}
        {routePoints.map((pt, i) => {
          if (pt.type === 'none') return null;
          return (
            <motion.div
              key={pt.id}
              initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
              animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              transition={{ delay: i * 0.4, type: 'spring', stiffness: 200, damping: 15 }}
              className="absolute flex items-center justify-center origin-center"
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
            >
              {pt.type === 'pin' && (
                <div className="w-8 h-8 rounded-full bg-[#187bf5]/20 flex items-center justify-center">
                  <MapPin size={24} className="text-[#187bf5] fill-[#187bf5]" />
                </div>
              )}
              {pt.type === 'node' && (
                <div className="w-5 h-5 rounded-full bg-white border-[2px] border-[#187bf5] flex items-center justify-center shadow-[0_0_15px_rgba(24,123,245,0.9)] z-10">
                  <span className="text-[#187bf5] text-[9px] font-bold">{pt.label}</span>
                </div>
              )}
              {pt.type === 'truck' && (
                <div className="w-8 h-8 rounded-full bg-[#187bf5] border-[3px] border-[#0a0a0a] flex items-center justify-center shadow-[0_0_20px_rgba(24,123,245,1)] z-20">
                  <Truck size={14} className="text-white fill-white" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <div className="lg:w-[33%] mb-150 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-5 shadow-2xl max-w-[480px]"
        >
          <h1 className="text-xl font-bold mb-4 tracking-tight leading-tight text-white">
            Network Operations Agent
          </h1>
          <div className="flex gap-2 text-[10px] text-gray-400 mb-4 font-mono whitespace-nowrap overflow-hidden">
            <span>Your network has gaps. Our agent closes them.</span>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed mb-5 font-medium">
            The Network Operations Agent detects broken data connections, resolves carrier onboarding gaps, and automates milestone recovery, so your visibility doesn't just look complete, it is complete.
          </p>
          <button className="bg-[#1860ff] text-sm hover:bg-blue-600 text-white px-3 py-1 rounded-full font-medium shadow-[0_0_15px_rgba(24,96,255,0.4)] transition-all cursor-pointer">
            Get a Demo
          </button>
        </motion.div>
      </div>

      <div className="relative overflow-hidden h-[400px] flex flex-col w-[420px] mb-40 p-4 border rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl border-[#222] shadow-2xl shrink-0">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col h-full w-full">
              {/* Top metrics */}
              <div className="flex gap-2 w-full mb-3 shrink-0">
                <div className="flex-1 border border-blue-500/40 text-blue-500 text-[10px] font-bold px-2 py-1.5 rounded-lg text-center">5 Live Routes</div>
                <div className="flex-1 border border-green-500/40 text-green-500 text-[10px] font-bold px-2 py-1.5 rounded-lg text-center">0 Exceptions</div>
                <div className="flex-1 border border-blue-500/40 text-blue-500 text-[10px] font-bold px-2 py-1.5 rounded-lg text-center">98% On-Time</div>
              </div>

              {/* Agent Oversight floating widget */}
              <div className="bg-[#0b52a1] rounded-xl p-3 flex items-center gap-3 w-full mb-3 shadow-lg shrink-0">
                <div className="bg-white rounded-full w-9 h-9 flex items-center justify-center text-[#0b52a1] font-bold text-sm shrink-0">44</div>
                <div className="leading-tight">
                  <div className="font-bold text-sm text-white">Agent Oversight</div>
                  <div className="text-[10px] text-blue-100 mt-0.5">Scanning shipments for<br />signal continuity.</div>
                </div>
              </div>

              {/* Nodes List */}
              <div className="overflow-y-auto h-full custom-scrollbar pb-2 w-full no-scrollbar flex flex-col gap-2">
                {nodes.map(node => (
                  <motion.div
                    key={node.id}
                    onClick={() => { if (node.highlight && step === 0) setStep(1); }}
                    className={`bg-[#141414]/90 border rounded-xl p-3.5 flex justify-between items-center transition-all ${node.highlight && step === 0 ? 'cursor-pointer hover:border-[#444] hover:bg-[#1a1a1a]' : ''} ${node.highlight ? 'border-[#333]' : 'border-[#222]'}`}
                  >
                    <div>
                      <div className="font-bold text-[15px] text-white leading-tight">{node.id}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{node.loc}</div>
                      <div className="text-[10px] text-gray-500 mt-1 font-medium">{node.date}</div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-end">
                      <div className="bg-[#1f1f1f] border border-[#333] px-2 py-1 rounded text-[9px] text-gray-400 font-mono flex items-center gap-1.5">
                        <ScanBarcode size={10} /> {node.container}
                      </div>
                      <div className={`text-white text-[10px] font-bold px-2 py-1.5 rounded-md flex items-center gap-1.5 w-max ${node.isError ? 'bg-transparent text-red-500' : 'bg-[#22c55e]'}`}>
                        {!node.isError && (node.status === 'Arrived' ? <Check size={10} /> : <Truck size={10} />)}
                        {node.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col justify-center"
            >
              <div className="flex gap-2 mb-4 justify-between">
                <div className="border border-red-500/50 text-red-500 text-xs px-3 py-1.5 rounded-lg font-medium">Missing Origin Milestones</div>
                <div className="border border-red-500/50 text-red-500 text-xs px-3 py-1.5 rounded-lg font-medium">Action Required</div>
              </div>

              <div className="bg-[#ef4444] rounded-xl p-5 mb-5 shadow-lg shadow-red-500/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-white text-2xl font-bold mb-0.5 tracking-tight">CHO–208</div>
                    <div className="text-red-100 text-xs font-medium">La Chorrera, Panama</div>
                  </div>
                  <div className="text-white text-[10px] font-bold mt-1.5">June 17 • 12:17 EDT</div>
                </div>

                <div className="bg-white/20 border border-white/30 text-white p-2.5 rounded-lg flex items-center justify-center gap-2 mb-3 text-sm font-bold">
                  <ScanBarcode size={16} /> Missing Origin Milestones
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/20 border border-white/30 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Truck size={14} /> Truck #7730</div>
                  <div className="bg-white/20 border border-white/30 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Box size={14} /> In transit</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/20 border border-white/30 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Eye size={14} /> 0%</div>
                  <div className="bg-white/20 border border-white/30 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Clock size={14} /> Late &gt; 3 hours</div>
                </div>
              </div>

              <div className="flex justify-center">
                <button onClick={() => setStep(2)} className="bg-[#0070f3] hover:bg-blue-600 transition-colors text-white font-bold py-2.5 px-8 rounded-lg shadow-[0_0_15px_rgba(0,112,243,0.4)] text-sm cursor-pointer">
                  Contact Carrier
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col justify-center"
            >
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                  <div className="flex-1 bg-[#0b52a1] rounded-2xl rounded-tr-sm p-4 text-white">
                    <div className="font-bold text-sm mb-1.5">AI agent</div>
                    <div className="text-sm leading-snug">Hi, we're showing shipment #7730 is missing origin milestones. Can you confirm when this load was picked up?</div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#0070f3] text-white flex items-center justify-center self-end shrink-0 shadow-lg"><Sparkles size={12} /></div>
                </motion.div>

                {chatStep >= 1 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 flex-row-reverse">
                    <div className="flex-1 bg-[#222] rounded-2xl rounded-tl-sm p-4 text-white">
                      <div className="font-bold text-sm mb-1.5 text-gray-300">Carrier</div>
                      <div className="text-sm text-gray-300 leading-snug">Yesterday at 2:15 PM. It's in transit now toward Panama City.</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#333] border border-[#444] text-gray-400 flex items-center justify-center self-end shrink-0"><User size={12} /></div>
                  </motion.div>
                )}

                {chatStep >= 2 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3">
                    <div className="flex-1 bg-[#0b52a1] rounded-2xl rounded-tr-sm p-4 text-white">
                      <div className="font-bold text-sm mb-1.5">AI agent</div>
                      <div className="text-sm leading-snug">Thanks. I've updated shipment #7730 with the milestones provided.</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-[#0070f3] text-white flex items-center justify-center self-end shrink-0 shadow-lg"><Sparkles size={12} /></div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="w-full flex flex-col justify-center"
            >
              <div className="bg-[#1a1a1a] border border-[#222] rounded-lg p-3 mb-5 font-mono text-gray-400 text-xs flex items-center gap-2">
                <ChevronRight size={14} /> Updating Missing Milestones
              </div>

              <div className="bg-[#1d63b8] rounded-xl p-5 mb-5 shadow-lg shadow-blue-500/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-white text-2xl font-bold mb-0.5 tracking-tight">CHO–208</div>
                    <div className="text-blue-100 text-xs font-medium">La Chorrera, Panama</div>
                  </div>
                  <div className="text-white text-[10px] font-bold mt-1.5">June 17 • 12:17 EDT</div>
                </div>

                <div className="bg-white/10 border border-white/20 text-white p-2.5 rounded-lg flex items-center justify-between mb-3 text-sm font-bold">
                  <div className="flex items-center gap-2"><ScanBarcode size={16} /> Missing Milestones</div>
                  <div className="font-bold text-white">Updated</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-[#1b58a5] border border-white/10 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Truck size={14} /> Truck #7730</div>
                  <div className="bg-[#1b58a5] border border-white/10 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><CheckCircle size={14} className="text-gray-300" /> In Transit</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1b58a5] border border-white/10 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Eye size={14} /> 100%</div>
                  <div className="bg-[#1b58a5] border border-white/10 text-white p-2 rounded-lg flex items-center justify-center gap-2 text-xs font-bold"><Clock size={14} /> Late &gt; 3 hours</div>
                </div>
              </div>

              <div className="flex justify-center">
                <button onClick={() => setStep(4)} className="bg-[#0070f3] hover:bg-blue-600 transition-colors text-white font-bold py-2.5 px-8 rounded-lg shadow-[0_0_15px_rgba(0,112,243,0.4)] text-sm cursor-pointer">
                  Confirm
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-full flex flex-col justify-center items-center">
              <div className="bg-[#187bf5] rounded-3xl p-8 w-[320px] text-center text-white shadow-[0_0_50px_rgba(24,123,245,0.4)] relative border border-blue-400/20">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner backdrop-blur-md">
                  <Check size={32} strokeWidth={3} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">Success!</h3>
                <p className="text-blue-50 text-base mb-3 font-medium">Visibility Improved</p>
                <p className="text-blue-100 text-xs leading-relaxed max-w-[200px] mx-auto">All missing milestones for CHO-208 have been recovered.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


export default NetworkOperationsView;
