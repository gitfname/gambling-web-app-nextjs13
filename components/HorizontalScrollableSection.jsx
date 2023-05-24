"use client"

import { useCallback, useEffect, useId, useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode } from "swiper"
import "swiper/css"
import "swiper/css/free-mode"
import { BsArrowRightCircle, BsArrowRight, BsArrowLeft } from "react-icons/bs"




export default function HorizontalScrollableSection({
    items=[], title, showSeeMore=false, containerClass, buttonsPlace="tr",
    slideW="full", slideH="full", spaceBetween=40, slidesPerView=1, slidesPerView_sm=null,
    slidesPerView_md=null, slidesPerView_lg=null, slidesPerView_xl=null, renderSlideTemplate, showPrevNextButtons=true,
    showSeeMoreW="100%", showSeeMoreH="100%", slideClass, wrapperClass="", showViewAll=false, titleLeft=null
}) {

    const prevBtnId = useId()
    const nextBtnId = useId()

    const swiperSlidesPerViewAttrs = {
        slidesPerView: slidesPerView,

        breakpoints:{
            320: {
                slidesPerView: slidesPerView
            },
            640: {
                slidesPerView: slidesPerView_sm,
            },
            768: {
                slidesPerView: slidesPerView_md,
            },
            1024: {
                slidesPerView: slidesPerView_lg,
            },
            1280: {
                slidesPerView: slidesPerView_xl,
            }
        }
    }

    if(slidesPerView === "auto") {
        delete swiperSlidesPerViewAttrs.breakpoints
    }

    const [additionalPrevButtonClasses, setAdditionalPrevButtonClasses] = useState([])
    const [additionalNextButtonClasses, setAdditionalNextButtonClasses] = useState([])
    const [swiperInstance, setSwiperInstance] = useState(null)

    const handleOnPrevClick = () => {
        swiperInstance?.slidePrev&&swiperInstance?.slidePrev()
    }

    const handleOnNextCLick = () => {
        swiperInstance?.slideNext&&swiperInstance?.slideNext()
    }

    const handleOnSlideChange = useCallback((swiper) => {
        if(showPrevNextButtons) {
            if(swiper?.isBeginning) {
                document.getElementById(prevBtnId).classList.add("!fill-white/30")
            }
            else if(swiper?.isEnd) {
                document.getElementById(nextBtnId).classList.add("!fill-white/30")
            }
            else {
                const prevBtn = document.getElementById(prevBtnId)
                const nextBtn = document.getElementById(nextBtnId)
    
                prevBtn.classList.contains("!fill-white/30")&&prevBtn.classList.remove("!fill-white/30")
                nextBtn.classList.contains("!fill-white/30")&&nextBtn.classList.remove("!fill-white/30")
            }
        }
    }, [showPrevNextButtons])

    useEffect(
        () => {
            if(swiperInstance?.slideTo) {
                setTimeout(() => {
                    swiperInstance.slideTo(0, 0, false)
                }, 300);
            }
        },
        [swiperInstance]
    )

    const handleOnSwiper = swiper => {
        setSwiperInstance(swiper)
        if(swiper?.isBeginning) {
            additionalPrevButtonClasses.push("!fill-white/30")
        }
    }

    const PrevNextButtons = useMemo(
        () => {
            return (<div className="flex items-center gap-x-1">
                <div onClick={handleOnPrevClick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <BsArrowLeft id={prevBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalPrevButtonClasses.join(" ")}`} />
                </div>
                
                <div onClick={handleOnNextCLick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <BsArrowRight id={nextBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalNextButtonClasses.join(" ")}`} />
                </div>
            </div>)
        },
        [swiperInstance, additionalPrevButtonClasses, additionalNextButtonClasses]
    )

    const PrevButton = useMemo(
        () => {
            return (
                <div onClick={handleOnPrevClick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <BsArrowLeft id={prevBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalPrevButtonClasses.join(" ")}`} />
                </div>
            )
        },
        [swiperInstance, additionalPrevButtonClasses]
    )

    const NextButton = useMemo(
        () => {
            return (
                <div onClick={handleOnNextCLick} className="select-none hover:bg-white/[8%] active:scale-95 rounded-lg transition-all duration-200 cursor-pointer p-1.5">
                    <BsArrowRight id={nextBtnId} className={`transition-colors duration-200 w-4 h-4 fill-white ${additionalNextButtonClasses.join(" ")}`} />
                </div>
            )
        },
        [swiperInstance, additionalNextButtonClasses]
    )

    return (
        <div className={"w-full " + wrapperClass}>

            {/* section title */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-3">
                    {titleLeft}
                    <p className="text-xl tracking-wide text-white font-normal leading-7">{title}</p>
                </div>

                <div className="flex items-center gap-x-3">
                    {
                        showViewAll
                        ?
                            <button className="self-stretch bg-transparent/30 font-medium active:scale-[0.97] transition-transform duration-200 py-2 px-3 rounded-sm text-sm text-white">
                                View All
                            </button>
                        :
                            null
                    }
                    {
                        showPrevNextButtons&&buttonsPlace==="tr"&&PrevNextButtons
                    }
                </div>


            </div>

            <div className="flex gap-x-1">
                {
                    buttonsPlace==="lr"&&(
                        <div className="w-11 self-stretch grid place-items-center">
                            {
                                showPrevNextButtons&&PrevButton
                            }
                        </div>
                    )
                }

                <Swiper
                    modules={[FreeMode]}
                    freeMode={{
                        momentumRatio: 2,
                        momentumVelocityRatio: 2
                    }}
                    onSwiper={handleOnSwiper}
                    onSlideChange={handleOnSlideChange}
                    spaceBetween={spaceBetween}
                    threshold={0}

                    touchStartPreventDefault={false}
                    simulateTouch={true}

                    {...swiperSlidesPerViewAttrs}

                    // breakpoints={{
                    //     320: {
                    //         slidesPerView: slidesPerView
                    //     },
                    //     640: {
                    //         slidesPerView: slidesPerView_sm,
                    //     },
                    //     768: {
                    //         slidesPerView: slidesPerView_md,
                    //     },
                    //     1024: {
                    //         slidesPerView: slidesPerView_lg,
                    //     },
                    //     1280: {
                    //         slidesPerView: slidesPerView_xl,
                    //     }
                    // }}
                    className={"mt-1 "+containerClass}
                >
                    {
                        items.map(item => (
                            <SwiperSlide
                            style={{
                                width: slideW,
                                height: slideH
                            }}
                            key={item.id} className={slideClass}>
                                {
                                    renderSlideTemplate(item)
                                }
                            </SwiperSlide>
                        ))
                    }
                    {
                        showSeeMore&&(
                            <SwiperSlide>
                                <div
                                    style={{
                                        height:(typeof showSeeMoreH==="string"?showSeeMoreH:showSeeMoreH+"px"),
                                        width:(typeof showSeeMoreW==="string"?showSeeMoreW:showSeeMoreW+"px")
                                    }}
                                    className={`w-max m-0 p-0 flex items-center justify-center`}
                                >
                                    <div className="flex group items-center gap-x-4 p-1 transition-colors duration-300">
                                        <p className="text-white text-sm font-light leading-none font-[Lexend]">See More</p>
                                        {/* <Image
                                            width={20}
                                            height={20}
                                            alt=""
                                            src={"/arrowRight.svg"}
                                        /> */}
                                        <BsArrowRightCircle className="fill-red-500 w-5 h-5 cursor-pointer active:scale-90 transition-all duration-200 hover:fill-white" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                {
                    buttonsPlace==="lr"&&(
                        <div className="w-11 self-stretch grid place-items-center">
                            {
                                showPrevNextButtons&&NextButton
                            }
                        </div>
                    )
                }
            </div>


            <div className="mt-1.5 flex items-center justify-between">
                
                {
                    showPrevNextButtons&&buttonsPlace==="br"
                    ?
                        (
                            <>
                                <div></div>
                                {PrevNextButtons}
                            </>
                        )
                    :
                        showPrevNextButtons&&buttonsPlace==="bl"
                        ?
                            (
                                <>
                                    {PrevNextButtons}
                                    <div></div>
                                </>
                            )
                        :
                            showPrevNextButtons&&buttonsPlace==="bc"&&(
                                <>
                                    <div></div>
                                    {PrevNextButtons}
                                    <div></div>
                                </>
                            )
                }

            </div>

        </div>
    )

}