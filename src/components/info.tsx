import { useAppDispatch, useAppSelector } from "@/app/hook"
import { AddWishRed, adToCart, corzina, DecCart, GetInfo, GetProd, inCremCart } from "@/app/productSl"
import { Heart, Truck, ArrowLeft, Shield, Check, Eye } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../style/style.css';
import { Autoplay } from 'swiper/modules';

const Info = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { dataInfo: dataIInfo, dataWish, data, loading } = useAppSelector(state => state.prod)
  const { id } = useParams() as any
  const dataInfo = dataIInfo as any

  useEffect(() => {
    if (id) {
      dispatch(GetInfo(id)),
        dispatch(GetProd())

    }
  }, [id, dispatch])

  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL']
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0)
  const [mainImageIndex, setMainImageIndex] = useState(0)
  const [loadInDe, setLoadDe] = useState(false)
  const [loadIn, setLoadIn] = useState(false)

  const [ind, setInd] = useState(0)
  const arr = [60, 70, 80, 90, 100]


  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 dark:text-gray-300 mb-6 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back
        </button>

        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/2">
            <div className="flex flex-col-reverse lg:flex-row gap-4">

              <div className="flex lg:flex-col gap-3 order-2 lg:order-1 overflow-x-auto lg:overflow-visible py-2">
                {dataInfo?.images?.map((image: any, index: number) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-gray-100 dark:bg-gray-300 flex items-center justify-center cursor-pointer border-2 ${mainImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                    onClick={() => setMainImageIndex(index)}
                  >
                    <img
                      src={`http://37.27.29.18:8002/images/${image?.images}`}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-12 h-12 object-contain mix-blend-multiply"
                      style={{ width: arr[ind] + "%" }
                      }
                    />
                  </div>
                ))}
              </div>

              <div
                className="order-1 lg:order-2 bg-gray-100 dark:bg-gray-300 rounded-xl h-80 lg:h-96 w-full flex items-center justify-center p-6 overflow-hidden"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onMouseMove={handleMouseMove}
              >
                {dataInfo?.images && dataInfo.images.length > 0 ? (
                  <img
                    src={`http://37.27.29.18:8002/images/${dataInfo.images[mainImageIndex].images}`}
                    alt={dataInfo.productName}
                    className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-300 ease-in-out"
                    style={{
                      width: arr[ind] + "%",
                      transform: hover ? "scale(1.5)" : "scale(1)",
                      transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                      cursor: "zoom-in",
                    }}
                  />
                ) : (
                  <div className="text-gray-400">No image available</div>
                )}
              </div>
            </div>
          </div>


          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {dataInfo?.productName}
            </h1>

            <div className="flex items-center mb-4">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${dataInfo?.productInMyCart ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {dataInfo?.productInMyCart ? (
                  <>
                    <Check size={12} className="mr-1" /> In Stock
                  </>
                ) : (
                  'Out of Stock'
                )}
              </span>
              <div className="ml-4 flex items-center text-amber-500">

              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                ${dataInfo?.price}
              </h2>
              {dataInfo?.originalPrice && (
                <p className="text-lg text-gray-500 line-through">${dataInfo.originalPrice}</p>
              )}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {dataInfo?.description}
            </p>

            <div className="border-t border-b border-gray-200 dark:border-gray-700 py-6 mb-6">
              <div className="flex items-center mb-4">
                <span className="text-gray-900 dark:text-white font-medium mr-4">Colour:</span>
                <div
                  style={{ backgroundColor: dataInfo?.color }}
                  className="w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600"
                ></div>
              </div>

              <div className="mb-6">
                <span className="text-gray-900 dark:text-white font-medium block mb-3">Size:</span>
                <div className="flex gap-2">
                  {sizeOptions.map((size, index) => (
                    <button
                      key={size}
                      className={`flex-1 py-2 rounded-md font-medium text-center transition-all ${selectedSizeIndex === index
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:border-blue-500'}`}
                      onClick={() => { setSelectedSizeIndex(index), setInd(index) }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={async () => {
                      setLoadDe(true)
                      await dispatch(DecCart(dataInfo?.productInfoFromCart?.id))
                      dispatch(GetInfo(dataInfo?.id))
                      setLoadDe(false)
                    }}
                    disabled={loadInDe}
                    className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition"
                  >
                    {loadInDe ? (
                      <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                    ) : (
                      "-"
                    )}
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center bg-white dark:bg-gray-900 font-medium">
                    {dataInfo?.productInfoFromCart?.quantity || 0}
                  </div>
                  <button
                    onClick={async () => {
                      setLoadIn(true)
                      await dispatch(inCremCart(dataInfo?.productInfoFromCart?.id))
                      dispatch(GetInfo(dataInfo?.id))
                      setLoadIn(false)
                    }}
                    disabled={loadIn}
                    className="h-10 w-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-50 transition"
                  >
                    {loadIn ? (
                      <span className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin inline-block"></span>
                    ) : (
                      "+"
                    )}
                  </button>
                </div>

                <button
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors shadow-md"
                  onClick={() => {
                    dispatch(adToCart(dataInfo.id))
                    dispatch(corzina())
                    dispatch(GetInfo(id))
                  }}
                >
                  Add to Cart
                </button>

                <button
                  className={`p-2.5 rounded-full border transition-colors ${dataWish?.some((el: any) => el.id === dataInfo?.id)
                    ? "bg-red-100 border-red-200 text-red-600"
                    : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-300"}`}
                  onClick={() => {
                    dispatch(AddWishRed(dataInfo))
                  }}
                >
                  <Heart
                    className={dataWish?.some((el: any) => el.id === dataInfo?.id) ? "fill-current" : ""}
                    size={20}
                  />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Truck size={24} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Free Delivery</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Enter your postal code for Delivery Availability</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Shield size={24} className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">Return Delivery</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Free 30 Days Delivery Returns. Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                          <button className={`p-2.5 rounded-full  border transition-colors ${dataWish?.some((el: any) => el.id === e?.id)
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
            <Link to={"/products"} >
              <button className="w-[100%] m-auto py-3 xl:text-[16px] sm:text-[14px] text-white bg-[#DB4444] rounded-[6px]"> View All Products </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Info
