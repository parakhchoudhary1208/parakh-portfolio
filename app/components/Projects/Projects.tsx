"use client"
import React from 'react';
import SectionContainer from '../Utility/SectionContainer';
import SectionHeader from '../Utility/SectionHeader';
import projects from "@/data/projects.json";
import Project from './Project';
import Image from 'next/image';

const Projects = () => {
    return (
        <SectionContainer id="projects">
            <div className="section-contents mx-6 md:mx-[64px]">
                <SectionHeader plainText='😎 Some of My' highlightText='Best Works'/>
                <div className="lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        projects.map((project, id) => (
                            <Project key={id} thumbnail={project.thumbnail} title={project.title} link={project.link} description={project.description} languageIcons={project.languageIcons}/>
                        ))
                    }
                </div>
            </div>
            <Image src="/projects_highlight.svg" alt="Background Highlight" width={558} height={558} className="absolute hidden md:block left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"/>
        </SectionContainer>
    )
}

export default Projects