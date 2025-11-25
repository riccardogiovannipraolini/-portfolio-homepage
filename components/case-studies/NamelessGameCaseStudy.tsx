'use client'

import React, { useState, useEffect } from 'react';
import {
    Terminal,
    AlertTriangle,
    Layers,
    GitBranch,
    BookOpen,
    Code2,
    ArrowRight,
    ArrowLeft,
    Scissors,
    Zap,
    Activity,
    CheckCircle2,
    Cpu,
    PenTool,
    Feather,
    Database,
    Download,
    Linkedin,
    Mail,
    ExternalLink,
    TrendingUp,
    Power,
    Clock,
    Target,
    Calendar,
    FileText,
    Github,
    MapPin
} from 'lucide-react';
import Footer from '../layout/Footer';

// --- CSS Polyfill for 'tailwindcss-animate' classes ---
const AnimationStyles = () => (
    <style>{`
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes zoomIn { from { transform: scale(0.95); } to { transform: scale(1); } }
    @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
    
    .animate-in { animation-duration: 0.7s; animation-fill-mode: forwards; animation-timing-function: ease-out; }
    .fade-in { animation-name: fadeIn; }
    .zoom-in { animation-name: zoomIn; }
    .slide-in-from-right { animation-name: slideInRight; }
    .delay-100 { animation-delay: 100ms; }
    
    /* Custom scrollbar for the terminal feel */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { bg: #0a0a0a; }
    ::-webkit-scrollbar-thumb { background: #22c55e; border-radius: 0; }
    ::-webkit-scrollbar-thumb:hover { background: #15803d; }
  `}</style>
);

