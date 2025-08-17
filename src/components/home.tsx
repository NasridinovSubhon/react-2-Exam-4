import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import iphone from "@/assets/iphone.png"
import khdIph from "@/assets/iphTel.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import josCa from "@/assets/jostickCard.png"
import klav from "@/assets/klav.png"
import drakon from "@/assets/dtakon.png"
import stol from "@/assets/stol.png"
import kurka from "@/assets/kurtka.png"
import sumka from "@/assets/sumka.png"
import kalonka from "@/assets/kalonka.png"
import kal from "@/assets/kal.png"
import ps5 from "@/assets/ps5.png"
import dkhta from "@/assets/dkhta.png"


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/style/style.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import { Eye, Heart } from "lucide-react";
import { Input } from "./ui/input";

const categoryBtn = "w-full dark:bg-[#aaa8c097] dark:hover:bg-[#1f5ab4] hover:bg-blue-100 active:scale-95 bg-gray-50 py-2 rounded-md xl:px-5 sm:px-2 transition-all duration-200 text-sm font-medium text-center";

const data = [
  {
    aksiya: 40,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    kharid: 88,
    img: josCa
  },

  {
    aksiya: 35,
    name: "AK-900 Wired Keyboard",
    price: 960,
    kharid: 75,
    img: klav
  },
  {
    aksiya: 30,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    kharid: 98,
    img: drakon
  },
  {
    aksiya: 30,
    name: "IPS LCD Gaming Monitor",
    price: 375,
    kharid: 98,
    img: stol
  },
]

const data2 = [
  {
    aksiya: 40,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    kharid: 88,
    img: kurka
  },

  {
    aksiya: 35,
    name: "AK-900 Wired Keyboard",
    price: 960,
    kharid: 75,
    img: sumka
  },
  {
    aksiya: 30,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    kharid: 98,
    img: kalonka
  },
  {
    aksiya: 30,
    name: "IPS LCD Gaming Monitor",
    price: 375,
    kharid: 98,
    img: stol
  },
]


import tel from "@/assets/tel.png"

