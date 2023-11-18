'use client'

import React, { useState } from "react";
import Socials from "../Socials";
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

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const navItems = [
        { title: "About", lowerCased: "about" },
        { title: "Projects", lowerCased: "projects" },
        { title: "Contact", lowerCased: "contact" },
    ];

    return (
        <>
            <div className="navbar navbar-expand-lg" id="top">
                <div className="navbar-nav nav">
                    {navItems.map((navItem, index) => (
                        <div className="nav-item" key={index}>
                            <a
                                href={"#" + navItem.lowerCased}
                                className="nav-link"
                            >
                                {navItem.title}
                            </a>
                            <div className="hover-effect"></div>
                        </div>
                    ))}
                </div>
                <div
                    className={isClicked ? "menu active" : "menu"}
                    onClick={() => setIsClicked(!isClicked)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={isClicked ? "nav-menu active" : "nav-menu"}>
                <div className="items">
                    {navItems.map((navItem, index) => (
                        <div className="nav-item" key={index} onClick={() => setIsClicked(false)}>
                            <a
                                href={"#" + navItem.lowerCased}
                                className="nav-link"
                            >
                                {navItem.title}
                            </a>
                            <div className="hover-effect"></div>
                        </div>
                    ))}
                </div>
                <Socials />
            </div>
        </>
    );
};

export default Navbar;
