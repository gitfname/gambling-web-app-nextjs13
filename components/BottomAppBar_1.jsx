

import { AiOutlineMenu } from "react-icons/ai"
import Image from "next/image"
import dynamic from "next/dynamic"
const LeftDrawer_1Wrapper = dynamic(() => import("@/components/LeftDrawer_1_Wrapper"), {ssr: false})


function NavLink({text, icon}) {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="fill-white/50">
                {icon}
            </div>
            <p className="text-sm text-[12px] mt-1 text-white/70 font-normal">{text}</p>
        </div>
    )
}

export default function BottomAppBar_1() {
    return (
        <div className="fixed md:hidden bottom-0 left-0 w-full h-20 bg-[#1f2125] z-[999]">
            <div className="w-20 h-20 rounded-full absolute bg-[#1f2125] -z-10 left-1/2 top-0 -translate-x-1/2 -translate-y-5"></div>

            <div className="bg-[#1f2125] absolute top-0 left-0 w-full h-full z-10 flex items-stretch justify-center">
                <div className="flex-1 flex items-stretch justify-around">
                    <LeftDrawer_1Wrapper
                        className="grid place-items-center"
                    >
                        <NavLink
                            text="Menu"
                            icon={<AiOutlineMenu className="w-5 h-5 fill-inherit" />}
                        />
                    </LeftDrawer_1Wrapper>

                    <NavLink
                        text="Casino"
                        icon={
                            <Image
                                width={90}
                                height={90}
                                alt=""
                                src="/svg/casino-cards.svg"
                                className="w-5 h-5 opacity-60"
                            />
                        }
                    />
                </div>

                <div className="w-20 flex items-center justify-center">
                    <div className="-translate-y-3">
                        <NavLink
                            text="Sports"
                            icon={
                                <div className="p-1.5
                                 rounded-full mobile-main-navlink">
                                    <Image
                                        width={90}
                                        height={90}
                                        alt=""
                                        src="/svg/vallet.svg"
                                        className="w-6 h-6"
                                    />
                                </div>
                            }
                        />
                    </div>
                </div>

                <div className="flex-1 flex items-stretch justify-around">
                    <NavLink
                        text="Sports"
                        icon={
                            <Image
                                width={90}
                                height={90}
                                alt=""
                                src="/svg/sports.svg"
                                className="w-5 h-5 opacity-60"
                            />
                        }
                    />

                    <NavLink
                        text="Chat room"
                        icon={
                            <Image
                                width={90}
                                height={90}
                                alt=""
                                src="/svg/blog.svg"
                                className="w-5 h-5 opacity-60"
                            />
                        }
                    />
                </div>
            </div>
        </div>
    )
}