

import Button from "@/components/Button"
import IconButton_1 from "@/components/IconButton_1"
import IconButton_2 from "@/components/IconButton_2"
import MenuLink_1 from "@/components/MenuLink_1"
import { AiOutlineMenu } from "react-icons/ai"
import { HiChat } from "react-icons/hi"
import { BsGlobe2 } from "react-icons/bs"
import Footer from "@/components/Footer"
import Image from "next/image"
import BottomAppBar_1 from "@/components/BottomAppBar_1"


export default function Layout_1({children}) {
    return (
        <div className="w-screen h-screen overflow-hidden
        grid grid-rows-1 grid-cols-1 md:grid-cols-[4.5rem_calc(100%-4.5rem)]">

            {/* left side */}
            <div
                className="bg-[#1c1e22] py-2.5 z-20
                shadow-[4px_0px_12px_-1px_rgba(0,0,0,0.5)] grid grid-cols-1 grid-rows-[max-content_1fr]
                max-md:hidden"
            >

                <div className="px-3">
                    <div className="w-full py-3.5 cursor-pointer group grid place-items-center bg-white/5 rounded-sm mb-8">
                        <AiOutlineMenu className="w-5 h-5 fill-white/50 group-hover:fill-white transition-colors duration-200" />
                    </div>
                </div>

                <div className="overflow-y-auto">
                    <div className="h-max px-2 space-y-0.5 pb-6">

                        <MenuLink_1
                            src="/svg/gift-white.svg"
                        />

                        <MenuLink_1
                            src="/svg/casino-cards.svg"
                        />

                        <MenuLink_1
                            src="/svg/sports.svg"
                        />

                        <MenuLink_1
                            src="/svg/lottery.svg"
                        />

                        <hr className="w-full border-white/10 !my-4" />

                        <MenuLink_1
                            src="/svg/promotions.svg"
                        />

                        <MenuLink_1
                            src="/svg/vip-club.svg"
                        />

                        <MenuLink_1
                            src="/svg/affiliate.svg"
                        />

                        <MenuLink_1
                            src="/svg/forum.svg"
                        />

                        <MenuLink_1
                            src="/svg/provably-fair.svg"
                        />

                        <MenuLink_1
                            src="/svg/blog.svg"
                        />

                        <hr className="w-full border-white/10 !my-4" />

                        <MenuLink_1
                            src="/svg/sponsorship.svg"
                        />

                        <MenuLink_1
                            src="/svg/live-support.svg"
                        />

                    </div>

                </div>

            </div>

            {/* middle section */}
            <div className="grid grid-cols-1 grid-rows-[4.5rem_calc(100%-4.5rem)]">

                {/* top side */}
                <div className="bg-[#24262b] shadow-lg z-20 sm:justify-end md:justify-between shadow-black/30 flex items-center justify-between px-4 md:px-10">
                    <div className="flex items-center gap-x-1 max-md:hidden">
                        <IconButton_2
                            icon="/svg/casino-cards.svg"
                            iconOnHover="/svg/casino-cards__green.svg"
                            text="Casino"
                            iconSize="xxs"
                            className="!bg-transparent hover:!bg-white/5"
                            textClassName="!opacity-50 group-hover:!opacity-100 transition-opacity duration-300"
                        />

                        <IconButton_2
                            icon="/svg/sports.svg"
                            iconOnHover="/svg/sports__orange.svg"
                            text="Sports"
                            iconSize="xxs"
                            className="!bg-transparent hover:!bg-white/5"
                            textClassName="!opacity-50 group-hover:!opacity-100 transition-opacity duration-300"
                        />
                    </div>

                    <Image
                        width={330}
                        height={70}
                        alt=""
                        src="/logo.7e3c775a.png"
                        className="h-auto w-40 sm:hidden"
                    />

                    <div className="flex items-stretch gap-x-2 self-stretch py-2.5">
                        <p className="text-base font-light text-white/60 flex-shrink-0 grid place-items-center cursor-pointer px-4">Sign in</p>

                        <Button
                            text="Sign up"
                            className="!px-8"
                            color="green"
                        />

                        <div className="ml-3 flex items-stretch gap-x-1.5 max-sm:hidden">
                            <IconButton_1
                                badge={99}
                                badgeClassName="bg-green-600"
                                className="!px-5 !rounded-sm !bg-white/0 hover:!bg-white/5"
                                iconWrapperClassName="group-hover:!fill-white"
                                icon={
                                    <HiChat className="w-6 h-6 fill-inherit" />
                                }

                            />

                            <IconButton_1
                                className="!px-5 !rounded-sm !bg-white/0 hover:!bg-white/5"
                                iconWrapperClassName="group-hover:!fill-white"
                                icon={
                                    <BsGlobe2 className="w-5 h-5 fill-inherit" />
                                }

                            />
                        </div>
                    </div>
                </div>

                {/* main section */}
                <div className="bg-[#1e2123] overflow-y-auto max-lg:pb-20">
                    <div className="max-md:px-3 px-11 py-10 pt-0 pb-0">
                        {children}
                    </div>
                    <Footer />
                    <BottomAppBar_1 />
                </div>

            </div>

        </div>
    )
}