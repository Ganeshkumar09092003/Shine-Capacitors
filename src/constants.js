// Import images for Vite bundling
import FanCapacitorImg from './assets/Fan-Capacitor.png';
import MotorRunCapacitorImg from './assets/Motor-Run-Capacitor.png';
import LightingCapacitorImg from './assets/Lighting-Capacitor.png';
import HeavyDutyCapacitorImg from './assets/Heavy-Duty-Capacitor.png';

export const COMPANY_INFO = {
    name: 'Shine Capacitors',
    tagline: 'Powering Industrial Excellence',
    email: 'shinecapacitors2026@gmail.com',
    phone: '+91 86674 58320',
    address: '3/1-N.C.R COMPLEX, ARASANATTY, Mookandapalli, Hosur-635126, Tamil Nadu',
};

export const NAV_LINKS = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Products', href: '/#products', id: 'products' },
];

export const STATS = [
    { value: '25+', label: 'Years in Industry' },
    { value: '5M+', label: 'Capacitors Delivered' },
    { value: '99.9%', label: 'Product Reliability' },
];

export const FEATURES = [
    {
        icon: 'bolt',
        title: 'High Voltage Tolerance',
        description: 'Rated up to 440 VAC with advanced dielectric materials for maximum electrical stress resistance.',
    },
    {
        icon: 'thermostat',
        title: 'Extended Temperature Range',
        description: 'Operates reliably from -40°C to +85°C, perfect for HVAC and industrial motor applications.',
    },
    {
        icon: 'verified',
        title: 'Long Service Life',
        description: '10,000+ hour lifespan with self-healing metallized film technology for unmatched durability.',
    },
];

export const APPLICATIONS = [
    { icon: 'solar_power', label: 'Solar Inverters' },
    { icon: 'ev_station', label: 'EV Chargers' },
    { icon: 'precision_manufacturing', label: 'Motor Control' },
    { icon: 'wind_power', label: 'Wind Energy' },
];

