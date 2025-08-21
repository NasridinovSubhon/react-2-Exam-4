import telDom from "@/assets/telDom.png"
import iconEM from "@/assets/emailIc.png"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const Contact = () => {
  return (
    <div>
      <div className="xl:w-[85%] m-auto xl:mt-[120px] shadow-[0_8px_14px_rgba(0,0,0,0.12)]  hover:shadow-[0_8px_34px_rgba(0,0,0,0.12)] sm:w-[90%] sm:mt-[100px] mb-[180px] flex flex-wrap justify-between items-center" >
        <div className="xl:w-[25%] sm:w-[97%] p-6 dark:bg-[#1e1d1dd0] dark:text-white  text-black rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-shadow duration-300 bg-white">
          <div className="flex items-center gap-4  ">
            <img src={telDom} alt="" className="w-10" />
            <span className="text-lg font-medium  ">Call To Us</span>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 ">We are available 24/7, 7 days a week.</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 ">Phone: +8801611112222</p>
          <hr className="my-4 border-gray-200" />
          <div className="flex items-center gap-4">
            <img src={iconEM} alt="" className="w-10" />
            <span className="text-lg font-medium">Email Us</span>
          </div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 ">Fill out our form and we will contact you within 24 hours.</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 ">Emails: customer@exclusive.com</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 ">Emails: support@exclusive.com</p>
        </div>

        <div className="xl:w-[73%] relative sm:w-[95%] p-[5%]" >
          <div>
            <div className="flex items-center justify-between flex-wrap gap-4 ">
              <Input className="xl:w-[30%] sm:w-full p-5 " placeholder="Name" />
              <Input className="xl:w-[30%] sm:w-full p-5 " placeholder="Email" type="email" />
              <Input className="xl:w-[30%] sm:w-full p-5 " placeholder="Phone" type="number" />
            </div>
            <Textarea className="mt-4 p-5 w-full max-h-[80px] " placeholder="Your Massage" />
          </div>
          <button className="text-white rounded-sm absolute xl:bottom-0 sm:-bottom-14 right-16   bg-[#DB4444] p-[10px_29px] " > Send Massage </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
