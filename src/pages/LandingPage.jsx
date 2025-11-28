```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Users, Atom, ArrowRight, X, ChevronRight } from 'lucide-react';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';
import { useAuth } from '../lib/auth';

const LandingPage = () => {
    const navigate = useNavigate();
    const { loginAnonymously, user } = useAuth();
    const [activeModal, setActiveModal] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '' });

    // Redirect if already logged in
    if (user) {
        // Optional: Auto redirect or show "Go to Dashboard"
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        await loginAnonymously(formData.name);
        navigate('/dashboard');
    };

    const tracks = [
        { id: 'exhibition', title: 'Выставка', desc: 'Зоны ИИ, Космоса и Прототипов', icon: Rocket, color: 'text-cyan-400', border: 'hover:border-cyan-500/50' },
        { id: 'science', title: 'Наука', desc: 'Конференция и публикации', icon: Atom, color: 'text-violet-400', border: 'hover:border-violet-500/50' },
        { id: 'career', title: 'Карьера', desc: 'ВЛЭК и Шоу дронов', icon: Users, color: 'text-emerald-400', border: 'hover:border-emerald-500/50' }
    ];

    return (
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-12 mb-24 relative"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-md text-cyan-400 text-[10px] font-bold tracking-[0.3em] mb-8">
                    <span className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></span>
                    10-12.04.2026
                </div>

                <h1 className="text-7xl md:text-[9rem] font-black mb-6 tracking-tighter leading-[0.85] text-white mix-blend-overlay opacity-90 select-none">
                    VOSTOCHNY
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Детский авиационно-космический салон им. И.П. Волка.
                    <br /><span className="text-white/60">Построй своё будущее на орбите.</span>
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {user ? (
                        <Button variant="primary" size="lg" onClick={() => navigate('/dashboard')}>
                            В Кабинет <ArrowRight size={16} className="ml-2" />
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => setActiveModal('register')}
                            className="group"
                        >
                            Подать проект <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    )}
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => navigate('/program')}
                    >
                        Программа
                    </Button>
                </div>
            </motion.div>

            {/* Tracks Grid */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl mb-24">
                {tracks.map((track, i) => (
                    <motion.div
                        key={track.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        onClick={() => navigate(track.id === 'exhibition' ? '/program/exhibition' : `/ program`)}
                    >
                        <GlassPanel className={`text - left cursor - pointer hover: -translate - y - 2 transition - transform duration - 500 group border - t border - white / 10 ${ track.border } `}>
                            <div className={`mb - 6 p - 3 rounded - 2xl bg - white / 5 inline - block ${ track.color } `}>
                                <track.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
                            <p className="text-slate-500 text-sm mb-6">{track.desc}</p>
                            <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                                Подробнее <ChevronRight size={12} />
                            </div>
                        </GlassPanel>
                    </motion.div>
                ))}
            </div>

            {/* Registration Modal */}
            <AnimatePresence>
                {activeModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-md"
                        >
                            <GlassPanel className="relative border border-white/20">
                                <button onClick={() => setActiveModal(null)} className="absolute top-6 right-6 text-slate-500 hover:text-white">
                                    <X size={24} />
                                </button>
                                <div className="mb-6">
                                    <div className="text-cyan-400 text-xs font-bold tracking-widest uppercase mb-2">Registration</div>
                                    <h3 className="text-3xl font-bold text-white">Новый пилот</h3>
                                </div>
                                <form className="space-y-4" onSubmit={handleRegister}>
                                    <input
                                        required
                                        placeholder="ФИО"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm"
                                    />
                                    <input
                                        type="email"
                                        required
                                        placeholder="EMAIL"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono text-sm"
                                    />
                                    <Button variant="primary" className="w-full mt-4" type="submit">Начать миссию</Button>
                                </form>
                            </GlassPanel>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default LandingPage;
```
