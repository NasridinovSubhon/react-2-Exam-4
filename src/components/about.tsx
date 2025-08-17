
import siya from "@/assets/dkhta.png"
import servKam from "@/assets/servisKam.png"
import dkhta from "@/assets/dkhta.png"
import bot from "@/assets/bot.png"
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

const About = () => {
  return (
    <div>

      <div className="flex items-center justify-between flex-wrap w-[85%] gap-6 mt-[80px] m-auto mb-20 " >
        <div className="xl:w-[44%] sm:w-[100%]">
          <h1 className="xl:text-[54px] sm:text-[27px] ">Our Story</h1>
          <h1 className="mt-5 text-[15px] " >Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </h1>
          <p className="mt-6 text-[15px]" > Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <img src={siya} alt="" className="xl:w-[50%] sm:w-[100%]" />
      </div>

      <div className="xl:w-[85%] sm:w-[95%] m-auto flex items-center justify-between flex-wrap gap-8 text-center mt-[140px] mb-[130px]" >
        <div className="xl:w-[23%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">10.5k  </h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[23%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">33k</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[23%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">45.5k</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[23%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3 font-bold ">10.5k </h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
      </div>

      <div className="flex items-center justify-between flex-wrap xl:w-[80%] sm:w-[90%] m-auto gap-6">
        <div className="xl:w-[31%] sm:w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center">
          <img
            src={bot}
            alt="profile"
            className="w-[80%] xl:h-[400px] sm:h-[260px] object-cover rounded-xl m-auto shadow-md"
          />
          <h1 className="text-[26px] font-semibold mt-4 text-gray-800">Tom Cruise</h1>
          <p className="mt-2 text-gray-500">Founder & Chairman</p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition">
              <Twitter className="text-blue-500 w-6 h-6" />
            </button>
            <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition">
              <Instagram className="text-pink-500 w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="xl:w-[31%] sm:w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center">
          <img
            src={dkhta}
            alt="profile"
            className="w-[80%] xl:h-[400px] sm:h-[260px] object-cover rounded-xl m-auto shadow-md"
          />
          <h1 className="text-[26px] font-semibold mt-4 text-gray-800">Tom Cruise</h1>
          <p className="mt-2 text-gray-500">Founder & Chairman</p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition">
              <Twitter className="text-blue-500 w-6 h-6" />
            </button>
            <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition">
              <Instagram className="text-pink-500 w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="xl:w-[31%] sm:w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 text-center">
          <img
            src={bot}
            alt="profile"
            className="w-[80%] xl:h-[400px] sm:h-[260px] object-cover rounded-xl m-auto shadow-md"
          />
          <h1 className="text-[26px] font-semibold mt-4 text-gray-800">Tom Cruise</h1>
          <p className="mt-2 text-gray-500">Founder & Chairman</p>
          <div className="flex items-center justify-center gap-6 mt-4">
            <button className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition">
              <Twitter className="text-blue-500 w-6 h-6" />
            </button>
            <button className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition">
              <Instagram className="text-pink-500 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="xl:w-[70%] sm:w-[95%] m-auto flex items-center justify-between flex-wrap gap-8 text-center mt-[140px] mb-[130px]" >
        <div className="xl:w-[30%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">10.5k  </h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[30%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">33k</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>
        <div className="xl:w-[30%] border py-10  sm:w-[100%]" >
          <img src={servKam} alt="" className=" xl:w-[22%] sm:w-[30%] m-auto" />
          <h1 className="text-[27px] mt-3  font-bold ">45.5k</h1>
          <h1 className="text-[14px] mt-1">Free delivery for all orders over $140</h1>
        </div>

      </div>

    </div>
  )
}

export default About
