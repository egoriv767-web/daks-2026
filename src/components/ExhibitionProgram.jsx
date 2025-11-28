import React from 'react';
import { Cpu, Rocket, PenTool, ArrowLeft } from 'lucide-react';

const ExhibitionProgram = ({ onBack, onApply }) => {
    return (
        <div className="animate-fade-in pt-24 pb-20 px-6 container mx-auto">
            <button onClick={onBack} className="flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Назад
            </button>

            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Технический вектор <br /> <span className="text-cyan-400">Дальнего Востока</span></h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Двухуровневая площадка: от школьной выставки до питч-сессии перед инвесторами из Азии.
                </p>
            </div>

            {/* Zones */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {/* Zone 1 */}
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-cyan-500 transition-colors">
                    <Cpu className="w-12 h-12 text-cyan-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Зона 1: ИИ для людей</h3>
                    <p className="text-slate-400 mb-4">
                        Практическое применение нейросетей для решения задач региона.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                        <li>Логистика Севморпути</li>
                        <li>Цифровой агроном (мониторинг полей)</li>
                        <li>Прогнозирование паводков (Амур)</li>
                    </ul>
                </div>

                {/* Zone 2 */}
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-violet-500 transition-colors">
                    <Rocket className="w-12 h-12 text-violet-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Зона 2: Орбита Восточного</h3>
                    <p className="text-slate-400 mb-4">
                        Космические технологии и спутникостроение.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                        <li>CubeSat модели</li>
                        <li>Анализ данных мегагруппировок</li>
                        <li>Телескопы и оптика</li>
                    </ul>
                </div>

                {/* Zone 3 */}
                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:border-emerald-500 transition-colors">
                    <PenTool className="w-12 h-12 text-emerald-400 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Зона 3: Цех Прототипирования</h3>
                    <p className="text-slate-400 mb-4">
                        Быстрое создание "железа" и аддитивные технологии.
                    </p>
                    <ul className="text-sm text-slate-500 space-y-2 list-disc list-inside">
                        <li>3D-печать деталей дронов</li>
                        <li>Адаптивная авиация</li>
                        <li>Новые двигатели</li>
                    </ul>
                </div>
            </div>

            {/* Scheme Placeholder */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-16 text-center">
                <h3 className="text-xl font-bold mb-8">Схема павильона</h3>
                <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center border border-dashed border-slate-700">
                    <p className="text-slate-500">Интерактивная карта стендов (В разработке)</p>
                </div>
            </div>

            {/* CTA */}
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Готов представить проект?</h2>
                <button onClick={onApply} className="bg-gradient-to-r from-cyan-600 to-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                    Подать заявку на стенд
                </button>
                <p className="mt-4 text-slate-500 text-sm">Для школьников, студентов и стартапов</p>
            </div>
        </div>
    );
};

export default ExhibitionProgram;
