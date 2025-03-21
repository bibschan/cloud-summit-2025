'use client';

import Spline from '@splinetool/react-spline';
import { useRef, useEffect } from 'react';
import type { Application } from '@splinetool/runtime';

export default function Home() {
    // Properly typed refs
    const splineRef = useRef<Application | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Properly typed onLoad handler
    const onLoad = (splineApp: Application): void => {
        if (splineRef.current) return;
        splineRef.current = splineApp;
    };

    // Apply CSS to Spline's canvas after it loads
    useEffect(() => {
        if (!containerRef.current) return;

        const applyStyles = (): void => {
            const canvas = containerRef.current?.querySelector('canvas');
            if (canvas) {
                // Make the canvas behave like a background
                canvas.style.position = 'fixed';
                canvas.style.zIndex = '-1';
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                canvas.style.top = '0';
                canvas.style.left = '0';
            }
        };

        // Apply immediately and also after a delay to ensure it catches
        applyStyles();
        const timer = setTimeout(applyStyles, 500);

        return () => clearTimeout(timer);
    }, []);

    return (

        <div ref={containerRef} className="absolute inset-0 z-0 h-[600px]">
            <Spline
                scene="https://prod.spline.design/XcVcNyVdPNzGkCee/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
}
