import React from 'react';
import { BookOpen, Users, Award, ArrowLeft } from 'lucide-react';

const ScienceProgram = ({ onBack, onApply }) => {
    return (
        <div className="animate-fade-in pt-24 pb-20 px-6 container mx-auto">
            <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад
            </button>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Научно-образовательная <br /> <span className="text-violet-400">Программа</span></h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    «Кадры для неба»: от школьного кружка до космодрома.
                </p>
            </div>

            {/* Blocks */}
            <div className="space-y-12 max-w-4xl mx-auto mb-20">
                {/* Block 1 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold">1</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Стратегический круглый стол</h3>
                        <p className="text-slate-400">«Модель студента-наставника». Обсуждение правовых барьеров и финансирования с представителями Министерств и ВУЗов.</p>
                    </div>
                </div>

                {/* Block 2 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold">2</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Международная конференция</h3>
                        <p className="text-slate-400 mb-4">«Авиация. Космонавтика. Будущее». 6 тематических секций для защиты проектов.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">1. Авиастроение</div>
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">2. Беспилотные системы (БАС)</div>
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">3. Космические системы</div>
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">4. Новые материалы</div>
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">5. Экономика космоса</div>
                            <div className="bg-slate-800 p-3 rounded-lg text-sm">6. Энергетика</div>
                        </div>
                    </div>
                </div>

                {/* Block 3 */}
                <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-bold">3</div>
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Методическая конференция</h3>
                        <p className="text-slate-400">Программа переподготовки студентов непедагогических специальностей.</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-violet-900/20 border border-violet-500/30 rounded-3xl p-10 text-center">
                <Award className="w-16 h-16 text-violet-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Стань спикером конференции</h2>
                <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                    Лучшие доклады будут опубликованы в сборнике, а победители отправятся на космодром «Восточный».
                </p>
                <button onClick={onApply} className="bg-violet-600 hover:bg-violet-500 px-10 py-4 rounded-full font-bold text-lg transition-colors">
                    Подать тезисы
                </button>
            </div>
        </div>
    );
};

export default ScienceProgram;
