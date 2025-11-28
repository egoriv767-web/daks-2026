import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    isLoading,
    ...props
}) => {
    const baseStyles = "font-bold rounded-full transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
        secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
        ghost: "text-slate-400 hover:text-white hover:bg-white/5",
        outline: "border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
    };

    const sizes = {
        sm: "px-4 py-2 text-xs tracking-widest uppercase",
        md: "px-6 py-3 text-sm tracking-widest uppercase",
        lg: "px-8 py-4 text-base tracking-widest uppercase"
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : children}
        </button>
    );
};

export default Button;
