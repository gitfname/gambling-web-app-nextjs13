
import BannerSLiderSection from "@/components/BannerSliderSection";
import Button from "@/components/Button";
import Card_2 from "@/components/Card_2";
import IconButton_1 from "@/components/IconButton_1";
import RecentBigWinsSection from "@/components/RecentBigWinsSection";
import RecommendedGamesSection from "@/components/RecommendedGamesSection";
import TopRatedGamesSection from "@/components/TopratedGamesSection";
import Layout_1 from "@/layouts/Layout_1";
import Image from "next/image";

import { AiOutlineGoogle } from "react-icons/ai"
import { BsTelegram, BsMeta, BsSpotify } from "react-icons/bs"

export default function Home() {
  return (
    <Layout_1>

      {/* hero */}
      <div className="w-full lg:h-96 max-lg:grid-cols-1 grid lg:grid-rows-1 lg:grid-cols-1 relative">
        <div className="-translate-y-8 max-lg:-translate-y-1/2 max-lg:order-2 flex justify-center items-start flex-col max-lg:items-center z-10 lg:row-start-1 lg:col-start-1">
          <p className="text-white text-xl font-normal">SIGN UP & <span className="text-green-400">GET</span> REWARD</p>
          <p className="text-white text-[4rem] max-lg:text-5xl leading-10 mt-4 font-bold mb-7">UPTO <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#b5e916] via-[#82d714] to-green-500">$20,000</span></p>
          <div className="flex max-lg:w-full items-center max-lg:flex-col max-lg:items-center gap-3.5">
            <Button
              text="Sign Up Now"
              color="#743be7"
              className="max-lg:!w-3/4"
            />

            <p className="text-xl font-normal text-white/40">or</p>

            <div className="flex items-center gap-x-1.5">
              <IconButton_1
                icon={<AiOutlineGoogle className="w-5 h-5 fill-inherit" />}
              />
              <IconButton_1
                icon={<BsTelegram className="w-5 h-5 fill-inherit" />}
              />
              <IconButton_1
                icon={<BsMeta className="w-5 h-5 fill-inherit" />}
              />
              <IconButton_1
                icon={<BsSpotify className="w-5 h-5 fill-inherit" />}
              />
            </div>

          </div>
        </div>

        <Image
          width={1280}
          height={920}
          alt=""
          src="/hero-bg-1.png"
          className="h-full max-lg:order-1 lg:row-start-1 lg:col-start-1 max-lg:w-full lg:w-[65.5%] ml-auto objcente r object-center object-cover"
        />
      </div>

      {/* cards */}
      <div className="w-full max-md:hidden overflow-x-auto lg:-translate-y-20">
        <div className="w-max flex-nowrap flex items-center gap-x-4 pr-3 pb-1.5">

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-1.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-2.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-3.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-4.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-5.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-6.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />
          
          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-7.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-8.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-9.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-10.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-11.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />

          <Image
            width={387}
            height={220}
            quality={100}
            alt=""
            src="/images/card-12.png"
            className="object-center object-cover h-[185px] w-[340px]"
          />



        </div>
      </div>

      <div className="w-full max-lg:mt-14 grid max-lg:grid-cols-1 grid-cols-2 gap-3">

        <Card_2
          text="CASINO"
          btnText="Go to Casino"
          color="from-purple-800 via-purple-800 to-purple-900/20"
          titleImage="/svg/casino-cards__green.svg"
          img="/images/casino.webp"
        />
        <Card_2
          btnColor="green"
          text="SPORTS"
          btnText="Go to Sports"
          color="from-green-600 via-green-600 to-green-800/20"
          titleImage="/svg/sports__orange.svg"
          img="/images/sports.webp"
        />
        
      </div>

      {/* banner-1 */}
      <div className="w-full max-md:p-5 p-8 h-[24rem] lg:h-[16.5rem] relative bg-[#16181b] overflow-hidden flex items-centerl">

        <Image
          width={700}
          height={700}
          alt=""
          src="/images/ball_1.png"
          className="w-64 h-64 absolute top-1/2 -left-11 -translate-y-1/2"
        />

        <Image
          width={350}
          height={350}
          alt=""
          src="/images/ball_2.png"
          className="w-[17rem] h-[15rem] absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        
        <div className="max-lg:h-[25%] h-1/2 max-lg:w-full w-1/2 relative z-10 flex items-stretch justify-center">
          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/applepay.webp"
              className="w-24 h-14 max-md:w-20 max-md:h-10 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0 flex items-end">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/masterpay.webp"
              className="w-24 h-14 max-md:w-20 max-md:h-10 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/googlepay.webp"
              className="w-24 h-14 max-md:w-20 max-md:h-10 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0 flex items-end">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/visapay.webp"
              className="w-24 h-14 max-md:w-20 max-md:h-10 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/samsungpay.webp"
              className="w-24 h-14 max-md:w-20 max-md:h-10 object-center object-scale-down"
            />
          </div>
        </div>

        <div
          className="absolute left-1/2 lg:top-0 bottom-0 right-3 backdrop-blur-sm bg-transparent/5
          max-lg:left-0 max-lg:bottom-0 max-lg:right-0 max-lg:w-full max-lg:h-56
          flex items-center p-4 lg:pl-14"
        >

          <div className="max-lg:flex max-lg:mx-auto max-lg:items-center flex-col">
            <p
              className="text-white text-2xl font-medium"
            >
              Fast & Easy Way to get started
            </p>
            <p
              className="text-white text-2xl font-normal mt-1"
            >
              <span className="text-yellow-400 font-semibold">300%</span> Deposit Bonus
            </p>
            <Button
              text="Deposite"
              className="mt-12 max-lg:w-3/4"
            />
          </div>

        </div>

      </div>

      {/* top tayed games */}
      <TopRatedGamesSection />

      {/* recent big wins */}
      <RecentBigWinsSection />

      {/* banners-2 */}
      <div className="w-full h-[29rem] lg:h-96 mt-20">
        <BannerSLiderSection />
      </div>

      {/* recommmended games */}
      <div className="w-full mt-12">
        <RecommendedGamesSection />
      </div>

      {/* contact us */}
      <div className="w-full max-lg:px-6 mt-12 bg-[#282a30] grid grid-cols-1 gap-y-10 lg:grid-cols-[55%_45%] py-16 relative">

        <div className="w-8 h-full max-lg:hidden bg-[#282a30] absolute top-0 left-0 -translate-x-full"></div>
        <div className="w-8 h-full max-lg:hidden bg-[#282a30] absolute top-0 right-0 translate-x-full"></div>

        <div>

          <p className="text-2xl text-white font-medium">
            Crypto Online Casino
          </p>

          <p className="max-w-[58ch] text-base text-[#9dabb8] font-light mt-6 leading-7">
            Casinos online have not always been around, but we can safely say that online casinos have been used a lot since they came on the market. And it's not in short demand nor options, and now in 2023, we have 1000s and 1000s to pick from – it's just a matter of what you like and what payment options you would like to see at the casino.
          </p>

          <p className="max-w-[58ch] text-base text-[#9dabb8] font-light mt-6 leading-7">
            Players are always looking for something new, which will help make the gaming experience so much better and more accessible. Allowing the player to focus on the absolute fun of a casino, that's right, the games themselves.
          </p>

          <p className="text-xl max-lg:text-base font-normal text-green-600 mt-6">
            Show more
          </p>

        </div>

        <div>
          <p className="text-2xl max-lg:text-lg max-lg:text-center text-white font-medium">
            Help us improve your experience
          </p>

          <textarea
            className="w-full mt-6 bg-[#202328] p-4 text-base text-[#9dabb8] left-6 h-36
            placeholder-[#9dabb8] placeholder-opacity-70 focus:outline-none"
            placeholder="Found a bug? Or have any recommendations? Please leave your message here and our team will work on it!"
          >
          </textarea>

          <div className="mt-6 flex max-lg:flex-col items-center gap-3 max-lg:gap-4">

            <Button
              color="green"
              text="Leave a Message"
              className="!font-semibold !px-6 flex-shrink-0 max-lg:order-2 max-lg:!w-full"
            />

            <p className="text-base text-[#9dabb8] font-normal max-lg:order-1">
              Now get rewarded for your valuable feedback.
            </p>

          </div>

          <p className="text-base max-lg:text-center mt-11 text-[#9dabb8] font-normal">
            Or Email us: <span className="text-green-500">gmailadd@gmail.com</span>
          </p>
        </div>

      </div>

    </Layout_1>
  )
}
