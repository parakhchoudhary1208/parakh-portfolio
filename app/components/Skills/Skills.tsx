"use client";
import React from 'react';
import skills from '@/data/skills.json';
import SectionContainer from '../Utility/SectionContainer';
import SectionHeader from '../Utility/SectionHeader';
import Skill from './Skill';
import Image from 'next/image';

const Skills = () => {
    return (
        <SectionContainer id='skills' >
            <div className="section-contents mx-[22px] md:mx-[116px]">
                <SectionHeader plainText='💻 This is my' highlightText='Tech Stacks'/>
                <div className="card w-full px-[32px] py-[28px] flex flex-wrap md:flex-row justify-center items-center gap-[20px] md:gap-[32px]">
                    {
                        skills.map((skill, id) => (
                            <Skill key={id} name={skill.name} icon={skill.icon}/>
                        ))
                    }
                </div>
            </div>
            <div>
                <Image src="/tech_stack_grid_dark.svg" alt='bg decoration' width={569} height={373} className="hidden dark:md:block -z-10 absolute -left-[135px] -top-[39px]"/>
                <Image src="/tech_stack_grid.svg" alt='bg decoration' width={569} height={373} className="hidden dark:hidden md:block -z-10 absolute -left-[125px] -top-[39px]"/>
            </div>
        </SectionContainer>
    )
}

export default Skills