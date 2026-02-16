import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealOnScrollProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, width = "100%" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
