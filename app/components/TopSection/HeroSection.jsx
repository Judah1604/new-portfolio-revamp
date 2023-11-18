"use client";

import { motion } from "framer-motion";

const variants = {
    initial: { y: 30, opacity: 0 },
    animate: (delay) => ({
        y: 0,
        opacity: 1,
        transition: { delay: delay },
    }),
};

const HeroSection = () => {
    const firstName = "Judah";
    const lastName = "Oyedele";

    return (
        <div className="hero-section">
            <div className="text">
                <h1>
                    <motion.span
                        variants={variants}
                        initial="initial"
                        whileInView="animate"
                        custom={1}
                        viewport={{ once: true }}
                    >
                        {firstName}
                    </motion.span>
                    <motion.span
                        variants={variants}
                        initial="initial"
                        whileInView="animate"
                        custom={1.3}
                        viewport={{ once: true }}
                    >
                        {lastName}
                    </motion.span>
                </h1>
                <motion.p
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    custom={1.5}
                    viewport={{ once: true }}
                >
                    A <span className="red">frontend web developer</span> based
                    in Nigeria.
                </motion.p>
                <motion.p
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    custom={1.7}
                    viewport={{ once: true }}
                >
                    I make <span className="red">responsive</span>,
                    user-friendly and <span className="red">interactive</span>{" "}
                    websites.
                </motion.p>
                <motion.a
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    custom={1.9}
                    className="btn red-btn"
                    href="../../../Judah-Oyedele.pdf"
                    download="Judah Oyedele's Resume"
                    viewport={{ once: true }}
                >
                    <i className="fa-solid fa-download"></i>
                    My Resume
                </motion.a>
            </div>
        </div>
    );
};

export default HeroSection;
