"use client"
import { FC } from "react";
import 'react-multi-carousel/lib/styles.css';
import constants from "../constants";

const CAROUSEL_DATA = constants.CAROUSEL_DATA;
// console.log("CAROUSEL_DATA:", CAROUSEL_DATA);


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

interface CarouselCustomProps {
    // text: string
}

const CarouselCustom: FC<CarouselCustomProps> = (props) => {

    return (
        <div className="bg-gray-100">
            <div className="w-full sm:w-10/12 mx-auto block md:flex flex-wrap py-8 sm:py-16">
                <div className="carousel carousel-center rounded-box">
                    {
                        CAROUSEL_DATA.map(item => (
                            <div key={item.id} className="carousel-item px-5 h-[70px] sm:h-[100px]">
                                <img src={item.image} alt="Burger" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CarouselCustom;