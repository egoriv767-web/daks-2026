import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Rocket, PenTool } from 'lucide-react';
import GlassPanel from '../components/ui/GlassPanel';
import Button from '../components/ui/Button';

const ExhibitionPage = () => {
    const navigate = useNavigate();

    const zones = [
        {
            id: 'ai',
            title: 'Зона 1: ИИ для людей',
            desc: 'Практическое применение нейросетей для решения задач региона.',
            items: ['Логистика Севморпути', 'Цифровой агроном', 'Прогнозирование паводков'],
            icon: Cpu,
            color: 'text-cyan-400',
            border: 'hover:border-cyan-500'
        },
        {
            id: 'space',
            title: 'Зона 2: Орбита Восточного',
            desc: 'Космические технологии и спутникостроение.',
            items: ['CubeSat модели', 'Анализ данных мегагруппировок', 'Телескопы и оптика'],
            icon: Rocket,
            color: 'text-violet-400',
            border: 'hover:border-violet-500'
        },
        {
            id: 'proto',
            title: 'Зона 3: Цех Прототипирования',
            desc: 'Быстрое создание "железа" и аддитивные технологии.',
            items: ['3D-печать деталей дронов', 'Адаптивная авиация', 'Новые двигатели'],
            icon: PenTool,
            color: 'text-emerald-400',
            border: 'hover:border-emerald-500'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto animate-fade-in pt-10">
            <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="mb-8 pl-0 hover:bg-transparent"
            >
                <ArrowLeft size={16} className="mr-2" /> Назад
            </Button>

            <div className="text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold mb-6"
                >
                    Технический вектор <br /> <span className="text-cyan-400">Дальнего Востока</span>
                </motion.h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Двухуровневая площадка: от школьной выставки до питч-сессии перед инвесторами из Азии.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {zones.map((zone, i) => (
                    <motion.div
                        key={zone.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <GlassPanel className={`h-full transition-all duration-300 border-t border-white/10 ${zone.border}`}>
                            <zone.icon className={`w-12 h-12 ${zone.color} mb-6`} />
                            <h3 className="text-2xl font-bold mb-4">{zone.title}</h3>
                            <p className="text-slate-400 mb-6 min-h-[3rem]">
                                {zone.desc}
                            </p>
                            <ul className="space-y-3">
                                {zone.items.map((item, k) => (
                                    <li key={k} className="flex items-center gap-2 text-sm text-slate-300">
                                        <div className={`w-1.5 h-1.5 rounded-full ${zone.color.replace('text', 'bg')}`}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </GlassPanel>
                    </motion.div>
                ))}
            </div>

            {/* Scheme Placeholder */}
            <GlassPanel className="text-center border-dashed border-slate-700">
                <h3 className="text-xl font-bold mb-8">Схема павильона</h3>
                <div className="aspect-video bg-black/20 rounded-xl flex items-center justify-center border border-white/5">
                    <p className="text-slate-500 font-mono">INTERACTIVE MAP MODULE // LOADING...</p>
                </div>
            </GlassPanel>

            <div className="text-center mt-16">
                <h2 className="text-3xl font-bold mb-6">Готов представить проект?</h2>
                <Button variant="primary" size="lg" onClick={() => navigate('/')}>
                    Подать заявку на стенд
                </Button>
            </div>
        </div>
    );
};

export default ExhibitionPage;
