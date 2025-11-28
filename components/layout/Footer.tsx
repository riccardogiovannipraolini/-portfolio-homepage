import React from 'react';
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    Download,
    Calendar,
    BookOpen,
    TrendingUp
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-neutral-900 z-10 relative" id="contact">
            <div className="max-w-6xl mx-auto px-8">

                {/* HEADER SECTION */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-6xl font-serif text-orange-500 mb-6">Let's Talk.</h2>
                    <p className="text-[#B0B0B0] font-sans text-lg max-w-2xl leading-relaxed">
                        Hai un ruolo da Junior PM o vuoi discutere di execution? <br className="hidden md:block" />
                        Scrivimi o prenota un caffè.
                    </p>
                </div>

                <hr className="border-neutral-800 my-12" />

                {/* 3 COLUMNS LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* COL 1: CONTACT DETAILS */}
                    <div>
                        <div className="text-[#808080] text-xs font-bold uppercase mb-6 tracking-widest">CONTACT DETAILS</div>
                        <div className="space-y-4">
                            <a href="mailto:rpraolini@icloud.com" className="flex items-center gap-3 text-white hover:text-[#00FF88] transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-[#00FF88]/10 transition-colors">
                                    <Mail size={16} className="text-[#B0B0B0] group-hover:text-[#00FF88]" />
                                </div>
                                <span className="text-sm">rpraolini@icloud.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-white">
                                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center">
                                    <MapPin size={16} className="text-[#B0B0B0]" />
                                </div>
                                <span className="text-sm">Milano, Italy</span>
                            </div>
                        </div>
                    </div>

                    {/* COL 2: SOCIAL PRESENCE */}
                    <div>
                        <div className="text-[#808080] text-xs font-bold uppercase mb-6 tracking-widest">SOCIAL PRESENCE</div>
                        <div className="space-y-4">
                            <a href="https://www.linkedin.com/in/riccardo-praolini-0929a4306" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#00FF88] transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-[#00FF88]/10 transition-colors">
                                    <Linkedin size={16} className="text-[#B0B0B0] group-hover:text-blue-500" />
                                </div>
                                <span className="text-sm">LinkedIn</span>
                            </a>
                            <a href="https://github.com/riccardogiovannipraolini-collab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#00FF88] transition-colors group">
                                <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center group-hover:bg-[#00FF88]/10 transition-colors">
                                    <Github size={16} className="text-[#B0B0B0] group-hover:text-white" />
                                </div>
                                <span className="text-sm">GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* COL 3: ACTION */}
                    <div>
                        <div className="text-[#808080] text-xs font-bold uppercase mb-6 tracking-widest">ACTION</div>
                        <div className="flex flex-col gap-4 w-fit">
                            <button className="w-full px-4 py-3 bg-orange-500 text-black rounded text-sm font-bold hover:bg-orange-400 transition-colors flex items-center justify-between gap-6">
                                <span>Download CV</span>
                                <Download size={16} />
                            </button>
                            <a href="https://calendar.notion.so/meet/riccardopraolini/ct4lt4o9p" target="_blank" rel="noopener noreferrer" className="w-full px-4 py-3 bg-black border border-orange-500 text-orange-500 rounded text-sm font-bold hover:bg-orange-500 hover:text-black transition-colors flex items-center justify-between gap-6">
                                <span>Schedule a Chat</span>
                                <Calendar size={16} />
                            </a>
                        </div>
                    </div>

                </div>



                {/* BOTTOM BAR */}
                <div className="text-center text-neutral-500 text-xs font-mono">
                    © 2025 Riccardo Praolini
                </div>

            </div>
        </footer>
    );
};

export default Footer;
