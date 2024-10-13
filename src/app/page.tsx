"use client";
import {ParticleElement} from "@/components/ParticleElement";
import {useInterval} from "ahooks";
import {useState} from "react";
import {Position, VirtualBox} from "@/lib/models";
import {VirtualBoxElement} from "@/components/VirtualBoxElement";
import {sample} from "lodash";
import {virtualBoxes} from "@/app/virtualBoxes";

export default function Home() {
    const particles = useParticles();

    return (
        <div className="fixed">
            {particles.map((p) => <ParticleElement key={p.key} value={p}/>)}
            {virtualBoxes.map((p) => <VirtualBoxElement key={p.key} value={p}/>)}
        </div>

    );
}

function reposition(key: string, virtualBox: VirtualBox) {
    const {x, y} = virtualBox;
    const offset = 4;
    return {x: x + offset, y: y + offset, key};
}

function useParticles() {
    const [particles, setParticles] = useState(genParticles(10).map(({key}) => reposition(key, sample(virtualBoxes)!)));
    useInterval(() => {
        setParticles(particles.map(({key}) => reposition(key, sample(virtualBoxes)!)));
    }, 2000)

    return particles;
}

function genParticles(n: number): Position[] {
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
