"use client";
import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Reveal from '../Reveal';

type Props = {
    icon: string;
    name: string;
}

const blendDifferenceSkills = ["Next.js", "Framer Motion", "Three.js", "Git"];

const Skill = ({ icon, name }: Props) => {

    const blendClass = blendDifferenceSkills.includes(name) ? "mix-blend-difference" : "";
    const ref= React.useRef<HTMLDivElement>(null);
    const xDistance = useMotionValue(0);
    const yDistance = useMotionValue(0);
    const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

    const handleMouseMove = (e: MouseEvent) => {
        if(!ref.current) return;
        const clientRect = ref.current.getBoundingClientRect();

        xDistance.set(e.x - clientRect.x);
        yDistance.set(e.y - clientRect.y);
    }

    React.useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [handleMouseMove]);

    return (
        <Reveal duration={1.5}>
            <div className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px]">
                <motion.div ref={ref} className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg" style={{
                    maskImage: mask,
                    WebkitMaskImage: mask,
                }}>
                </motion.div>
                <img src={icon} alt={`${name} icon`} width={24} height={24} className={blendClass} />
                <p className="text-lg">{name}</p>
            </div>
        </Reveal>
    );
}

export default Skill;