
import Image from "next/image";
import { BsExclamationSquare } from "react-icons/bs"
import Button from "./Button";


export default function RecommendedGameCard_1({ img, title }) {

    return (
        <div className="w-full bg-[#141618] pb-4">
            <Image
                width={242}
                height={242}
                alt=""
                src={img}
                className="h-44 sm:h-48 md:h-52 w-full"
            />
            <div className="flex items-center justify-between px-2.5 mt-4">
                <p className="text-base font-light text-white/50">{title}</p>
                <BsExclamationSquare className="w-5 h-5 fill-white/50" />
            </div>
            <div className="px-2.5">
                <Button
                    text="Play Now"
                    color="green"
                    className="!mt-6 !py-4 !px-3.5"
                />
            </div>
        </div>
    )
}