import React from 'react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-gradient-to-b from-space-900/90 to-transparent backdrop-blur-sm border-b border-white/5">
            <div
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => navigate('/')}
            >
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
                <div className="font-bold text-xl tracking-tighter">
                    DAKS<span className="text-white/50">26</span>
                </div>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
                    <div className="hidden md:block text-right">
                        <div className="text-xs font-bold text-white">{user.name}</div>
                        <div className="text-[10px] text-cyan-400 tracking-widest uppercase">{user.role}</div>
                    </div>
                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/5"
                    >
                        <LogOut size={12} /> <span className="hidden md:inline">Выход</span>
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => navigate('/login')}
                    className="text-xs font-bold uppercase tracking-widest text-cyan-400 hover:text-cyan-300"
                >
                    Войти
                </button>
            )}
        </nav>
    );
};

export default Navbar;
