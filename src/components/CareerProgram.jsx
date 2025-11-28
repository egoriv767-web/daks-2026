import React from 'react';
import { Map, Flag, Heart, ArrowLeft } from 'lucide-react';

const CareerProgram = ({ onBack, onApply }) => {
    return (
        <div className="animate-fade-in pt-24 pb-20 px-6 container mx-auto">
            <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад
            </button>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Профориентация и <br /> <span className="text-emerald-400">Шоу Дронов</span></h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    «Крылья Родины»: от истории авиации до управления роем дронов.
                </p>
            </div>

            {/* Drone Show */}
            <div className="relative rounded-3xl overflow-hidden mb-20 border border-slate-700 group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                {/* Placeholder for Drone Show Image */}
                <div className="h-[400px] bg-slate-800 flex items-center justify-center">
                    <span className="text-slate-600 font-bold text-2xl">ФОТО ШОУ ДРОНОВ</span>
                </div>

                <div className="absolute bottom-0 left-0 p-8 z-20 max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Шоу «Дорога к звездам»</h2>
                    <p className="text-slate-300 mb-6">
                        500 дронов + пиротехника. История покорения неба: от планера да Винчи до ракеты «Ангара».
                        Финал: Анонс проекта «Моё шоу дронов — 2026».
                    </p>
                    <button className="bg-emerald-600 hover:bg-emerald-500 px-8 py-3 rounded-full font-bold transition-colors">
                        Получить билет зрителя
                    </button>
                </div>
            </div>

            {/* Route */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <div>
                    <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                        <Map className="text-emerald-400" /> Профориентационный маршрут
                    </h2>
                    <div className="space-y-6 border-l-2 border-slate-700 pl-6 ml-2">
                        <div className="relative">
                            <div className="absolute -left-[31px] bg-slate-800 border border-slate-600 w-4 h-4 rounded-full"></div>
                            <h4 className="font-bold text-lg">Коридор Эволюции</h4>
                            <p className="text-slate-400 text-sm">История ВВС на Амуре, модели Су-57.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[31px] bg-slate-800 border border-slate-600 w-4 h-4 rounded-full"></div>
                            <h4 className="font-bold text-lg">Полигон БАС</h4>
                            <p className="text-slate-400 text-sm">Гонки дронов, симуляторы полета.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[31px] bg-slate-800 border border-slate-600 w-4 h-4 rounded-full"></div>
                            <h4 className="font-bold text-lg">Мини-ВЛЭК</h4>
                            <p className="text-slate-400 text-sm">Проверка здоровья летчика (вестибулярный аппарат).</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[31px] bg-slate-800 border border-slate-600 w-4 h-4 rounded-full"></div>
                            <h4 className="font-bold text-lg">IT-Археология</h4>
                            <p className="text-slate-400 text-sm">Поиск артефактов с помощью дронов и GPS.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-8">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Heart className="text-red-400" /> Стань Волонтером
                    </h2>
                    <p className="text-slate-400 mb-6">
                        Мы набираем команду студентов-наставников для работы на станциях маршрута.
                    </p>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center gap-2"><Flag className="w-4 h-4 text-emerald-400" /> Ментор на станции пайки</li>
                        <li className="flex items-center gap-2"><Flag className="w-4 h-4 text-emerald-400" /> Инструктор симулятора</li>
                        <li className="flex items-center gap-2"><Flag className="w-4 h-4 text-emerald-400" /> Навигатор потоков</li>
                    </ul>
                    <button onClick={onApply} className="w-full bg-slate-700 hover:bg-slate-600 py-4 rounded-xl font-bold transition-colors">
                        Подать заявку в команду
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareerProgram;
