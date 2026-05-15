import React from 'react';
import { InfiniteSlider } from './ui/infinite-slider';


const Clients = () => {
    return (
        <div className="w-full">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="hidden md:block max-w-xl mx-auto text-center mb-3">
                    <h3 className="text-gray-500 dark:text-gray-400 text-base sm:text-lg font-medium tracking-wider uppercase">
                        Works with your instruments
                    </h3>
                </div>
                {/* Desktop view: Static flex layout */}
                <div className="hidden md:flex flex-wrap md:flex-nowrap justify-center items-center gap-10 md:gap-16 w-full max-w-5xl mx-auto">
                    {[
                        { src: "/logos/works-with/Agilent.png", alt: "Agilent" },
                        { src: "/logos/works-with/KEITHLEY.png", alt: "Keithley" },
                        { src: "/logos/works-with/Keysight.png", alt: "Keysight" },
                        { src: "/logos/works-with/ROHDE.png", alt: "Rohde & Schwarz" },
                        { src: "/logos/works-with/Tektronix.png", alt: "Tektronix" }
                    ].map((logo) => (
                        <img
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-20 md:h-28 lg:h-32 w-auto object-contain select-none pointer-events-none dark:brightness-0 dark:invert"
                        />
                    ))}
                </div>

                {/* Mobile view: Infinite slider layout */}
                <div className="block md:hidden mt-0 mb-4">
                    <InfiniteSlider speed={40} gap={24}>
                        {[
                            { src: "/logos/works-with/Agilent.png", alt: "Agilent" },
                            { src: "/logos/works-with/KEITHLEY.png", alt: "Keithley" },
                            { src: "/logos/works-with/Keysight.png", alt: "Keysight" },
                            { src: "/logos/works-with/ROHDE.png", alt: "Rohde & Schwarz" },
                            { src: "/logos/works-with/Tektronix.png", alt: "Tektronix" }
                        ].map((logo) => (
                            <img
                                key={logo.alt}
                                src={logo.src}
                                alt={logo.alt}
                                className="h-24 w-auto object-contain select-none pointer-events-none dark:brightness-0 dark:invert mx-2"
                            />
                        ))}

                    </InfiniteSlider>
                </div>
            </div>
        </div>
    )
}
export default Clients;
