const fs = require('fs');

const content = fs.readFileSync('src/App.jsx', 'utf8');

const imports = `import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutGrid, MoveRight, CheckCircle, Zap, ShieldAlert,
  Map, CalendarClock, AlertTriangle, Box, Activity, Navigation, Globe, PackageSearch,
  ChevronLeft, ChevronRight, Sparkles, User, Check, Truck, ScanBarcode, Eye, Clock, MapPin, Warehouse, Flame, Ship
} from 'lucide-react';
import firstPoster from '../assets/firstposter.png';
import secondPoster from '../assets/secondposter.png';
import thirdPoster from '../assets/thirdposter.png';
import fourPoster from '../assets/fourposter.png';
import fivePoster from '../assets/fiveposter.png';
import list1 from '../assets/list1.png';
`;

const markers = [
  '// --- 1. Freight Procurement View ---',
  '// --- 2. Network Operations View ---',
  '// --- 3. Slot Booking View ---',
  '// --- 4. Exception Management View ---',
  '// --- 5. Disruption Management View ---',
  '// --- Main App Component ---'
];

const filenames = [
  'FreightProcurementView.jsx',
  'NetworkOperationsView.jsx',
  'SlotBookingView.jsx',
  'ExceptionManagementView.jsx',
  'DisruptionManagementView.jsx'
];

let appJsxImports = `import FreightProcurementView from './views/FreightProcurementView';
import NetworkOperationsView from './views/NetworkOperationsView';
import SlotBookingView from './views/SlotBookingView';
import ExceptionManagementView from './views/ExceptionManagementView';
import DisruptionManagementView from './views/DisruptionManagementView';
`;

let newAppContent = content;

for (let i = 0; i < 5; i++) {
  const startMarker = markers[i];
  const endMarker = markers[i+1];
  
  const startIdx = content.indexOf(startMarker);
  const endIdx = content.indexOf(endMarker);
  
  if (startIdx !== -1 && endIdx !== -1) {
    const compCode = content.substring(startIdx, endIdx);
    const finalCode = imports + '\n' + compCode;
    fs.writeFileSync('src/views/' + filenames[i], finalCode);
  }
}

// Remove the components from App.jsx
const blockStart = content.indexOf(markers[0]);
const blockEnd = content.indexOf(markers[5]);

const beforeBlock = content.substring(0, blockStart);
const afterBlock = content.substring(blockEnd);

// Add the imports for the new components right after the existing imports
// Find the last import statement in beforeBlock
const lastImportIdx = beforeBlock.lastIndexOf('import');
const nextNewLine = beforeBlock.indexOf('\\n', lastImportIdx) !== -1 ? beforeBlock.indexOf('\\n', lastImportIdx) : beforeBlock.indexOf('\n', lastImportIdx);

let finalAppJsx;
if (nextNewLine !== -1) {
  finalAppJsx = beforeBlock.substring(0, nextNewLine + 1) + appJsxImports + beforeBlock.substring(nextNewLine + 1) + afterBlock;
} else {
  finalAppJsx = appJsxImports + beforeBlock + afterBlock;
}

fs.writeFileSync('src/App.jsx', finalAppJsx);
console.log('Successfully split components!');