export const PRODUCTS = [
    {
        id: 'fan-capacitor',
        name: 'Fan Capacitor',
        category: 'Fan Capacitor',
        standard: 'As per IS 1709 : 1984',
        description: 'Premium quality fan capacitors designed for residential and commercial ceiling fans. Built to withstand continuous operation with excellent heat dissipation.',
        image: FanCapacitorImg,
        features: [
            'IS 1709:1984 Standard Compliance',
            'Rated Voltage: 440 VAC',
            'Tolerance: ±5%',
            'Self-healing Metallized Film',
            'High Temperature Resistance',
            'Long Service Life (10,000+ hours)',
            'Compact Cylindrical Design',
            'Wire Lead Termination'
        ],
        specs: [
            { label: 'Standard', value: 'IS 1709:1984' },
            { label: 'Rated Voltage', value: '440 VAC' },
            { label: 'Tolerance', value: '±5%' },
            { label: 'Temperature Range', value: '-25°C to +85°C' },
        ],
        detailedSpecs: [
            { capacitance: '1.25', tolerance: '±5%', dimensions: '28 × 52', application: 'Small Fans' },
            { capacitance: '1.50', tolerance: '±5%', dimensions: '28 × 52', application: 'Small Fans' },
            { capacitance: '1.70', tolerance: '±5%', dimensions: '28 × 52', application: 'Table Fans' },
            { capacitance: '1.85', tolerance: '±5%', dimensions: '28 × 52', application: 'Ceiling Fan' },
            { capacitance: '2.00', tolerance: '±5%', dimensions: '30 × 52', application: 'Ceiling Fan' },
            { capacitance: '2.25', tolerance: '±5%', dimensions: '30 × 52', application: 'Ceiling Fan' },
            { capacitance: '2.50', tolerance: '±5%', dimensions: '30 × 52', application: 'Ceiling Fan' },
            { capacitance: '3.00', tolerance: '±5%', dimensions: '30 × 52', application: 'Heavy Duty Fans' },
            { capacitance: '3.15', tolerance: '±5%', dimensions: '30 × 52', application: 'Heavy Duty Fans' },
            { capacitance: '3.50', tolerance: '±5%', dimensions: '30 × 52', application: 'Heavy Duty Fans' },
            { capacitance: '4.00', tolerance: '±5%', dimensions: '30 × 52', application: 'Heavy Duty Fans' },
        ]
    },
    {
        id: 'motor-run-capacitor',
        name: 'Motor Run Capacitor',
        category: 'Motor Run',
        standard: 'Rated voltage 440 VAC',
        description: 'Heavy-duty motor run capacitors for single-phase AC motors in pumps, compressors, and industrial machinery. Engineered for continuous duty cycles.',
        image: MotorRunCapacitorImg,
        features: [
            'Rated Voltage: 440 VAC',
            'Tolerance: ±5%',
            'Heavy-duty Construction',
            'High Capacitance Range',
            'Wire Lead & Lug Termination',
            'UV Resistant Enclosure',
            'Low ESR for Efficiency',
            'Continuous Duty Rating'
        ],
        specs: [
            { label: 'Rated Voltage', value: '440 VAC' },
            { label: 'Capacitance Range', value: '4.00 - 50.00 µF' },
            { label: 'Tolerance', value: '±5%' },
            { label: 'Operating Temp', value: '-40°C to +85°C' },
        ],
        detailedSpecs: [
            { capacitance: '4.00', tolerance: '±5%', dimensions: '35 × 55', application: 'Coller Motors 0.25 H.P.' },
            { capacitance: '6.00', tolerance: '±5%', dimensions: '55 × 55', application: 'Coller Motors 0.25 H.P.' },
            { capacitance: '8.00', tolerance: '±5%', dimensions: '35 × 71', application: 'Cooler Motors 0.50 H.P / Exhaust Fans' },
            { capacitance: '10.00', tolerance: '±5%', dimensions: '36 × 71', application: '1/2 HP Monoblock & Low head pump' },
            { capacitance: '12.50', tolerance: '±5%', dimensions: '35 × 71', application: '1/2 HP Self Priming pump' },
            { capacitance: '15.00', tolerance: '±5%', dimensions: '40 × 71', application: '1/2 HP Monoblock pump' },
            { capacitance: '20.00', tolerance: '±5%', dimensions: '40 × 95', application: '1.5 HP Monoblock Pump' },
            { capacitance: '25.00', tolerance: '±5%', dimensions: '45 × 95', application: '1 HP jet pump & 1 Ton AC Unit' },
            { capacitance: '36.00', tolerance: '±5%', dimensions: '50 × 120', application: '1.5 Ton AC Unit' },
            { capacitance: '45.00', tolerance: '±5%', dimensions: '50 × 120', application: '2 Ton AC Unit' },
            { capacitance: '50.00', tolerance: '±5%', dimensions: '50 × 120', application: 'Heavy Duty Motors' },
        ]
    },
    {
        id: 'lighting-capacitor',
        name: 'Lighting Capacitor',
        category: 'Lighting',
        standard: 'As per IS 1569 : 1976',
        description: 'Specialized capacitors for fluorescent and discharge lamps. Ensures power factor correction and extends lamp life with stable operation.',
        image: LightingCapacitorImg,
        features: [
            'IS 1569:1976 Standard Compliance',
            'Dual Voltage Rating (400/250 VAC)',
            'Power Factor Correction',
            'Low Loss Design',
            'Flame Retardant Case',
            'Quick Connect Terminals',
            'Suitable for Fluorescent Lamps',
            'Extended Temperature Range'
        ],
        specs: [
            { label: 'Standard', value: 'IS 1569:1976' },
            { label: 'Rated Voltage', value: '400 VAC / 250 VAC' },
            { label: 'Tolerance (400V)', value: '±5%' },
            { label: 'Tolerance (250V)', value: '±10%' },
        ],
        detailedSpecs: [
            { capacitance: '3.15', voltage: '400 VAC', tolerance: '±5%', dimensions: '28 × 52', tempRange: '-25°C to +85°C', application: 'FTL 2 Nos. of 40 watts' },
            { capacitance: '4.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '28 × 52', tempRange: '-25°C to +85°C', application: 'FTL 1 No. Of 33 Watts' },
            { capacitance: '5.70', voltage: '400 VAC', tolerance: '±5%', dimensions: '28 × 52', tempRange: '-25°C to +85°C', application: 'FTL 1 No. 65W / HPMV 1 No. 80W' },
            { capacitance: '8.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '35 × 55', tempRange: '-25°C to +85°C', application: 'LPSV 1 No. of 33 Watts' },
            { capacitance: '10.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '35 × 55', tempRange: '-25°C to +85°C', application: 'HPMV 1 No. 125W / HPSV 1 No. 70W' },
            { capacitance: '15.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '40 × 71', tempRange: '-25°C to +85°C', application: 'HPMV 1 No. 250 Watts' },
            { capacitance: '20.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '40 × 71', tempRange: '-25°C to +85°C', application: 'HPMV 1 No. 400W / HPSV 1 No. 150W' },
            { capacitance: '33.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '45 × 95', tempRange: '-25°C to +85°C', application: 'HPSV 1 No. 250 Watts' },
            { capacitance: '42.00', voltage: '250 VAC', tolerance: '±5%', dimensions: '45 × 95', tempRange: '-25°C to +85°C', application: 'HPSV 1 No. 400 Watts' },
        ]
    },
    {
        id: 'heavy-duty-capacitor',
        name: 'Heavy Duty Capacitor',
        category: 'Heavy Duty',
        standard: 'As per IS 1709 : 1984',
        description: 'Industrial-grade capacitors for demanding applications requiring high reliability. Perfect for heavy machinery, industrial motors, and harsh environments.',
        image: HeavyDutyCapacitorImg,
        features: [
            'IS 1709:1984 Standard Compliance',
            'Rated Voltage: 440 VAC',
            'Reinforced Construction',
            'Heavy Gauge Wire Leads',
            'Industrial Grade Components',
            'Enhanced Heat Dissipation',
            'Vibration Resistant',
            'Extended Duty Cycle'
        ],
        specs: [
            { label: 'Standard', value: 'IS 1709:1984' },
            { label: 'Rated Voltage', value: '440 VAC' },
            { label: 'Tolerance', value: '±5%' },
            { label: 'Duty Cycle', value: 'Continuous' },
        ],
        detailedSpecs: [
            { capacitance: '1.25', tolerance: '±5%', dimensions: '28 × 52' },
            { capacitance: '1.50', tolerance: '±5%', dimensions: '28 × 52' },
            { capacitance: '1.70', tolerance: '±5%', dimensions: '28 × 52' },
            { capacitance: '1.85', tolerance: '±5%', dimensions: '28 × 52' },
            { capacitance: '2.00', tolerance: '±5%', dimensions: '30 × 52' },
            { capacitance: '2.50', tolerance: '±5%', dimensions: '30 × 52' },
            { capacitance: '3.00', tolerance: '±5%', dimensions: '30 × 52' },
            { capacitance: '3.15', tolerance: '±5%', dimensions: '30 × 52' },
            { capacitance: '3.50', tolerance: '±5%', dimensions: '30 × 52' },
            { capacitance: '4.00', tolerance: '±5%', dimensions: '30 × 52' },
        ]
    }
];