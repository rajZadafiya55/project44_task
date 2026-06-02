import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid, MoveRight, CheckCircle, Zap, ShieldAlert,
  Map, CalendarClock, AlertTriangle, Box, Activity, Navigation, Globe, PackageSearch,
  ChevronLeft, ChevronRight, Sparkles, User, Check, Truck, ScanBarcode, Eye, Clock, MapPin, Warehouse, Flame, Ship
} from 'lucide-react';

import fivePoster from '../assets/fiveposter.png';
import list1 from '../assets/list1.png';

// --- 5. Disruption Management View ---
const DisruptionManagementView = () => {
  const [step, setStep] = useState(0);
  const [selectedShipments, setSelectedShipments] = useState([]);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 5000);
      return () => clearTimeout(timer);
    } else if (step === 1) {
      const timer = setTimeout(() => setStep(2), 14000); // After long animation of scrolling
      return () => clearTimeout(timer);
    }
  }, [step]);

  // Points on the world map
  const mapDots = [
    { id: 'm1', x: 18, y: 35, val: null },
    { id: 'm2', x: 22, y: 40, val: 3 },
    { id: 'm3', x: 25, y: 30, val: null },
    { id: 'm4', x: 30, y: 35, val: null },
    { id: 'm5', x: 32, y: 45, val: null },
    { id: 'm6', x: 45, y: 25, val: null },
    { id: 'm7', x: 48, y: 20, val: 5 },
    { id: 'm8', x: 50, y: 30, val: 12 },
    { id: 'm9', x: 52, y: 32, val: null },
    { id: 'm10', x: 55, y: 45, val: null },
    { id: 'm11', x: 60, y: 30, val: null },
    { id: 'm12', x: 65, y: 35, val: 5 },
    { id: 'm13', x: 70, y: 40, val: null },
    { id: 'm14', x: 75, y: 50, val: 2 },
    { id: 'm15', x: 80, y: 40, val: null },
    { id: 'm16', x: 82, y: 45, val: null },
  ];

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between relative z-10 p-6 lg:p-6 pb-16">

      <div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden rounded-lg bg-[#050505]">
        <img src={fivePoster} alt="Disruption Management Background" className="w-full h-full object-cover opacity-60" />

        {/* Animated Background Dots */}
        {mapDots.map((dot, i) => (
          <motion.div key={dot.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
          >
            {dot.val ? (
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-60"></div>
                <div className="w-6 h-6 bg-[#ef4444] border-[2px] border-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.8)] relative z-10">
                  <span className="text-white text-[10px] font-bold">{dot.val}</span>
                </div>
              </div>
            ) : (
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-40"></div>
                <div className="w-2.5 h-2.5 bg-[#ef4444] border border-red-300 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.6)] relative z-10"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="lg:w-[33%] mb-50 flex flex-col justify-center relative z-20">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-6 shadow-2xl max-w-[480px]">
          <h1 className="text-xl font-bold mb-4 tracking-tight leading-tight text-white">
            Disruption Management Agent
          </h1>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            A disruption is about to impact your inventory. Our agent is already on it.
          </p>
          <p className="text-gray-200 text-xs leading-relaxed mb-6 font-medium">
            The Disruption Management Agent analyzes millions of global events daily, categorizes them across 100+ risk types, and maps the impact directly to your in-transit inventory so you can act before disruptions impact your network.
          </p>
          <button className="bg-[#1860ff] text-sm hover:bg-blue-600 text-white px-5 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(24,96,255,0.4)] transition-all cursor-pointer w-max">
            Get a Demo
          </button>
        </motion.div>
      </div>

      <div className="relative flex flex-col w-[480px] shrink-0  relative z-20 h-[550px] justify-center">
        <AnimatePresence mode="wait">

          {step === 0 && (
            <motion.div key="state0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-5 shadow-2xl w-full  overflow-y-auto no-scrollbar flex flex-col h-[400px] mb-35">
              <div className="flex justify-between items-center mb-4 shrink-0">
                <div className="font-bold text-white text-xl tracking-tight">Active disruption events</div>
                <button className="bg-[#187bf5] text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"><Sparkles size={14} /> 46</button>
              </div>

              <div className="flex-1 overflow-hidden relative">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                  className="space-y-4 pt-2"
                >
                  {[
                    { title: 'Volcanic ash from Mount Etna delaying Mediterranean sea-lanes', time: '1 day ago', shipments: '98', img: list1 },
                    { title: 'Security threats in the Red Sea disrupt major shipping routes', time: '1 day ago', shipments: '197', img: list1 },
                    { title: 'Escalating Conflict in Gulf Fuels Mass Diversions', time: '15 hours ago', shipments: '113', img: list1 },
                    { title: 'Labor strike disrupts operations at the Port of Los Angeles', time: '1 day ago', shipments: '210', img: list1 },
                    { title: 'Volcanic ash from Mount Etna delaying Mediterranean sea-lanes', time: '1 day ago', shipments: '98', img: list1 },
                    { title: 'Security threats in the Red Sea disrupt major shipping routes', time: '1 day ago', shipments: '197', img: list1 },
                    { title: 'Escalating Conflict in Gulf Fuels Mass Diversions', time: '15 hours ago', shipments: '113', img: list1 },
                    { title: 'Labor strike disrupts operations at the Port of Los Angeles', time: '1 day ago', shipments: '210', img: list1 },
                  ].map((event, i) => (
                    <div key={i} onClick={() => setStep(1)} className="flex gap-4 p-4 bg-[#161616] border border-[#222] rounded-xl shadow-lg relative overflow-hidden cursor-pointer hover:bg-[#222] transition-colors group">
                      <div className="w-[110px] h-[70px] rounded-lg overflow-hidden shrink-0">
                        <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col justify-center flex-1">
                        <div className="text-[11px] text-gray-400 mb-1 font-bold tracking-wide">{event.time}</div>
                        <div className="text-[15px] font-bold text-white leading-tight mb-2 tracking-tight">{event.title}</div>
                        <div className="flex justify-between items-center">
                          <div className="text-[12px] text-[#187bf5] flex items-center gap-2 font-medium">
                            See Impact <Map size={12} /> {event.shipments} shipments
                          </div>
                          <MoveRight size={14} className="text-[#187bf5] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
                {/* Gradient fades for top and bottom of scroll area */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#111111]/90 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#111111]/90 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="state1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} className="w-full flex flex-col h-[400px]   overflow-y-auto no-scrollbar mb-40">
              <div className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-2xl p-6 shadow-2xl w-full flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-5">
                  <div className="font-bold text-white text-xl tracking-tight">Category Filters</div>
                  <div className="text-[#187bf5] text-base font-medium">948 results</div>
                </div>

                {/* Ocean/Rail/Truck Filters */}
                <div className="bg-[#187bf5] rounded-xl p-3 flex justify-between items-center mb-5">
                  <div className="flex items-center gap-2 text-white font-bold text-xs"><div className="w-4 h-4 bg-white rounded-full flex items-center justify-center"><Check size={10} className="text-[#187bf5]" /></div> Ocean</div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium"><div className="w-4 h-4 border border-white/40 rounded-full"></div> Truckload</div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium"><div className="w-4 h-4 border border-white/40 rounded-full"></div> Rail</div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium"><div className="w-4 h-4 border border-white/40 rounded-full"></div> Air</div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium"><div className="w-4 h-4 border border-white/40 rounded-full"></div> LTL</div>
                  <div className="flex items-center gap-2 text-white/80 text-xs font-medium"><div className="w-4 h-4 border border-white/40 rounded-full"></div> Barge</div>
                </div>

                <div className="mb-2 text-[10px] font-bold text-gray-500 tracking-wider">STATUS</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#187bf5] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> Scheduled</span>
                  <span className="bg-[#222] border border-[#333] text-gray-400 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 border border-gray-500 rounded-full"></div> Idle</span>
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#187bf5] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> In transit</span>
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#187bf5] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> At stop</span>
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#187bf5] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> Action required</span>
                </div>

                <div className="mb-2 text-[10px] font-bold text-gray-500 tracking-wider">EXCEPTION</div>
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#ef4444] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> Rolled</span>
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#ef4444] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> TSP Dwell {'>'} 7 days</span>
                  <span className="bg-[#222] border border-[#333] text-gray-300 text-xs px-3 py-1.5 rounded-full flex items-center gap-2"><div className="w-4 h-4 bg-[#ef4444] rounded-full flex items-center justify-center"><Check size={10} className="text-white" /></div> Late {'>'} 20 days</span>
                </div>

                <div className=" overflow-y-auto no-scrollbar relative space-y-3 pb-2 -mx-2 px-2 h-[150px] ">
                  {[
                    { id: 'TRLU9045770', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'HASU1191593', carrier: 'HAPAG LLOYD A G', date: 'Jul 18 - 14:00 CEST', milestone: 'Vessel departure from Port of Loading', state: 'In Transit', exception: 'TSP Dwell > 7 days' },
                    { id: 'MAEU2387267', carrier: 'MAERSK', date: 'Jul 19 - 11:30 CEST', milestone: 'Customs clearance', state: 'Action required', exception: 'Rolled' },
                    { id: 'ONEU8562007', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'ONEU9901112', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10029422', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10039344', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10040116', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10044482', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10057744', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10057773', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                    { id: 'TRLU10075295', carrier: 'OCEAN NETWORK EXPRESS PTE LTD', date: 'Jul 17 - 09:29 CEST', milestone: 'Discharge from vessel at transshipment port', state: 'At stop', exception: 'Rolled' },
                  ].map((shipment, i) => {
                    const isSelected = selectedShipments.includes(shipment.id);
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        onClick={() => {
                          setSelectedShipments(prev =>
                            prev.includes(shipment.id)
                              ? prev.filter(id => id !== shipment.id)
                              : [...prev, shipment.id]
                          )
                        }}
                        className={`bg-[#1a1a1a] border ${isSelected ? 'border-[#187bf5] bg-[#187bf5]/10' : 'border-[#333]'} rounded-xl p-4 flex flex-col relative shadow-lg hover:border-[#444] transition-colors cursor-pointer`}
                      >
                        <div className="flex justify-between items-start">
                          <div className="w-5/12 flex gap-3">
                            <div className={`mt-1 w-4 h-4 rounded border shrink-0 ${isSelected ? 'bg-[#187bf5] border-[#187bf5]' : 'border-gray-500'} flex items-center justify-center`}>
                              {isSelected && <Check size={12} className="text-white stroke-[3px]" />}
                            </div>
                            <div>
                              <div className="font-bold text-white text-base tracking-tight mb-1.5">{shipment.id}</div>
                              <div className="text-[10px] text-gray-400 font-medium mb-1">{shipment.date}</div>
                              <div className="text-[10px] text-gray-500 font-bold uppercase w-[80%] leading-tight">{shipment.carrier}</div>
                            </div>
                            <div className="w-4/12">
                              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Latest Milestone Type</div>
                              <div className="text-xs text-white font-bold leading-tight pr-4">{shipment.milestone}</div>
                            </div>
                            <div className="w-3/12">
                              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Current State</div>
                              <div className="text-xs text-white font-bold flex items-center gap-1.5 mb-4"><MapPin size={12} className="text-gray-400" /> {shipment.state}</div>
                              <div className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Exception</div>
                              <div className="text-xs text-white font-bold flex items-center gap-1.5"><Box size={12} className="text-gray-400" /> {shipment.exception}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-4 pt-4 relative z-10 bg-[#111111]">
                  <button onClick={() => setStep(2)} className="w-full bg-[#187bf5] hover:bg-blue-600 transition-colors cursor-pointer text-white text-lg font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(24,123,245,0.4)]">
                    Assign {selectedShipments.length > 0 ? selectedShipments.length : ''} Tasks
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="state2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#111111]/90 backdrop-blur-md border border-[#222] rounded-3xl p-6 shadow-2xl w-[480px] aspect-square flex items-center justify-center mb-30 overflow-y-auto no-scrollbar h-[300px]">
              <div className="bg-[#187bf5] rounded-3xl w-full h-[250px] flex flex-col items-center justify-center p-8 text-center text-white relative shadow-[0_0_30px_rgba(24,123,245,0.4)]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.2 }} className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-8">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Check size={20} className="text-[#187bf5] stroke-[4px]" />
                  </div>
                </motion.div>
                <h2 className="text-xl font-bold mb-6 tracking-tight">{selectedShipments.length > 0 ? selectedShipments.length : 4} Tasks Assigned</h2>
                <button className="text-white/90 text-sm font-medium transition-colors  flex items-center gap-2 cursor-pointer hover:text-white justify-center" >
                  Review all tasks <MoveRight size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
};


export default DisruptionManagementView;
