"use client"
import React from 'react';
import experiences from "@/data/experiences.json";
import SectionContainer from '../Utility/SectionContainer';
import SectionHeader from '../Utility/SectionHeader';
import Experience from './Experience';
import Image from 'next/image';

const Experiences = () => {
    return (
        <SectionContainer id="experience">
            <div className="section-contents mb-[64px] md:mb-[48px] md:mx-[64px]">
                <SectionHeader plainText="💼 My Prior" highlightText="Work Experience"/>
                <div className="w-full px-6 md:px-[56px] flex flex-col gap-5">
                    {
                        experiences.map((exp, id) => (
                            <Experience key={id} id={id} image={exp.image} company={exp.company} role={exp.role} description={exp.description} dates={exp.dates}/>
                        ))
                    }
                </div>
            </div>
            <div className="circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10">
                <Image src="/bracket_icon.svg" alt="bracket_icon" width={28} height={28}/>
            </div>
            <div className="circle-icon h-14 w-14 left-1.5 bottom-0 md:left-[90px] -z-10">
                <Image src="/electricity_icon.svg" alt="electricity_icon" width={28} height={28}/>
            </div>
        </SectionContainer>
    )
}

export default Experiences