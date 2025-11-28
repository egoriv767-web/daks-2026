import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Calendar, FileText } from 'lucide-react';
import GlassPanel from '../components/ui/GlassPanel';

// Mock user for dev
const mockUser = {
    name: 'Алексей Космосов',
    uid: 'u-123456',
    role: 'participant',
    registeredAt: new Date().toISOString()
};

const Dashboard = ({ user = mockUser }) => {
    return (
        <div className="max-w-4xl mx-auto pt-10">

            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <GlassPanel className="mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden border-cyan-500/20">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[2px]">
                        <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center text-4xl font-bold text-white">
                            {user.name[0]}
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <div className="text-xs font-mono text-cyan-400 mb-2">ID: {user.uid.slice(0, 8).toUpperCase()}</div>
                        <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300">
                                {user.role === 'participant' ? 'Участник' : 'Эксперт'}
                            </span>
                        </div>
                    </div>
                </GlassPanel>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Status Tracker */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassPanel className="h-full">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Activity size={20} className="text-cyan-400" /> Статус заявки
                        </h3>
                        <div className="space-y-8 relative pl-4 border-l border-white/10 ml-2">
                            <div className="relative">
                                <div className="absolute -left-[21px] w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                                <div className="text-xs text-slate-500 font-mono mb-1">{new Date(user.registeredAt).toLocaleDateString()}</div>
                                <div className="text-sm font-bold">Регистрация</div>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[21px] w-3 h-3 bg-cyan-400 rounded-full border-2 border-black animate-pulse"></div>
                                <div className="text-sm font-bold text-cyan-400">Проверка данных</div>
                                <div className="text-xs text-slate-400 mt-1">Допуск СБ в процессе...</div>
                            </div>
                            <div className="relative opacity-30">
                                <div className="absolute -left-[21px] w-3 h-3 bg-slate-700 rounded-full border-2 border-black"></div>
                                <div className="text-sm font-bold">Публикация списков</div>
                            </div>
                        </div>
                    </GlassPanel>
                </motion.div>

                {/* QR Pass */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <GlassPanel className="h-full flex flex-col items-center justify-center text-center">
                        <div className="bg-white p-3 rounded-xl mb-4">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DAKS-${user.uid}`}
                                alt="QR"
                                className="w-32 h-32 mix-blend-multiply opacity-90"
                            />
                        </div>
                        <div className="text-xs text-slate-500 font-mono">DIGITAL PASS</div>
                        <div className="mt-4 text-xs text-cyan-400 max-w-[200px]">
                            Предъявите этот код на КПП космодрома
                        </div>
                    </GlassPanel>
                </motion.div>
            </div>

        </div>
    );
};

export default Dashboard;
