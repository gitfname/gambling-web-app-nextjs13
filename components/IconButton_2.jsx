"use client"

import Image from "next/image"

export default function IconButton_2({
    text,
    icon,
    iconOnHover,
    className,
    textClassName,
    iconSize="sm"
}) {

    let _iconSize = ""
    switch (iconSize) {
        case "xxxs":
            _iconSize = "w-[1.2rem] h-[1.2rem]"
        break;
        case "xxs":
            _iconSize = "w-[1.3rem] h-[1.3rem]"
        break;
        case "xs":
            _iconSize = "w-[1.4rem] h-[1.4rem]"
        break;
        case "sm":
            _iconSize = "w-[1.6rem] h-[1.6rem]"
        break;
        case "md":
            _iconSize = "w-[2.2rem] h-[2.2rem]"
        break;
        case "lg":
            _iconSize = "w-[2.6rem] h-[2.6rem]"
        break;
        case "xl":
            _iconSize = "w-[3rem] h-[3rem]"
        break;
        case "xxl":
            _iconSize = "w-[3.6rem] h-[3.6rem]"
        break;
        default:
            _iconSize = "w-[1rem] h-[1rem]"
    }

    return (
        <button
            className={`w-full p-3 px-4 rounded-sm bg-white/10 flex items-center gap-x-2
            hover:bg-white/5 group transition-colors duration-200 ${className}`}
        >
            <div className={`grid grid-cols-1 grid-rows-1 ${_iconSize}`}>
                <Image
                    width={200}
                    height={200}
                    alt=""
                    src={icon}
                    className={
                        "row-start-1 col-start-1 opacity-50 group-hover:opacity-0 transition-opacity duration-300 " + _iconSize
                    }
                />
                <Image
                    width={200}
                    height={200}
                    alt=""
                    src={iconOnHover}
                    className={
                        "row-start-1 col-start-1 opacity-0 z-10 transition-opacity duration-300 group-hover:opacity-100 " + _iconSize
                    }
                />
            </div>
            <p className={"text-base text-white font-light tracking-wide " + textClassName}>{text}</p>
        </button>
    )
}