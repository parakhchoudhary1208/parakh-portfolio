"use client";
import React from 'react';
import { motion, useAnimation, useInView }  from 'framer-motion';

type Props = React.PropsWithChildren<{
    initialX?: number;
    initialY?: number;
    duration?: number;
    delay?: number;
}>

const Reveal = ({children, initialX = 0, initialY = 0, duration = 1, delay = 0}: Props) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    React.useEffect(() => {
        if(isInView) {
            controls.start("visible")
        }
    }, [isInView]);

    return (
        <motion.span 
            ref={ref}
            initial="hidden"
            transition={{duration, delay}}
            variants={{
                hidden: {opacity: 0, x:initialX, y:initialY},
                visible: {opacity: 1, x: 0, y: 0}
            }}
            animate={controls}
        >
            {children}
        </motion.span>
    )
}

export default Reveal