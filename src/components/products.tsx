import { memo } from "react"

import { Eye, Heart } from "lucide-react"
import { useSelector } from "react-redux"



const Products = () => {

  const { data } = useSelector(state => state.prod)
  
  return (
    <div>
      <div className="flex xl:w-[85%] sm:w-[95%] m-auto  gap-10 sm:mt-[60px] xl:mt-[120px] mb-[120px] flex-wrap" >
        <div className="xl:w-[20%] sm:w-[100%]" >
          <h1 >All products</h1>
          <h1 >Electronics</h1>
          <h1 >Home & Lifestyle</h1>
          <h1 >Sports & Outdoor</h1>
          <h1>See all</h1>
        </div>
        <div className="xl:w-[76%] sm:w-[85%] m-auto" >
          <div className="flex items-center justify-start gap-8 flex-wrap " >
            {data.map((e, i) => {
              return <div key={i} className="xl:w-[31%] group sm:w-[100%]" >
                <div className="relative bg-[#F5F5F5] py-8 rounded-[6px] " >
                  <img src={`http://37.27.29.18:8002/images/${e.image}`} alt={e.productName} className="w-[70%] mix-blend-multiply m-auto h-[220px] object-cover mb-6" />
                  <div className="absolute top-2 right-3" >
                    <button className=" mb-2 rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                      <Heart />
                    </button>
                    <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                      <Eye />
                    </button>
                  </div>
                  <button className="xl:opacity-0 group-hover:opacity-100 absolute bottom-0 w-full sm:opacity-100 rounded-b-[5px] bg-black text-white py-3 duration-400" > Add To Cart </button>
                </div>
                <h1 className="mt-2 text-[16px]" >{e.productName}</h1>
                <h1 className="mt-2 text-[16px] text-red-700 " >${e.price}</h1>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Products)
