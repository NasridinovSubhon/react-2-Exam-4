
import iphone from "@/assets/iphone.png";
import khdIph from "@/assets/iphTel.png";
import { Swiper, SwiperSlide } from 'swiper/react';

import kal3 from "@/assets/3kalon.png";
import dkhta from "@/assets/dkhta.png";
import dukhi from "@/assets/dukhi.png";
import kal from "@/assets/kal.png";
import ps5 from "@/assets/ps5.png";
import servKam from "@/assets/servisKam.png";

import '@/style/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Eye, Heart } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Input } from "./ui/input";

const categoryBtn = "w-full dark:bg-[#aaa8c097] dark:hover:bg-[#1f5ab4] hover:bg-blue-100 active:scale-95 bg-gray-50 py-2 rounded-md xl:px-5 sm:px-2 transition-all duration-200 text-sm font-medium text-center";



import { GetCat, GetProd } from "@/app/productSl";
import Skeleton from "@mui/material/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = ({ setWish, wish }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetProd())
    dispatch(GetCat())
  }, [])

  const { data, dataCat, loading, loadingCat } = useSelector(state => state.prod)



  const [slidesPerView] = useState(
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

  const WISHLIST_LIMIT = parseInt(import.meta.env.VITE_WISHLIST_LIMIT || "5");


  return (
    <div className="dark:text-white text-black" >
      <Input className="xl:hidden xl:mb-0 sm:mb-6  sm:block w-[90%] m-auto mt-[10px]" placeholder="Search..." />
      <div className="xl:w-[85%]  sm:w-[95%] m-auto flex flex-wrap items-center justify-between xl:mt-[90px] sm:mt-0">
        <div className="xl:w-1/5 pr-3 sm:w-[90%] mx-auto xl:mx-0 flex xl:block sm:flex flex-wrap items-start gap-2.5 xl:border-r sm:border-r-0 border-gray-200">
          <ul className="w-full grid sm:grid-cols-2 xl:grid-cols-1 gap-2.5 mt-2.">
            <Link to={"products"} >
              <button className={categoryBtn}>
                Woman’s Fashion
              </button>
            </Link>
            <Link to={"products"}>
              <button className={categoryBtn}>
                Men’s Fashion
              </button>
            </Link>
            <Link to={"products"}>
              <button className={categoryBtn}>
                Electronics
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Home & Lifestyle
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Medicine
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Sports & Outdoor
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Baby's & Toys
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Groceries & Pets
              </button>
            </Link>

            <Link to={"products"}>
              <button className={categoryBtn}>
                Health & Beauty
              </button>
            </Link>
          </ul>
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

      <div className="xl:w-[85%] mx-auto my-5 flex flex-wrap items-center justify-between  sm:w-[90%]">
        <div className="xl:w-[55%] flex items-center justify-between flex-wrap sm:w-[100%]">
          <h1 className="xl:text-4xl sm:text-3xl font-bold">Flash Sales</h1>
          <div className="flex items-center xl:gap-4 sm:gap-2 flex-wrap xl:mt-0 sm:mt-4 ">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Days</span>
              <span className="xl:text-lg sm:text-[14px]">{dateNumber}—{dayName}</span>
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

        <div className="xl:w-[10%] sm:w-[90%]  m-auto xl:mt-0 sm:mt-4 flex items-center justify-between">
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
          className="mySwiper" >
          {loading ?
            Array.from({ length: 5 }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex mt-10 flex-col space-y-3 p-2 w-[95%]">
                  <Skeleton className="h-[200px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </SwiperSlide>
            ))
            : data.slice(0, 10).map((e) => {
              return (
                <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                  <div className="relative p-2 w-[95%] ">
                    <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="flex justify-between items-start p-3">
                        <button className="bg-[#DB4444] px-4 py-1 rounded text-white text-sm font-medium shadow">
                          -{100}%
                        </button>
                        <div className="space-y-2">
                          <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                            <Heart
                              onClick={() => {
                                const id = wish.find((el) => el.id === e.id);
                                if (!id && wish.length < WISHLIST_LIMIT) {
                                  const update = [...wish, e];
                                  setWish(update);
                                  localStorage.setItem("wish", JSON.stringify(update));
                                }
                              }}
                            />
                          </button>
                          <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                            <Eye />
                          </button>
                        </div>
                      </div>
                      <img src={`http://37.27.29.18:8002/images/${e.image}`} alt={e.productName} className="w-[75%]   mix-blend-multiply  mx-auto object-cover" style={{ height: "160px" }} />
                      <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                        Add To Cart
                      </button>
                    </div>

                    <div className="text-start mt-3">
                      <h1>{e.productName}</h1>
                      <span className="text-[red]">${e.price}</span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}

        </Swiper>
        <div className="xl:w-[12%] m-auto mt-3 sm:w-[45%]">
          <ul>
            <Link to={"/products"} >
              <button className="w-[100%] m-auto py-3 xl:text-[16px] sm:text-[14px] text-white bg-[#DB4444] rounded-[6px]"> View All Products </button>
            </Link>
          </ul>
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
          <button onClick={() => {
            console.log("Prev clicked, swiperRef2:", swiperRef2.current); // Логирование
            swiperRef2.current?.slidePrev();
          }}>
            ⏮
          </button>

          <button onClick={() => {
            console.log("Next clicked, swiperRef2:", swiperRef2.current); // Логирование
            swiperRef2.current?.slideNext();
          }}>
            ⏭
          </button>
        </div>
      </div>

      <div className="w-[85%] m-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef2.current = swiper;
          }}
          slidesPerView={slidesPerView}
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
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {loadingCat ?
            Array.from({ length: 10 }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col space-y-3 p-2 w-[20%]">
                  <Skeleton className="h-[200px] w-[250px] rounded-xl" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </SwiperSlide>
            ))
            : dataCat.map((iCat, i) => {
              return <SwiperSlide key={i} className="border text-center  rounded-xl duration-900  hover:bg-[#DB4444] hover:text-white " style={{ height: "150px", transition: "0.3s" }} >
                <div className="xl:w-[100px]  sm:w-[10px] m-auto">
                  <img src={`http://37.27.29.18:8002/images/${iCat.categoryImage}`} alt="" className="w-[100px] m-auto scale-65" />
                  {iCat.subCategories.map((iCatSyb, i) => {
                    <h1 key={i} className=""> {iCatSyb.subCategoryName} </h1>
                  })}
                </div>
              </SwiperSlide>
            })}

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
          className="mySwiper">
          {
            loading ?
              Array.from({ length: 5 }).map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex mt-10 flex-col space-y-3 p-2 w-[95%]">
                    <Skeleton className="h-[200px] w-[250px] rounded-xl" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </SwiperSlide>
              ))
              : data.slice(4, 10).map((e) => {
                return (
                  <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                    <div className="relative p-2 w-[95%] ">
                      <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition duration-300 hover:shadow-lg hover:-translate-y-1">
                        <div className="flex justify-between items-start p-3">
                          <button className="bg-[#DB4444] px-4 py-1 rounded text-white text-sm font-medium shadow">
                            -{100}%
                          </button>
                          <div className="space-y-2">
                            <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                              <Heart
                                onClick={() => {
                                  const id = wish.find((el) => el.id === e.id);
                                  if (!id && wish.length < WISHLIST_LIMIT) {
                                    const update = [...wish, e];
                                    setWish(update);
                                    localStorage.setItem("wish", JSON.stringify(update));
                                  }
                                }}
                              />
                            </button>
                            <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                              <Eye />
                            </button>
                          </div>
                        </div>
                        <img src={`http://37.27.29.18:8002/images/${e.image}`} alt={e.productName} className="w-[75%]   mix-blend-multiply  mx-auto object-cover" style={{ height: "160px" }} />
                        <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                          Add To Cart
                        </button>
                      </div>

                      <div className="text-start mt-3">
                        <h1>{e.productName}</h1>
                        <span className="text-[red]">${e.price}</span>
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
                <h1 className="text-[10px]"> Days</h1>
              </div>
            </div>
            <div className="bg-white text-black xl:w-[65px] xl:h-[65px] sm:w-[50px] sm:h-[50px] rounded-full text-center flex items-center justify-center">
              <div>
                <button className=" " >{hours}</button>
                <h1 className="text-[10px]"> Hours </h1>
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

          {data.slice(0, 1).map((e) => {
            return (
              <div className="mr-12 h-[370px] w-[310px]">
                <div className="relative p-2 py-4 w-[95%] mx-auto xl:ml-0 sm:ml-10">
                  <div className="bg-[#F5F5F5] h-[90%] rounded-2xl overflow-hidden group relative transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">


                    <div className="flex justify-between items-start p-3">
                      <button className="bg-[#DB4444] rounded text-white text-sm font-medium shadow px-3 py-1">

                      </button>
                      <div className="space-y-2 flex flex-col">
                        <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100 transition text-black">
                          <Heart />
                        </button>
                        <button className="rounded-full bg-white p-2 shadow hover:bg-gray-100 transition text-black">
                          <Eye />
                        </button>
                      </div>
                    </div>


                    <img
                      src={`http://37.27.29.18:8002/images/${e.image}`}
                      alt={e.productName}
                      className="w-3/4 mx-auto object-cover mix-blend-multiply"
                      style={{ height: "160px" }}
                    />


                    <button className="absolute bottom-0 left-0 w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add To Cart
                    </button>
                  </div>


                  <div className="text-start mt-3">
                    <h1 className="font-semibold text-lg">{e.name}</h1>
                    <div className="flex items-center gap-2">
                      <span className="text-red-500 font-medium">${e.price}</span>
                      <span className="text-gray-400 line-through">${e.kharid}</span>
                    </div>
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

      <div className="xl:w-[85%] sm:w-[95%] m-auto flex gap-6 flex-wrap justify-between items-center mt-4 mb-20" >
        <div
          className=" relative xl:w-[46%] sm:w-[100%] xl:h-[90vh] sm:h-[50vh] bg-center bg-no-repeat bg-cover bg-black text-white"
          style={{ backgroundImage: `url(${ps5})` }}
        >
          <div className="absolute xl:bottom-6 xl:left-7 sm:bottom-2 sm:left-4" >
            <h1 className="text-[24px]"> PlayStation 5 </h1>
            <h1 className="mt-4 mb-4" >Black and White version of the PS5 <br /> coming out on sale.</h1>
            <h1>Shop Now</h1>
          </div>
        </div>
        <div className="xl:w-[52%] sm:w-[100%]" >
          <div className="relative bg-black w-[100%] h-[40vh] bg-no-repeat bg-cover bg-center text-white " style={{ backgroundImage: `url(${dkhta})` }} >
            <div className="absolute xl:bottom-6 xl:left-7 sm:bottom-2 sm:left-4 xl:w-[45%] sm:w-[80%]" >
              <h1 className="text-[24px]">Women’s Collections</h1>
              <h1 className="text-[14px] mt-3 mb-3">Featured woman collections that give you another vibe.</h1>
              <h1 className="text-[16px]">Shop Now.</h1>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between flex-wrap  mt-3" >
            <div className="xl:w-[48%] relative text-white sm:w-[100%] flex justify-center items-center py-6 bg-black " >
              <img src={kal3} alt="" className="xl:w-[70%] sm:w-[74%] h-[300px] m-auto drop-shadow-[0px_0px_100px] drop-shadow-white " />
              <div className="absolute xl:bottom-6 xl:left-7 sm:bottom-2 sm:left-4 " >
                <h1 className="text-[24px]">Speakers</h1>
                <h1 className="text-[14px] mt-3 mb-3">Amazon wireless speakers</h1>
                <h1 className="text-[16px]">Shop Now.</h1>
              </div>
            </div>

            <div className="xl:w-[48%] relative text-white sm:w-[100%] flex justify-center items-center py-6 bg-black " >
              <img src={dukhi} alt="" className="xl:w-[70%] sm:w-[74%] h-[300px] m-auto drop-shadow-[0px_0px_10px] drop-shadow-white " />
              <div className="absolute xl:bottom-6 xl:left-7 sm:bottom-2 sm:left-4 " >
                <h1 className="text-[24px]">Perfume</h1>
                <h1 className="text-[14px] mt-3 mb-3">GUCCI INTENSE OUD EDP</h1>
                <h1 className="text-[16px]">Shop Now.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:w-[64%] sm:w-[80%] m-auto flex items-center justify-between flex-wrap gap-8 text-center mt-[140px] mb-[130px]" >
        <div className="xl:w-[30%] sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[20px] mt-3">FREE AND FAST DELIVERY</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[30%] sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[20px] mt-3">FREE AND FAST DELIVERY</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[30%] sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[20px] mt-3">FREE AND FAST DELIVERY</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
      </div>

    </div >
  )
}


export default memo(Home)
