"use client";
import { SessionProvider } from '@/node_modules/next-auth/react'
import React from "react";

export function Providers({ children } :{
    children: React.ReactNode
}) {
    return <SessionProvider>
        {children}
    </SessionProvider>
}