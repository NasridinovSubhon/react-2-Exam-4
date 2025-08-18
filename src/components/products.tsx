import { memo } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import sagPr from "@/assets/sagProd.png"
import { Eye, Heart } from "lucide-react"

const dataProd = [
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
  {
    img: sagPr,
    name: "Breed Dry Dog Food",
    price: 100,
  },
]

const Products = () => {
  return (
    <div>
      <div className="flex xl:w-[85%] sm:w-[95%] m-auto  gap-10 sm:mt-[60px] xl:mt-[120px] mb-[120px] flex-wrap" >
        <div className="xl:w-[20%] sm:w-[100%]" >
          <Select>
            <SelectTrigger className="w-[180px] m-auto">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All products</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Home">Home & Lifestyle</SelectItem>
              <SelectItem value="Sports">Sports & Outdoor</SelectItem>
              <SelectItem value="See all">See all</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="xl:w-[76%] sm:w-[85%] m-auto" >
          <div className="flex items-center justify-start gap-8 flex-wrap " >
            {dataProd.map((e, i) => {
              return <div key={i} className="xl:w-[31%] group sm:w-[100%]" >
                <div className="relative bg-[#F5F5F5] py-8 rounded-[6px] " >
                  <img src={e.img} alt="" className="w-[55%] m-auto h-[220px] object-center mb-6" />
                  <div className="absolute top-2 right-3" >
                    <button className=" mb-2 rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                      <Heart />
                    </button>
                    <button className="rounded-full block bg-white p-2 shadow hover:bg-gray-100 transition text-black ">
                      <Eye />
                    </button>
                  </div>
                  <button className="xl:opacity-0 group-hover:opacity-100 absolute bottom-0 w-full sm:opacity-100 rounded-bl-xl bg-black text-white py-3 duration-400" > Add To Cart </button>
                </div>
                <h1 className="mt-2 text-[16px]" >{e.name}</h1>
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
