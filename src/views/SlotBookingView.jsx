import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MoveRight, AlertTriangle, Box, Sparkles, Truck, Warehouse, Flame,
} from 'lucide-react';

import thirdPoster from '../assets/thirdposter.png';


// --- 3. Slot Booking View ---
const SlotBookingView = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 5000);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const timer = setTimeout(() => setStep(2), 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-10 p-6 lg:p-6">
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-lg bg-black">
        <img src={thirdPoster} alt="Slot Booking Background" className="w-full h-full object-cover opacity-60" />

        {/* Glowing Badges */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" style={{ left: '44%', top: '27%' }}>
          <div className="w-16 h-16 rounded-full bg-[#187bf5]/10 border border-[#187bf5]/30 flex items-center justify-center shadow-[0_0_30px_rgba(24,123,245,0.4)]">
            <div className="w-10 h-10 rounded-full bg-[#187bf5] flex items-center justify-center shadow-[0_0_15px_rgba(24,123,245,0.8)]">
              <Warehouse size={18} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: 'spring' }} className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" style={{ left: '68%', top: '27%' }}>
          <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.8)]">
              <Warehouse size={18} className="text-white" />
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.9, type: 'spring' }} className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2" style={{ left: '76%', top: '27%' }}>
          <div className="w-16 h-16 rounded-full bg-[#187bf5]/10 border border-[#187bf5]/30 flex items-center justify-center shadow-[0_0_30px_rgba(24,123,245,0.4)]">
            <div className="w-10 h-10 rounded-full bg-[#187bf5] flex items-center justify-center shadow-[0_0_15px_rgba(24,123,245,0.8)]">
              <Warehouse size={18} className="text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="lg:w-[33%] mb-70 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-6 shadow-2xl max-w-[480px]"
        >
          <h1 className="text-2xl font-bold mb-4 tracking-tight leading-tight text-white">
            Slot Booking Agent
          </h1>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Disruption hit the yard. Trucks are stacking up. Our agent is already on it.
          </p>
          <p className="text-gray-200 text-sm leading-relaxed mb-6 font-medium">
            The Slot Booking Agent automatically rebooks dock slots based on updated ETAs, prioritizes high-urgency loads, and updates downstream teams without anyone touching a clipboard.
          </p>
          <button className="bg-[#1860ff] text-sm hover:bg-blue-600 text-white px-4 py-2 rounded-full font-bold shadow-[0_0_15px_rgba(24,96,255,0.4)] transition-all cursor-pointer w-max">
            Get a Demo
          </button>
        </motion.div>
      </div>

      <div className="relative overflow-hidden flex flex-col w-[420px] mb-40 p-4 border rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl border-[#222] shadow-2xl shrink-0 transition-all duration-300">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col w-full">
              <div className="border border-blue-500/50 text-blue-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max mb-4">
                Live Updates
              </div>

              <div className="bg-[#187bf5] rounded-xl p-4 flex items-center gap-4 w-full mb-4 shadow-lg shadow-blue-500/20">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-[#187bf5] font-bold text-lg shrink-0">
                  44
                </div>
                <div className="leading-tight">
                  <div className="font-bold text-[15px] text-white">Agent Monitoring</div>
                  <div className="text-[11px] text-blue-100 mt-0.5">Shipment network and database</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { id: '25139897', carrier: 'UPS', type: 'Inbound', status: 'On Time', color: 'green', delay: 1.5 },
                  { id: 'D3G4Q78G', carrier: 'FedEx Ground', type: 'Inbound', status: 'On Time', color: 'green', delay: 1.9 },
                  { id: 'JG9347H098', carrier: 'XPO Logistics', type: 'Inbound', status: 'Running Early', color: 'blue', delay: 2.3 }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay, type: "spring", stiffness: 100 }}
                    className="bg-[#141414]/90 border border-[#222] rounded-xl p-3 px-4 flex justify-between items-center"
                  >
                    <div>
                      <div className="font-bold text-[14px] text-white leading-tight">{item.id}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{item.carrier}</div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <Truck size={14} className="text-gray-400" />
                        <div className="text-[9px] text-gray-500">{item.type}</div>
                      </div>
                      <div className={`text-[10px] font-bold px-2 py-1 rounded w-[90px] text-center ${item.color === 'green' ? 'bg-green-500/20 text-green-500 border border-green-500/20' : 'bg-[#187bf5]/20 text-[#187bf5] border border-[#187bf5]/20'
                        }`}>
                        {item.status}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col w-full h-full">
              <div className="flex gap-2 mb-4">
                <div className="border border-red-500/50 text-red-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max">Weather Alert</div>
                <div className="border border-red-500/50 text-red-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max">High Priority</div>
                <div className="border border-blue-500/50 text-blue-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max">Live Updates</div>
              </div>

              <div className="bg-[#b93232] rounded-xl p-4 flex items-center justify-between w-full mb-4 shadow-lg shadow-red-500/20">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-white shrink-0 border border-white/30"><AlertTriangle size={18} /></div>
                  <div className="leading-tight">
                    <div className="font-bold text-[15px] text-white mb-0.5">Mitigating risk</div>
                    <div className="text-[12px] text-red-100">Tornado - road closure</div>
                  </div>
                </div>
                <div className="text-white text-[11px] font-medium text-right">Delay anticipated</div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-[#141414]/90 border border-[#222] rounded-xl p-3 px-4 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[14px] text-white leading-tight">D3G4Q78G</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">FedEx Ground</div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-1"><Truck size={14} className="text-gray-400" /><div className="text-[9px] text-gray-500">Outbound</div></div>
                    <div className="text-[10px] font-bold px-2 py-1 rounded w-[90px] text-center bg-green-500/20 text-green-500 border border-green-500/20">On Time</div>
                  </div>
                </div>

                <div className="bg-[#2a1111]/90 border border-red-500/40 rounded-xl p-3 px-4 flex justify-between items-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/5 pointer-events-none"></div>
                  <div>
                    <div className="font-bold text-[14px] text-white leading-tight">25139897</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">UPS</div>
                    <div className="flex items-center gap-1 mt-1.5">
                      <div className="bg-red-500 w-3.5 h-3.5 rounded-full flex items-center justify-center"><Flame size={8} className="text-white fill-white" /></div>
                      <span className="text-red-500 text-[10px] font-bold">Impact</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 z-10">
                    <div className="flex flex-col items-center justify-center gap-1"><Truck size={14} className="text-gray-400" /><div className="text-[9px] text-gray-500">Inbound</div></div>
                    <div className="text-[10px] font-bold px-2 py-1 rounded w-[90px] text-center bg-red-500/20 text-red-500 border border-red-500/20">Delayed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex flex-col w-full h-full justify-center">
              <div className="bg-[#b93232] rounded-t-2xl rounded-b-lg p-6 w-full shadow-2xl relative overflow-hidden">
                <div className="absolute top-[-50px] right-[-50px] w-32 h-32 bg-red-400/20 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="font-bold text-xl text-white tracking-tight">Inventory at risk</div>
                  <div className="font-bold text-xl text-white">$687,000</div>
                </div>

                <div className="text-red-100/80 text-xs mb-6 relative z-10">Cargo Type <span className="text-white font-medium ml-1">Lithium-ion batteries</span></div>

                <div className="bg-[#8b2525] rounded-xl p-3 px-4 flex justify-between items-center mb-4 border border-red-400/20 relative z-10 shadow-inner">
                  <div className="text-white font-bold text-sm">Brunswick, GA</div>
                  <div className="text-red-300/50 flex items-center gap-1"><Truck size={12} /> <MoveRight size={12} /></div>
                  <div className="text-white font-bold text-sm">Forsyth, GA</div>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <div className="bg-[#8b2525] border border-red-400/20 rounded-lg p-2.5 flex items-center justify-center gap-2 text-white text-[11px] font-bold"><Box size={12} /> 3 orders impacted</div>
                  <div className="bg-[#8b2525] border border-red-400/20 rounded-lg p-2.5 flex items-center justify-center gap-2 text-white text-[11px] font-bold"><Flame size={12} className="text-red-300" /> 97%</div>
                  <div className="bg-[#8b2525] border border-red-400/20 rounded-lg p-2.5 flex items-center justify-center text-white text-[11px] font-medium">Flammable</div>
                  <div className="bg-[#8b2525] border border-red-400/20 rounded-lg p-2.5 flex items-center justify-center text-white text-[11px] font-medium">Hazmat</div>
                </div>
              </div>

              <div className="mt-5 flex justify-center w-full px-2">
                <button onClick={() => setStep(3)} className="bg-[#0070f3] hover:bg-blue-600 transition-colors text-white font-bold py-3 px-12 rounded-xl shadow-[0_0_20px_rgba(0,112,243,0.4)] text-sm cursor-pointer w-full">
                  Go to the Yard
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col w-full h-full">
              <div className="flex gap-2 mb-4">
                <div className="border border-red-500/50 text-red-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max">Weather Alert</div>
                <div className="border border-blue-500/50 text-blue-500 text-[10px] font-bold px-3 py-1.5 rounded-lg w-max">Live Updates</div>
              </div>

              <div className="bg-[#187bf5] rounded-xl p-4 flex items-center gap-4 w-full mb-4 shadow-lg shadow-blue-500/20">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-[#187bf5] font-bold text-lg shrink-0">44</div>
                <div className="leading-tight">
                  <div className="font-bold text-[15px] text-white">Agent Resolving</div>
                  <div className="text-[11px] text-blue-100 mt-0.5">Shipment network and database</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-[#141414]/90 border border-green-500/50 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                  <div className="flex items-center gap-1.5 mb-2 text-green-500">
                    <Sparkles size={12} className="fill-green-500" />
                    <span className="text-[11px] font-bold">New Slot Assigned</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-[14px] text-white leading-tight">25139897</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">UPS</div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-center justify-center gap-1"><Truck size={14} className="text-gray-400" /><div className="text-[9px] text-gray-500">Inbound</div></div>
                      <div className="text-[10px] font-bold px-2 py-1 rounded w-[90px] text-center bg-red-500/20 text-red-500 border border-red-500/20">Delayed</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#141414]/90 border border-[#222] rounded-xl p-3 px-4 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[14px] text-white leading-tight">D3G4Q78G</div>
                    <div className="text-[11px] text-gray-500 mt-0.5">FedEx Ground</div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center justify-center gap-1"><Truck size={14} className="text-gray-400" /><div className="text-[9px] text-gray-500">Inbound</div></div>
                    <div className="text-[10px] font-bold px-2 py-1 rounded w-[90px] text-center bg-green-500/20 text-green-500 border border-green-500/20">On Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


export default SlotBookingView;
