
import Button from "@/components/Button";
import Card_2 from "@/components/Card_2";
import IconButton_1 from "@/components/IconButton_1";
import Layout_1 from "@/layouts/Layout_1";
import Image from "next/image";

import { AiOutlineGoogle } from "react-icons/ai"
import { BsTelegram, BsMeta, BsSpotify } from "react-icons/bs"

export default function Home() {
  return (
    <Layout_1>

      {/* hero */}
      <div className="w-full grid grid-rows-1 grid-cols-1 h-96 relative">
        <div className="-translate-y-8 flex justify-center items-start flex-col z-10 row-start-1 col-start-1">
          <p className="text-white text-xl font-normal">SIGN UP & <span className="text-green-400">GET</span> REWARD</p>
          <p className="text-white text-[4rem] leading-10 mt-4 font-bold mb-7">UPTO <span className="bg-clip-text bg-gradient-to-r text-transparent from-[#b5e916] via-[#82d714] to-green-500">$20,000</span></p>
          <div className="flex items-center gap-x-3.5">
            <Button
              text="Sign Up Now"
              color="#743be7"
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
          className="h-auto w-[65.5%] row-start-1 col-start-1 ml-auto objcente r object-center object-cover"
        />
      </div>

      {/* cards */}
      <div className="w-full overflow-x-auto lg:-translate-y-20">
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

      <div className="w-full grid grid-cols-2 gap-x-3">

        <Card_2
          btnColor="#743be7"
          text="CASINO"
          btnText="Go to Casino"
          color="from-purple-800 via-purple-800 to-purple-900/20"
          titleImage="/svg/casino-cards__green.svg"
          img="/images/casino.webp"
        />
        <Card_2
          btnColor="#218338"
          text="SPORTS"
          btnText="Go to Sports"
          color="from-green-600 via-green-600 to-green-800/20"
          titleImage="/svg/sports__orange.svg"
          img="/images/sports.webp"
        />
        
      </div>


      <div className="w-full p-8 h-[16.5rem] relative bg-[#16181b] overflow-hidden flex items-center">

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
        
        <div className="h-1/2 w-1/2 relative z-10 flex items-stretch justify-center">
          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/applepay.webp"
              className="w-24 h-14 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0 flex items-end">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/masterpay.webp"
              className="w-24 h-14 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/googlepay.webp"
              className="w-24 h-14 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0 flex items-end">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/visapay.webp"
              className="w-24 h-14 object-center object-scale-down"
            />
          </div>

          <div className="flex-shrink-0">
            <Image
              width={160}
              height={60}
              alt=""
              src="/images/samsungpay.webp"
              className="w-24 h-14 object-center object-scale-down"
            />
          </div>
        </div>

        <div className="absolute left-1/2 top-0 bottom-0 right-3 backdrop-blur-sm bg-transparent/5 flex items-center pl-14">
          <div>
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
              color="#743be7"
              className="mt-12"
            />
          </div>
        </div>

      </div>

    </Layout_1>
  )
}
