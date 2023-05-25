
"use client"

import BannerSlider_1 from "./BannerSlider_1"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"
import Button from "./Button"

export default function BannerSLiderSection() {
    return (
        <BannerSlider_1>
            <SwiperSlide className="w-full h-full">
                      <div className="w-full p-8 h-full relative bg-[#16181b] overflow-hidden flex items-center">

                        <Image
                            width={700}
                            height={700}
                            alt=""
                            src="/images/ball_1.png"
                            className="w-64 h-64 absolute max-lg:hidden -bottom-24 -right-20"
                        />

                        <Image
                            width={980}
                            height={720}
                            alt=""
                            src="/images/ball_5.webp"
                            className="w-[26rem] h-auto absolute max-lg:hidden top-0 left-1/2 -translate-x-[75%]"
                        />

                        <Image
                            width={350}
                            height={350}
                            alt=""
                            src="/images/bonus.3hundred-percent.png"
                            className="h-40 sm:h-44 max-lg:-translate-x-1/2 max-lg:left-1/2 max-lg:-translate-y-[22%] lg:h-64 object-center object-scale-down absolute top-1/2 lg:right-20 lg:-translate-y-1/2"
                        />

                        <div className="absolute right-0 lg:right-1/2 top-0 bottom-0 left-0 lg:backdrop-blur-sm bg-transparent/5 max-lg:p-4 lg:pl-10 pt-12">
                            <div className="max-lg:h-full max-lg:flex flex-col max-lg:items-center">
                                <p
                                    className="text-white text-3xl font-semibold leading-10"
                                >
                                   <span className="text-green-500">Register</span> now to instantly <br />
                                   redeem a <span className="text-yellow-500">300%</span> deposit <br />
                                   bonus!
                                </p>
                                <p className="mt-7 text-lg text-white/70 font-light">
                                    Deposit bonus up to $20,000
                                </p>
                                <Button
                                    text="Sign up"
                                    color="dark-orangish"
                                    className="lg:mt-12 max-lg:mx-auto w-1/2 md:!w-3/5 max-lg:w-3/4 !py-5 !font-semibold !text-lg max-lg:mt-auto"
                                />
                            </div>
                        </div>

                    </div>
            </SwiperSlide>

            <SwiperSlide className="w-full h-full">
                      <div className="w-full p-8 h-full relative bg-[#16181b] overflow-hidden flex items-center">

                        <Image
                            width={700}
                            height={700}
                            alt=""
                            src="/images/ball_1.png"
                            className="w-64 h-64 absolute max-lg:hidden -bottom-24 -right-20"
                        />

                        <Image
                            width={350}
                            height={350}
                            alt=""
                            src="/images/ball_4.6eff1ed4.png"
                            className="h-auto object-center max-lg:hidden object-scale-down absolute -bottom-12 left-1/2 -translate-x-1/2"
                        />

                        <Image
                            width={350}
                            height={350}
                            alt=""
                            src="/images/rain.webp"
                            className="h-32 sm:h-44 max-lg:-translate-x-1/2 max-lg:left-1/2 max-lg:-translate-y-[22%] lg:h-64 object-center object-scale-down absolute top-1/2 lg:right-20 lg:-translate-y-1/2"
                        />

                        <div className="absolute right-0 lg:right-1/2 top-0 bottom-0 left-0 lg:backdrop-blur-sm bg-transparent/5 max-lg:p-4 lg:pl-10 pt-12">
                            <div className="max-lg:h-full max-lg:flex flex-col max-lg:items-center">
                                <p
                                    className="text-white text-3xl font-semibold"
                                >
                                    Unlock exclusive <span className="text-green-500">VIP</span> rewards
                                </p>
                                <p
                                    className="text-white text-3xl font-semibold mt-1"
                                >
                                    at BC.GAME!
                                </p>
                                <p className="mt-7 text-lg text-white/70 font-light">
                                    Only in the VIP club
                                </p>
                                <Button
                                    text="Sign up"
                                    color="green"
                                    className="lg:mt-12 max-lg:mx-auto w-1/2 md:!w-3/5 max-lg:w-3/4 !py-5 !font-semibold !text-lg max-lg:mt-auto"
                                />
                            </div>
                        </div>

                    </div>
            </SwiperSlide>
      </BannerSlider_1>
    )
}