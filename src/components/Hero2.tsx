import { FC } from "react";

interface Hero2Props {
}

const Hero2: FC<Hero2Props> = (props) => {

    return (
        <div className="w-full sm:w-5/6 mx-auto block md:flex flex-wrap mt-16 pb-12 ">
            <div className="block p-0 md:px-3 md:flex">
                <div className="p-4 sm:pr-8">
                    <img src="/assets/video.png" alt="video" />
                </div>
                <div className="border-0 sm:border-l border-slate-400 px-8 sm:pl-8">
                    <p className="mb-6">Get a comprehensive view of international trade between countries to set your businefsfsfsdfsdss in a particular direction and drive growth for your business while keeping up to date with the latest information. Watch the video from Market Inside, providing its introduction with a quick glance at how our services help businesses.</p>
                    <div className="text-center sm:text-start">
                        <button className="px-6 py-2 bg-amber-500 rounded text-sm font-bold text-white">Schedule A Demo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero2;