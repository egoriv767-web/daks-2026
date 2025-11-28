import React, { useState } from 'react';
import { CheckCircle, Upload, FileText, Zap, Layout } from 'lucide-react';
import { api } from '../lib/googleSheets';

const ParticipantDashboard = ({ user }) => {
    const [tab, setTab] = useState('status');
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        section: 'Авиастроение',
        techReqs: '',
        link: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

    // Determine track based on user role or default
    const track = user?.track || 'conference'; // 'conference' or 'exhibition'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const result = await api.submitProject({
            userId: user?.name || 'Anonymous',
            program: track,
            ...formData
        });
        setIsSubmitting(false);
        if (result.success) {
            setSubmitStatus('success');
            setTab('status');
        } else {
            setSubmitStatus('error');
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto animate-fade-in pt-24">
            {/* Header */}
            <div className="bg-slate-800 rounded-2xl p-6 mb-6 flex justify-between items-center border border-slate-700">
                <div>
                    <h2 className="text-2xl font-bold">{user?.name || 'Участник'}</h2>
                    <p className="text-cyan-400 text-sm">
                        {track === 'exhibition' ? 'Участник Выставки' : 'Участник Конференции'}
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-xs text-slate-400">ID Участника</div>
                    <div className="font-mono text-xl">DAKS-{Math.floor(Math.random() * 1000)}</div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
                {['status', 'application', 'upload', 'passport'].map(t => (
                    <button key={t} onClick={() => setTab(t)}
                        className={`px-6 py-2 rounded-full capitalize transition-all ${tab === t ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-slate-400'}`}>
                        {t === 'status' ? 'Статус' : t === 'application' ? 'Заявка' : t === 'upload' ? 'Файлы' : 'QR-Пропуск'}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-3xl p-6 min-h-[400px]">
                {tab === 'status' && (
                    <div className="space-y-8 pl-4 border-l-2 border-slate-700 ml-4 mt-4">
                        <div className="relative">
                            <div className="absolute -left-[25px] bg-green-500 rounded-full p-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="font-bold">Регистрация принята</h3>
                            <p className="text-sm text-slate-400">12.11.2025</p>
                        </div>

                        {submitStatus === 'success' && (
                            <div className="relative animate-fade-in">
                                <div className="absolute -left-[25px] bg-cyan-500 rounded-full p-1">
                                    <FileText className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="font-bold text-cyan-400">Проект подан</h3>
                                <p className="text-sm text-slate-400">На рассмотрении экспертов</p>
                            </div>
                        )}

                        <div className="relative opacity-50">
                            <div className="absolute -left-[25px] bg-slate-700 rounded-full w-6 h-6"></div>
                            <h3 className="font-bold">Публикация списка финалистов</h3>
                            <p className="text-sm text-slate-400">Март 2026</p>
                        </div>
                    </div>
                )}

                {tab === 'application' && (
                    <form onSubmit={handleSubmit} className="max-w-2xl">
                        <h3 className="text-xl font-bold mb-6">
                            {track === 'exhibition' ? 'Паспорт выставочного стенда' : 'Подача тезисов доклада'}
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Название проекта</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            {track === 'conference' && (
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Секция</label>
                                    <select
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
                                        value={formData.section}
                                        onChange={e => setFormData({ ...formData, section: e.target.value })}
                                    >
                                        <option>Авиастроение</option>
                                        <option>Беспилотные системы (БАС)</option>
                                        <option>Космос и Спутники</option>
                                        <option>Новые материалы</option>
                                        <option>Экономика космоса</option>
                                    </select>
                                </div>
                            )}

                            {track === 'exhibition' && (
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1">Зона выставки</label>
                                    <select
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
                                        value={formData.section}
                                        onChange={e => setFormData({ ...formData, section: e.target.value })}
                                    >
                                        <option>ИИ для людей</option>
                                        <option>Орбита Восточного (Космос)</option>
                                        <option>Цех Прототипирования</option>
                                    </select>
                                </div>
                            )}

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">
                                    {track === 'exhibition' ? 'Описание стенда и экспонатов' : 'Аннотация доклада'}
                                </label>
                                <textarea
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none h-32"
                                    value={formData.description}
                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                    required
                                ></textarea>
                            </div>

                            {track === 'exhibition' && (
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1 flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-yellow-400" /> Технические требования
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Например: Розетка 220В, Стол 120х60, Интернет"
                                        className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
                                        value={formData.techReqs}
                                        onChange={e => setFormData({ ...formData, techReqs: e.target.value })}
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block text-sm text-slate-400 mb-1">Ссылка на материалы (Яндекс.Диск / Google Drive)</label>
                                <input
                                    type="url"
                                    placeholder="https://..."
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 focus:border-cyan-500 outline-none"
                                    value={formData.link}
                                    onChange={e => setFormData({ ...formData, link: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50"
                            >
                                {isSubmitting ? 'Отправка...' : 'Сохранить заявку'}
                            </button>
                        </div>
                    </form>
                )}

                {tab === 'upload' && (
                    <div className="text-center py-10 border-2 border-dashed border-slate-600 rounded-xl hover:border-cyan-500 transition-colors cursor-pointer">
                        <Upload className="w-16 h-16 mx-auto mb-4 text-slate-500" />
                        <p className="text-lg mb-2">
                            {track === 'exhibition' ? 'Загрузить схему стенда' : 'Загрузить презентацию'}
                        </p>
                        <p className="text-sm text-slate-500">PDF, PNG, JPG до 10 Мб</p>
                    </div>
                )}

                {tab === 'passport' && (
                    <div className="text-center py-6">
                        <div className="bg-white p-4 inline-block rounded-xl">
                            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DAKS-USER-${user?.name || 'User'}`} alt="QR" />
                        </div>
                        <p className="mt-4 text-cyan-400 font-bold">Покажите этот код волонтерам</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ParticipantDashboard;
