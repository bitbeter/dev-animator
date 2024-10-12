"use client";
import {ParticleElement} from "@/components/ParticleElement";
import {useInterval} from "ahooks";
import {useState} from "react";
import {Position} from "@/lib/models";
import {VirtualBoxElement} from "@/components/VirtualBoxElement";
import {sample} from "lodash";

const virtualBoxes = generateRandomPoints(10);

export default function Home() {
    const particles = useParticles();

    return (
        <div className="relative">
            {particles.map((p) => <ParticleElement key={p.key} value={p}/>)}
            {virtualBoxes.map((p) => <VirtualBoxElement key={p.key} value={p}/>)}
        </div>

    );
}

function useParticles() {
    const [particles, setParticles] = useState(generateRandomPoints(10).map(({key}) => {
        const {x, y} = sample(virtualBoxes)!;
        return {key, x, y};
    }));
    useInterval(() => {
        const newParticles: Position[] = particles.map(({key}) => {
            const {x, y} = sample(virtualBoxes)!;
            return {key, x, y};
        });

        console.table(virtualBoxes);
        console.table(particles);

        setParticles(newParticles);
    }, 2000)

    return particles;
}

function generateRandomPoints(n: number): Position[] {
    const points: Position[] = [];

    for (let i = 0; i < n; i++) {
        const point = {
            key: "" + i,
            x: Math.random() * 500,
            y: Math.random() * 500
        };
        points.push(point);
    }

    return points;
}
