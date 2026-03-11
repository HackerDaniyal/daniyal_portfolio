"use client";

import React, { useState, useEffect, useRef } from "react";

interface LazySectionProps {
    children: React.ReactNode;
    offset?: string;
    minHeight?: string;
}

/**
 * LazySection Component
 * 
 * Performance wrapper that prevents its children from being mounted/hydrated
 * until they are near the viewport. This is crucial for reducing Total 
 * Blocking Time (TBT) by breaking up the massive initial hydration task.
 */
export default function LazySection({ 
    children, 
    offset = "300px", 
    minHeight = "200px" 
}: LazySectionProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: `0px 0px ${offset} 0px`, // Load before it comes into view
                threshold: 0,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [offset]);

    return (
        <div 
            ref={containerRef} 
            style={{ 
                minHeight: isLoaded ? "auto" : minHeight,
                width: "100%",
                contain: "layout style paint" // Further optimize rendering
            }}
        >
            {isLoaded ? children : null}
        </div>
    );
}
