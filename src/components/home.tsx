
import iphone from "@/assets/iphone.png";
import khdIph from "@/assets/iphTel.png";
import { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import kal3 from "@/assets/3kalon.png";
import dkhta from "@/assets/dkhta.png";
import dukhi from "@/assets/dukhi.png";
import kal from "@/assets/kal.png";
import ps5 from "@/assets/ps5.png";
import servKam from "@/assets/servisKam.png";





import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../style/style.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


import { Eye, Heart } from "lucide-react";
import { memo, useEffect, useRef, useState } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hook";
import { AddWishRed, adToCart, corzina, GetCat, GetProd } from "@/app/productSl";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(GetProd())
    dispatch(GetCat())
    dispatch(corzina())
  }, [])

  const { data, dataCat, loading, loadingCat, dataWish } = useAppSelector(state => state.prod)

  const [slidesPerView] = useState(
    window.innerWidth > 510 ? 3.6 : 1
  );

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const dateNumber = time.getDate().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  const seconds = time.getSeconds().toString().padStart(2, "0");
  const swiperRef = useRef<SwiperType | null>(null);
  const swiperRef2 = useRef<SwiperType | null>(null);

  const [open, setOpen] = useState<boolean | null>(false)
  return (
    <div className="dark:text-white text-black">
      <div className="xl:w-[85%]  sm:w-[95%] m-auto flex flex-wrap items-center justify-between xl:mt-[90px] sm:mt-0">
        <div className="xl:w-1/5 pr-3 sm:w-[90%] mx-auto xl:mx-0 flex xl:block sm:flex flex-wrap items-start text-center gap-2.5 xl:border-r sm:border-r-0 border-gray-200 xl:max-h-[400px] sm:max-h-[200px] overflow-y-auto" style={{ scrollbarColor: "transparent transparent" }} >
          <ul className="w-full grid sm:grid-cols-2 xl:grid-cols-1 gap-2.5 mt-2">
            {loading ? (
              Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="space-y-2 p-2 border rounded-lg animate-pulse">
                  <div className="h-4 w-[80%] rounded-md bg-gray-200"></div>
                  <div className="h-4 w-[60%] rounded-md bg-gray-200"></div>
                </li>
              ))
            ) : (
              dataCat?.slice(0, 10)?.map((f: any) =>
                f.subCategories.slice(0, 7).map((sub: any) => (
                  <li
                    key={sub.id}
                    className="relative group w-full  "
                    onMouseEnter={() => setOpen(sub.id)}
                    onMouseLeave={() => setOpen(null)}
                  >
                    <Link
                      to={`products`} state={{ categoryId: f.id, subCategoryId: sub.id }}  >
                      <button
                        className={`px-4 py-2 rounded-lg transition-colors duration-300 w-full ${open === sub.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                      >
                        {sub.subCategoryName.slice(0, 12)}
                      </button>
                    </Link>
                    {/*
                    <Link
                      to={`products`}
                      state={{ categoryId: f.id, subCategoryId: sub.id }} >
                      <div className={`absolute top-full w-40 sm:p-3  xl:p-[10px_50px] bg-white rounded-xl shadow-lg border border-gray-100 z-50 transition-all duration-200 text-center ${open === sub.id
                        ? "opacity-100 visible translate-y-1"
                        : "opacity-0 invisible -translate-y-2"
                        } ${i % 2 === 0
                          ? "xl:left-[40px] sm:-left-2 -translate-x-2"
                          : "xl:left-[32px] sm:-left-[10px] translate-x-2"
                        }`}
                      >
                        <p className={`text-gray-700  sm:text-[10px] xl:text-[15px]    `}>
                          {sub.subCategoryName.slice(0, 13)}
                        </p>
                      </div>
                    </Link> */}
                  </li>
                ))
              )
            )}
          </ul>




        </div>


        <div className="xl:w-[75%] sm:w-[100%]  ">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}

            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper xl:mt-0 sm:mt-[30px]"
          >
            {Array.from({ length: 6 }).map((_) => (
              <SwiperSlide className="bg-black border dark:border-white " >
                <div className="flex items-center justify-between flex-wrap w-[90%] m-auto text-start h-[370px]  ">
                  <div className="xl:w-[41%] sm:w-[90%]">
                    <div className="flex items-center gap-[20px]">
                      <img src={iphone} alt="" className="xl:w-[70px] sm:w-[50px] h-auto " />
                      <h1 className="text-white">iPhone 14 Series</h1>
                    </div>
                    <h1 className="xl:text-[64px] sm:text-2xl text-white xl:mt-0 sm:mt-5 xl:mb-0 sm:mb-5  ">Up to 10% off Voucher</h1>
                  </div>
                  <img src={khdIph} alt="" className="xl:w-[56%] sm:w-[100%] " />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="w-[85%] m-auto flex gap-4 items-center xl:mt-[100px] sm:mt-[80px]">
        <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <h1 className="text-[#DB4444] font-bold " >
          Today’s
        </h1>
      </div>

      <div className="xl:w-[85%] mx-auto my-5 flex flex-wrap items-center justify-between  sm:w-[90%]">
        <div className="xl:w-[55%] flex items-center justify-between flex-wrap sm:w-[100%]">
          <h1 className="xl:text-4xl sm:text-3xl font-bold">Flash Sales</h1>
          <div className="flex items-center xl:gap-4 sm:gap-2 flex-wrap xl:mt-0 sm:mt-4 ">
            <div className="flex flex-col items-center">
              <span className="text-sm font-medium">Days</span>
              <span className="xl:text-lg sm:text-[14px]">{dateNumber}</span>
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
          <button className="bg-[#dadddf]  text-black p-[10px_15px] rounded-full "
            onClick={() => swiperRef.current?.slidePrev()}>
            ←
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[#dadddf]  text-black p-[10px_15px] rounded-full " >
            →
          </button>
        </div>
      </div>

      <div className="w-[85%] m-auto mt-[20px] mb-[90px] " >
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={slidesPerView}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
                <div className="flex flex-col mt-10 space-y-3 w-full mb-[60px]">
                  <div className="h-4 w-[80%] rounded-md bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-[70%] rounded-md bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-[50%] rounded-md bg-gray-200 animate-pulse"></div>
                  <div className="h-4 w-[34%] rounded-md bg-gray-200 animate-pulse"></div>
                </div>
              </SwiperSlide>))
            : data?.slice(0, 10)?.map((e: any) => {
              return (
                <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                  <div className="relative p-2 w-[95%] ">
                    <div className="bg-gray-100 dark:bg-gray-300 max-h-[300px] min-h-[200px] rounded-2xl overflow-hidden group relative transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full
                  xl:h-[320px] sm:h-auto">
                      <div className="flex justify-between items-start p-3">
                        <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
                          -100%
                        </span>
                        <div className="flex flex-col gap-2">
                          <button className={`p-2.5 rounded-full border transition-colors ${dataWish?.some((el: any) => el.id === e?.id)
                            ? "bg-red-100 border-red-200 text-red-600"
                            : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300"}`}>
                            <Heart
                              className={`${dataWish?.some((el: any) => el.id === e.id) ? "text-red-600 fill-red-600" : "dark:text-white text-black "}`}
                              onClick={() => {
                                dispatch(AddWishRed(e))
                              }}
                            />
                          </button>
                          <Link to={"/info/" + e.id}>
                            <button className="bg-white p-2.5 dark:bg-gray-800 dark:text-white rounded-full hover:bg-gray-200 text-black transition">
                              <Eye />
                            </button>
                          </Link>
                        </div>
                      </div>


                      <div className="flex-1 flex items-center justify-center">
                        <img
                          src={`http://37.27.29.18:8002/images/${e.image}`}
                          alt={e.productName}
                          className="xl:max-h-[140px] sm:max-h-[190px] w-auto object-contain mix-blend-multiply"
                        />
                      </div>


                      <button
                        onClick={() => { dispatch(adToCart(e.id)), dispatch(corzina()) }}
                        className="w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300"
                      >
                        Add To Cart
                      </button>
                    </div>

                    <div className="mt-3 text-start">
                      <h1 className="text-sm font-medium text-gray-800 dark:text-white truncate">{e.productName}</h1>
                      <span className="text-red-600 font-semibold">${e.price}</span>
                    </div>
                  </div>



                </SwiperSlide>
              )
            })}

        </Swiper>
        <div className="xl:w-[12%] m-auto mt-3 sm:w-[45%]">
          <ul>
            <Link to={"products"} >
              <button className="w-[100%] m-auto py-3 xl:text-[16px] sm:text-[14px] text-white bg-[#DB4444] rounded-[6px]"> View All Products </button>
            </Link>
          </ul>
        </div>
      </div>

      <div className="xl:w-[85%] sm:w-[70%] m-auto flex gap-4 justify-between items-center xl:mt-[100px] sm:mt-[80px] mb-6">

        <div className=" flex items-center gap-4 " >
          <div className="h-[40px] xl:w-[20px] sm:w-[20px] rounded-[4px] bg-[#DB4444] ">
          </div>
          <h1 className="text-[#DB4444] font-bold " >
            categories
          </h1>
        </div>
        <div className="w-[10%] xl:flex items-center justify-between sm:hidden">
          <button className="bg-[#dadddf]  text-black p-[10px_15px] rounded-full " onClick={() => {
            swiperRef2.current?.slidePrev();
          }}>
            ←
          </button>

          <button className="bg-[#dadddf]  text-black p-[10px_15px] rounded-full " onClick={() => {

            swiperRef2.current?.slideNext();
          }}>

            →
          </button>
        </div>
      </div>

      <div className="w-[90%] m-auto">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef2.current = swiper;
          }}
          slidesPerView={2}
          spaceBetween={15}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            511: {
              slidesPerView: 6,
              spaceBetween: 15,

            }
          }}
          modules={[Autoplay]}
          className="mySwiper hSw "
        >
          {loadingCat ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center mt-6 space-y-3 w-full mb-[100px] ">
                  <div className="h-20 w-20 rounded-full bg-gray-200 animate-pulse"></div>
                  <div className="h-3 w-[60%] rounded-md bg-gray-200 animate-pulse"></div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            dataCat.slice(0, 7)?.map((iCat: any, i: number) => (
              <SwiperSlide
                key={i}
                className="group border rounded-xl bg-white dark:bg-gray-300 text-center cursor-pointer
                     transition duration-300 hover:bg-[#DB4444] dark:hover:bg-[#6fe9acad] hover:text-white p-3 mb-[100px] "
              >

                <div className="flex items-center dark:invert w-full group h-[130px] justify-center">
                  <div>
                    <img
                      src={`http://37.27.29.18:8002/images/${iCat.categoryImage}`}
                      alt=""
                      className="w-20 h-20 object-contain m-auto dark:invert mix-blend-multiply  transition-transform duration-300 group-hover:scale-110"
                    />
                    {iCat.subCategories.slice(0, 1).map((iCatSyb: any, idx: number) => (
                      <Link
                        to={`products`} state={{ categoryId: iCat.id, subCategoryId: iCatSyb.id }}  >
                        <h1
                          key={idx}
                          className="text-xs sm:text-sm mt-2 font-medium group-hover:text-white truncate max-w-[90px]"
                        >
                          {iCatSyb.subCategoryName}
                        </h1>
                      </Link>
                    ))}
                  </div>
                </div>

              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>


      <div className="w-[85%]  flex items-center m-auto gap-4 " >
        <div className="h-[40px] xl:w-[20px] sm:w-[20px] rounded-[4px] bg-[#DB4444] ">
        </div>
        <h1 className="text-[#DB4444] bold " >
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
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
                  <div className="flex flex-col mt-10 space-y-3 w-full">
                    <div className="h-4 w-[80%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[70%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[50%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[34%] rounded-md bg-gray-200 animate-pulse"></div>
                  </div>
                </SwiperSlide>
              ))
              : data?.slice(4, 8)?.map((e: any) => {
                return (
                  <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                    <div className="relative p-2 w-[95%] ">
                      <div className="bg-gray-100 dark:bg-gray-300 max-h-[300px] min-h-[300px] rounded-2xl overflow-hidden group relative transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full
                  xl:h-[320px] sm:h-auto">

                        <div className="flex justify-between items-start p-3">
                          <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
                            -100%
                          </span>
                          <div className="flex flex-col gap-2">
                            <button className={`p-2.5 rounded-full border transition-colors ${dataWish?.some((el: any) => el.id === e?.id)
                              ? "bg-red-100 border-red-200 text-red-600"
                              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300"}`}>
                              <Heart
                                className={`${dataWish?.some((el: any) => el.id === e.id) ? "text-red-600 fill-red-600" : "text-black dark:text-white"}`}
                                onClick={() => {
                                  dispatch(AddWishRed(e))
                                }}
                              />
                            </button>
                            <Link to={"/info/" + e.id}>
                              <button className="bg-white p-2.5 border  dark:bg-gray-800 dark:text-white rounded-full hover:bg-gray-200 text-black transition  ">
                                <Eye />
                              </button>
                            </Link>
                          </div>
                        </div>


                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src={`http://37.27.29.18:8002/images/${e.image}`}
                            alt={e.productName}
                            className="xl:max-h-[140px] sm:max-h-[190px] w-auto object-contain mix-blend-multiply"
                          />
                        </div>


                        <button
                          onClick={() => dispatch(adToCart(e.id))}
                          className="w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300"
                        >
                          Add To Cart
                        </button>
                      </div>

                      <div className="mt-3 text-start">
                        <h1 className="text-sm font-medium text-gray-800 dark:text-white truncate">{e.productName}</h1>
                        <span className="text-red-600 font-semibold">${e.price}</span>
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
          <h1 className="text-[#DB4444] font-bold " >
            This Month
          </h1>
          <h1 className="text-[36px]" > Explore Our Products </h1>
        </div>
      </div>
      <div className="w-[85%] m-auto mt-[20px] mb-[90px] " >
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
                  <div className="flex flex-col mt-10 space-y-3 w-full">
                    <div className="h-4 w-[80%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[70%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[50%] rounded-md bg-gray-200 animate-pulse"></div>
                    <div className="h-4 w-[34%] rounded-md bg-gray-200 animate-pulse"></div>
                  </div>
                </SwiperSlide>
              ))
              : data?.slice(2, 5)?.map((e: any) => {
                return (
                  <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                    <div className="relative p-2 w-[95%] ">
                      <div className="bg-gray-100 dark:bg-gray-300 max-h-[300px] min-h-[300px] rounded-2xl overflow-hidden group relative transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full
                  xl:h-[320px] sm:h-auto">

                        <div className="flex justify-between items-start p-3">
                          <span className="bg-red-600 text-white text-xs font-medium px-3 py-1 rounded">
                            -100%
                          </span>
                          <div className="flex flex-col gap-2">
                            <button className={`p-2.5 rounded-full border transition-colors ${dataWish?.some((el: any) => el.id === e?.id)
                              ? "bg-red-100 border-red-200 text-red-600"
                              : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300"}`}>
                              <Heart
                                className={`${dataWish?.some((el: any) => el.id === e.id) ? "text-red-600 fill-red-600" : "dark:text-white text-black "}`}
                                onClick={() => {
                                  dispatch(AddWishRed(e))
                                }}
                              />
                            </button>
                            <Link to={"/info/" + e.id}>
                              <button className="bg-white dark:bg-gray-800 dark:text-white p-2.5 rounded-full hover:bg-gray-200 text-black transition">
                                <Eye />
                              </button>
                            </Link>
                          </div>
                        </div>


                        <div className="flex-1 flex items-center justify-center">
                          <img
                            src={`http://37.27.29.18:8002/images/${e.image}`}
                            alt={e.productName}
                            className="xl:max-h-[140px] sm:max-h-[190px] w-auto object-contain mix-blend-multiply"
                          />
                        </div>


                        <button
                          onClick={() => dispatch(adToCart(e.id))}
                          className="w-full py-3 bg-black text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300"
                        >
                          Add To Cart
                        </button>
                      </div>

                      <div className="mt-3 text-start">
                        <h1 className="text-sm font-medium text-gray-800 dark:text-white truncate">{e.productName}</h1>
                        <span className="text-red-600 font-semibold">${e.price}</span>
                      </div>
                    </div>



                  </SwiperSlide>
                )
              })}

        </Swiper>
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
              <img src={kal3} alt="" className="xl:w-[70%] sm:w-[74%] h-[300px] m-auto drop-shadow-[0px_0px_20px] drop-shadow-white " />
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
