
"use client"

import { Swiper } from "swiper/react";

export default function BannerSlider_1({children}) {

    let swiperInstance = null

    const prev = () => null
    const next = () => null

    return (
        <Swiper
            onSwiper={swiper => swiperInstance = swiper}
            slidesPerView={1}
            spaceBetween={10}
            threshold={2}
            className="w-full h-full relative"
        >
            {children}
        </Swiper>
    )

}