import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  ChevronLeft, ChevronRight, Sparkles,
} from 'lucide-react';

import FreightProcurementView from './views/FreightProcurementView';
import NetworkOperationsView from './views/NetworkOperationsView';
import SlotBookingView from './views/SlotBookingView';
import ExceptionManagementView from './views/ExceptionManagementView';
import DisruptionManagementView from './views/DisruptionManagementView';


const tabs = [
  { id: 'freight', label: 'Freight Procurement' },
  { id: 'network', label: 'Network Operations' },
  { id: 'slot', label: 'Slot Booking' },
  { id: 'exception', label: 'Exception Management' },
  { id: 'disruption', label: 'Disruption Management' },
];

export default function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    setProgress(0);
    const duration = 25000;
    const interval = 100;
    const steps = duration / interval;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);
      if (currentStep >= steps) {
        setActiveTabIndex((prev) => (prev + 1) % tabs.length);
        currentStep = 0;
      }
    }, interval);

    return () => clearInterval(timer);
  }, [activeTabIndex]);


  const getStatusText = () => {
    if (activeTabIndex === 0) return progress > 70 ? 'Agent Resolved.' : progress > 40 ? 'Agent resolving...' : 'Agent monitoring...';
    if (activeTabIndex === 1) return progress > 60 ? 'Recovered missing milestones.' : 'Identifying network connections...';
    if (activeTabIndex === 2) return progress > 40 ? 'Agent Resolved. Dock slots booked.' : 'Mitigating risk...';
    if (activeTabIndex === 3) return progress > 50 ? 'Reroute confirmed via Agent.' : 'Evaluating planned routes...';
    if (activeTabIndex === 4) return 'Correlating global events...';
    return 'Agent sleeping...';
  };

  const getSubStatusText = () => {
    if (activeTabIndex === 0) return 'Evaluating procurement on live market benchmark';
    if (activeTabIndex === 1) return 'Analysing integration endpoints...';
    if (activeTabIndex === 2) return 'Monitoring high urgency SKUs';
    if (activeTabIndex === 3) return 'Validating capacity constraints';
    if (activeTabIndex === 4) return 'Surfacing High-Impact Disruptions';
    return '';
  };

  return (
    <div className="h-[95vh] bg-[#050505] text-white font-sans overflow-hidden flex flex-col relative my-2 mx-16 border rounded-lg max-w-[1200px] border-gray-600">

      {/* Background Subtle Global Gradient */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />

      {/* Top Navigation */}
      <nav className="w-full p-2  flex items-center justify-between border-b border-white/5 relative z-50 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center space-x-8">


          <div className="hidden md:flex space-x-1 overflow-x-auto no-scrollbar bg-black/40 p-1 rounded-full border border-white/10">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTabIndex(idx);
                  setProgress(0);
                }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${activeTabIndex === idx
                  ? 'bg-gray-600 text-white shadow-lg shadow-gray-600/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => { setActiveTabIndex(prev => prev === 0 ? tabs.length - 1 : prev - 1); setProgress(0); }}
            className="w-8 h-8 flex items-center justify-center bg-black/40 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => { setActiveTabIndex(prev => (prev + 1) % tabs.length); setProgress(0); }}
            className="w-8 h-8 flex items-center justify-center bg-black/40 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
          <button className="flex items-center space-x-2 bg-white border border-white/10 rounded-full px-4 py-2 text-sm text-black hover:bg-gray-200 transition-colors cursor-pointer">
            <span>See all</span>
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="w-full max-w-[1400px] mx-auto flex-1 relative z-10 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
          >
            {activeTabIndex === 0 && <FreightProcurementView progress={progress} />}
            {activeTabIndex === 1 && <NetworkOperationsView progress={progress} />}
            {activeTabIndex === 2 && <SlotBookingView progress={progress} />}
            {activeTabIndex === 3 && <ExceptionManagementView progress={progress} />}
            {activeTabIndex === 4 && <DisruptionManagementView progress={progress} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Status Bar */}
      <div className="border-t border-white/10 bg-black/80 backdrop-blur-md px-6 flex items-center justify-between z-50 text-xs text-gray-400 absolute bottom-0 w-full rounded-b-lg">
        {/* Progress bar background line */}
        <div className="absolute top-0 left-0 h-[2px] bg-white/5 w-full">
          <div className="h-full bg-blue-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
        </div>

        <div className="py-3 flex items-center w-full justify-between">
          <div className="flex items-center space-x-3 bg-white/5 py-1.5 px-3 rounded-full border border-white/5">
            <div className="flex items-center justify-center text-[#187bf5]">
              <Sparkles size={14} />
            </div>
            <span className="font-medium text-gray-200">
              {getStatusText()}
            </span>
          </div>

          <div className="hidden sm:flex space-x-6 items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500 animate-pulse" />
              <span>{getSubStatusText()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
