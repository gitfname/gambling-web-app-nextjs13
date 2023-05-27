"use client"


export default function DrawerAccordionButton_1({text, icon}) {

    return (
        <button className="flex items-center gap-x-1 group transition-colors duration-200 text-lg group-hover:bg-[#383a3e] text-white/60 font-light hover:text-white leading-none py-2 p-3 bg-[#2d3035] w-full">
            <div className="w-14 grid place-items-center">
                {icon}
            </div>

            {text}
        </button>
    )
}