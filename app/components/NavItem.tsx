"use client";

import React from "react";
import cn from "classnames";

interface NavItemProps {
    sectionId: string;
    label: string;
    activeSection: string;
    setActiveSection: (section: string) => void;
    scrollToSection: (sectionId: string) => void;
    setIsOpen: (isOpen: boolean) => void;
}

const NavItem: React.FC<NavItemProps> = ({
    sectionId,
    label,
    activeSection,
    setActiveSection,
    scrollToSection,
    setIsOpen,
}) => {
    return (
        <li>
            <div
                className={cn("rounded p-1 cursor-pointer", {
                    "bg-primary text-white duration-300 ease-in-out": activeSection === sectionId,
                })}
                onClick={() => {
                    setActiveSection(sectionId);
                    scrollToSection(sectionId);
                    setIsOpen(false);
                }}
            >
                {label}
            </div>
        </li>
    );
};

export default NavItem;
