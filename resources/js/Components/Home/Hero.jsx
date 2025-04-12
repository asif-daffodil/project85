import React from 'react';

const Hero = () => {
    return (
        <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 max-w-5xl max-md:max-w-md mx-auto">
            <div className="max-md:order-1 max-md:text-center">
                <h3 className="text-slate-900 font-medium md:text-3xl text-2xl md:leading-10">Prompt Delivery and Enjoyable Dining Experience.</h3>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
                <button type="button" className="px-5 py-2.5 mt-10 rounded text-[15px] font-medium outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
            </div>
            <div className="md:h-[470px]">
                <img src="/storage/assets/banner.webp" className="w-full h-full md:object-contain" />
            </div>
        </div>
    );
};

export default Hero;