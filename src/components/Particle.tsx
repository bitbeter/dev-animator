"use client";
import {motion} from "framer-motion";

export function Particle({position}: { position: { x: number, y: number } }) {
    return (
        <motion.div
            animate={position} className="absolute rounded-3xl size-6 bg-slate-500">
        </motion.div>
    );
}
