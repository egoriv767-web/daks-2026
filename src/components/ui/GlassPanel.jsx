import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const GlassPanel = ({ children, className, ...props }) => {
    return (
        <div
            className={twMerge(
                "glass-panel p-8 rounded-3xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default GlassPanel;
