"use-client";
import Image from 'next/image';
import React from 'react';
import Reveal from '../Reveal';

const Hero = () => {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[36px] md:mx-10">
        <div className="flex flex-col gap-[12px] items-center md:gap-[32px] md:my-[56px] md:items-start">
            <Reveal initialX={-25}>
                <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
                    <span className="-ml-4">👋</span>
                    {" "} Hello I&apos;m Parakh Choudhary, I&apos;m a {" "}
                    <span className="block text-[27px] highlight mt-2 md:text-[45px] md:inline md:mt-0">Frontend Developer</span>
                </h1>
            </Reveal>
            <Reveal initialX={-30} delay={0.2}>
                <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">I&apos;m obessed with UI/UX & like to converting design into next-level generative code.</p>
            </Reveal>
            <Reveal initialX={-40} delay={0.4}>
                <a href="mailto: parakhchoudhary1999@gmail.com" className='self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6'>
                    Let&apos;s Connect
                    <img src="/arrow_right_icon.svg" alt="arrow_right_icon" />
                </a>
            </Reveal>
        </div>
        <div className="group relative">
            <Reveal>
                <Image src="/profile_light_purple.png" alt="light purple rectangle" width={372} height={430} className="hidden md:block w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"/>
                <Image src="/profile_dark_purple.png" alt="dark purple rectangle" width={372} height={430} className="hidden md:block w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"/>
                <Image src="/profile_picture.png" alt="my profile pic" width={357} height={417} className="hidden md:block min-w-[357px] h-[417px] z-10 mr-[8px] my-[6px] rounded-2xl object-cover group-hover:scale-[102%] ease-in-out duration-300"/>
            </Reveal>
        </div>
    </section>
  )
}

export default Hero

// function setupVideoScroll() {
//   let _videoScrollSectionST;
//   let animationFrameID = null;

//   const _positionScroll = { contents: 0.0 };
//   const videoBlock = document.querySelector(".product");
//   const video = document.querySelector("#product-video");

//   video.autoplay = false;

//   const updateVideoTime = () => {
//     if (video.readyState >= 2) {
//       video.currentTime = _positionScroll.contents;
//     } else {
//       console.warn("Video metadata not loaded yet.");
//     }
//     animationFrameID = null;
//   };

//   _videoScrollSectionST = ScrollTrigger.create({
//     trigger: videoBlock,
//     start: "top bottom",
//     end: "bottom top",
//     scrub: true,
//     onUpdate: (self) => {
//       const current = self.scroll() - self.start;
//       const full = self.end - self.start;

//       const normalizedDuration = Math.max(video.duration, full / 1000);
//       const currentPercent = Math.min(Math.max(current / full, 0), 1);
//       const currentVideoSecond = normalizedDuration * currentPercent;

//       _positionScroll.contents = Math.min(currentVideoSecond, video.duration);

//       if (!animationFrameID) {
//         animationFrameID = requestAnimationFrame(updateVideoTime);
//       }
//     },
//   });
//   video.addEventListener("loadedmetadata", () => {
//     console.log("Video metadata loaded, duration:", video.duration);
//   });

//   if (!video.readyState) {
//     console.warn("Video not ready. Ensure the video file is accessible.");
//   }
// }
