"use client";
import {Particle} from "@/components/Particle";
import {useInterval} from "ahooks";
import {useState} from "react";

export default function Home() {
    const particles = useParticles();

    return (
        <>
            {particles.map((p, index) => <Particle key={index} position={p}/>)}
        </>

    );
}

function useParticles() {

    const [particles, setParticles] = useState(generateRandomPoints(10));
    useInterval(() => {
        setParticles(generateRandomPoints(10))
    }, 200)

    return particles;
}

function generateRandomPoints(n: number) {
    const points = [];

    for (let i = 0; i < n; i++) {
        const point = {
            x: Math.random() * 500,
            y: Math.random() * 500
        };
        points.push(point);
    }

    return points;
}
