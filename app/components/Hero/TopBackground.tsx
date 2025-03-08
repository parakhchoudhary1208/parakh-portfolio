"use client";
import Image from 'next/image';
import React from 'react';

const TopBackground = () => {
    return (
        <>
            <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
                <div className="h-full w-full relative">
                    <div className="circle-icon top-0 left-[171px] md:top-28 md:left-72">
                        <Image src="/rocket_icon.svg" alt="rocket" width={24} height={24}/>
                    </div>
                    <div className="circle-icon top-[162px] -left-5 md:top-64 md:left-0">
                        <Image src="/bracket_icon.svg" alt="bracket" width={24} height={24}/>
                    </div>
                    <div className="circle-icon top-60 left-[149px] md:top-[570px] md:left-44">
                        <Image src="/github_icon.svg" alt="github" width={24} height={24}/>
                    </div>
                    <div className="hidden md:circle-icon md:top-[592px] md:left-[608px]">
                        <Image src="/electricity_icon.svg" alt="electricity" width={24} height={24}/>
                    </div>
                    <div className="hidden md:circle-icon md:top-[158px] md:left-[606px]">
                        <Image src="/merge_icon.svg" alt="merge" width={24} height={24}/>
                    </div>
                    <div className="hidden md:circle-icon md:top-[368px] md:left-[965px]">
                        <Image src="/stack_icon.svg" alt="stack" width={24} height={24}/>
                    </div>
                </div>
            </div>
            <img src="/top_highlight.svg" alt="Top Dark BG for Desktop" width={809} height={877} className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2"/>
            <img src="/top_highlight_mobile.svg" alt="Top Dark BG for Moblie" width={429} height={465} className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2"/>
            <div className="top-bg-light absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] hidden dark:hidden md:block" />
            <div className="top-bg-mobile-light absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] dark:hidden md:hidden" />

            <div className="top-bg-dark absolute top-0 w-full h-[795px] bg-repeat-x bg-[auto_auto] hidden md:dark:block" />
            <div className="top-bg-mobile-dark absolute top-0 w-full h-[600px] bg-repeat-x bg-[auto_auto] hidden dark:block dark:md:hidden" />
        </>
    )
}

export default TopBackground