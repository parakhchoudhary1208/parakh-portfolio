"use client";

import React from "react";
import cn from "classnames";
import NavItem from "./NavItem"; 
import Reveal from "./Reveal";

const Navbar = () => {
    const [activeSection, setActiveSection] = React.useState("home");
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        setActiveSection("home");
    }, []);

    const scrollToSection = React.useCallback((sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" },
        { id: "experience", label: "Experience" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <div className="fixed top-12 right-6 mx-auto flex flex-col gap-2.5 items-end z-50 md:right-auto md:left-1/2 md:-translate-x-1/2">
            <button
                className="bg-background card-shadow p-3 md:hidden rounded"
                onClick={() => setIsOpen((prevVal) => !prevVal)}
            >
                <img className="dark:hidden block" src="/menu_icon_light.svg" alt="menu_icon" />
                <img className="hidden dark:block" src="/menu_icon_dark.svg" alt="menu_icon" />
            </button>
            <Reveal initialY={-20} duration={0.5}>
                <nav
                    className={cn(
                        "bg-background card-shadow p-3 rounded md:block duration-300 ease-in-out",
                        { "opacity-100": isOpen, "opacity-0 md:opacity-100": !isOpen }
                    )}
                >
                    <ul className="flex flex-col items-center gap-4 text-lg font-normal md:flex-row">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.id}
                                sectionId={item.id}
                                label={item.label}
                                activeSection={activeSection}
                                setActiveSection={setActiveSection}
                                scrollToSection={scrollToSection}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </ul>
                </nav>
            </Reveal>
        </div>
    );
};

export default Navbar;
