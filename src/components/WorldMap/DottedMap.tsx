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

    const staticCanvasRef = React.useRef<HTMLCanvasElement | null>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);

        const scaleX = rect.width / width;
        const scaleY = rect.height / height;

        // --- PRE-RENDER STATIC BACKGROUND ---
        if (!staticCanvasRef.current) {
            const staticCanvas = document.createElement('canvas');
            staticCanvas.width = canvas.width;
            staticCanvas.height = canvas.height;
            const sCtx = staticCanvas.getContext('2d');
            if (sCtx) {
                sCtx.scale(dpr, dpr);
                sCtx.fillStyle = "rgba(255, 255, 255, 0.4)";
                points.forEach((point) => {
                    const rowIndex = yToRowIndex.get(point.y) ?? 0;
                    const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                    sCtx.beginPath();
                    sCtx.arc((point.x + offsetX) * scaleX, point.y * scaleY, dotRadius * scaleX, 0, Math.PI * 2);
                    sCtx.fill();
                });
            }
            staticCanvasRef.current = staticCanvas;
        }

        let animationFrameId: number;
        let startTime = Date.now();
        const shimmers = points.map((p) => (p.x + p.y) % 13 === 0);
        const randomOffsets = points.map(() => Math.random());
        // Only keep shimmer points for the loop
        const shimmerIndices = points.reduce<number[]>((acc, _, i) => shimmers[i] ? [...acc, i] : acc, []);

        const render = () => {
            const now = Date.now();
            const elapsed = (now - startTime) / 1000;
            
            ctx.clearRect(0, 0, rect.width, rect.height);

            // 1. Draw Static Background (1 call instead of 8,000)
            if (staticCanvasRef.current) {
                ctx.drawImage(staticCanvasRef.current, 0, 0, rect.width, rect.height);
            }

            // 2. Draw Shimmers only
            shimmerIndices.forEach((i) => {
                const point = points[i];
                const rowIndex = yToRowIndex.get(point.y) ?? 0;
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                const twinkle = Math.sin((elapsed + randomOffsets[i] * 5) * 1.5);
                const opacity = 0.3 + (twinkle + 1) * 0.25;

                ctx.globalAlpha = opacity;
                ctx.fillStyle = "white"; // Make shimmers stand out slightly
                ctx.beginPath();
                ctx.arc((point.x + offsetX) * scaleX, point.y * scaleY, dotRadius * scaleX, 0, Math.PI * 2);
                ctx.fill();
            });

            // 3. Draw Markers
            ctx.globalAlpha = 1;
            processedMarkers.forEach((marker, i) => {
                const rowIndex = yToRowIndex.get(marker.y) ?? 0;
                const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                const mX = (marker.x + offsetX) * scaleX;
                const mY = marker.y * scaleY;
                const mSize = (markers[i].size || dotRadius * 1.5) * scaleX;

                const pulse = Math.sin(elapsed * 3) * 0.5 + 0.5;
                const pulseRadius = mSize * (1 + pulse * 2);
                const pulseOpacity = 0.2 * (1 - pulse);

                ctx.fillStyle = markerColor;
                ctx.beginPath();
                ctx.globalAlpha = pulseOpacity;
                ctx.arc(mX, mY, pulseRadius, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalAlpha = 1;
                ctx.shadowBlur = 10;
                ctx.shadowColor = markerColor;
                ctx.beginPath();
                ctx.arc(mX, mY, mSize, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0;

                ctx.fillStyle = "white";
                ctx.font = `600 ${Math.max(10, scaleX * 1.6)}px Outfit, sans-serif`;
                ctx.textAlign = "center";
                ctx.fillText(marker.name, mX, mY + mSize * 3 + 4);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => {
            cancelAnimationFrame(animationFrameId);
            staticCanvasRef.current = null;
        };
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
