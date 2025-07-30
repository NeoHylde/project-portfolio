'use client'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'
import Image from 'next/image';
import { assets } from "../../public/assets";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const downloads = [
        ['full stack', '/NeoH-FullStack-Resume.pdf'],
        ['python/api tools', '/NeoH-Python_API-Resume.pdf'],
        ['sde', '/NeoH-SDE-Resume.pdf']
    ];

    const toggleDropdown = () => setIsOpen((prev) => !prev);


    return (
        <div className="relative inline-block text-left">
            {/* Dropdown trigger button */}
            <button
                onClick={toggleDropdown}
                className="px-10 py-3 border rounded-full border-black dark:text-black dark:bg-white flex items-center gap-2 cursor-pointer"
            >
                my resume
                <FaCaretDown className="ml-1" />
                
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="origin-top-right absolute  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <></><div className="py-1">
                        {downloads.map(([name, link], index) => (
                            <a
                                key={index}
                                href={link}
                                className="flex items-center justify-between px-4 py-2 text-sm text-black hover:bg-gray-100"
                                download
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

/**
 * <div className="absolute left-0 top-10 w-full rounded-box opacity-0 scale-95 
                                group-hover:opacity-100 group-hover:scale-100 
                                transition-all duration-200 ease-out 
                                shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 
                                pointer-events-none group-hover:pointer-events-auto">
                    <div className="py-1">
                        {downloads.map(([name, link], index) => (
                            <a
                                key={index}
                                href={link}
                                className="block px-4 py-2 text-sm text-black hover:bg-gray-100"
                                download
                            >
                                {name}
                            </a>
                        ))}
                    </div>
                </div>
 */