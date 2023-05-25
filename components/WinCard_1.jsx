
import Image from "next/image";


export default function WinCard_1({img, title, price}) {

    return (
        <div className="w-full bg-[#141618] pb-4">
            <Image
                width={242}
                height={242}
                alt=""
                src={img}
                className="h-36 sm:h-40 md:h-44"
            />
            <div className="px-2.5 mt-4">
                <p className="text-base font-light text-white/50">{title}</p>
                <p className="text-base font-medium text-green-500 bg-green-500/20 p-0.5 px-1.5 mt-3 w-max">$ 2.000</p>
            </div>
        </div>
    )
}