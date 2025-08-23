import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

import { Trash2 } from 'lucide-react';
import { AddWishRed, adToCart, clearWish, corzina } from "@/app/productSl";
import { useAppDispatch, useAppSelector } from "@/app/hook";


const Wishlist = () => {

  const { dataWish } = useAppSelector(state => state.prod)
  console.log(dataWish);

  const dispatch = useAppDispatch()
  return (
    <div className="h-[100vh]" >
      <div className="flex items-center justify-between w-[85%] m-auto mt-[100px] mb-16" >
        <h1 className="xl:text-3xl sm:text-xl " >
          Wishlist ({dataWish?.length})
        </h1>
        <button
          onClick={() => { dispatch(clearWish()) }}
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
          {dataWish?.slice(0, 10)?.map((e: any) => {
            return (
              <SwiperSlide className="!w-[310px] !h-[340px]">
                <div className="relative p-2 w-full h-full">
                  <div
                    className="bg-white dark:bg-gray-300 rounded-2xl shadow-sm overflow-hidden
                 flex flex-col justify-between h-full transition duration-300"
                  >
                    {/* Remove button */}
                    <button
                      onClick={() => dispatch(AddWishRed(e))}
                      className="absolute right-3 top-3 z-10 bg-gray-200 dark:bg-gray-700
                   rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      <Trash2 size={18} className="text-black dark:text-white" />
                    </button>

                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center p-4">
                      <img
                        src={
                          e.image
                            ? `http://37.27.29.18:8002/images/${e.image}`
                            : e.images?.[0]?.images
                              ? `http://37.27.29.18:8002/images/${e.images[0].images}`
                              : "/fallback.png"
                        }
                        alt={e.productName}
                        className="max-h-[200px] object-contain mix-blend-multiply"
                      />
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={() => {
                        dispatch(adToCart(e.id));
                        dispatch(corzina());
                      }}
                      className="w-full py-2.5 bg-black text-white text-sm font-medium
                   hover:bg-gray-900 transition"
                    >
                      Add To Cart
                    </button>
                  </div>

                  {/* Title + Price */}
                  <div className="mt-3 text-start">
                    <h1 className="text-sm font-medium text-gray-800 dark:text-white truncate">
                      {e.productName}
                    </h1>
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
