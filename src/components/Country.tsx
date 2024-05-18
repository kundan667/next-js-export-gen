"use client"
import { FC, useEffect, useState } from "react";
import constants from "@/constants";

const COUNTRIES_DATA = constants.COUNTRIES_DATA;
console.log("COUNTRIES_DATA:", COUNTRIES_DATA);

interface CountryProps {
    // text: string
}

const Country: FC<CountryProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState();

    const handleTabClick = (item: any, index: any) => {
        // setData(item.data);
        setActiveIndex(index);
    }

    const handleTabSelection = (e: any) => {
        let index = COUNTRIES_DATA.findIndex(i => i.id === e.target.value)
        setActiveIndex(index);
    }

    useEffect(() => {
        // if (activeIndex !== 0) return
        setData(COUNTRIES_DATA[activeIndex].data);
    }, [activeIndex])

    return (
        <div className="w-full sm:w-5/6 mx-auto mt-12 sm:mt-16 px-6 sm:pb-12 sm:px-0">
            <h1 className="text-zinc-500 font-bold text-3xl">195+</h1>
            <h1 className="text-zinc-500 font-bold text-3xl mb-4 sm:m-0">COUNTRIES</h1>
            <div className="uppercase text-black font-bold text-4xl  mb-4 sm:m-0">Import Export Data Online</div>
            <p className="text-base text-zinc-400">Market Inside Limited has one of the largest online searchable databases of importing and exporting countries, covering over 195 Countries which consist of 54 Detailed Countries, 29 Exclusive Countries, 33 Statistical, 184 Mirror Data, 109 Suez Canal Bill Of Lading Data, 02 Bill Of Lading Data, 190+ Transit Data and 190+ Cargo BL Data countries.</p>
            <div className="sm:grid sm:grid-cols-country justify-between items-start my-12">
                <div className="hidden sm:block">
                    {
                        COUNTRIES_DATA.map((item, index) => (
                            <div key={item.id}
                                onClick={() => handleTabClick(item, index)}
                                className={`relative text-sm cursor-pointer px-6 py-6 text-gray-500 border-amber-500 ${activeIndex === index ? 'border-y border-l rounded-s-2xl	p-class' : ''}`}>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                <div className="grid h-full border border-amber-500 rounded-xl sm:rounded-s-none sm:rounded-e-2xl gap-12 sm:gap-0 p-10 sm:p-4 md:p-16">
                    <div className="block sm:hidden">
                        <select className="select select-bordered w-full max-w-xs" onChange={handleTabSelection}>
                            {
                                COUNTRIES_DATA.map((item, index) => (
                                    <option key={item.id}
                                        value={item.id}
                                        // onClick={() => handleTabClick(item, index)}
                                        className={`relative text-sm cursor-pointer px-6 py-6 text-gray-500 border-amber-500 ${activeIndex === index ? 'border-y border-l rounded-s-2xl	p-class' : ''}`}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    <img src="/assets/map.png" alt="" className="" />
                    <div className="grid grid-col-1 sm:grid-cols-3 gap-4">
                        {
                            data.map((item, i) => (
                                <div key={i} className="flex gap-2 items-center">
                                    <img src="/assets/check.png" alt="check" width={15} />
                                    <span>{item}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Country;