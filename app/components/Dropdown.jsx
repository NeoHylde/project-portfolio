'use client'
import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'
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
        <div className="relative inline-block">
            {/* Wrap button and icon in flex row */}
            <div className="relative flex items-center">
                <button
                    onClick={toggleDropdown}
                    className="px-10 py-3 border rounded-full border-black dark:text-black dark:bg-white flex items-center gap-2 cursor-pointer"
                >
                    my resume
                    <FaCaretDown className="ml-1" />
                </button>

                {/* Small preview icon to the right */}
                <a
                    href={'/NeoH-SDE-Resume.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 w-8 h-8 flex items-center justify-center border border-black rounded-full bg-white dark:text-black hover:bg-gray-100 transition-colors"
                >
                    <img src={assets.right_arrow_bold} alt="Send icon" className="w-4 h-4" />
                </a>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute top-full mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
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
