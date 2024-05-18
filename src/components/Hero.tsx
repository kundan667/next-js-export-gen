import { FC } from "react";

interface HeroProps {
}

const Hero: FC<HeroProps> = (props) => {

    return (
        <div className="w-[90%] sm:w-5/6 mx-auto block md:flex mt-16 pb-4 md:pb-12 border-b border-slate-300">
            <div className="hidden md:block w-3/6 basis-3/6 min-w-[300px]">
                <img src="/assets/new-globe-gray.png" alt="globe" className="w-11/12" />
            </div>
            <div className="w-full basis-3/6 px-0 md:px-5 md:p-0">
                <div className="text-left">
                    <h1 className="text-5xl md:text-6xl text-black font-bold">GET ACCESS OF</h1>
                    <h1 className="text-5xl md:text-6xl text-amber-500 font-bold">MARKET</h1>
                    <h1 className="text-5xl md:text-6xl text-amber-500 font-bold">INTELLIGENCE</h1>
                    <h1 className="text-5xl md:text-6xl text-amber-500 font-bold">PLATFORM</h1>
                </div>
                <div className="border-dashed border-b border-slate-500 my-6"></div>
                <div>
                    <div className="text-xl md:text-2xl font-bold mb-4">GROW YOUR BUSINESS</div>
                    <div className="flex ">
                        <input type="text" className="text-base px-4 md:px-6 py-2 border border-slate-300 rounded mr-4" placeholder="ENTER YOUR EMAIL" />
                        {/* <button className="px-4 md:px-6 py-2 bg-gray-500 rounded text-sm font-bold text-white">FREE TRAIL</button> */}
                        <button className="uppercase rounded border font-bold btn bg-gray-500 text-white">FREE TRAIL</button>
                    </div>
                </div>
                <div className="flex flex-wrap my-6">
                    <div className="flex basis-3/6 items-center">
                        <img src="/assets/capterra.png" alt="company logo" className="w-3/6 object-contain" />
                        <img src="/assets/star1.png" alt="star logo" className="w-3/6 object-contain h-4" />
                    </div>
                    <div className="flex basis-3/6 items-center pl-6">
                        <img src="/assets/mask.png" alt="company logo" className="object-contain h-6 pr-4" />
                        <img src="/assets/star2.png" alt="star logo" className="object-contain h-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero