"use client";

import { motion } from "framer-motion";

const socialsVariants = {
    initial: {
        y: 40,
    },
    animate: (delay) => ({
        y: 0,
        transition: {
            delay: delay,
        },
    }),
};

function Socials() {
    return (
        <div className="socials">
            <motion.a
                variants={socialsVariants}
                initial="initial"
                whileInView="animate"
                custom={0}
                viewport={{ once: true }}
                href="https://twitter.com/JudahOyedele"
            >
                <i class="fa-brands fa-x-twitter"></i>
            </motion.a>
            <motion.a
                variants={socialsVariants}
                initial="initial"
                whileInView="animate"
                custom={0.2}
                viewport={{ once: true }}
                href="https://codepen.io/Judah1604"
            >
                <i className="fa-brands fa-codepen"></i>
            </motion.a>
            <motion.a
                variants={socialsVariants}
                initial="initial"
                whileInView="animate"
                custom={0.4}
                viewport={{ once: true }}
                href="https://github.com/Judah1604"
            >
                <i className="fa-brands fa-github"></i>
            </motion.a>
            <motion.a
                variants={socialsVariants}
                initial="initial"
                whileInView="animate"
                custom={0.4}
                viewport={{ once: true }}
                href="https://linkedin/in/judah-oyedele"
            >
                <i class="fa-brands fa-linkedin-in"></i>
            </motion.a>
        </div>
    );
}

export default Socials;
