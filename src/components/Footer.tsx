"use client"
import { FC, useEffect, useState } from "react";
import constants from "@/constants";

const FOOTER_DATA = constants.FOOTER_DATA;

interface FooterProps {
    // text: string
}

const Footer: FC<FooterProps> = (props) => {
    return (
        <div className="mt-10">
            <div className="grid content-center justify-center justify-items-center h-[22rem] px-6 bg-cover bg-no-repeat bg-center bg-[url('/assets/footer_1.png')]">
                <div className="text-[2em] sm:text-[2.33em] font-bold text-center uppercase">Set Your Business</div>
                <div className="text-[1.55em] sm:text-[2em] font-bold text-center uppercase mb-6 sm:mb-0">In Motion With Valuable Insights!</div>
                <button className="btn bg-amber-500 text-white uppercase">Schedule A Demo</button>
            </div>
            <div className="bg-black block sm:flex items-center p-10 relative text-white">
                <div className="sm:w-[35%]">
                    <div className="flex sm:block justify-center mb-4 sm:mt-[-50%]">
                        {/* <div className="sm:absolute top-[-9%] flex sm:block justify-center mb-4 sm:m-0"> */}
                        <img src="/assets/footer_logo.png" className="mt-[-22%] sm:m-0" alt="logo" width={200} />
                        {/* desktop */}
                        <div className="hidden sm:block">
                            <div className="text-[1em] mt-6 mb-2">Copyright © 2022 Market Inside. </div>
                            <div className="text-[1em]">All rights reserved</div>
                        </div>
                        {/* desktop */}
                    </div>
                </div>
                <div className="sm:w-[65%]">
                    <div className="sm:flex sm:gap-6 md:gap-32">

                        {
                            FOOTER_DATA.map((item, index) => (
                                <div key={item.id} className="text-white">
                                    {/* mobile */}
                                    <div className="sm:hidden join join-vertical w-full">
                                        <div className="collapse collapse-arrow join-item border-base-300">
                                            <input type="radio" name="my-accordion-4" defaultChecked={index === 0} />
                                            <div className="collapse-title text-base sm:text-xl font-medium">
                                                {item.name}
                                            </div>
                                            <div className="collapse-content">
                                                {
                                                    item.tabs.map((d: any, i: any) => (
                                                        <div key={i} className="text-[0.8em] sm:text-base mb-3 font-semibold">{d}</div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {/* mobile */}

                                    {/* desktop */}
                                    <div key={item.id} className="hidden sm:block mb-3 font-bold text-[1.2em]">{item.name}</div>
                                    {
                                        item.tabs.map((d: any, i: any) => (
                                            <div key={i} className="hidden sm:block mb-3 font-semibold">{d}</div>
                                        ))
                                    }
                                    {/* desktop */}
                                </div>
                            ))
                        }
                    </div>
                    <div className="block sm:flex mt-8">
                        <button className="uppercase border border-white  btn bg-transparent text-white">Schedule A Demo</button>
                        <div className="flex gap-4 items-center mt-6 sm:m-0 px-0 sm:pl-32">
                            <a href="#"><img src="/assets/facebook.png" alt="facebook" width={40} /> </a>
                            <a href="#"><img src="/assets/linkdien.png" alt="linkdien" width={40} /></a>
                            <a href="#"><img src="/assets/youtube.png" alt="youtube" width={40} /></a>
                            <a href="#"><img src="/assets/skype.png" alt="skype" width={40} /></a>
                            <a href="#"><img src="/assets/twitter.png" alt="twitter" width={40} /></a>
                        </div>

                        {/* mobile */}
                        <div className="block sm:hidden">
                            <div className="text-[0.9em] mt-6 mb-2">Copyright © 2022 Market Inside. </div>
                            <div className="text-[0.9em]">All rights reserved</div>
                        </div>
                        {/* mobile */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;