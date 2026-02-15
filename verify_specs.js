import { PRODUCTS } from '../src/constants.js';

console.log('--- Verifying Product Specs ---');
PRODUCTS.forEach(p => {
    console.log(`Product: ${p.name}`);
    console.log('Spec 0:', p.specs[0]);
    const cap = p.specs.find(s => s.label.includes('Capacitance'));
    const volt = p.specs.find(s => s.label === 'Rated Voltage');
    console.log('Mini Spec - Capacitance:', cap);
    console.log('Mini Spec - Rated Voltage:', volt);
    console.log('--------------------------------');
});
