import {motion} from "framer-motion";
import {Particle} from "@/lib/models";

export function ParticleElement({value}: { value: Particle }) {
    const {x, y, key} = value;
    const position = {x, y};

    return (
        <motion.div
            animate={position} className="absolute rounded-3xl size-6 bg-slate-500 z-10 text-center">
            {key}
        </motion.div>
    );
}
