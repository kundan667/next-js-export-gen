"use client"
import { FC, useEffect, useState } from "react";
import constants from "@/constants";

const PRODUCTS_DATA = constants.PRODUCTS_DATA;

interface ProductsProps {
    // text: string
}

const Products: FC<ProductsProps> = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSubIndex, setActiveSubIndex] = useState(0);
    const [productDetails, setProductDetails] = useState({});
    useEffect(() => {
        setProductDetails({ ...PRODUCTS_DATA[activeIndex] });
        // console.log("hjj", PRODUCTS_DATA[activeIndex]);
    }, [activeIndex]);
    useEffect(() => {

        // console.log(productDetails.tabs[0]);
    }, [productDetails]);

    const handleTabSelection = (e: any) => {
        let index = productDetails?.tabs?.findIndex(i => i.id === e.target.value)
        setActiveSubIndex(index);
    }


    return (
        <div className="w-full sm:w-5/6 mx-auto mt-4 px-8 sm:px-0 sm:pb-12">
            <h1 className="text-4xl font-bold mb-4">OUR PRODUCTS</h1>
            <p className="text-base text-zinc-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <div className="hidden sm:flex gap-6">
                <div className="basis-3/12 border-gray-300 border rounded-lg grid pl-8 py-8 content-start">
                    {
                        PRODUCTS_DATA.map((item: any, i: any) => (
                            <div key={item.id} className="px-4 py-3">
                                <span className={`text-zinc-500 px-3 pb-1 cursor-pointer ${activeIndex === i ? 'border-amber-500 border-b-2 !text-amber-500' : ''}`}
                                    onClick={() => setActiveIndex(i)}>
                                    {item.productName}
                                </span>
                            </div>
                        ))
                    }
                </div>
                <div className="basis-9/12 border-gray-300 border rounded-lg grid px-8 py-4">
                    <div className="text-center py-4 bg-gray-100 rounded-lg mb-8 text-2xl">{productDetails.header}</div>
                    <div className="flex gap-6">
                        <div className="w-[60%]">
                            <div className="flex gap-2 overflow-x-auto">
                                {
                                    productDetails?.tabs?.map((item: any, i: any) => (
                                        <div key={item.id}
                                            className={`px-6 py-2 text-[0.9em] sm:text-base uppercase rounded-lg cursor-pointer ${activeSubIndex === i ? 'border border-amber-500' : ''}`}
                                            onClick={() => setActiveSubIndex(i)}>
                                            {item.tabName}
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="pt-8">{productDetails?.tabs?.[activeSubIndex]?.desc}</div>
                        </div>
                        <div className="w-[40%]">
                            <img src={productDetails?.tabs?.[activeSubIndex]?.img} alt="product image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block sm:hidden">
                {
                    PRODUCTS_DATA.map((item: any, i: any) => (
                        <div className="collapse !rounded-lg my-4">
                            <input type="radio" name="my-accordion-1" className="bg-base-200" defaultChecked={i == 0} onClick={() => setActiveIndex(i)} />
                            <div className="collapse-title text-xl text-amber-500 border border-gray-300 font-medium bg-base-200 !rounded-lg">
                                {item.productName}
                            </div>
                            <div className="collapse-content p-0">
                                <div className="py-4 bg-gray-100 rounded-lg my-6 text-2xl px-4 text-left">{productDetails.header}</div>
                                <select className="select select-bordered w-full max-w-xs uppercase border focus:outline-none focus:border-amber-500 border-amber-500"
                                    onChange={handleTabSelection}>
                                    {
                                        productDetails?.tabs?.map((item: any, index: any) => (
                                            <option key={item.id}
                                                value={item.id}
                                                // onClick={() => handleTabClick(item, index)}
                                                className={`relative text-sm text-amber-500 cursor-pointer px-6 py-6 border-amber-500 ${activeIndex === index ? 'border-y border-l rounded-s-2xl	p-class' : ''}`}>
                                                {item.tabName}
                                            </option>
                                        ))
                                    }
                                </select>
                                <img src={productDetails?.tabs?.[activeSubIndex]?.img} alt="product image" className="mt-4" />
                                <p className="pt-8">{productDetails?.tabs?.[activeSubIndex]?.desc}</p>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Products;