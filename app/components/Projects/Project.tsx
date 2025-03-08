"use client"
import Image from 'next/image';
import React, { MouseEventHandler } from 'react'
import Reveal from '../Reveal';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

type Props = {
    thumbnail: string;
    title: string;
    link:{
        url: string;
        label: string;
    };
    description: string;
    languageIcons: string[];
}

const Project = ({thumbnail, title, link, description, languageIcons}: Props) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const xRotation = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const yRotation = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if(!e.currentTarget) return;
        const target = e.currentTarget as HTMLElement;
        const clientRect = target.getBoundingClientRect();

        const xPos= (e.clientX - clientRect.left) / clientRect.width - 0.5;
        const yPos= (e.clientY - clientRect.top) / clientRect.height - 0.5;

        x.set(xPos);
        y.set(yPos);
    }

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

    return (
        <Reveal initialX={-50} delay={0.5}>
            <motion.div onMouseMove={handleMouseMove} onMouseOut={handleMouseLeave} className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]" style={{
                transformStyle: "preserve-3d",
                rotateY: yRotation,
                rotateX: xRotation,
            }}>
                <Image src={thumbnail} alt={`Thumbnail for ${title}`} width={392} height={230} className="w-full h-[230px] object-cover object-center opacity-90 rounded-lg" style={{transform: "translateZ(100px)"}}/>
                {/* <div className="h-[230px] overflow-hidden bg-[#bcaeffbf] rounded">
                    <img src={thumbnail} alt={`Thumbnail for ${title}`} className="w-auto h-full mx-auto object-contain object-center"/>
                </div> */}
                <div className="flex flex-col gap-[12px] ">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-xl md:text-[22px] ">{title}</h3>
                        <a href={link.url} target='_blank' className="flex px-[6px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded teext-[14px]">
                            <span className="hidden md:block">{link.label}</span>
                            <img src="link_arrow.svg" alt="link_arrow" className="block dark:hidden" />
                            <img src="link_arrow_dark.svg" alt="link_arrow" className="hidden dark:block" />
                        </a>
                    </div>
                    {/* <p className="line-clamp-2 text-sm md:text-base">{description}</p> */}
                    <p className="text-sm md:text-base">{description}</p>
                    <div className="flex flex-row gap-[12px]">
                        {
                            languageIcons.map((icon, id) => (
                                <Image src={icon} alt="language icon" key={id} height={24} width={24}/>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </Reveal>
    )
}

export default Project