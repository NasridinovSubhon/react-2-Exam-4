import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import { Trash2 } from 'lucide-react';
import { adToCart } from "@/app/productSl";
import { useAppDispatch } from "@/app/hook";


const Wishlist = ({ setWish, wish }: any) => {

  const dispatch = useAppDispatch()


  return (
    <div className="h-[100vh]" >
      <div className="flex items-center justify-between w-[85%] m-auto mt-[100px] mb-16" >
        <h1 className="xl:text-3xl sm:text-xl " >
          Wishlist ({wish?.length})
        </h1>
        <button
          onClick={() => { localStorage.setItem("wish", JSON.stringify([])), setWish([]) }}
          className="border-2 border-black p-[13px_40px] rounded-md " >
          Move All To Bag
        </button>
      </div>
      <div className="w-[85%] m-auto" >

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
          className="mySwiper" >

          {wish?.slice(0, 10)?.map((e: any) => {
            return (
              <SwiperSlide className="mr-[50px]" style={{ height: "370px", width: "310px", }} >
                <div className="relative p-2 w-[95%] ">
                  <div className="bg-gray-100 dark:bg-gray-800 max-h-[300px] min-h-[200px] rounded-2xl overflow-hidden group relative transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full
                  xl:h-[320px] sm:h-auto">
                    <button className="absolute right-3 top-4 bg-gray-200 rounded-full p-[10px] hover:bg-gray-300 " >
                      <Trash2 size={18}
                        className="text-black"
                        onClick={() => {
                          const update = wish.filter((el: any) => el.id !== e.id);
                          setWish(update);
                          localStorage.setItem("wish", JSON.stringify(update));
                        }}
                      />
                    </button>
                    <div className="flex-1 flex items-center justify-center">
                      <img
                        src={`http://37.27.29.18:8002/images/${e.image}`}
                        alt={e.productName}
                        className="xl:max-h-[140px] sm:max-h-[190px] w-auto object-contain mix-blend-multiply"
                      />
                    </div>


                    <button
                      onClick={() => dispatch(adToCart(e.id))}
                      className="w-full py-3 bg-black text-white text-sm font-medium  transition duration-300"
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
    </div>
  )
}

export default Wishlist
