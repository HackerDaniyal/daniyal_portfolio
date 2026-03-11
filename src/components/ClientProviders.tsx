"use client";

import dynamic from "next/dynamic";

const GSAPProvider = dynamic(() => import("./GSAPProvider"), { 
    ssr: false 
});

const CustomCursor = dynamic(() => import("./CustomCursor/CustomCursor"), { 
    ssr: false 
});

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CustomCursor />
            <GSAPProvider>{children}</GSAPProvider>
        </>
    );
}
