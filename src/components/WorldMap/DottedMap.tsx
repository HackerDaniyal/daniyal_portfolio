"use client";

import * as React from "react";
import { createMap } from "svg-dotted-map";
import { cn } from "@/lib/utils";

interface Marker {
    name: string;
    lat: number;
    lng: number;
    size?: number;
}

export interface DottedMapProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    mapSamples?: number;
    markers?: Marker[];
    dotColor?: string;
    markerColor?: string;
    dotRadius?: number;
    stagger?: boolean;
}

export function DottedMap({
    width = 150,
    height = 75,
    mapSamples = 8000,
    markers = [],
    markerColor = "#FF8c00",
    dotRadius = 0.12,
    stagger = true,
    className,
    style,
}: DottedMapProps) {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    
    const { points, addMarkers } = React.useMemo(() => {
        const map = createMap({
            width,
            height,
            mapSamples,
        });
        return {
            points: map.points,
            addMarkers: map.addMarkers
        };
    }, [width, height, mapSamples]);

    const processedMarkers = React.useMemo(() => addMarkers(markers), [addMarkers, markers]);

    const { xStep, yToRowIndex } = React.useMemo(() => {
        const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
        const rowMap = new Map<number, number>();
        let step = 0;
        let prevY = Number.NaN;
        let prevXInRow = Number.NaN;

        for (const p of sorted) {
            if (p.y !== prevY) {
                prevY = p.y;
                prevXInRow = Number.NaN;
                if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size);
            }
            if (!Number.isNaN(prevXInRow)) {
                const delta = p.x - prevXInRow;
                if (delta > 0) step = step === 0 ? delta : Math.min(step, delta);
            }
            prevXInRow = p.x;
        }

        return { xStep: step || 1, yToRowIndex: rowMap };
    }, [points]);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Use high DPI for crisp rendering
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        // Map dimensions to canvas size
        const scaleX = rect.width / width;
        const scaleY = rect.height / height;

        let animationFrameId: number;
        let startTime = Date.now();

        // Pre-randomize shimmers to avoid Math.random in loop
        const shimmers = points.map((p) => (p.x + p.y) % 13 === 0);
        const randomOffsets = points.map(() => Math.random());

        const render = () => {
            const now = Date.now();
            const elapsed = (now - startTime) / 1000;
            
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Draw Points
            ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
            points.forEach((point, i) => {
                const rowIndex = yToRowIndex.get(point.y) ?? 0;
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                const isShimmer = shimmers[i];
                
                let opacity = 0.4 + (randomOffsets[i] * 0.2);
                
                if (isShimmer) {
                    // Twinkle animation logic
                    const twinkle = Math.sin((elapsed + randomOffsets[i] * 5) * 1.5);
                    opacity = 0.3 + (twinkle + 1) * 0.25; // Range 0.3 to 0.8
                }

                ctx.globalAlpha = opacity;
                ctx.beginPath();
                ctx.arc((point.x + offsetX) * scaleX, point.y * scaleY, dotRadius * scaleX, 0, Math.PI * 2);
                ctx.fill();
            });

            // Draw Markers
            ctx.globalAlpha = 1;
            processedMarkers.forEach((marker, i) => {
                const rowIndex = yToRowIndex.get(marker.y) ?? 0;
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                const mX = (marker.x + offsetX) * scaleX;
                const mY = marker.y * scaleY;
                const mSize = (markers[i].size || dotRadius * 1.5) * scaleX;

                // Pulse Effect
                const pulse = Math.sin(elapsed * 3) * 0.5 + 0.5;
                const pulseRadius = mSize * (1 + pulse * 2);
                const pulseOpacity = 0.2 * (1 - pulse);

                ctx.fillStyle = markerColor;
                
                // Outer Pulse Blur Simulation
                ctx.beginPath();
                ctx.globalAlpha = pulseOpacity;
                ctx.arc(mX, mY, pulseRadius, 0, Math.PI * 2);
                ctx.fill();

                // Core Dot
                ctx.globalAlpha = 1;
                ctx.shadowBlur = 10;
                ctx.shadowColor = markerColor;
                ctx.beginPath();
                ctx.arc(mX, mY, mSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                // Text Label
                ctx.fillStyle = "white";
                ctx.font = `600 ${Math.max(10, scaleX * 1.6)}px Outfit, sans-serif`;
                ctx.textAlign = "center";
                ctx.fillText(marker.name, mX, mY + mSize * 3 + 4);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => cancelAnimationFrame(animationFrameId);
    }, [points, processedMarkers, stagger, xStep, yToRowIndex, width, height, dotRadius, markerColor, markers]);

    return (
        <div 
            className={cn("relative w-full h-full", className)}
            style={{
                maskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
                ...style
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block'
                }}
            />
        </div>
    );
}
