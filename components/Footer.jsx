import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="w-full p-10 py-14 bg-[#16181b]">

            {/* footer links */}
            <div className="w-full grid grid-cols-1 max-md:place-items-center md:grid-cols-4 lg:grid-cols-6 gap-y-12">

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">Casino</p>
                    <div className="md:space-y-3 max-md:mt-4 mt-7 max-md:justify-center flex max-md:flex-wrap gap-4 md:flex-col">
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Casino Home</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Slots</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Live Casino</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">New Releases</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Recommended</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Table Game</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">BlackJack</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Roulette</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Baccarat</Link>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">Sports</p>
                    <div className="md:space-y-3 max-md:mt-4 mt-7 max-md:justify-center flex max-md:flex-wrap gap-4 md:flex-col">
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Sports Home</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Live</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Rules</Link>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">Promo</p>
                    <div className="md:space-y-3 max-md:mt-4 mt-7 max-md:justify-center flex max-md:flex-wrap gap-4 md:flex-col">
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">VIP Club</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Affiliate</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Promotions</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Lottery</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Refer a friend</Link>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">Support/Legal</p>
                    <div className="max-md:mt-4 md:space-y-3 mt-7 max-md:justify-center flex max-md:flex-wrap gap-4 md:flex-col">
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Help center</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Gamble aware</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Fairness</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">FAQ</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Privacy Policy</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Terms of service</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Self-exclusion</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">AML</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Design Resources</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">APP</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Live Support</Link>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">About us</p>
                    <div className="max-md:mt-4 md:space-y-3 mt-7 max-md:justify-center flex max-md:flex-wrap gap-4 md:flex-col">
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">News</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Work with us</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Business Contacts</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Help Desk</Link>
                        <Link href="/" className="text-base w-max transition-colors duration-200 text-[#9dabb8] font-light hover:text-gray-50">Verify Representative</Link>
                    </div>
                </div>

                <div>
                    <p className="text-lg text-white font-normal max-md:text-center">Join our Community</p>

                    <div className="max-md:mt-4 mt-7 flex flex-wrap gap-3">
                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_7.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />

                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_5.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />

                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_8.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />

                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_3.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />

                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_2.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />

                        <Image
                            width={90}
                            height={90}
                            alt=""
                            src="/images/share_1.webp"
                            className="w-9 h-9 object-center object-cover flex-shrink-0"
                        />
                    </div>
                </div>

            </div>

            <hr className="my-14 border-white/10 w-11/12 mx-auto" />

            <div>

                <p className="text-xl max-md:text-center text-white font-normal">Accepted Networks</p>

                <div className="flex max-md:justify-center mx-auto gap-x-11 gap-y-8 flex-wrap mt-10">
                    <div className="coin coin-1"></div>
                    <div className="coin coin-2"></div>
                    <div className="coin coin-3"></div>
                    <div className="coin coin-4"></div>
                    <div className="coin coin-5"></div>
                    <div className="coin coin-6"></div>
                    <div className="coin coin-7"></div>
                    <div className="coin coin-8"></div>
                    <div className="coin coin-9"></div>
                    <div className="coin coin-10"></div>
                    <div className="coin coin-11"></div>
                    <div className="coin coin-12"></div>
                    <div className="coin coin-13"></div>
                    <div className="coin coin-14"></div>
                    <div className="coin coin-15"></div>
                    <div className="coin coin-16"></div>
                    <div className="coin coin-17"></div>
                    <div className="coin coin-18"></div>
                </div>

            </div>

            <hr className="my-14 border-white/10 w-11/12 mx-auto" />

            <div>
                <p className="text-xl max-md:text-center text-white font-normal">Sponsorship and Gaming Responsibilities</p>

                <div className="flex items-center justify-evenly gap-x-16 gap-y-12 flex-wrap mt-10">

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/sigma.webp"
                        className="w-36 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/cloudnine.webp"
                        className="w-20 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/afa.webp"
                        className="w-14 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/verify.webp"
                        className="w-28 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/itech.webp"
                        className="w-20 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/respon.webp"
                        className="w-40 h-auto object-center object-cover"
                    />

                    <Image
                        width={250}
                        height={140}
                        alt=""
                        src="/images/sponsorship/gamcare.webp"
                        className="w-48 h-auto object-center object-cover"
                    />

                    <Image
                        width={540}
                        height={140}
                        alt=""
                        src="/images/sponsorship/aware.webp"
                        className="w-72 h-auto object-center object-cover"
                    />

                    <Image
                        width={540}
                        height={140}
                        alt=""
                        src="/images/sponsorship/eighteen.webp"
                        className="w-20 h-auto object-center object-cover"
                    />

                </div>
            </div>

            <hr className="my-14 border-white/10 w-11/12 mx-auto" />

            <div className="grid gap-y-12 max-md:grid-cols-1 max-md:place-items-center grid-cols-2">

                <div className=" max-md:flex flex-col items-center justify-center">
                    <Image
                        width={380}
                        height={90}
                        alt=""
                        src="/images/logo.webp"
                        className="h-auto w-48 block"
                    />

                    <p className="text-sm max-w-[60ch] font-normal text-[#9dabb8] mt-6">
                        A multi-award winning crypto casino. With a player-centric approach, BC.GAME is able to satisfy millions of gamblers across the globe. BC.GAME has its priority set on its community, ensuring an everlasting and endlessly entertaining gambling experience.
                    </p>
                </div>

                <div className=" max-md:flex flex-col items-center justify-center">

                    <div className="flex max-md:flex-col gap-y-4 max-md:items-center items-start flex-nowrap gap-x-4">
                        <Image
                            width={144}
                            height={144}
                            alt=""
                            src="/images/license.webp"
                            className="h-auto w-16 flex-shrink-0"
                        />

                        <p className="text-sm max-w-[50ch] font-normal text-[#9dabb8]">
                            BC.GAME is operated by BlockDance B.V. (Commercial register of Curaçao no.158182, Emancipatie Boulevard Dominico F. "Don" Martina 31, Curaçao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.
                        </p>
                    </div>

                    <p className="text-sm max-w-[50ch] font-normal text-[#9dabb8] mt-6">
                        ©2023 BC.GAME ALL RIGHTS RESERVED<br />
                        1BTC=$26,208.58
                    </p>

                </div>

            </div>

        </div>
    )
}