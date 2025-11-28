import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';

const ProgramPage = () => {
    const navigate = useNavigate();

    const schedule = [
        {
            day: '10.04',
            title: 'Стратегический день',
            desc: 'Открытие салона, пленарное заседание и круглые столы.',
            events: ['10:00 - Церемония открытия', '12:00 - Круглый стол «Кадры для неба»', '15:00 - Экспертная сессия']
        },
        {
            day: '11.04',
            title: 'День Отбора',
            desc: 'Защита проектов, выставка достижений и битва дронов.',
            events: ['10:00 - Работа секций', '14:00 - Битва Дронов (Квалификация)', '20:00 - Ночное Шоу «Дорога к звездам»']
        },
        {
            day: '12.04',
            title: 'День «Восточный»',
            desc: 'Поездка победителей на космодром и награждение.',
            events: ['08:00 - Трансфер на космодром', '12:00 - Наблюдение за пуском', '18:00 - Гала-ужин и награждение']
        }
    ];

    return (
        <div className="max-w-4xl mx-auto animate-fade-in pt-10">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="mb-8 pl-0 hover:bg-transparent"
            >
                <ArrowLeft size={16} className="mr-2" /> Назад
            </Button>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-4"
            >
                Программа ДАКС
            </motion.h1>
            <p className="text-slate-400 mb-12 max-w-2xl">
                Три дня полного погружения в авиацию и космонавтику. От научных дискуссий до реальных запусков.
            </p>

            <div className="space-y-6">
                {schedule.map((day, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassPanel className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-cyan-500/50 hover:bg-white/5 transition-colors">
                            <div className="md:w-32 flex-shrink-0">
                                <div className="text-4xl font-bold text-white/20 font-mono">{day.day}</div>
                                <div className="text-xs text-cyan-400 uppercase tracking-widest mt-2 font-bold">Апрель 2026</div>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-2">{day.title}</h3>
                                <p className="text-slate-400 text-sm mb-6">{day.desc}</p>

                                <div className="space-y-3">
                                    {day.events.map((ev, k) => (
                                        <div key={k} className="flex items-center gap-3 text-slate-300 text-sm bg-black/20 p-3 rounded-lg border border-white/5">
                                            <Clock size={14} className="text-cyan-500" />
                                            {ev}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </GlassPanel>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProgramPage;