const Home = () => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const [slidesPerView, setSlidesPerView] = useState(
    window.innerWidth > 510 ? 3.6 : 1
  );

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = ["Якшанбе", "Душанбе", "Сешанбе", "Чоршанбе", "Панҷшанбе", "Ҷумъа", "Шанбе"];

  const dayName = days[time.getDay()];
  const dateNumber = time.getDate().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");

  const swiperRef = useRef(null);
  const swiperRef2 = useRef(null);



  return (
    <div>
      <Input className="xl:hidden  sm:block w-[90%] m-auto mt-[10px]" placeholder="Search..." />
      <div className="w-[85%] m-auto flex flex-wrap items-center justify-between xl:mt-[90px] sm:mt-0">
        <div className="xl:w-1/5 sm:w-[90%] mx-auto xl:mx-0 flex xl:block sm:flex flex-wrap items-start gap-2.5 xl:border-r sm:border-r-0 border-gray-200">

          <div className="flex xl:block sm:flex gap-2.5 w-full sm:justify-between">
            <Select>
              <SelectTrigger className="w-full xl:w-[180px] sm:w-[48%] mt-3.5">
                <SelectValue placeholder="Woman’s Fashion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Women</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-full xl:w-[180px] sm:w-[48%] mt-3.5">
                <SelectValue placeholder="Men’s Fashion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Men</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-1 gap-2.5 mt-2.5">
            <button className={categoryBtn}>
              Electronics
            </button>

            <button className={categoryBtn}>
              Home & Lifestyle
            </button>

            <button className={categoryBtn}>
              Medicine
            </button>

            <button className={categoryBtn}>
              Sports & Outdoor
            </button>

            <button className={categoryBtn}>
              Baby's & Toys
            </button>

            <button className={categoryBtn}>
              Groceries & Pets
            </button>

            <button className={categoryBtn}>
              Health & Beauty
            </button>
          </div>
        </div>

        <div className="xl:w-[75%] sm:w-[100%]  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper xl:mt-0 sm:mt-[30px]"
          >
            <SwiperSlide style={{ backgroundColor: "black" }}  >
              <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start">
                <div className="xl:w-[41%] sm:w-[90%]">
                  <div className="flex items-center gap-[20px]">
                    <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-[70px]" />
                    <h1 className="text-white">iPhone 14 Series</h1>
                  </div>
                  <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                </div>
                <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%]" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "black" }} >
              <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start">
                <div className="xl:w-[41%] sm:w-[90%]">
                  <div className="flex items-center gap-[20px]">
                    <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-[70px]" />
                    <h1 className="text-white">iPhone 14 Series</h1>
                  </div>
                  <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                </div>
                <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%]" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "black" }}  >
              <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start">
                <div className="xl:w-[41%] sm:w-[90%]">
                  <div className="flex items-center gap-[20px]">
                    <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-[70px]" />
                    <h1 className="text-white">iPhone 14 Series</h1>
                  </div>
                  <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                </div>
                <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%]" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "black" }}  >
              <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start">
                <div className="xl:w-[41%] sm:w-[90%]">
                  <div className="flex items-center gap-[20px]">
                    <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-[70px]" />
                    <h1 className="text-white">iPhone 14 Series</h1>
                  </div>
                  <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                </div>
                <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%]" />
              </div>
            </SwiperSlide>
            <SwiperSlide style={{ backgroundColor: "black" }}  >
              <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start">
                <div className="xl:w-[41%] sm:w-[90%]">
                  <div className="flex items-center gap-[20px]">
                    <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-[70px]" />
                    <h1 className="text-white">iPhone 14 Series</h1>
                  </div>
                  <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                </div>
                <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%]" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>


      <div className="w-[85%] m-auto flex gap-4 items-center xl:mt-[100px] sm:mt-[80px]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <h1 className="text-[#DB4444]" >
          Today’s
        </h1>
      </div>

      <div className="xl:w-[85%] mx-auto my-5 flex flex-wrap items-center justify-between sm:w-[90%]">
        <div className="xl:w-[55%] flex items-center justify-between flex-wrap sm:w-[100%]">
          <h1 className="text-4xl font-bold">Flash Sales</h1>
          <div className="flex items-center xl:gap-4 sm:gap-2 flex-wrap xl:mt-0 sm:mt-4 ">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Days</span>
              <span className="xl:text-lg sm:text-[16px] font-semibold">{dateNumber}—{dayName}</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Hours</span>
              <span className="xl:text-lg sm:text-[14px]font-semibold">{hours}</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Minutes</span>
              <span className="xl:text-lg sm:text-[14px]font-semibold">{minutes}</span>
            </div>
            <span className="text-xl font-bold">:</span>
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Seconds</span>
              <span className="xl:text-lg sm:text-[14px]font-semibold">{seconds}</span>
            </div>
          </div>
        </div>

        <div className="w-[10%] flex items-center justify-between">
          <button className="bg-[#dadddf] p-[10px_15px] rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          > ⏮ </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#dadddf] p-[10px_15px] rounded-full" > ⏭ </button>
        </div>
      </div>

      <div className="w-[85%] m-auto mt-[20px] mb-[90px] " >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 27,
            },
            511: {
              slidesPerView: 3.4,
              spaceBetween: 30,
            },
          }}

          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((e) => {
            return (
              <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                <div className="relative p-2 w-[95%] ">
                  <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-between items-start p-3">
                      <button className="bg-[#DB4444] px-4 py-1 rounded text-white text-sm font-medium shadow">
                        -{e.aksiya}%
                      </button>
                      <div className="space-y-2">
                        <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition">
                          <Heart />
                        </button>
                        <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition">
                          <Eye />
                        </button>
                      </div>
                    </div>
                    <img
                      src={e.img}
                      alt=""
                      className="w-[75%] mx-auto object-cover"
                      style={{ height: "140px" }}
                    />

                    <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                      Add To Cart
                    </button>
                  </div>

                  <div className="text-start mt-3">
                    <h1>{e.name}</h1>
                    <span className="text-[red]">${e.price}</span>
                    <span className="text-[gray] ml-2">${e.kharid}</span>
                  </div>
                </div>

              </SwiperSlide>
            )
          })}

        </Swiper>
        <div className="xl:w-[12%] m-auto mt-3 sm:w-[45%]">
          <button className="w-[100%] m-auto py-3 xl:text-[16px] sm:text-[14px] text-white bg-[#DB4444] rounded-[6px]"> View All Products </button>
        </div>
      </div>

      <div className="xl:w-[85%] sm:w-[70%] m-auto flex gap-4 justify-between items-center xl:mt-[100px] sm:mt-[80px] mb-6">
        <div className="xl:w-[15%] sm:w-[20%]  flex items-center justify-between" >
          <div className="h-[40px] xl:w-[20px] sm:w=[30px] rounded-[4px] bg-[#DB4444] ">
          </div>
          <h1 className="text-[#DB4444]" >
            Categories
          </h1>
        </div>
        <div className="w-[10%] xl:flex items-center justify-between sm:hidden">
          <button className="bg-[#dadddf] p-[10px_15px] rounded-full"
            onClick={() => swiperRef2.current?.slidePrev()}
          > ⏮ </button>
          <button
            onClick={() => swiperRef2.current?.slideNext()}
            className="bg-[#dadddf] p-[10px_15px] rounded-full" > ⏭ </button>
        </div>
      </div>

      <div className="w-[85%] m-auto">
        <Swiper
          onSwiper={(swiper) => (swiperRef2.current = swiper)}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 27,
            },
            511: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}

          modules={[Autoplay]}
          className="mySwiper"
        >

          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="border text-center hover:bg-[#DB4444] hover:text-white " style={{ height: "150px" }} >
            <div className="w-[100px] m-auto">
              <img src={tel} alt="" className="w-[100px] m-auto scale-65" />
              <h1 className="p-0 m-0">Phones</h1>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>

      <div className="w-[85%]  flex items-center m-auto gap-4 " >
        <div className="h-[40px] xl:w-[20px] sm:w=[30px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <h1 className="text-[#DB4444]" >
          This Month
        </h1>
      </div>

      <div className="xl:w-[85%] sm:w-[90%] m-auto mt-4 flex items-center justify-between  " >
        <h1 className="xl:text-[36px] sm:text-[32px]">
          Best Selling Products
        </h1>
        <button className="bg-[#DB4444] p-[10px_35px] text-white rounded-[3px] xl:block sm:hidden" > View All </button>
      </div>

      <div className="w-[85%] m-auto mt-[20px] mb-[90px] " >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={slidesPerView}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 27,
            },
            511: {
              slidesPerView: 3.4,
              spaceBetween: 30,
            },
          }}

          modules={[Autoplay]}
          className="mySwiper"
        >
          {data2.map((e) => {
            return (
              <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                <div className="relative p-2 w-[95%] ">
                  <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex relative xl:left-[270px] sm:left-[224px] justify-evenly items-start p-3" style={{ flexDirection: "column" }}>
                      <button className="rounded-full block mb-4 bg-white p-2 shadow hover:bg-gray-100 transition">
                        <Heart />
                      </button>
                      <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition">
                        <Eye />
                      </button>
                    </div>
                    <img
                      src={e.img}
                      alt=""
                      className="w-[75%] mx-auto object-cover"
                      style={{ height: "140px" }}
                    />
                  </div>

                  <div className="text-start mt-3">
                    <h1>{e.name}</h1>
                    <span className="text-[red]">${e.price}</span>
                    <span className="text-[gray] ml-2">${e.kharid}</span>
                  </div>
                </div>

              </SwiperSlide>
            )
          })}

        </Swiper>
      </div>

      <div className="xl:w-[85%] m-auto bg-black p-[55px_45px] mb-20 flex items-center justify-between flex-wrap sm:w-[90%]">
        <div className="xl:w-[45%]  sm:w-[100%]" >
          <h1 className="text-[#00FF66]"> Categories </h1>
          <h1 className="xl:text-[50px] text-white ">Enhance Your Music Experience</h1>
          <div className="flex justify-between items-center xl:w-[75%] sm:w-[100%]" >
            <div className="bg-white text-black xl:w-[65px] xl:h-[65px] sm:w-[50px] sm:h-[50px] rounded-full text-center flex items-center justify-center ">
              <div>
                <button className=" " >{dateNumber}</button>
                <h1 className="text-[10px]">Hours</h1>
              </div>
            </div>
            <div className="bg-white text-black xl:w-[65px] xl:h-[65px] sm:w-[50px] sm:h-[50px] rounded-full text-center flex items-center justify-center">
              <div>
                <button className=" " >{hours}</button>
                <h1 className="text-[10px]">Days</h1>
              </div>
            </div>
            <div className="bg-white text-black xl:w-[65px] xl:h-[65px] sm:w-[50px] sm:h-[50px] rounded-full text-center flex items-center justify-center">
              <div>
                <button className=" " >{minutes}</button>
                <h1 className="text-[10px]">Minutes</h1>
              </div>
            </div>
            <div className="bg-white text-black xl:w-[65px] xl:h-[65px] sm:w-[50px] sm:h-[50px] rounded-full text-center flex items-center justify-center">
              <div>
                <button className=" " >{seconds}</button>
                <h1 className="text-[10px]" >Seconds</h1>
              </div>
            </div>
          </div>
        </div>
        <img src={kal} alt="" className="xl:w-[47%] xl:mt-0 sm:mt-10 drop-shadow-[0px_0px_24px] drop-shadow-white " />

      </div>

      <div className="w-[85%]  flex  m-auto gap-4 " >
        <div className="h-[40px] xl:w-[20px] sm:w=[30px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <div>
          <h1 className="text-[#DB4444]" >
            This Month
          </h1>
          <h1 className="text-[36px]" > Explore Our Products </h1>
        </div>
      </div>

      <div className="w-[85%] m-auto mt-[20px] mb-[90px] " >
        <div className="flex justify-between items-center flex-wrap" >

          {data.map((e) => {
            return (
              <div className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                <div className="relative p-2 py-4 w-[95%] m-auto xl:ml-0 sm:ml-[40px]  ">
                  <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex justify-between items-start p-3">
                      <button className="bg-[#DB4444] rounded text-white text-sm font-medium shadow">
                      </button>
                      <div className="space-y-2">
                        <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition">
                          <Heart />
                        </button>
                        <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition">
                          <Eye />
                        </button>
                      </div>
                    </div>
                    <img
                      src={e.img}
                      alt=""
                      className="w-[75%] mx-auto object-cover"
                      style={{ height: "140px" }}
                    />

                    <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                      Add To Cart
                    </button>
                  </div>

                  <div className="text-start mt-3">
                    <h1>{e.name}</h1>
                    <span className="text-[red]">${e.price}</span>
                    <span className="text-[gray] ml-2">${e.kharid}</span>
                  </div>
                </div>
              </div>

            )
          })}
        </div>
      </div>

      <div className="w-[85%]  flex  m-auto gap-4 items-center " >
        <div className="h-[40px] xl:w-[20px] sm:w=[30px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <h1 className="text-[#DB4444]" >
          Featured
        </h1>
      </div>
      <h1 className="text-[36px] ml-[7.5%] mt-2" > New Arrival</h1>

      <div className="w-[85%] m-auto flex gap-6 flex-wrap justify-between items-center mt-4 mb-20" >
        <div
          className=" relative w-[47%] h-[80vh] bg-center bg-no-repeat bg-cover bg-black text-white"
          style={{ backgroundImage: `url(${ps5})` }}
        >
          <div className="absolute bottom-6 left-7" >
            <h1 className="text-[24px]"> PlayStation 5 </h1>
            <h1 className="mt-4 mb-4" >Black and White version of the PS5 <br /> coming out on sale.</h1>
            <h1>Shop Now</h1>
          </div>
        </div>
          
      </div>

    </div >
  )
}


export default Home
