const fs = require('fs');

const components = [
  'FreightProcurementView',
  'NetworkOperationsView',
  'SlotBookingView',
  'ExceptionManagementView',
  'DisruptionManagementView'
];

components.forEach(comp => {
  const filePath = `src/views/${comp}.jsx`;
  let content = fs.readFileSync(filePath, 'utf8');
  content += `\nexport default ${comp};\n`;
  fs.writeFileSync(filePath, content);
});

console.log('Added exports successfully');
