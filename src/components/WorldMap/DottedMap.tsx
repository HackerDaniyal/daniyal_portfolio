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

    return (
        <div style={{ position: 'relative' }}>
            <style>
                {`
                    @keyframes twinkle {
                        0%, 100% { opacity: 0.3; }
                        50% { opacity: 0.8; filter: brightness(1.5) blur(0.5px); }
                    }
                    .shimmer-dot {
                        animation: twinkle 4s infinite ease-in-out;
                    }
                `}
            </style>
            <svg
                viewBox={`0 0 ${width} ${height}`}
                className={cn("text-white/40", className)}
                style={{
                    width: "100%",
                    height: "100%",
                    maskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 75%, transparent 100%)',
                    filter: 'drop-shadow(0 0 0.5px rgba(255,255,255,0.2))',
                    ...style
                }}
            >
                {points.map((point, index) => {
                    const rowIndex = yToRowIndex.get(point.y) ?? 0;
                    const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                    const isShimmer = (point.x + point.y) % 13 === 0;

                    return (
                        <circle
                            cx={point.x + offsetX}
                            cy={point.y}
                            r={dotRadius}
                            fill="currentColor"
                            key={`${point.x}-${point.y}-${index}`}
                            className={isShimmer ? "shimmer-dot" : ""}
                            style={{
                                opacity: isShimmer ? undefined : 0.4 + (Math.random() * 0.2),
                                animationDelay: isShimmer ? `${Math.random() * 5}s` : undefined
                            }}
                        />
                    );
                })}
                {processedMarkers.map((marker, index) => {
                    const rowIndex = yToRowIndex.get(marker.y) ?? 0;
                    const offsetX = stagger && rowIndex % 2 === 1 ? xStep / 2 : 0;
                    return (
                        <g key={`${marker.x}-${marker.y}-${index}`}>
                            {/* Outer Pulse */}
                            <circle
                                cx={marker.x + offsetX}
                                cy={marker.y}
                                r={markers[index].size ? markers[index].size! * 2.5 : dotRadius * 5}
                                fill={markerColor}
                                opacity="0.2"
                            >
                                <animate
                                    attributeName="r"
                                    values={`${markers[index].size || dotRadius * 2};${(markers[index].size || dotRadius * 2) * 3};${markers[index].size || dotRadius * 2}`}
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    values="0.4;0;0.4"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                            {/* Core Dot */}
                            <circle
                                cx={marker.x + offsetX}
                                cy={marker.y}
                                r={markers[index].size ?? dotRadius * 1.5}
                                fill={markerColor}
                                style={{
                                    filter: `drop-shadow(0 0 4px ${markerColor}) drop-shadow(0 0 10px ${markerColor})`,
                                }}
                            />
                            {/* Country Label */}
                            <text
                                x={marker.x + offsetX}
                                y={marker.y + (markers[index].size ? markers[index].size! * 2.5 : dotRadius * 6) + 3}
                                fill="#fff"
                                fontSize="1.6"
                                fontWeight="500"
                                textAnchor="middle"
                                style={{
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                    textShadow: '0 1px 2px rgba(0,0,0,0.8)',
                                    fontFamily: 'var(--font-heading)',
                                    letterSpacing: '0.02em'
                                }}
                            >
                                {marker.name}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
}
