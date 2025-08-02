import { assets, workData } from "../../public/assets";
import React, { useRef} from 'react';
import useThemeManager from "./themeManager";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ProjectCarousel = () => {
    const theme = useThemeManager();
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: () => {
            const videos = document.querySelectorAll('.slick-slide video');
            videos.forEach(video => {
                if (!video.paused) {
                video.pause();
                }
            });
        }
    };

    const handleVideoEnd = () => {
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
    };
    
    return (
        <div className="w-[80%] mx-auto">
            <Slider ref={sliderRef} {...settings}>
            {workData.map((project, index) => (
                <div key={index} className="p-4">
                    <div className="relative rounded-xl overflow-hidden shadow-md group bg-white dark:bg-zinc-900 border">
                        <div className="p-4 flex justify-between items-start">
                            <div>
                                <h2 className="font-mono font-semibold text-lg dark:text-white">{project.title}</h2>
                                <p className="font-mono text-sm text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                            </div>
                            
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono bg-white text-black px-4 py-2 text-sm sm: rounded-full border border-black shadow-[2px_2px_0_#000] hover:bg-lime-300 transition"
                            >
                               <img src={"/assets/github.png"} className="w-5 sm:w-7"/>
                            </a>
                        </div>
                        <video
                            poster={project.img}
                            src={project.bgVideo || ""}
                            controls
                            muted
                            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
                            playsInline
                            onEnded={handleVideoEnd}
                        />
                    </div>
                </div>
            ))}
            </Slider>
        </div>
    );
};

export default ProjectCarousel