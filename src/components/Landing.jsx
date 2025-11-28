import React, { useState } from 'react';
import { Rocket, Users, Baby, Calendar, ArrowRight, MapPin, Star, X, CheckCircle } from 'lucide-react';

const Landing = ({ onRegister, onNavigate }) => {
    const [activeModal, setActiveModal] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false);
            setActiveModal(null);
            // If it was a registration, we might want to auto-login the user
            // For now, we just close the modal
            if (activeModal === 'school' || activeModal === 'student') {
                onRegister('participant');
            }
        }, 2000);
    };

    return (
        <div className="animate-fade-in">
            {/* --- HERO SECTION --- */}
            <header className="relative pt-20 pb-32 px-6 container mx-auto text-center overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[100px] -z-10"></div>
                <div className="absolute top-20 right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-[60px] -z-10 animate-pulse"></div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 mb-8 animate-fade-in">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">10-12 Апреля 2026</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                    ДАКС <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">2026</span>
                    <br />
                    <span className="text-3xl md:text-5xl text-slate-300">Восточный</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                    Детский авиационно-космический салон им. И.П. Волка.
                    Твой путь от школьной парты до стартового стола космодрома.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => setActiveModal('school')}
                        className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-500/25 focus:outline-none ring-offset-2 ring-cyan-500"
                    >
                        <span>Подать проект</span>
                        <Rocket className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>

                    <button onClick={() => onRegister('jury')} className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all">
                        <Users className="w-5 h-5" /> Эксперт
                    </button>
                </div>
            </header>

            {/* --- USER TRACKS SECTION (CARDS) --- */}
            <section className="py-20 px-6 container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-16">Программа салона</h2>
                <div className="max-w-3xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">

                    {/* Day 1 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-cyan-500 group-hover:bg-cyan-500/20 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]">
                            <Calendar className="w-5 h-5 text-slate-400 group-hover:text-cyan-400" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-700 bg-slate-800/30">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-cyan-400 font-bold">10 Апреля, Пятница</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Стратегический день</h3>
                            <p className="text-slate-400 text-sm">Круглый стол «Кадры для неба» и экспертные сессии. Подписание соглашений с ВУЗами.</p>
                        </div>
                    </div>

                    {/* Day 2 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-violet-500 group-hover:bg-violet-500/20 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <Star className="w-5 h-5 text-slate-400 group-hover:text-violet-400" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-700 bg-slate-800/30">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-violet-400 font-bold">11 Апреля, Суббота</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Фестиваль и Шоу Дронов</h3>
                            <p className="text-slate-400 text-sm">Выставка проектов, битва дронов, защита работ. Вечером — грандиозное световое шоу «Дорога к звездам».</p>
                        </div>
                    </div>

                    {/* Day 3 */}
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-emerald-500 group-hover:bg-emerald-500/20 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <MapPin className="w-5 h-5 text-slate-400 group-hover:text-emerald-400" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-slate-700 bg-slate-800/30">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-emerald-400 font-bold">12 Апреля, Воскресенье</span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">День «Восточный»</h3>
                            <p className="text-slate-400 text-sm">Победители отправляются на космодром. Семейный день на площадке салона.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-slate-900 py-12 border-t border-slate-800 text-center text-slate-500">
                <p>© 2026 ДАКС «Восточный». Все права защищены.</p>
                <div className="mt-4 flex justify-center gap-6">
                    <a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a>
                    <a href="#" className="hover:text-cyan-400 transition-colors">Контакты</a>
                </div>
            </footer>

            {/* --- MODAL FORMS --- */}
            {activeModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-md p-6 relative shadow-2xl">

                        <button
                            onClick={() => setActiveModal(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {isSuccess ? (
                            <div className="text-center py-10">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Заявка принята!</h3>
                                <p className="text-slate-400">Перенаправление в кабинет...</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <h3 className="text-2xl font-bold mb-6">
                                    {activeModal === 'school' && 'Регистрация проекта'}
                                    {activeModal === 'student' && 'Стать наставником'}
                                    {activeModal === 'guest' && 'Билет гостя'}
                                </h3>

                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">ФИО</label>
                                    <input type="text" required className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="Иванов Иван Иванович" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-slate-400">Email</label>
                                    <input type="email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="email@example.com" />
                                </div>

                                {activeModal === 'school' && (
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">Направление</label>
                                        <select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 focus:outline-none transition-colors">
                                            <option>Авиастроение</option>
                                            <option>Беспилотные системы (БАС)</option>
                                            <option>Космос и Спутники</option>
                                            <option>ИИ и Робототехника</option>
                                        </select>
                                    </div>
                                )}

                                {activeModal === 'student' && (
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400">ВУЗ / Курс</label>
                                        <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="АмГУ, 3 курс" />
                                    </div>
                                )}

                                <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 rounded-lg transition-colors mt-4">
                                    Отправить заявку
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Landing;
