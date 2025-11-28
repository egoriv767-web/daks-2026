import React from 'react';
import Scene from '../components/3d/Scene';
import Navbar from '../components/ui/Navbar';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children, user, onLogout }) => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/login';

    return (
        <>
            <div className="noise-overlay"></div>

            {/* Persistent 3D Scene */}
            <Scene />

            <div className="relative z-10 min-h-screen flex flex-col">
                {!isAuthPage && <Navbar user={user} onLogout={onLogout} />}

                <main className="flex-grow pt-24 px-4 pb-12">
                    {children}
                </main>

                <footer className="text-center py-6 text-white/20 text-[10px] uppercase tracking-widest font-mono">
                    DAKS-2026 // SYSTEM V4.0 // AMUR REGION
                </footer>
            </div>
        </>
    );
};

export default MainLayout;
