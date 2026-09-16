"use client";
import dynamic from "next/dynamic";

const OrigamiBackground = dynamic(() => import("./OrigamiBackground"), { ssr: false });
const PageTransition    = dynamic(() => import("./PageTransition"),    { ssr: false });

export { OrigamiBackground, PageTransition };
