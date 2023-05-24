
import Image from "next/image";

export default function MenuLink_1({src="", hoverSrc="", className=""}) {
    return (
        <div className="w-full transition-colors duration-200 py-5 cursor-pointer group bg-transparent grid place-items-center hover:bg-white/5 rounded-sm mb-3">
            <Image
                width={95}
                height={95}
                alt=""
                src={src}
                className={"w-5 h-5 opacity-60 transition-opacity duration-200 group-hover:opacity-100 object-center object-cover " + className}
            />
        </div>
    )
}