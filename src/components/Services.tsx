"use client"
import { FC, useEffect, useState } from "react";
import constants from "@/constants";

interface ServicesItem {
    id: string;
    name: string;
    details: string;
    img: string;
}
const SERVICES_DATA: ServicesItem[] = [...constants.SERVICES_DATA];
interface ServiceProps {
    // text: string
}

const Services: FC<ServiceProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [serviceDetails, setServiceDetails] = useState<ServicesItem>({
        id: '',
        name: '',
        details: '',
        img: '',
    });
    useEffect(() => {
        setServiceDetails({ ...SERVICES_DATA[activeIndex] });
    }, [activeIndex])
    return (
        <div className="w-full sm:w-5/6 mx-auto mt-16 px-10 sm:pb-12 sm:px-0">
            <h1 className="text-4xl font-bold mb-4">SERVICES</h1>
            <p className="text-base text-zinc-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="overflow-x-auto">
                <div role="tablist" className="tabs tabs-bordered">
                    {
                        SERVICES_DATA.map((item, i) => (
                            <div key={item.id}
                                role="tab"
                                className={`tab whitespace-nowrap ${activeIndex === i ? 'tab-active text-amber-500 !border-amber-500' : ''}`}
                                onClick={() => setActiveIndex(i)}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="block sm:grid grid-cols-2 items-center justify-items-end my-16">
                <img src={serviceDetails.img} className="p-0 sm:pl-8 w-6/6 block sm:hidden" alt="services image" />
                <div className="pr-8">
                    <span className="text-amber-500 font-semibold border-b-2 border-amber-500">{serviceDetails.name}</span>
                    <p className="my-4 text-zinc-500">{serviceDetails.details}</p>
                    <button className="btn bg-gray-500 text-white">READ MORE...</button>
                </div>
                <img src={serviceDetails.img} className="p-0 sm:pl-8 w-5/6 hidden sm:block" alt="services image" />
            </div>
        </div>
    )
}

export default Services;