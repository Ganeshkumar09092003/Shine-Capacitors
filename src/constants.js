// Import images for Vite bundling
const FanCapacitorImg = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919177/Fan-Capacitor_moc16t.png";
const MotorRunCapacitorImg = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919263/Motor-Run-Capacitor_o5wdoc.png";
const AirConditionerCapacitorImg = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770979041/Gemini_Generated_Image_oxgkwboxgkwboxgk_mj6dud.png";
const HeavyDutyCapacitorImg = "https://res.cloudinary.com/duvo27ycs/image/upload/v1770919234/Heavy-Duty-Capacitor_od8kdh.png";

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
        name: 'Fan Capacitors',
        category: 'Fan Capacitors',
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
            { label: 'Capacitance', value: '1.25 - 4.00 µF' },
            { label: 'Rated Voltage', value: '440 VAC' },
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
        ],
        applications: [
            { icon: 'mode_fan', label: 'Ceiling Fans' },
            { icon: 'wind_power', label: 'Table Fans' },
            { icon: 'air', label: 'Exhaust Fans' },
            { icon: 'toys', label: 'Pedestal Fans' }
        ]
    },
    {
        id: 'heavy-duty-capacitor',
        name: 'Heavy Duty Capacitors',
        category: 'Heavy Duty Capacitors',
        standard: 'As per IS 2993 : 1998',
        description: 'Industrial-grade capacitors for demanding applications requiring high reliability. Perfect for heavy machinery, industrial motors, and harsh environments.',
        image: HeavyDutyCapacitorImg,
        features: [
            'IS 2993:1998 Standard Compliance',
            'Tolerance: ±5%',
            'Heavy-duty Construction',
            'High Capacitance Range',
            'Wire Lead & Lug Termination',
            'UV Resistant Enclosure',
            'Low ESR for Efficiency',
            'Continuous Duty Rating'
        ],
        specs: [
            { label: 'Standard', value: 'IS 2993:1998' },
            { label: 'Capacitance', value: '4.00 - 50.00 µF' },
            { label: 'Rated Voltage', value: '440 VAC' },
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
        ],
        applications: [
            { icon: 'precision_manufacturing', label: 'Industrial Motors' },
            { icon: 'water_drop', label: 'Submersible Pumps' },
            { icon: 'factory', label: 'Heavy Machinery' },
            { icon: 'settings_power', label: 'Compressors' }
        ]
    },
    {
        id: 'motor-run-capacitor',
        name: 'Motor Run Capacitors',
        category: 'Motor Run Capacitors',
        standard: 'As per IS 2993 : 1998',
        description: 'Heavy-duty motor run capacitors for single-phase AC motors in pumps, compressors, and industrial machinery. Engineered for continuous duty cycles.',
        image: MotorRunCapacitorImg,
        features: [
            'IS 2993:1998 Standard Compliance',
            'Tolerance: ±5%',
            'Heavy-duty Construction',
            'High Capacitance Range',
            'Wire Lead & Lug Termination',
            'UV Resistant Enclosure',
            'Low ESR for Efficiency',
            'Continuous Duty Rating'
        ],
        specs: [
            { label: 'Standard', value: 'IS 2993:1998' },
            { label: 'Capacitance', value: '4.00 - 50.00 µF' },
            { label: 'Rated Voltage', value: '440 VAC' },
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
        ],
        applications: [
            { icon: 'water_drop', label: 'Monoblock Pumps' },
            { icon: 'air', label: 'Air Compressors' },
            { icon: 'settings', label: 'Induction Motors' },
            { icon: 'agriculture', label: 'Agricultural Pumps' }
        ]
    },
    {
        id: 'air-conditioner-capacitor',
        name: 'Air Conditioner Capacitors',
        category: 'Air Conditioner Capacitors',
        standard: 'As per IS 2993 : 1998',
        description: 'High-performance capacitors designed for air conditioning units and heavy-duty motors. Ensures reliable starting and running operation under demanding conditions.',
        image: AirConditionerCapacitorImg,
        features: [
            'IS 2993:1998 Standard Compliance',
            'Rated Voltage: 440 VAC',
            'Tolerance: ±5%',
            'Self-Healing Properties',
            'Low Dissipation Factor',
            'Explosion-proof Design',
            'Wide Temperature Range',
            'Long Operational Life'
        ],
        specs: [
            { label: 'Standard', value: 'IS 2993:1998' },
            { label: 'Capacitance', value: '15.00 - 50.00 µF' },
            { label: 'Rated Voltage', value: '440 VAC' },
            { label: 'Application', value: 'AC Units, Motors' },
        ],
        detailedSpecs: [
            { capacitance: '15.00', tolerance: '±5%', dimensions: '40 × 71', application: '1/2 HP Monoblock Pump' },
            { capacitance: '20.00', tolerance: '±5%', dimensions: '40 × 95', application: '1.5 HP Monoblock Pump' },
            { capacitance: '25.00', tolerance: '±5%', dimensions: '45 × 95', application: '1 HP Jet Pump & 1 Ton AC Unit' },
            { capacitance: '36.00', tolerance: '±5%', dimensions: '50 × 120', application: '1.5 Ton AC Unit' },
            { capacitance: '45.00', tolerance: '±5%', dimensions: '50 × 120', application: '2 Ton AC Unit' },
            { capacitance: '50.00', tolerance: '±5%', dimensions: '50 × 120', application: 'Heavy Duty Motors' },
        ],
        applications: [
            { icon: 'ac_unit', label: 'Split AC' },
            { icon: 'mode_cool', label: 'Window AC' },
            { icon: 'kitchen', label: 'Refrigerators' },
            { icon: 'thermostat', label: 'HVAC Systems' }
        ]
    },

];