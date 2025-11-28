'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../layout/Footer';
import {
  Terminal,
  AlertTriangle,
  Scissors,
  Cpu,
  PenTool,
  Feather,
  Download,
  Linkedin,
  TrendingUp,
  CheckCircle2,
  Zap,
  Code2,
  Menu,
  X,
  Mail,
  Layout,
  User,
  ArrowRight,
  Github,
  FileText,
  GitBranch,
  Database,
  Search,
  ChevronRight,
  ExternalLink,
  PauseOctagon,
  Hash,
  Fingerprint,
  Compass,
  KanbanSquare,
  Brain,
  Layers,
  PieChart,
  Palette,
  LineChart,
  TestTube,
  BookOpen,
  MapPin,
  Calendar
} from 'lucide-react';

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cycleState, setCycleState] = useState('verified');

  useEffect(() => {
    const t = setTimeout(() => setCycleState('verified'), 2000);
    return () => clearTimeout(t);
  }, []);

  // DATI MOCK
  const philosopherDeepDives = [
    { title: "Builder-Philosopher Framework", desc: "Meta-riflessione: come unire execution e pensiero critico nel PM", icon: <Compass size={16} /> },
    { title: "Chi resta", desc: "Romanzo su un futuro senza lavoro", icon: <BookOpen size={16} /> },
    { title: "Coming Soon", desc: "Caso pratico in arrivo", icon: <Calendar size={16} /> }
  ];

  const builderDeepDives = [
    { title: "SQL + Python per Product Analytics", desc: "Retention D1/D7/D30 e cohort analysis su dataset 50k utenti con PostgreSQL + Pandas", icon: <Database size={16} className="text-green-400" />, lang: "SQL+PY" },
    { title: "React Portfolio", desc: "Sito portfolio Next.js + Tailwind: 95+ Lighthouse, dark mode, responsive", icon: <Code2 size={16} className="text-green-400" />, lang: "REACT" },
    { title: "AI Agent Demo", desc: "Prototipo di agente AI per automazione task PM", icon: <Brain size={16} className="text-green-400" />, lang: "AI" }
  ];

  const backlogItems = [
    { id: 1, name: 'Auth Flow', value: 'HI', effort: 'LOW', status: 'KEEP' },
    { id: 2, name: 'Analytics', value: 'HI', effort: 'MED', status: 'KEEP' },
    { id: 3, name: 'Gamification', value: 'LO', effort: 'HI', status: 'KILL' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-stone-100 text-neutral-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">

      {/* === 0. NAVIGATION HEADER === */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 flex shadow-lg bg-white border-b border-neutral-200">
        <div className="w-1/2 h-full flex items-center justify-start px-4 md:px-12 relative">
          <nav className="hidden md:flex items-center gap-8 text-sm font-serif font-bold tracking-wide text-neutral-900">
            <a href="#home" className="hover:text-orange-600 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-600 transition-colors">About</a>
          </nav>
          <div className="md:hidden w-full flex justify-start">
            <span className="font-serif font-bold text-neutral-900 text-lg">RP</span>
          </div>
        </div>

        <div className="w-1/2 h-full flex items-center justify-end px-4 md:px-12 relative">
          <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-green-600">
            <a href="#projects" className="hover:text-neutral-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
          <button className="md:hidden text-green-600 ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          {/* RIMOSSO SFONDO, PADDING E BORDI: bg-white/90, backdrop-blur, px/py, rounded, shadow */}
          <span className="font-mono font-black text-orange-700 text-base md:text-xl tracking-widest whitespace-nowrap">
            RICCARDO PRAOLINI
          </span>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-white border-b border-neutral-200 text-neutral-900 p-6 md:hidden flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
            <div className="space-y-4">
              <div className="font-serif text-neutral-400 text-xs uppercase tracking-widest mb-2">Context</div>
              <a href="#home" className="block text-xl font-serif text-neutral-900 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block text-xl font-serif text-neutral-900 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            </div>
            <div className="h-px bg-neutral-100 w-full my-2"></div>
            <div className="space-y-4">
              <div className="font-mono text-green-700 text-xs uppercase tracking-widest mb-2">Execution</div>
              <a href="#projects" className="block text-xl font-mono text-green-600 hover:text-neutral-900" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
              <a href="#contact" className="block text-xl font-mono text-green-600 hover:text-neutral-900" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>



      <main>
        {/* === 1. HERO SECTION (REFACTORED) === */}
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-center px-6 py-24 md:py-32 border-b-8 border-orange-500 z-10" id="home">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-neutral-900/50 to-[#0a0a0a] pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

            {/* 1. BADGE */}
            <div className="mb-8 animate-in slide-in-from-bottom-4 fade-in duration-700">
              <span className="bg-orange-600 text-white px-4 py-1.5 rounded-full font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-lg shadow-orange-900/20">
                Junior Product Manager | Builder-Philosopher
              </span>
            </div>

            {/* 2. HEADLINE (H1) */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-white leading-[1.1] mb-6 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-100">
              The Strategy of Why.<br />
              The Engine of How.
            </h1>

            {/* 3. SUB-HEADLINE (H2) */}
            <p className="text-lg md:text-xl text-neutral-400 font-sans max-w-2xl leading-relaxed mb-16 animate-in slide-in-from-bottom-8 fade-in duration-1000 delay-200">
              Unisco la logica umanistica all'esecuzione tecnica per trasformare i problemi utente in roadmap chiare e prodotti rilasciati.
            </p>

            {/* 4. GRID CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full animate-in slide-in-from-bottom-12 fade-in duration-1000 delay-300">

              {/* CARD 1: Execution Log */}
              <div className="bg-transparent border border-neutral-700 p-8 rounded-sm text-left hover:border-neutral-500 transition-colors">
                <div className="font-mono text-xs text-neutral-500 mb-4">// EXECUTION_LOG</div>
                <div className="text-4xl font-bold text-white mb-2">10+ Team Size</div>
                <div className="text-xl text-white mb-4">-30% Overhead</div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Coordinamento cross-funzionale (Nameless) e ottimizzazione processi.
                </p>
              </div>

              {/* CARD 2: Data Source */}
              <div className="bg-transparent border border-neutral-700 p-8 rounded-sm text-left hover:border-neutral-500 transition-colors">
                <div className="font-mono text-xs text-neutral-500 mb-4">// DATA_SOURCE</div>
                <div className="text-4xl font-bold text-white mb-2">15+ User Interviews</div>
                <div className="text-xl text-white mb-4">SQL & Python</div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Validazione qualitativa (Modulo) unita ad analisi quantitativa.
                </p>
              </div>

              {/* CARD 3: System Output */}
              <div className="bg-transparent border border-neutral-700 p-8 rounded-sm text-left hover:border-neutral-500 transition-colors">
                <div className="font-mono text-xs text-neutral-500 mb-4">// SYSTEM_OUTPUT</div>
                <div className="text-4xl font-bold text-white mb-2">+50% Engagement</div>
                <div className="text-xl text-white mb-4">3 Projects Shipped</div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Impatto misurabile sugli stakeholder e gestione della complessità.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* === 2. STATS / VALUE PROP === */}
        {/* MODIFICATO: pt-24 aggiunto al div interno per abbassare il contenuto */}


        {/* === MAIN CONTENT: CORE HYBRID CASE STUDIES === */}
        <div className="flex flex-col w-full relative bg-neutral-900" id="projects">

          {/* HEADER SEZIONE */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen border-b-8 border-neutral-900">
            <div className="bg-[#F2F0E9] p-8 md:p-16 border-r border-neutral-300 relative z-20 flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="w-16 h-1 bg-orange-500 mb-8 mx-auto"></div>
                <h2 className="font-mono text-orange-500 uppercase tracking-widest mb-6 font-bold text-sm md:text-base">PORTFOLIO</h2>
                <h3 className="text-5xl md:text-8xl font-serif font-bold text-neutral-900 leading-tight mb-6">Selected<br />Works.</h3>
                <p className="font-serif text-xl text-neutral-600 italic max-w-md">"Da discovery a delivery: progetti reali dove ho applicato product thinking e execution ownership."</p>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-16 relative z-20 flex flex-col justify-center items-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 border border-green-500/30 p-10 bg-neutral-900/80 backdrop-blur-sm max-w-lg w-full">
                <div className="font-mono text-base md:text-lg text-green-500/80 leading-relaxed">
                  <p className="mb-6 text-green-400 font-bold border-b border-green-500/30 pb-2">// 3 CORE CASE STUDIES</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex gap-2 group">
                      <span className="text-green-600">→</span>
                      <a href="#case-study-1" className="hover:text-green-400 hover:underline decoration-green-500/50 underline-offset-4 transition-all">
                        <span className="text-white font-bold">NAMELESS:</span> Execution mastery
                      </a>
                    </li>
                    {/* SCAMBIATO ORDINE: MODULO ORA È IL SECONDO */}
                    <li className="flex gap-2 group">
                      <span className="text-green-600">→</span>
                      <a href="#case-study-2" className="hover:text-green-400 hover:underline decoration-green-500/50 underline-offset-4 transition-all">
                        <span className="text-white font-bold">MODULO:</span> Discovery focus
                      </a>
                    </li>
                    {/* RINOMINATO PRIMO IMPIEGO IN JOB SEARCH E SPOSTATO AL TERZO POSTO */}
                    <li className="flex gap-2 group">
                      <span className="text-green-600">→</span>
                      <a href="#case-study-3" className="hover:text-green-400 hover:underline decoration-green-500/50 underline-offset-4 transition-all">
                        <span className="text-white font-bold">JOB SEARCH:</span> Product thinking
                      </a>
                    </li>
                  </ul>
                  <a href="#case-study-1" className="inline-block w-full text-center border border-green-500 text-green-500 px-4 py-3 text-sm font-bold hover:bg-green-500 hover:text-black transition-all uppercase tracking-widest">
                    [VIEW PROJECTS →]
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER 01 */}
          <div id="case-study-1" className="relative w-full h-24 bg-neutral-900 flex items-center justify-center z-30 overflow-hidden">
            <div className="absolute w-full h-px bg-neutral-700"></div>
            <div className="relative bg-neutral-900 px-6 py-2 border border-neutral-700 rounded-full text-white font-mono text-xl font-bold flex items-center gap-3">
              <span className="text-orange-500">#01</span> NAMELESS GAME DEV
            </div>
          </div>

          {/* CASE STUDY 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen border-b border-neutral-900">
            <div className="bg-[#F2F0E9] p-8 md:p-16 border-r border-neutral-300 relative flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest block mb-4">Case Study 01</span>
                <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-6">Nameless Game Development</h3>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full border border-green-200">EXECUTION MASTERY</span>
                </div>
                <p className="font-serif text-lg text-neutral-800 leading-relaxed mb-8">
                  <span className="font-bold">La sfida:</span> Coordinare team cross-functional di 10+ persone per 4 mesi, verso il lancio del primo MVP giocabile.
                  <br /><br />
                  <span className="font-bold">Il mio ruolo:</span> Product Manager con ownership end-to-end. Gestione backlog, sprint planning, coordinamento developer/designer, decisioni scope/priorità.
                </p>
                <div className="bg-white p-8 shadow-xl border-l-4 border-green-600 max-w-md mb-10">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">Key Metrics</h4>
                  <div className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-neutral-900">MVP Readiness: 95%</div>
                    <div className="text-sm text-neutral-600 font-bold">GTM Launch: T-1 Sprint</div>
                  </div>
                </div>
                <Link href="/case-study/nameless-game" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-neutral-900 hover:text-green-700 hover:border-green-700 transition-colors pb-1 w-fit">
                  Leggi Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-16 relative border-l border-neutral-800 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 w-full max-w-lg mx-auto">
                <div className="flex justify-between items-end mb-4 border-b border-green-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-green-700">MODULE: EXECUTION_LOG</span>
                  </div>
                  <div className="text-[10px] font-mono text-green-500">STATUS: PRE_LAUNCH_GTM</div>
                </div>
                <div className="bg-[#0f1110] border border-green-500/20 p-8 relative shadow-2xl">
                  <div className="font-mono text-xs text-green-400 leading-relaxed">
                    <p className="mb-6 text-neutral-400 border-b border-green-900/30 pb-2 block w-full">// EXECUTION_METRICS.log</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-green-400/70">SPRINT_VELOCITY:</span>
                        <span className="text-white font-bold bg-green-900/20 px-2">+40% (dopo Q1)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">BLOCKERS_RESOLVED:</span>
                        <span className="text-white font-bold">87% &lt;24h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">NEXT_PHASE:</span>
                        <span className="text-green-400 font-bold">GTM_DATA_COLLECTION</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="opacity-70">TEAM_SATISFACTION:</span>
                        <span className="text-white font-bold">4.2/5</span>
                      </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-green-500/30 text-center">
                      <span className="animate-pulse text-green-500 font-bold tracking-widest">STATUS: PRE_LAUNCH_OPTIMIZATION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER 02 */}
          <div id="case-study-2" className="relative w-full h-24 bg-neutral-900 flex items-center justify-center z-30 overflow-hidden">
            <div className="absolute w-full h-px bg-neutral-700"></div>
            <div className="relative bg-neutral-900 px-6 py-2 border border-neutral-700 rounded-full text-white font-mono text-xl font-bold flex items-center gap-3">
              <span className="text-blue-500">#02</span> MODULO DIGITAL WELLNESS
            </div>
          </div>

          {/* CASE STUDY 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen border-b border-neutral-900">
            <div className="bg-[#F2F0E9] p-8 md:p-16 border-r border-neutral-300 relative flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest block mb-4">Case Study 02</span>
                <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-6">Modulo Digital Wellness</h3>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200">PRODUCT DISCOVERY</span>
                </div>
                <p className="font-serif text-lg text-neutral-800 leading-relaxed mb-8">
                  <span className="font-bold">Il problema:</span> Come aiutare persone a rimanere produttive senza burnout? 15 interviste in doppia fase (Discovery Research + Message/Solution Validation) per validare il fit prima di scrivere una riga di codice.
                </p>

                {/* SOSTITUITO IL QUOTE CON UN KEY INSIGHT PIÙ STRUTTURATO */}
                <div className="bg-[#fffbf0] p-8 shadow-xl border-l-4 border-blue-500 max-w-md mb-10 -rotate-1">
                  <h4 className="font-mono text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Key Insight</h4>
                  <p className="text-base font-serif text-neutral-800 italic">
                    "La vera produttività non è gestire il tempo, ma l'energia. Il bisogno validato è un <strong>sistema adattivo</strong> che moduli il carico di lavoro in base allo stress fisiologico, garantendo la massima performance senza compromettere l'equilibrio psicofisico."
                  </p>
                  <p className="text-xs font-bold text-neutral-500 mt-3 text-right border-t border-neutral-200 pt-2 inline-block w-full">
                    — Sintesi pattern su 15 Utenti
                  </p>
                </div>

                <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-neutral-900 hover:text-blue-600 hover:border-blue-600 transition-colors pb-1 w-fit">
                  Leggi Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-16 relative border-l border-neutral-800 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 w-full max-w-lg mx-auto">
                <div className="flex justify-between items-end mb-4 border-b border-green-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-green-700">MODULE: DISCOVERY_LOG</span>
                  </div>
                  <div className="text-[10px] font-mono text-green-500">STATUS: READY_TO_TEST</div>
                </div>
                <div className="bg-[#050505] border border-green-500/30 p-8 font-mono text-xs leading-relaxed text-green-400 shadow-2xl aspect-video flex flex-col justify-center">
                  <div className="mb-6 text-neutral-400 border-b border-green-900/30 pb-2 block w-full">// DISCOVERY_VALIDATION.log</div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="opacity-70">INTERVIEWS_CONDUCTED:</span>
                      <span className="text-white font-bold">15 (Dual_Phase)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">PROBLEM_VALIDATED:</span>
                      <span className="text-blue-400 font-bold">TRUE</span>
                    </div>
                    <div className="mt-2">
                      <span className="opacity-70 block mb-1">SEGMENTS_IDENTIFIED: 3</span>
                      <ul className="pl-4 text-neutral-400 space-y-1">
                        <li>→ Freelancers <span className="text-neutral-500">(high_variability)</span></li>
                        <li>→ Students <span className="text-neutral-500">(deadline_driven)</span></li>
                        <li>→ Remote_workers <span className="text-neutral-500">(async_chaos)</span></li>
                      </ul>
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="opacity-70">COMPETITIVE_GAPS:</span>
                      <span className="text-white">4 key insights</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-green-500/30 text-center">
                    <span className="animate-pulse text-green-500 font-bold tracking-widest">MVP_HYPOTHESIS: READY_TO_TEST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DIVIDER 03 */}
          <div id="case-study-3" className="relative w-full h-24 bg-neutral-900 flex items-center justify-center z-30 overflow-hidden">
            <div className="absolute w-full h-px bg-neutral-700"></div>
            <div className="relative bg-neutral-900 px-6 py-2 border border-neutral-700 rounded-full text-white font-mono text-xl font-bold flex items-center gap-3">
              {/* AGGIORNATO TITOLO DIVIDER */}
              <span className="text-purple-500">#03</span> JOB SEARCH AS PRODUCT
            </div>
          </div>

          {/* CASE STUDY 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen border-b border-neutral-900">
            <div className="bg-[#F2F0E9] p-8 md:p-16 border-r border-neutral-300 relative flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest block mb-4">Case Study 03</span>
                {/* AGGIORNATO TITOLO SEZIONE */}
                <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-6">Job Search as Product</h3>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-mono text-xs font-bold bg-purple-100 text-purple-600 px-3 py-1 rounded-full border border-purple-200">PRODUCT THINKING</span>
                </div>
                <p className="font-serif text-lg text-neutral-800 leading-relaxed mb-8">
                  Ho trattato la mia ricerca lavoro come un prodotto: ICP targeting, positioning strategy, funnel optimization, roadmap con OKR. First-principles thinking applicato alla carriera.
                </p>
                <button className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-neutral-900 hover:text-purple-600 hover:border-purple-600 transition-colors pb-1 w-fit">
                  Leggi Case Study <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-16 relative border-l border-neutral-800 flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              <div className="relative z-10 w-full max-w-lg mx-auto">
                <div className="flex justify-between items-end mb-4 border-b border-green-500/30 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-green-700">MODULE: CAREER_STRATEGY</span>
                  </div>
                  <div className="text-[10px] font-mono text-green-500">STATUS: IN_PROGRESS</div>
                </div>
                <div className="bg-[#050505] border border-green-500/30 p-8 font-mono text-xs leading-relaxed text-green-400 shadow-2xl aspect-video flex flex-col justify-center">
                  <div className="mb-6 text-neutral-400 border-b border-green-900/30 pb-2 block w-full">// PRODUCT_STRATEGY.yaml</div>
                  <div className="space-y-4">
                    <div>
                      <span className="opacity-70 block mb-1">ICP_SEGMENTS: 3</span>
                      <ul className="pl-4 text-white space-y-1">
                        <li>→ PMI_SaaS <span className="text-green-600 font-bold">(55% effort)</span></li>
                        <li>→ Consulenza <span className="text-neutral-500">(30% effort)</span></li>
                        <li>→ Scale-up <span className="text-neutral-500">(15% effort)</span></li>
                      </ul>
                    </div>
                    <div className="flex justify-between border-t border-green-900/30 pt-2">
                      <span className="opacity-70">POSITIONING:</span>
                      <span className="text-white font-bold">"Builder-Philosopher"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">DIFFERENTIATION:</span>
                      <span className="text-purple-400 font-bold">&lt;1% market overlap</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-green-900/30">
                      <span className="opacity-70 block mb-1">FUNNEL_METRICS:</span>
                      <div className="pl-4 text-neutral-400">
                        <div>- Portfolio conversion: <span className="text-white">TBD</span></div>
                        <div>- Referral rate: <span className="text-white">6x vs cold</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center text-green-500 opacity-60 text-[10px]">
                    ROADMAP_PHASES: 4 (Foundation → GTM)
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* === 4. INTERMISSION: COMPLEMENTARY CASE STUDIES === */}
        <section className="py-32 bg-stone-100 border-t border-b border-neutral-300 text-center relative z-20 flex flex-col justify-center items-center min-h-screen">
          <div className="text-neutral-400 mb-6">
            <Layers size={64} strokeWidth={1} />
          </div>
          <h2 className="font-mono text-xl md:text-2xl tracking-[0.4em] text-neutral-600 mb-6">/// COMPLEMENTARY_TRACKS</h2>
          <p className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-tight text-neutral-800">
            Oltre i progetti: Approfondimenti verticali
          </p>
        </section>

        {/* === 5. SPECIALIZED TRACKS (NEW SEPARATE GRID) === */}
        <section className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-neutral-900 min-h-screen">

          {/* LEFT: PURE STRATEGY ARCHIVE */}
          {/* RIMOSSO justify-center e p-8/p-16 generico. AGGIUNTO pt-32 px-8 md:px-16 pb-16 per allineamento fisso in alto */}
          <div className="bg-[#F2F0E9] relative flex flex-col pt-32 px-8 md:px-16 pb-16 border-r border-neutral-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/paper.png')] opacity-50 pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <FileText className="text-orange-600" size={32} />
                <h3 className="font-serif text-3xl font-bold text-neutral-900">PHILOSOPHER DEEP-DIVES</h3>
              </div>

              {/* AGGIUNTO flex-1, flex-col, justify-between e gap-8 per distribuire le card e allineare l'ultima in fondo */}
              <div className="flex-1 flex flex-col justify-between gap-8">
                {philosopherDeepDives.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer border-b border-neutral-300 pb-6 hover:pl-4 transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-2xl font-bold text-neutral-900 group-hover:text-orange-600 flex items-center gap-3">
                        {item.icon} {item.title}
                      </h4>
                      <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity text-orange-600" />
                    </div>
                    <p className="text-base text-neutral-600 font-serif leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-4 flex gap-2">
                      <span className="text-xs font-mono uppercase bg-neutral-200 px-3 py-1 rounded text-neutral-600">View Doc</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: PURE BUILDER REPO */}
          {/* RIMOSSO justify-center e p-8/p-16 generico. AGGIUNTO pt-32 px-8 md:px-16 pb-16 per allineamento fisso in alto */}
          <div className="bg-[#0a0a0a] relative overflow-hidden flex flex-col pt-32 px-8 md:px-16 pb-16">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <GitBranch className="text-green-500" size={32} />
                <h3 className="font-mono text-3xl font-bold text-white">BUILDER DEEP-DIVES</h3>
              </div>

              {/* AGGIUNTO flex-1, flex-col, justify-between e gap-6 per distribuire le card e allineare l'ultima in fondo */}
              <div className="flex-1 flex flex-col justify-between gap-6">
                {builderDeepDives.map((item, idx) => (
                  <div key={idx} className="group cursor-pointer bg-neutral-900/50 border border-green-900/30 p-6 hover:border-green-500 transition-all duration-300">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-mono text-base font-bold text-green-400 group-hover:text-white flex items-center gap-2">
                        {item.icon} {item.title}
                      </h4>
                      <span className="text-xs font-mono text-neutral-400 bg-neutral-800 px-2 py-1 rounded">{item.lang}</span>
                    </div>
                    {/* RIMOSSO mb-4 per usare mt-4 nel container sotto, uniformando la spaziatura con la colonna sinistra */}
                    <p className="text-sm text-neutral-400 font-mono leading-relaxed">
                      {item.desc}
                    </p>
                    {/* AGGIUNTO mt-4 e stile BADGE (bg-neutral-800, px-3, py-1, uppercase) per allineare visivamente a "View Doc" */}
                    <div className="mt-4 flex items-center gap-4 text-xs font-mono text-neutral-600">
                      <span className="bg-neutral-800 text-green-600 px-3 py-1 rounded uppercase group-hover:text-green-400 group-hover:bg-neutral-700 transition-colors flex items-center gap-2">
                        View Snippet <ExternalLink size={12} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </section>

        {/* === 6. INTERMISSION: ABOUT ME === */}
        <section className="py-32 bg-stone-100 border-t border-b border-neutral-300 text-center relative z-20 flex flex-col justify-center items-center min-h-screen">
          <div className="text-neutral-400 mb-6">
            <Fingerprint size={64} strokeWidth={1} />
          </div>
          <h2 className="font-mono text-xl md:text-2xl tracking-[0.4em] text-neutral-600 mb-6">/// WHO I AM</h2>
          <p className="font-serif text-3xl md:text-4xl max-w-2xl mx-auto leading-tight text-neutral-800">
            Da Filosofia a Product Management. Come ho unito humanities e tech per costruire il Builder-Philosopher.
          </p>
        </section>

        {/* === 7. ABOUT ME SECTION === */}
        <section className="py-24 bg-white text-neutral-900 border-t border-neutral-200 min-h-screen flex flex-col justify-center" id="about">
          <div className="max-w-4xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <div>
                  <span className="font-mono text-orange-700 text-xs font-bold uppercase tracking-widest mb-4 block">WHO I AM</span>
                  <h2 className="font-serif text-4xl font-bold mb-6">A Builder-Philosopher.</h2>
                  <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                    Studio Filosofia e Contemporary Humanities (Scuola Holden), ma costruisco prodotti. Coordino un team 10+ da 18 mesi con ownership end-to-end: sprint, feedback utenti, analisi dati SQL. La mia rare combination: first-principles thinking + AI literacy applicati all'execution.
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-0 text-lg">
                    Cerco il mio primo ruolo full-time da Junior PM dove dimostrare execution affidabile oggi e crescere verso discovery ownership domani.
                  </p>
                </div>

                {/* CTA Accent - MODIFICATO: Separati i bottoni dal link testuale */}
                <div className="flex flex-col gap-8 mt-2">
                  {/* Link di approfondimento */}
                  <a href="#about" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-neutral-900 hover:text-orange-600 hover:border-orange-600 transition-colors pb-1 w-fit">
                    READ FULL STORY <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Bottoni CTA Principali */}
                  <div className="flex flex-wrap gap-4">
                    <a href="/cv.pdf" className="flex items-center gap-2 px-6 py-3 border-2 border-orange-700 text-orange-700 rounded font-bold text-sm hover:bg-orange-50 transition-colors">
                      DOWNLOAD CV <Download size={16} />
                    </a>
                    <a href="#contact" className="flex items-center gap-2 px-6 py-3 bg-orange-700 text-white rounded font-bold text-sm hover:bg-orange-700 transition-colors shadow-lg">
                      GET IN TOUCH <Mail size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-neutral-100 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
                  <Image
                    src="/profile-photo.png"
                    alt="Riccardo Praolini - Product Manager"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover object-center scale-110"
                    priority
                  />
                </div>
                <div className="absolute top-10 -right-4 w-24 h-24 bg-orange-500/10 rounded-full blur-xl z-0"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/10 rounded-full blur-xl z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* === 8. FOOTER === */}
      </main>
      <Footer />
    </div>
  );
};

export default App;