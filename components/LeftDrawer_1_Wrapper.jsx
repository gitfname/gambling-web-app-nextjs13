"use client"

import Image from "next/image"
import { AiOutlineMenu } from "react-icons/ai"
import LeftDrawer from "./LeftDrawer_1"
import { useRef } from "react"
import DrawerMenuItem_1 from "./DrawerMenuItem_1"
import DrawerAccordion_1 from "./DrawerAccordion_1"
import leftDrawerItems from "@/lib/db/resources/left-drawer-items"

export default function LeftDrawer_1Wrapper({children, className}) {
    const menuTriggerButtonRef = useRef(null)

    return (
        <LeftDrawer
            className={className}
            ref={menuTriggerButtonRef}
            trigger={
                children
                ?
                    children
                :
                    <div className="w-full py-3.5 cursor-pointer group grid place-items-center bg-white/5 rounded-sm">
                        <AiOutlineMenu className="w-5 h-5 fill-white/50 group-hover:fill-white transition-colors duration-200" />
                    </div>
            }
        >
            <div className="w-full h-full grid grid-cols-1 grid-rows-[5.5rem_1fr]">
                <div className="w-full sticky top-0 left-0 h-max space-y-5 pt-4 px-2">
                    <div className="flex items-center justify-between relative">
                        <div onClick={() => menuTriggerButtonRef.current.click()} className="px-4 w-max py-3.5 cursor-pointer group grid place-items-center bg-white/5 rounded-sm">
                            <AiOutlineMenu className="w-5 h-5 fill-white/50 group-hover:fill-white transition-colors duration-200" />
                        </div>
                        <Image
                            width={330}
                            height={70}
                            alt="logo"
                            src="/logo.7e3c775a.png"
                            className="h-auto w-36 object-center object-cover absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        />
                    </div>
                </div>

                <div className="overflow-y-auto px-3.5 pb-6">

                    <div className="w-full bg-[#1a1c20] p-2 rounded-sm">
                        <DrawerMenuItem_1
                            text="Bonus"
                            icon={
                                <Image
                                    width={100}
                                    height={100}
                                    alt=""
                                    src="/svg/gift-white.svg"
                                    className="w-5 h-5 object-center object-cover opacity-50 group-hover:opacity-100"
                                />
                            }
                        />
                    </div>

                    <div className="mt-6 space-y-2">
                    <DrawerAccordion_1
                            items={leftDrawerItems.map(item => ({
                                text: item.text,
                                icon: (
                                    <Image
                                        width={100}
                                        height={100}
                                        alt=""
                                        src={item.icon}
                                        className="w-5 h-5 object-center object-cover opacity-50 group-hover:opacity-100"
                                    />
                                ),
                                content: item.items.map(item => (
                                    <DrawerMenuItem_1
                                        key={item.id}
                                        text={item.text}
                                        icon={
                                            <Image
                                                width={100}
                                                height={100}
                                                alt=""
                                                src={item.icon}
                                                className="w-5 h-5 object-center object-cover opacity-50 group-hover:opacity-100"
                                            />
                                        }
                                    />
                                ))
                            }))}
                        />
                        {/* <DrawerAccordion_1
                            items={[
                                {
                                    text: "Casino",
                                    icon: (
                                        <Image
                                            width={100}
                                            height={100}
                                            alt=""
                                            src="/svg/casino-cards.svg"
                                            className="w-5 h-5 object-center object-cover opacity-50 group-hover:opacity-100"
                                        />
                                    ),
                                    content: <>
                                        <DrawerMenuItem_1
                                            text="Pick for you"
                                            icon={
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                    src="/svg/picks-for-you.svg"
                                                    className="w-5 h-5 object-center object-cover opacity-50 group-hover:opacity-100"
                                                />
                                            }
                                        />
                                    </>
                                    
                                }
                            ]}
                        /> */}
                    </div>

                </div>

            </div>
        </LeftDrawer>
    )
}