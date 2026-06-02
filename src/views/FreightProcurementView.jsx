import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MoveRight, Activity, PackageSearch,
  Sparkles, Check, Eye, Clock,
} from 'lucide-react';
import firstPoster from '../assets/firstposter.png';


// --- 1. Freight Procurement View ---
const FreightProcurementView = () => {
  const [step, setStep] = useState(0); // 0: default, 1: resolving (popup), 2: success

  const lanes = [
    { id: 1, from: 'Mt Holly, NC', to: 'Charlotte, NC', company: 'Load One LLC', avgRate: '+56%', avgColor: 'text-green-400 bg-green-400/10', savings: '$3,266', onTime: '68%', onTimeColor: 'text-red-400 bg-red-400/10', price: 381 },
    { id: 2, from: 'Forest City, IA', to: 'Houston, TX', company: 'Echo Global', avgRate: '-6%', avgColor: 'text-green-400 bg-green-400/10', savings: '$-', onTime: '91%', onTimeColor: 'text-green-400 bg-green-400/10', price: 549 },
    { id: 3, from: 'Burlington, NJ', to: 'Brooklyn NY', company: 'Swift Shipper LLC', avgRate: '+85%', avgColor: 'text-red-400 bg-red-400/10', savings: '$8,940', onTime: '95%', onTimeColor: 'text-green-400 bg-green-400/10', price: 553, highlight: true },
    { id: 4, from: 'Louisville, KY', to: 'Indianapolis, IN', company: 'Old Dominion', avgRate: '-3%', avgColor: 'text-green-400 bg-green-400/10', savings: '$-', onTime: '93%', onTimeColor: 'text-green-400 bg-green-400/10', price: 412 },
    { id: 5, from: 'Tampa, FL', to: 'Miami, FL', company: 'Heartland Express', avgRate: '+2%', avgColor: 'text-red-400 bg-red-400/10', savings: '$290', onTime: '89%', onTimeColor: 'text-green-400 bg-green-400/10', price: 385 },
  ];

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-8 lg:gap-16 relative z-10 p-6 lg:p-6 items-center">
      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-lg">
        <img src={firstPoster} alt="Freight Procurement Background" className="w-full h-full object-fit opacity-60" />
      </div>

      <div className="lg:w-[33%] mb-150 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-5 shadow-2xl max-w-[480px]"
        >
          <h1 className="text-xl font-bold mb-4 tracking-tight leading-tight text-white">
            Freight Procurement Agent
          </h1>
          <p className="text-gray-400 text-sm mb-5">
            Sourcing takes hours. Our agent does it in seconds.
          </p>
          <p className="text-gray-200 text-sm leading-relaxed mb-5 font-medium">
            The Freight Procurement Agent benchmarks rates, evaluates carriers, and sources the best-fit carriers and rates within your guardrails, reducing freight spend and accelerating sourcing.
          </p>
          <button className="bg-[#1860ff] text-sm hover:bg-blue-600 text-white px-3 py-1 rounded-full font-medium shadow-[0_0_15px_rgba(24,96,255,0.4)] transition-all cursor-pointer">
            Get a Demo
          </button>
        </motion.div>
      </div>

      <div className="lg:w-[60%] relative flex justify-end h-full max-h-[500px] mb-40">
        <div className="relative flex flex-col w-full max-w-[700px] h-[500px] mb-10 shrink-0">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#222] rounded-2xl p-4 shadow-2xl relative flex flex-col h-[300px] max-h-[500px]"
              >
                <div className="flex justify-between items-end mb-4 shrink-0">
                  <h2 className="text-xl font-bold tracking-tight text-white">All Lanes</h2>
                </div>

                <div className="overflow-y-auto pr-2 custom-scrollbar pb-4 no-scrollbar flex flex-col gap-2 flex-1">
                  {lanes.map((lane) => {
                    const isHighlight = lane.highlight;
                    return (
                      <motion.div
                        key={lane.id}
                        layout
                        onClick={() => { if (isHighlight && step === 0) setStep(1); }}
                        className={`p-4 bg-[#141414] border rounded-xl flex items-center justify-between relative transition-all duration-300 ${isHighlight && step === 0 ? 'cursor-pointer hover:border-blue-500/50 hover:bg-[#1a1a1a]' : ''} ${isHighlight ? 'border-blue-500/30 bg-blue-900/10' : 'border-[#222]'}`}
                      >
                        {isHighlight && (
                          <div className="absolute -top-3 left-4 bg-[#1860ff] text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-lg z-20">
                            <Sparkles size={10} /> Better Negotiation Available
                          </div>
                        )}

                        {/* Left: Locations */}
                        <div className="flex flex-col w-[35%] relative z-10">
                          <div className="flex items-center text-sm font-bold text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">
                            {lane.from} <MoveRight size={12} className="mx-1 text-gray-500 shrink-0" /> {lane.to}
                          </div>
                          <span className="text-xs text-gray-500 mt-1">{lane.company}</span>
                        </div>

                        {/* Middle: Stats */}
                        <div className="flex items-center justify-between w-[45%] px-4">
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-gray-500 mb-1">AVG RATE</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${lane.avgColor}`}>{lane.avgRate}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-gray-500 mb-1">POTENTIAL SAVINGS</span>
                            <span className="text-xs font-bold text-white">{lane.savings}</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <span className="text-[9px] font-bold text-gray-500 mb-1">ON TIME</span>
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${lane.onTimeColor}`}>{lane.onTime}</span>
                          </div>
                        </div>

                        {/* Right: Price */}
                        <div className="flex flex-col items-end w-[20%] relative z-10 text-right border-l border-[#333] pl-4">
                          <div className="text-lg font-bold text-white">${lane.price}</div>
                          <span className="text-[9px] font-bold text-gray-500 mt-1 whitespace-nowrap">MARKET RATE</span>
                        </div>

                        {isHighlight && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1860ff] rounded-l-xl" />}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#222] rounded-2xl p-6 shadow-2xl relative flex flex-col h-full max-h-[300px] overflow-y-auto custom-scrollbar no-scrollbar"
              >
                {/* Stats row */}
                <div className="flex gap-4 mb-4">
                  <div className="flex-1 bg-[#141d2b] border border-[#1e2a40] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-2"><PackageSearch size={14} /> 1 load/week</div>
                  <div className="flex-1 bg-[#141d2b] border border-[#1e2a40] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-2"><Eye size={14} /> 89%</div>
                  <div className="flex-1 bg-[#141d2b] border border-[#1e2a40] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-2"><Clock size={14} /> 91%</div>
                  <div className="flex-1 bg-[#141d2b] border border-[#1e2a40] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-2"><Activity size={14} /> 95%</div>
                </div>

                {/* New Rate Proposal */}
                <div className="bg-[#111926] border border-[#1d2a3f] rounded-xl p-5 mb-5 flex justify-between items-center shadow-lg shadow-blue-900/10">
                  <div>
                    <div className="text-white text-lg font-bold mb-1">New Rate Proposal</div>
                    <div className="text-gray-400 text-sm">Current Rate:</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white text-2xl font-bold mb-1">$678</div>
                    <div className="text-gray-500 text-sm line-through">$964</div>
                  </div>
                </div>

                {/* Carriers Comparison */}
                <div className="bg-[#141414]/80 border border-[#222] rounded-xl p-6 mb-6">

                  {/* Carrier 1 */}
                  <div className="mb-8">
                    <div className="bg-[#14311d] text-[#4ade80] text-[10px] font-bold px-2 py-1 rounded mb-3 w-max">NEGOTIATED FOR APPROVAL</div>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-white text-lg font-bold mb-1">RXO (Coyote)</div>
                        <div className="text-gray-400 text-xs">Pickup Tue. Dec 9 – Deliver Sun. Dec 20</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-lg font-bold mb-1">$964</div>
                        <div className="text-gray-400 text-[10px]">Valid until Jan 5, 2027</div>
                      </div>
                    </div>
                  </div>

                  {/* Carrier 2 */}
                  <div>
                    <div className="bg-[#14311d] text-[#4ade80] text-[10px] font-bold px-2 py-1 rounded mb-3 w-max">NEW CARRIER</div>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-white text-lg font-bold mb-1">Worldwide Logistics</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white text-lg font-bold mb-1">$678</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Approve button */}
                <div className="flex justify-center mt-2">
                  <button onClick={() => setStep(2)} className="bg-[#187bf5] hover:bg-blue-600 transition-colors text-white font-bold py-3 px-10 rounded-full shadow-[0_0_15px_rgba(24,123,245,0.4)] text-sm cursor-pointer w-max mx-auto">
                    Approve contract
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="w-full bg-[#0a0a0a]/90 backdrop-blur-md border border-[#222] rounded-3xl p-6 shadow-2xl flex items-center justify-center h-[300px] min-h-[300px]"
              >
                <div className="bg-[#187bf5] rounded-3xl w-full max-w-md h-[280px] flex flex-col items-center justify-center p-8 text-center text-white relative shadow-[0_0_30px_rgba(24,123,245,0.4)]">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Check size={24} className="text-[#187bf5] stroke-[4px]" />
                    </div>
                  </motion.div>
                  <h2 className="text-3xl font-bold mb-4 tracking-tight">Success!</h2>
                  <p className="text-blue-100 text-sm font-medium">You renegotiated and saved an average of $20,400 / year</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};


export default FreightProcurementView;
