import { Link, Outlet } from "react-router-dom"
import logo from "@/assets/logo.png"
import { ArrowDownUp, Facebook, Heart, Instagram, Search, SendHorizontal, ShoppingCart, Twitter, User } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import CustomizedSwitches from "@/components/switch"

import TemporaryDrawer from "@/components/menu"
import { useSelector } from "react-redux"
import { toggleTheme } from "@/reducers/theme"


const cart = [
    {

    }
]


const Layout = () => {
    const theme = useSelector((state) => state.theme.mode);

    const DrawerList = (

        <ul className={`w-[200px] dark:bg-[#000000ed] z-10 dark:text-white bg-white text-black h-[100vh]  -mt-[0.59px] ${theme == "dark" ? "border-[#c8d556] border-2 " : " border-[#180c85] border-2 "} `} >
            <div className="flex items-center justify-baseline w-[100%] relative ">
                <CustomizedSwitches toggleTheme={toggleTheme} theme={theme} />
                <ul >
                    <li>
                        <Link to={"login"} >
                            <User className="absolute right-2 top-3" />
                        </Link>
                    </li>
                </ul>
            </div>
            <li className="w-full mt-2 pl-4 py-2 rounded-lg  border-l-2 border-gray-800 dark:border-gray-200  dark:hover:bg-gray-600 bg-gray-100/80 dark:bg-gray-800/90  hover:bg-blue-600 hover:text-white  transition-colors duration-200 cursor-pointer">

                <Link to={"home"} >
                    Home
                </Link>

            </li>
            <div className="w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80 dark:bg-gray-800/90 hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer">
                <h1 className="font-medium">Contact</h1>
            </div>
            <div className="w-full mt-2 pl-4 py-2 rounded-lg   border-l-2 border-gray-800 dark:border-gray-200   dark:hover:bg-gray-600  bg-gray-100/80 dark:bg-gray-800/90   hover:bg-blue-600 hover:text-white   transition-colors duration-200 cursor-pointer">
                <li>
                    <Link to={"about"} >
                        About
                    </Link>
                </li>
            </div>
            <li className="w-full mt-2 pl-4 py-2 rounded-lg  border-l-2 border-gray-800 dark:border-gray-200  dark:hover:bg-gray-600 bg-gray-100/80 dark:bg-gray-800/90  hover:bg-blue-600 hover:text-white  transition-colors duration-200 cursor-pointer">
                <Link to={"/"} >
                    sign up
                </Link>
            </li>
        </ul >

    );

    return (
        <div className="dark:text-white text-black" >
            <div className="xl:w-[90%] m-auto mt-[20px] flex items-center justify-between sm:w-[90%]">
                <div className="sm:flex items-center justify-between w-[25%] xl:hidden text-center">
                    <TemporaryDrawer toggleTheme={toggleTheme} theme={theme} DrawerList={DrawerList} />
                    <div className="sm:flex items-center justify-between w-[55%] xl:hidden">
                        <h1 className="xl:hidden sm:block text-[30px] "> Exclusive </h1>
                    </div>
                </div>
                <div className="w-[55%] flex items-center justify-between">
                    <img src={logo} alt="" className="xl:w-[230px] xl:block xl:h-[70px] sm:hidden" />
                    <div className="xl:w-[45%] xl:flex items-center justify-between sm:hidden ">
                        <ul className="flex items-center justify-between w-[100%] ">
                            <li>
                                <Link to={"home"} >
                                    Home
                                </Link>
                            </li>
                            <h1>Contact</h1>
                            <li>
                                <Link to={"about"} >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to={"/"} >
                                    sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="xl:w-[45%] flex items-center justify-between sm:w-[10%] ml-5">
                    <Dialog>
                        <DialogTrigger className="w-[55%]">
                            <div className="xl:flex items-center justify-around dark:bg-[#4779c5] bg-[#F5F5F5] xl:w-[100%] sm:hidden">
                                <div className="py-[10px] text-gray-400 active:text-gray-600 cursor-pointer duration-100"> What are you looking for? </div>
                                <Search className="mr-[15px] " />

                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>

                                <DialogTitle>
                                    <div className="flex  dark:bg-blue-500/40 bg-blue-500/30 dark:bg-gra items-center py-[3px] justify-between mt-[15px] rounded-xl">
                                        <Search className="mr-[15px]" />
                                        <Input className="w-[90%] border-none outline-none" placeholder="Search Cart" />
                                    </div>
                                </DialogTitle>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                    <Heart className="xl:block sm:hidden" />
                    <div className="relative">
                        <div className="bg-[#DB4444] dark:bg-white dark:text-black text-white w-[20px] h-[20px] rounded-full absolute -top-2 -right-2 flex items-center justify-center text-center">
                            0
                        </div>
                        <ShoppingCart />
                    </div>
                    <div className="xl:block sm:hidden">
                        <CustomizedSwitches toggleTheme={toggleTheme} theme={theme} />
                    </div>
                    <ul className="xl:block sm:hidden"  >
                        <li>
                            <Link to={"login"} >
                                <User />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className="mt-4" />
            <Outlet />



            <footer className="bg-black  border-white border-2  text-white py-10   w-full  xl:mb-0 sm:-mb-[200px]  ">
                <div className="w-[90%] mt-[20px] m-auto py-[10px] flex  justify-between flex-wrap " >
                    <div className="xl:w-[20%] sm:w-[90%]">
                        <h1 className="xl:text-[24px] sm:text-[18px]"> Exclusive </h1>
                        <h1 className="xl:text-[20px] mt-[11px] sm:text-[16px]"> Subscribe</h1>
                        <h1 className="xl:text-[16px] mt-[7px] sm:text-[14px]"> Get 10% off your first order </h1>
                        <div className="flex items-center justify-between mt-[10px] border-white border-[2px]">
                            <input type="text" className="w-[90%] outline-none p-[6px]" placeholder="Enter your email" />
                            <SendHorizontal />
                        </div>
                    </div>
                    <div className="xl:w-[20%] sm:w-[90%] xl:mt-0 sm:mt-4 ">
                        <h1 className="xl:text-[24px] sm:text-[18px]"> Support </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. </h1>
                        <h1 className="xl:text-[16px] mt-[7px] sm:text-[14px]"> exclusive@gmail.com </h1>
                        <h1 className="xl:text-[16px] mt-[7px] sm:text-[14px]"> +88015-88888-9999 </h1>
                    </div>
                    <div className="xl:w-[15%] sm:w-[45%]" >
                        <h1 className="xl:text-[24px] sm:text-[18px] xl:mt-0 sm:mt-5 "> Account </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> My Account</h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Cart </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Wishlist </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Shop </h1>
                    </div>
                    <div className="xl:w-[15%] sm:w-[45%]" >
                        <h1 className="xl:text-[24px] sm:text-[18px] xl:mt-0 sm:mt-5 "> Quick Link </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Privacy Policy </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Terms Of Use </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> FAQ </h1>
                        <h1 className="xl:text-[16px] mt-[11px] sm:text-[14px]"> Contact </h1>
                    </div>
                    <div className="xl:w-[15%] sm:w-[100%] " >
                        <h1 className="xl:text-[24px] sm:text-[18px] "> Social  </h1>
                        <div className="flex items-center justify-between mt-[20px]">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <ArrowDownUp />
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Layout