export default function NamelessGameCaseStudy() {
    const [activeSection, setActiveSection] = useState('thesis');
    const [isProcessing, setIsProcessing] = useState(false);
    const [dataVerified, setDataVerified] = useState(false);
    const [cycleState, setCycleState] = useState('verified');

    // STATO INTRO (Sipario)
    const [introState, setIntroState] = useState('visible');

    // GESTIONE INTRO SEQUENCER
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Blocca scroll all'avvio

        // 1. Fase di lettura (1.5s)
        const timer1 = setTimeout(() => {
            setIntroState('hiding'); // Inizia a salire
            document.body.style.overflow = ''; // Sblocca scroll
        }, 1500);

        // 2. Pulizia (2.2s totale)
        const timer2 = setTimeout(() => {
            setIntroState('hidden');
        }, 2200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            document.body.style.overflow = '';
        };
    }, []);

    // GESTIONE CICLO DI FEEDBACK (Console Destra)
    useEffect(() => {
        // Reset immediato quando cambia sezione
        setCycleState('input');
        setIsProcessing(true);
        setDataVerified(false);

        const t1 = setTimeout(() => setCycleState('processing'), 600);
        const t2 = setTimeout(() => {
            setCycleState('returning');
            setIsProcessing(false);
        }, 1600);
        const t3 = setTimeout(() => {
            setCycleState('verified');
            setDataVerified(true);
        }, 2400);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [activeSection]);

    // SCROLL SPY (Logica "Centro Schermo")
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['thesis', 'antithesis', 'synthesis', 'evolution'];

            // Fallback per la cima della pagina
            if (window.scrollY < 300) {
                setActiveSection('thesis');
                return;
            }

            // Trova la sezione che occupa il centro dello schermo
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Trigger point: quando la parte superiore dell'elemento entra nel 30% superiore della viewport
                    // E la parte inferiore è ancora visibile
                    if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check iniziale
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // HELPERS GRAFICI
    const getTransitionClass = (sectionName: string) => {
        const isActive = activeSection === sectionName;
        const isBlurry = isActive && cycleState === 'processing';

        return `absolute inset-0 w-full h-full transition-all duration-700 ease-out transform ${isActive
            ? `${isBlurry ? 'opacity-80 blur-sm' : 'opacity-100 blur-0'} translate-x-0 pointer-events-auto z-10`
            : 'opacity-0 translate-x-12 pointer-events-none z-0'
            }`;
    };

    const getCardStatusColor = (sectionName: string) => {
        if (activeSection !== sectionName) return 'border-transparent';
        if (cycleState === 'verified') return 'border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]';
        return 'border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]';
    };

    // --- DATI MOCK ---
    const backlogItems = [
        { id: 1, name: 'Core Loop', value: 'HI', effort: 'MED', status: 'KEEP' },
        { id: 2, name: 'Onboard', value: 'HI', effort: 'LOW', status: 'KEEP' },
        { id: 3, name: 'Soc. Login', value: 'LO', effort: 'HI', status: 'KILL' },
        { id: 4, name: 'Dark Mode', value: 'LO', effort: 'MED', status: 'KILL' },
    ];
    const velocityData = [
        { sprint: 'S1', value: 40, status: 'miss' },
        { sprint: 'S2', value: 52, status: 'miss' },
        { sprint: 'S3', value: 62, status: 'hit' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans bg-stone-100 text-neutral-900 selection:bg-orange-500 selection:text-white">
            <AnimationStyles />

            {/* === ETICHETTA PERSISTENTE (FIXED) === */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
                <div className="bg-orange-600/95 backdrop-blur-md text-white px-6 py-2 font-mono font-bold text-xs md:text-xs uppercase tracking-widest shadow-2xl border-b-2 border-x-2 border-neutral-900 rounded-b-xl flex items-center gap-2 pointer-events-auto">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    PROJECT: NAMELESS
                </div>
            </div>

            {/* === 0. INTRO OVERLAY (IL SIPARIO) === */}
            <div
                className={`fixed inset-0 z-[100] flex transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-none
          ${introState === 'hiding' || introState === 'hidden' ? '-translate-y-full' : 'translate-y-0'}
        `}
            >
                <div className="w-1/2 h-full bg-[#F2F0E9] flex flex-col items-center justify-center border-r border-neutral-300 relative">
                    <div className="text-center animate-in fade-in zoom-in duration-700">
                        <Feather size={80} className="text-orange-600 mb-6 mx-auto" strokeWidth={1} />
                        <h1 className="font-serif text-5xl text-neutral-900 mb-2">Journal Active</h1>
                        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Loading Narrative Protocol...</p>
                    </div>
                </div>
                <div className="w-1/2 h-full bg-[#0a0a0a] flex flex-col items-center justify-center relative text-green-500 font-mono">
                    <div className="text-left animate-in fade-in slide-in-from-right duration-700 delay-100">
                        <div className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <Terminal size={32} /> SYSTEM BOOT
                        </div>
                        <div className="space-y-1 text-sm opacity-70">
                            <div>&gt; CHECK_INTEGRITY... OK</div>
                            <div>&gt; MOUNT_VOLUMES... OK</div>
                            <div>&gt; ESTABLISH_UPLINK... <span className="animate-pulse">_</span></div>
                        </div>
                    </div>
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-orange-500 to-transparent z-50"></div>
            </div>

            {/* === 1. HERO SECTION === */}
            <div className="relative w-full min-h-screen flex flex-col md:flex-row border-b-8 border-orange-500 z-10 bg-stone-100">

                {/* LATO SINISTRO - PHILOSOPHY/JOURNAL */}
                <div className="w-full md:w-1/2 bg-[#F2F0E9] relative flex flex-col justify-center px-8 md:pl-20 md:pr-12 py-16 border-r border-neutral-900">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-neutral-500 font-mono text-xs font-bold uppercase tracking-widest mb-6">
                            <span className="text-orange-600">Riccardo Praolini</span> // Product Manager
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[0.9] text-neutral-900 mb-8">
                            The <span className="italic text-orange-600">Art</span> of<br />Direction.
                        </h1>
                        <p className="font-serif text-xl text-neutral-800 italic max-w-md leading-relaxed mb-6">
                            "Senza una direzione chiara, il codice è solo rumore."
                        </p>
                        <p className="font-serif text-base text-neutral-600 max-w-md leading-relaxed mb-8">
                            Nameless è un rhythm turn-based RPG sviluppato da un team indie remoto di 10 persone tra Italia e Europa.<br /><br />
                            Il mio ruolo: trasformare una visione creativa ambiziosa in un sistema di delivery prevedibile, senza uccidere la magia.
                        </p>
                    </div>
                </div>

                {/* LATO DESTRO - EXECUTION/CODE */}
                <div className="w-full md:w-1/2 bg-[#0a0a0a] relative flex flex-col justify-center p-8 md:p-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-green-900/10 to-black pointer-events-none"></div>
                    <div className="relative z-10 pl-0 md:pl-12 border-l-2 border-green-900/50 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-2 text-green-500/50 font-mono text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                            <Code2 size={14} /> Role: Builder / Execution
                        </div>
                        <h1 className="text-5xl md:text-7xl font-mono font-bold leading-[0.9] text-white mb-8 tracking-tight">
                            The <span className="text-green-500">Code</span> of<br />Control.
                        </h1>

                        <div className="font-mono text-sm text-green-400/80 mb-8 space-y-2">
                            <p>{`> WITHOUT EXECUTION, STRATEGY IS HALLUCINATION.`}</p>
                        </div>

                        {/* Visual Code Snippet Tree */}
                        <div className="font-mono text-xs text-neutral-400 bg-neutral-900/80 p-6 border border-green-900/30 rounded-sm backdrop-blur-sm shadow-2xl">
                            <div className="text-green-500 mb-3 font-bold">PROJECT_NAMELESS/</div>
                            <div className="pl-2 space-y-1">
                                <div className="flex items-center gap-2">├── <span className="text-blue-400">context/</span></div>
                                <div className="pl-6 border-l border-neutral-800 text-neutral-500 space-y-1 py-1">
                                    <div>├── team_size: <span className="text-orange-400">10</span></div>
                                    <div>├── duration: <span className="text-orange-400">4_months</span></div>
                                    <div>└── scope: <span className="text-orange-400">rhythm_rpg</span></div>
                                </div>
                                <div className="flex items-center gap-2">├── <span className="text-blue-400">challenges/</span></div>
                                <div className="pl-6 border-l border-neutral-800 text-neutral-500 space-y-1 py-1">
                                    <div>├── velocity_chaos</div>
                                    <div>├── scope_creep</div>
                                    <div>└── remote_coordination</div>
                                </div>
                                <div className="flex items-center gap-2">└── <span className="text-blue-400">solutions/</span></div>
                                <div className="pl-6 pt-2 text-green-500 animate-pulse">→ [SCROLL TO DISCOVER]</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* === 2. EXECUTIVE SUMMARY === */}
            <section className="relative w-full min-h-screen flex flex-col justify-center bg-black text-white py-32 z-10">
                {/* Decorative Background pattern */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
                    <div className="text-center mb-16">
                        <h2 className="font-mono text-[#FF6B35] uppercase tracking-[0.2em] mb-6 font-bold text-sm">Executive Summary</h2>
                        <h3 className="text-5xl md:text-6xl font-serif font-bold text-white">Impact Delivered.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="p-10 border border-neutral-800 bg-[#0A0A0A] rounded-xl flex flex-col items-start">
                            <TrendingUp size={40} className="text-[#00FF88] mb-6" />
                            <div className="text-5xl md:text-6xl font-mono font-bold text-white mb-4">+75%</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">Velocity Stability</div>
                            <p className="text-base text-neutral-500 leading-relaxed font-sans">Volatilità sprint ridotta da 60% a 15% con capacity planning orario.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="p-10 border border-neutral-800 bg-[#0A0A0A] rounded-xl flex flex-col items-start">
                            <CheckCircle2 size={40} className="text-[#4A90E2] mb-6" />
                            <div className="text-5xl md:text-6xl font-mono font-bold text-white mb-4">90%</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">Commitment Met</div>
                            <p className="text-base text-neutral-500 leading-relaxed font-sans">Sprint Delivery rispettata costantemente dopo l'introduzione del "Kill Protocol".</p>
                        </div>
                        {/* Card 3 */}
                        <div className="p-10 border border-neutral-800 bg-[#0A0A0A] rounded-xl flex flex-col items-start">
                            <Zap size={40} className="text-[#FF6B35] mb-6" />
                            <div className="text-5xl md:text-6xl font-mono font-bold text-white mb-4">-40%</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6">Planning Time</div>
                            <p className="text-base text-neutral-500 leading-relaxed font-sans">Meeting dimezzati grazie a specifiche scritte e wireframe self-produced.</p>
                        </div>
                    </div>
                </div>

                {/* Transition Strip */}
                <div className="absolute bottom-0 left-0 w-full h-4 flex">
                    <div className="w-1/2 bg-[#F2F0E9]"></div>
                    <div className="w-1/2 bg-[#0a0a0a]"></div>
                </div>
            </section>

            {/* === 3. STICKY HEADER === */}
            <header className="sticky top-0 z-40 h-14 flex w-full font-mono text-xs shadow-xl">
                <div className="w-1/2 bg-[#F2F0E9] border-b border-r border-neutral-300 flex items-center justify-between px-8 text-neutral-600 transition-colors duration-500" style={{ backgroundColor: cycleState === 'verified' ? '#f0fdf4' : '#F2F0E9' }}>
                    <span className="flex items-center gap-2 font-bold"><PenTool size={14} className={cycleState === 'verified' ? 'text-green-600' : 'text-orange-600'} /> {cycleState === 'verified' ? 'JOURNAL: SYNCED' : 'JOURNAL: ACTIVE'}</span>
                </div>
                <div className="w-1/2 bg-[#0a0a0a] border-b border-green-900/30 flex items-center justify-between px-8 text-green-500">
                    <span className="flex items-center gap-3"><div className={`w-2 h-2 rounded-full ${cycleState === 'processing' ? 'bg-orange-500 animate-ping' : 'bg-green-500'}`}></div> SYSTEM ONLINE</span>
                    <span className={`hidden md:inline transition-all duration-300 font-bold ${cycleState === 'processing' ? 'text-orange-500' : cycleState === 'returning' ? 'text-blue-400 animate-pulse' : 'text-neutral-500'}`}>
                        {cycleState === 'processing' ? 'PROCESSING...' : cycleState === 'returning' ? 'UPLOADING...' : cycleState === 'verified' ? 'IDLE' : 'READY'}
                    </span>
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-screen w-full relative">

                {/* LEFT: PHILOSOPHER */}
                <div className="md:col-span-6 bg-[#F2F0E9] border-r border-neutral-300 relative z-10 pb-64">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
                    <div className="relative p-8 md:p-24 space-y-48 mt-12">

                        <div id="thesis" className={`transition-opacity duration-700 ${activeSection === 'thesis' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="border-b-2 border-neutral-900 pb-4 mb-8">
                                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-2">01. CONTEXT <CheckCircle2 size={10} className="text-green-600" /> VERIFIED</span>
                                <h3 className="text-3xl font-serif font-bold text-neutral-900 mt-2">The Constraint Paradox.</h3>
                            </div>
                            <div className={`pl-8 border-l-4 transition-all duration-500 relative ${getCardStatusColor('thesis')}`}>

                                <p className="font-serif text-lg font-bold text-neutral-900 mb-4">
                                    Assenza di un sistema di execution strutturato.
                                </p>
                                <p className="font-serif text-base text-neutral-700 leading-relaxed mb-8">
                                    Un team tecnicamente competente operava senza un framework replicabile per tradurre la visione creativa in delivery misurabile e prevedibile.
                                </p>

                                <div className="space-y-6 font-serif text-neutral-800">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><TrendingUp size={14} /> Sintomo 1: Velocity</h4>
                                        <p className="text-sm leading-relaxed">La velocity variava del 60% tra sprint consecutivi, rendendo impossibile formulare commitment affidabili verso gli stakeholder.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Target size={14} /> Sintomo 2: Scope</h4>
                                        <p className="text-sm leading-relaxed">Il backlog cresceva in modo incontrollato, privo di criteri di prioritizzazione espliciti. Ogni feature veniva percepita come critica, nessuna veniva scartata.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Clock size={14} /> Sintomo 3: Planning</h4>
                                        <p className="text-sm leading-relaxed">I planning meeting richiedevano 2 ore senza preparazione preventiva. L'intero processo decisionale avveniva in modalità sincrona, con conseguente inefficienza.</p>
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-neutral-300">
                                    <p className="font-serif italic text-neutral-600">
                                        "La competenza tecnica era presente. Il sistema di execution era assente."
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div id="antithesis" className={`transition-opacity duration-700 ${activeSection === 'antithesis' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="border-b-2 border-neutral-900 pb-4 mb-8">
                                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-2">02. HYPOTHESIS <CheckCircle2 size={10} className="text-green-600" /> FORMULATED</span>
                                <h3 className="text-3xl font-serif font-bold text-neutral-900 mt-1">The Scope Fallacy</h3>
                            </div>
                            <div className={`pl-8 border-l-4 transition-all duration-500 relative ${getCardStatusColor('antithesis')}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="font-mono text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full">02. FRICTION</span>
                                </div>

                                <p className="font-serif text-base text-neutral-700 leading-relaxed mb-4">
                                    L'assenza di un sistema di execution richiedeva l'introduzione di un framework strutturato su tre componenti integrate.
                                </p>

                                <p className="font-serif text-lg font-bold text-neutral-900 mb-8 italic">
                                    "Un sistema replicabile avrebbe trasformato la volatilità in prevedibilità, il caos in ritmo."
                                </p>

                                <div className="space-y-6 font-serif text-neutral-800 mb-8">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Cpu size={14} /> Componente 1: Capacity Planning</h4>
                                        <p className="text-sm leading-relaxed">Calcolare la safe capacity con buffer del 20% per ogni sprint, rendendo la velocity misurabile e stabile.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Scissors size={14} /> Componente 2: Kill Protocol</h4>
                                        <p className="text-sm leading-relaxed">Applicare criteri espliciti di prioritizzazione attraverso una Priority Matrix (Impact/Effort) per controllare lo scope.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><FileText size={14} /> Componente 3: Async Documentation</h4>
                                        <p className="text-sm leading-relaxed">Preparare specifiche scritte e wireframe prima dei planning meeting per ridurre drasticamente il tempo sincrono.</p>
                                    </div>
                                </div>

                                <div className="bg-[#fffbf0] p-6 shadow-lg border-2 border-neutral-900 -rotate-1 max-w-sm">
                                    <div className="flex items-center gap-2 mb-4 border-b-2 border-neutral-900 pb-2"><Scissors size={16} /><span className="font-mono text-xs font-bold">KILL PROTOCOL</span></div>
                                    <p className="text-sm font-serif italic text-neutral-600">"Feature unused in 30s = CUT."</p>
                                </div>

                            </div>
                        </div>

                        <div id="synthesis" className={`transition-opacity duration-700 ${activeSection === 'synthesis' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="border-b-2 border-neutral-900 pb-4 mb-8">
                                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-2">03. SOLUTION <CheckCircle2 size={10} className="text-green-600" /> IMPLEMENTED</span>
                                <h3 className="text-3xl font-serif font-bold text-neutral-900 mt-2">Algorithmic Rhythm.</h3>
                            </div>
                            <div className={`pl-8 border-l-4 transition-all duration-500 relative ${getCardStatusColor('synthesis')}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="font-mono text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full">03. SYSTEM</span>
                                </div>

                                <p className="font-serif text-base text-neutral-700 leading-relaxed mb-8">
                                    Il framework è stato implementato sistematicamente su 12 sprint consecutivi, trasformando l'ipotesi in sistema operativo replicabile.
                                </p>

                                <div className="space-y-6 font-serif text-neutral-800 mb-8">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Cpu size={14} /> Pilastro 1: Capacity Planning</h4>
                                        <p className="text-sm leading-relaxed">Safe capacity calcolata ogni sprint con formula standardizzata: (Team Size × Weekly Hours) × 0.8 = Allocatable Time. Applicato buffer del 20% per assorbire imprevisti.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Scissors size={14} /> Pilastro 2: Kill Protocol</h4>
                                        <p className="text-sm leading-relaxed">Priority Matrix (Impact/Effort) applicata ad ogni feature proposta. 19 feature su 47 eliminate nei primi 3 sprint. Backlog ridotto del 40%.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><FileText size={14} /> Pilastro 3: Async Documentation</h4>
                                        <p className="text-sm leading-relaxed">Specifiche scritte e wireframe preparati 48h prima di ogni planning. Planning time ridotto da 2h a 1h.</p>
                                    </div>
                                </div>

                                <div className="bg-neutral-900 text-neutral-300 p-5 rounded shadow-xl font-mono text-xs max-w-sm border-l-4 border-green-500">
                                    <div className="text-green-400 mb-2 font-bold flex items-center gap-2"><Cpu size={12} /> CAPACITY.js</div>
                                    <div className="flex justify-between font-bold text-green-400 border-t border-neutral-700 pt-2 mt-2"><span>SAFE_CAPACITY</span> <span>64h</span></div>
                                </div>
                            </div>
                        </div>

                        <div id="evolution" className={`transition-opacity duration-700 ${activeSection === 'evolution' ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="border-b-2 border-neutral-900 pb-4 mb-8">
                                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest flex items-center gap-2">04. RETROSPECTIVE <CheckCircle2 size={10} className="text-green-600" /> COMPLETED</span>
                                <h3 className="text-3xl font-serif font-bold text-neutral-900 mt-2">The Learning Loop.</h3>
                            </div>
                            <div className={`pl-8 border-l-4 transition-all duration-500 relative ${getCardStatusColor('evolution')}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="font-mono text-xs font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full">04. GROWTH</span>
                                </div>

                                <p className="font-serif text-base text-neutral-700 leading-relaxed mb-8">
                                    Quattro mesi di execution sistematica hanno generato insight replicabili su delivery, coordinamento e gestione dello scope.
                                </p>

                                <div className="space-y-6 font-serif text-neutral-800 mb-8">
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Activity size={14} /> Lesson 1: Delivery</h4>
                                        <p className="text-sm leading-relaxed">Il capacity planning preventivo è superiore alla velocity reattiva. Calcolare la safe capacity con buffer strutturato riduce l'ansia del commitment e aumenta la prevedibilità del 75%.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><FileText size={14} /> Lesson 2: Team Coordination</h4>
                                        <p className="text-sm leading-relaxed">La documentazione asincrona libera tempo sincrono per decisioni critiche. Preparare specifiche 48h prima del planning ha dimezzato il meeting time mantenendo la qualità delle decisioni.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm uppercase tracking-wide text-orange-600 mb-1 flex items-center gap-2"><Scissors size={14} /> Lesson 3: Scope Management</h4>
                                        <p className="text-sm leading-relaxed">Dire "no" richiede un framework esplicito. Senza criteri oggettivi, ogni feature sembra critica. La Priority Matrix ha trasformato discussioni emotive in valutazioni strutturate.</p>
                                    </div>
                                </div>

                                <div className="bg-yellow-100 text-yellow-900 p-6 shadow-lg border-l-4 border-yellow-500 max-w-sm mb-8">
                                    <p className="font-serif italic text-lg leading-relaxed mb-2">"We need peer review before 'Done'."</p>
                                    <div className="text-xs font-bold uppercase tracking-widest text-right">- RETRO ACTION ITEM</div>
                                </div>

                                <div className="pt-6 border-t border-neutral-300">
                                    <p className="font-serif text-neutral-600 text-sm">
                                        Il fallimento dello Sprint 2 non è stato un errore, ma un dato per ricalibrazione. I sistemi migliorano con l'iterazione, non con la perfezione iniziale.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT: BUILDER */}
                <div className="hidden md:block md:col-span-6 bg-[#0a0a0a] relative text-green-500 font-mono border-l border-neutral-800">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                    {/* Sticky container */}
                    <div className="sticky top-14 h-[calc(100vh-3.5rem)] flex flex-col">
                        <div className="flex-1 flex items-center justify-center p-12 relative">
                            <div className="w-full max-w-3xl relative pl-8">

                                {/* Header Terminale */}
                                <div className="flex justify-between items-end mb-6 border-b border-green-500/30 pb-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className={`w-2 h-2 rounded-full ${cycleState === 'processing' ? 'bg-orange-500 animate-ping' : 'bg-green-500'}`}></span>
                                            <span className="text-[10px] uppercase tracking-widest font-bold text-green-700">
                                                {activeSection === 'thesis' ? '◉ THESIS MATRIX' :
                                                    activeSection === 'antithesis' ? '◉ ANTITHESIS MATRIX' :
                                                        activeSection === 'synthesis' ? '◉ SYNTHESIS MATRIX' :
                                                            activeSection === 'evolution' ? '◉ EVOLUTION MATRIX' :
                                                                activeSection.toUpperCase() + ' MATRIX'}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <Terminal size={20} className={cycleState === 'processing' ? 'text-orange-500' : 'text-green-500'} />
                                            <span className="transition-all duration-300">
                                                {activeSection === 'thesis' && '> INIT: PROJECT_ROADMAP.json'}
                                                {activeSection === 'antithesis' && '> EXEC: PRIORITY_MATRIX_V1'}
                                                {activeSection === 'synthesis' && '> CALC: CAPACITY_LOG_SPRINT_1'}
                                                {activeSection === 'evolution' && '> RENDER: VELOCITY_ANALYSIS'}
                                            </span>
                                        </h3>
                                    </div>
                                </div>

                                {/* CONTENITORE ARTEFATTI (Sovrapposti) */}
                                <div className="min-h-[450px] relative w-full">

                                    {/* ROADMAP */}
                                    <div className={getTransitionClass('thesis')}>
                                        <div className="w-full h-full bg-green-900/5 border border-green-500/20 p-6 rounded-sm backdrop-blur-sm flex flex-col">

                                            {/* Visual Box: Constraints + Roadmap */}
                                            <div className="flex-1 border border-green-500/30 bg-[#050505] relative p-4 mb-4">
                                                <div className="absolute top-2 left-3 font-mono text-xs font-bold text-yellow-500 flex items-center gap-2">
                                                    <AlertTriangle size={12} /> ⚠️ CONSTRAINTS
                                                </div>

                                                <div className="mt-6 mb-6 font-mono text-xs text-neutral-400 border-b border-neutral-800 pb-4">
                                                    <div className="flex justify-between mb-1"><span>DEADLINE</span> <span className="text-red-500 font-bold">21 NOV</span></div>
                                                    <div className="flex justify-between"><span>BUDGET</span> <span className="text-neutral-300">€0.00</span></div>
                                                </div>

                                                {/* Mini Gantt */}
                                                <div className="relative h-32 w-full border-l border-neutral-700">
                                                    {/* Vertical Grid Lines */}
                                                    <div className="absolute inset-0 flex justify-between pointer-events-none opacity-20">
                                                        <div className="w-px h-full bg-green-500"></div>
                                                        <div className="w-px h-full bg-green-500"></div>
                                                        <div className="w-px h-full bg-green-500"></div>
                                                        <div className="w-px h-full bg-green-500"></div>
                                                    </div>

                                                    {/* Bars */}
                                                    <div className="absolute top-4 left-0 w-[30%] h-6 bg-green-500/20 border-l-2 border-green-500 flex items-center px-2 text-[10px] text-green-400">01 SETUP</div>
                                                    <div className="absolute top-14 left-[30%] w-[50%] h-6 bg-green-500/20 border-l-2 border-green-500 flex items-center px-2 text-[10px] text-green-400">02 CORE LOOP</div>

                                                    {/* Deadline Marker */}
                                                    <div className="absolute top-0 bottom-0 right-[10%] w-px border-l border-dashed border-red-500 flex flex-col items-center">
                                                        <span className="text-[8px] text-red-500 bg-red-900/20 px-1 mt-1">DEADLINE</span>
                                                        <div className="mt-auto text-red-500 mb-1">↑</div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Code Snippet */}
                                            <div className="bg-black p-4 font-mono text-[10px] leading-relaxed text-neutral-400 border-t border-green-900/30">
                                                <div className="text-green-600 mb-1">// ROOT_CAUSE_ANALYSIS</div>
                                                <div className="pl-2">
                                                    <div><span className="text-blue-400">&gt; PROBLEM:</span> <span className="text-red-400">'no_execution_framework'</span></div>
                                                    <div><span className="text-blue-400">&gt; SYMPTOMS:</span> [</div>
                                                    <div className="pl-4 text-neutral-500">
                                                        <div>velocity_instability: <span className="text-orange-400">60%</span>,</div>
                                                        <div>scope_uncontrolled: <span className="text-purple-400">true</span>,</div>
                                                        <div>planning_inefficient: <span className="text-orange-400">'2h_avg'</span></div>
                                                    </div>
                                                    <div>]</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* MATRIX */}
                                    <div className={getTransitionClass('antithesis')}>
                                        <div className="w-full h-full bg-[#0f1110] border border-green-500/20 p-6 flex flex-col relative">
                                            {/* Priority Matrix Visual */}
                                            <div className="flex-1 relative border-l border-b border-green-500/50 mb-4">
                                                {backlogItems.map((item, i) => (
                                                    <div key={i} className={`absolute px-3 py-2 border font-mono text-xs flex flex-col items-center justify-center
                                ${item.status === 'KILL' ? 'border-red-500/50 text-red-500 opacity-60' : 'border-green-400 text-black bg-green-500 font-bold'}`}
                                                        style={{
                                                            top: item.effort === 'HI' ? '20%' : item.effort === 'MED' ? '50%' : '80%',
                                                            left: item.value === 'HI' ? '80%' : '20%',
                                                            transform: 'translate(-50%, -50%)'
                                                        }}
                                                    >
                                                        {item.name}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Code Snippet */}
                                            <div className="bg-black p-4 font-mono text-[10px] leading-relaxed text-neutral-400 border-t border-green-900/30">
                                                <div className="text-green-600 mb-1">// HYPOTHESIS_FRAMEWORK.js</div>
                                                <div className="pl-2">
                                                    <div><span className="text-purple-400">const</span> executionSystem = {'{'}</div>
                                                    <div className="pl-4 text-neutral-500">
                                                        <div>capacity_planning: <span className="text-orange-400">"20% buffer"</span>,</div>
                                                        <div>kill_protocol: <span className="text-orange-400">"impact/effort matrix"</span>,</div>
                                                        <div>async_docs: <span className="text-orange-400">"pre-planning specs"</span></div>
                                                    </div>
                                                    <div>{'};'}</div>
                                                    <div className="mt-2">
                                                        <div><span className="text-purple-400">IF</span> (executionSystem.applied === <span className="text-purple-400">true</span>) {'{'}</div>
                                                        <div className="pl-4 text-blue-400">
                                                            <div>THEN velocity.stable = <span className="text-purple-400">true</span>;</div>
                                                            <div>THEN scope.controlled = <span className="text-purple-400">true</span>;</div>
                                                            <div>THEN planning.efficient = <span className="text-purple-400">true</span>;</div>
                                                        </div>
                                                        <div>{'}'}</div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    {/* CAPACITY */}
                                    <div className={getTransitionClass('synthesis')}>
                                        <div className="w-full h-full flex flex-col gap-4">
                                            {/* Code Snippet: Calc */}
                                            <div className="bg-[#050505] border border-green-500/30 p-6 font-mono text-xs leading-relaxed text-green-400 relative">
                                                <div className="absolute top-0 right-0 bg-green-900/20 text-green-500 text-[10px] px-2 py-1 font-bold">v1.0.2</div>
                                                <div className="text-green-700 mb-4 font-bold">// CALCULATING SAFE_CAPACITY</div>
                                                <div><span className="text-purple-400">const</span> TEAM_SIZE = 2; WEEKLY = 40h;</div>
                                                <div className="bg-green-900/20 -mx-6 px-6 py-1 my-1 border-l-2 border-green-500 flex items-center justify-between">
                                                    <span>| BUFFER = 20%</span>
                                                    <span className="text-green-600 opacity-50">// Absorbs friction</span>
                                                </div>
                                                <div className="mt-4 text-green-300 font-bold">{`>> 64h ALLOCATABLE`}</div>
                                            </div>

                                            {/* Execution Summary JSON */}
                                            <div className="flex-1 bg-black border border-green-500/30 p-6 font-mono text-xs leading-relaxed text-neutral-400">
                                                <div className="text-green-600 mb-2">// EXECUTION_SUMMARY.json</div>
                                                <div className="pl-2">
                                                    <div>{`{`}</div>
                                                    <div className="pl-4">
                                                        <div>"sprints_completed": <span className="text-orange-400">12</span>,</div>
                                                        <div>"velocity_variance": <span className="text-green-400">"60% → 15%"</span>,</div>
                                                        <div>"backlog_reduction": <span className="text-green-400">"40%"</span>,</div>
                                                        <div>"planning_efficiency": <span className="text-green-400">"2h → 1h"</span>,</div>
                                                        <div>"framework_adherence": <span className="text-green-400">"100%"</span></div>
                                                    </div>
                                                    <div>{`}`}</div>
                                                </div>
                                                <div className="mt-4 text-green-500 animate-pulse">{`>> SYSTEM_OPERATIONAL`}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* VELOCITY */}
                                    <div className={getTransitionClass('evolution')}>
                                        <div className="w-full h-full bg-black border border-green-500/30 p-8 flex flex-col">
                                            {/* Visual: Velocity Chart */}
                                            <div className="flex-1 flex items-end gap-2 w-full border-b border-green-800/50 pb-2 px-4 relative mb-6">
                                                {velocityData.map((d, i) => (
                                                    <div key={i} className={`flex-1 relative border ${d.status === 'miss' ? 'bg-red-900/20 border-red-500/30' : 'bg-green-500/20 border-green-400'}`} style={{ height: `${d.value + 20}%` }}>
                                                        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold ${d.status === 'miss' ? 'text-red-500' : 'text-green-400'}`}>{d.status}</div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Code Snippet: Iteration Log */}
                                            <div className="bg-[#050505] p-4 font-mono text-[10px] leading-relaxed text-neutral-400 border-t border-green-900/30">
                                                <div className="text-green-600 mb-1">// ITERATION_LOG</div>
                                                <div className="pl-2">
                                                    <div>{`{`}</div>
                                                    <div className="pl-4">
                                                        <div>"sprint_failures": <span className="text-red-400">2</span>,</div>
                                                        <div>"sprint_successes": <span className="text-green-400">10</span>,</div>
                                                        <div>"success_rate": <span className="text-orange-400">"83%"</span>,</div>
                                                        <div>"key_pivot": <span className="text-blue-400">"sprint_2_failure"</span>,</div>
                                                        <div>"action": <span className="text-green-400">"buffer_increased_20%"</span></div>
                                                    </div>
                                                    <div>{`}`}</div>
                                                </div>
                                                <div className="mt-3 space-y-1">
                                                    <div className="text-green-500">{`>> LEARNING_VELOCITY: INCREASING`}</div>
                                                    <div className="text-green-500">{`>> SYSTEM_MATURITY: OPERATIONAL`}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* 5. FOOTER - DEFINITIVO */}
            <Footer />
        </div>
    );
};
