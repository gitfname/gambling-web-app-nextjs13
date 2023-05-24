
import Image from "next/image";
import Button from "./Button";

export default function Card_2({img,text, link, title="", titleImage, btnColor, btnText, color}) {
    return (
        <div className="w-full rounded-sm overflow-hidden flex-shrink-0">
            <div className={"bg-gradient-to-b " + color}>
                <Image
                    width={920}
                    height={700}
                    src={img}
                    className="w-full h-auto object-center object-cover"
                />
            </div>

            <div className="w-full py-6 px-6 backdrop-blur-sm -translate-y-20 bg-gradient-to-b from-transparent to-[#1c1e22]">

                <div className="flex items-center gap-x-3">
                    <Image
                        width={100}
                        height={100}
                        alt=""
                        src={titleImage}
                        className="w-7 h-7 object-center object-cover"
                    />
                    <p className="text-3xl font-medium text-white">{text}</p>
                </div>

                <p className="max-w-prose text-xl font-light text-white/70 mt-1.5 pl-11 mb-8">
                    Dive into our wide range of in-house games, live casino and slots to experience a thrilling casino adventure.
                </p>

                <Button
                    color={btnColor}
                    text={btnText}
                    className="!w-full !py-[1.2rem] !text-xl !font-semibold"
                />

            </div>
        </div>
    )
}