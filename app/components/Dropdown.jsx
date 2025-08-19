'use client'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'
import { assets } from "../../public/assets";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const downloads = [
        ['full stack', '/assets/NeoHylde-FS-CV.pdf'],
        ['python/ api', '/assets/NeoHylde-PY-CV.pdf'],
        ['software engineer', '/assets/NeoHylde-SD-CV.pdf']
    ];

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    return (
        <div className="relative inline-block">
            <div className="relative flex items-center">
                <button
                    onClick={toggleDropdown}
                    className="px-10 py-3 border rounded-full border-black dark:text-black dark:bg-white flex items-center gap-2 cursor-pointer font-mono"
                >
                    resume
                    <FaCaretDown className="ml-1" />
                </button>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                        {downloads.map(([name, link], index) => (
                            <a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-2 text-sm text-black hover:bg-gray-100 font-mono"
                                onClick={toggleDropdown}
                            >
                                {name}
                                <img src={assets.download_icon} alt="" className="w-4 ml-2" />
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
