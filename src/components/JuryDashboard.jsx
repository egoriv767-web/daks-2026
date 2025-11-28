import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const JuryDashboard = () => {
    const [score, setScore] = useState(50);

    return (
        <div className="p-4 max-w-4xl mx-auto animate-fade-in pt-24">
            <div className="bg-slate-800 rounded-2xl p-6 mb-6 border border-slate-700 flex justify-between">
                <h2 className="text-2xl font-bold">Панель Эксперта</h2>
                <div className="text-emerald-400">Оценено: 12/40</div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Project View */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <div className="flex justify-between mb-4 text-xs text-slate-400">
                        <span>ID: #8921</span>
                        <span>Секция: Космос</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Орбитальный мусорщик "Чистое Небо"</h3>
                    <div className="h-40 bg-slate-700 rounded-lg mb-4 flex items-center justify-center text-slate-500">Превью Презентации</div>
                    <button className="w-full bg-slate-700 py-2 rounded-lg hover:bg-slate-600">Скачать PDF</button>
                </div>

                {/* Grading */}
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                    <h4 className="font-bold mb-6">Оценка проекта</h4>

                    <div className="mb-6">
                        <label className="flex justify-between text-sm mb-2">
                            <span>Новизна</span>
                            <span className="text-cyan-400">{score}/100</span>
                        </label>
                        <input type="range" min="0" max="100" value={score} onChange={e => setScore(e.target.value)} className="w-full accent-cyan-500" />
                    </div>

                    <div className="mb-6">
                        <label className="flex justify-between text-sm mb-2">
                            <span>Реализуемость</span>
                            <span className="text-violet-400">85/100</span>
                        </label>
                        <input type="range" className="w-full accent-violet-500" value="85" readOnly />
                    </div>

                    <div className="mb-6">
                        <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-2">
                            <Mic className="w-4 h-4" /> Надиктовать комментарий
                        </button>
                        <textarea className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm" rows="3" placeholder="Комментарий эксперта..."></textarea>
                    </div>

                    <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 py-3 rounded-lg font-bold">Подтвердить оценку</button>
                </div>
            </div>
        </div>
    )
}

export default JuryDashboard;
