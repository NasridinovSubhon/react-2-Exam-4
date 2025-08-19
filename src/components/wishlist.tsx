
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/style/style.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ShoppingCart, Trash2 } from 'lucide-react';


const Wishlist = ({ setWish, wish }) => {




  return (
    <div className="h-[100vh]" >
      <div className="flex items-center justify-between w-[85%] m-auto mt-[100px] mb-16" >
        <h1 className="xl:text-3xl sm:text-xl " >
          Wishlist ({wish?.length})
        </h1>
        <button className="border-2 border-black p-[13px_40px] rounded-md " > Move All To Bag </button>
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

          {wish?.map((el) => {
            return <SwiperSlide style={{ width: "300px", height: "390px" }}>
              <div className="w-full text-start h-full flex flex-col">
                <div className="bg-[#F5F5F5] py-8 relative w-full rounded-xl flex-1 flex flex-col">
                  <button
                    className="absolute right-3 top-3 p-2 rounded-full bg-white text-black shadow-sm hover:bg-gray-100 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18}
                      onClick={() => {
                        const update = wish.filter((e) => e.id !== el.id);
                        setWish(update);
                        localStorage.setItem("wish", JSON.stringify(update));
                      }}
                    />
                  </button>

                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={`http://37.27.29.18:8002/images/${el.image}`}
                      alt={el.productName}
                      className="w-[75%] max-h-[200px] min-h-[200px] mix-blend-multiply object-cover mb-10 "
                      loading="lazy"
                    />
                  </div>

                  <button className="text-white bg-black dark:bg-cyan-800 w-full pt-3 h-[53px] absolute bottom-0 rounded-b-xl flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors mt-auto">
                    <ShoppingCart size={16} />
                    Add To Cart
                  </button>
                </div>

                <div className="mt-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                    {el.productName}
                  </h3>
                  <span className="text-red-500 font-bold">${el.price.toFixed(2)}</span>
                </div>
              </div>
            </SwiperSlide>
          })}
        </Swiper>

      </div>
    </div>
  )
}

export default Wishlist
