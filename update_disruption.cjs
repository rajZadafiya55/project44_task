const fs = require('fs');

let content = fs.readFileSync('src/views/DisruptionManagementView.jsx', 'utf8');

// Add state
content = content.replace(
  '  const [step, setStep] = useState(0);',
  '  const [step, setStep] = useState(0);\n  const [selectedShipments, setSelectedShipments] = useState([]);'
);

// Replace mapping
const oldMap = `                  ].map((shipment, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-[#1a1a1a] border border-[#333] rounded-xl p-4 flex flex-col relative shadow-lg hover:border-[#444] transition-colors">
                      <div className="flex justify-between items-start">
                        <div className="w-5/12">
                          <div className="font-bold text-white text-xl tracking-tight mb-1.5">{shipment.id}</div>`;

const newMap = `                  ].map((shipment, i) => {
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
                      className={\`bg-[#1a1a1a] border \${isSelected ? 'border-[#187bf5] bg-[#187bf5]/10' : 'border-[#333]'} rounded-xl p-4 flex flex-col relative shadow-lg hover:border-[#444] transition-colors cursor-pointer\`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="w-5/12 flex gap-3">
                          <div className={\`mt-1 w-4 h-4 rounded border shrink-0 \${isSelected ? 'bg-[#187bf5] border-[#187bf5]' : 'border-gray-500'} flex items-center justify-center\`}>
                            {isSelected && <Check size={12} className="text-white stroke-[3px]" />}
                          </div>
                          <div>
                            <div className="font-bold text-white text-xl tracking-tight mb-1.5">{shipment.id}</div>`;

content = content.replace(oldMap, newMap);

// Replace end of mapping
const oldMapEnd = `                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>`;

const newMapEnd = `                        </div>
                        </div>
                      </div>
                    </motion.div>
                  )})}
                </div>`;

content = content.replace(oldMapEnd, newMapEnd);

// Replace Assign tasks button to show count
const oldButton = `                  <button onClick={() => setStep(2)} className="w-full bg-[#187bf5] hover:bg-blue-600 transition-colors cursor-pointer text-white text-lg font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(24,123,245,0.4)]">
                    Assign Tasks
                  </button>`;

const newButton = `                  <button onClick={() => setStep(2)} className="w-full bg-[#187bf5] hover:bg-blue-600 transition-colors cursor-pointer text-white text-lg font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(24,123,245,0.4)]">
                    Assign {selectedShipments.length > 0 ? selectedShipments.length : ''} Tasks
                  </button>`;

content = content.replace(oldButton, newButton);


// Replace success text
const oldSuccess = `<h2 className="text-xl font-bold mb-6 tracking-tight">4 Tasks Assigned</h2>`;
const newSuccess = `<h2 className="text-xl font-bold mb-6 tracking-tight">{selectedShipments.length > 0 ? selectedShipments.length : 4} Tasks Assigned</h2>`;

content = content.replace(oldSuccess, newSuccess);


fs.writeFileSync('src/views/DisruptionManagementView.jsx', content);
console.log('Successfully updated DisruptionManagementView.jsx');
