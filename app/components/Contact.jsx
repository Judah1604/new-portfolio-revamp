"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Socials from "./Socials";

const Contact = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [isActive, setIsActive] = useState(false);

    const { scrollY } = useScroll();

    scrollY.onChange((y) => {
        if (y > 0) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    });

    return (
        <>
            <div className="contact" id="contact">
                <motion.h1
                    className="header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Contact Me
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Lets get in touch. I'd love to hear from you.
                </motion.p>
                <form action="#" method="POST" name="Contact Form" netlify>
                    <input
                        type="hidden"
                        name="form-name"
                        value="Contact Form"
                    />
                    <motion.div
                        className="form-group"
                        initial={{ translateX: -200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="text"
                            id="fullname"
                            name="Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="fullname"
                            className={fullname === "" ? "" : "focus-label"}
                        >
                            Full Name
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: 200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="email"
                            id="email"
                            name="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="email"
                            className={email === "" ? "" : "focus-label"}
                        >
                            Email
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: -200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <input
                            type="number"
                            id="phone"
                            name="Phone Number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                        <label
                            htmlFor="phone"
                            className={number === "" ? "" : "focus-label"}
                        >
                            Phone Number
                        </label>
                    </motion.div>
                    <motion.div
                        className="form-group"
                        initial={{ translateX: 200 }}
                        whileInView={{ translateX: 0 }}
                        viewport={{ once: true }}
                    >
                        <textarea
                            placeholder="Message"
                            name="Message"
                        ></textarea>
                    </motion.div>
                    <button className="btn red-btn" type="submit">
                        <i className="fa-solid fa-paper-plane"></i>
                        Shoot
                    </button>
                </form>
            </div>

            <Socials />

            <a
                href="#top"
                className={isActive ? "back-to-top active" : "back-to-top"}
            >
                <i class="fa-solid fa-chevron-up"></i>
            </a>
        </>
    );
};

export default Contact;
