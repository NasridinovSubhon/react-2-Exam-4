import { Link, Outlet } from "react-router-dom"
import logo from "@/assets/logo.png"
import { ArrowDownUp, Facebook, Heart, Instagram, Menu, Search, SendHorizontal, ShoppingCart, Twitter } from "lucide-react"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import CustomizedSwitches from "@/components/switch"

import TextField from "@mui/material/TextField"
import TemporaryDrawer from "@/components/menu"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/reducers/theme"




const Layout = () => {
    const theme = useSelector((state) => state.theme.mode);



    return (
        <div className="" >

            <div className="xl:w-[85%] m-auto mt-[20px] flex items-center justify-between sm:w-[90%] sticky top-0">
                <div className="sm:flex items-center justify-between w-[25%] xl:hidden text-center">
                    <TemporaryDrawer toggleTheme={toggleTheme} theme={theme} />
                    <div className="sm:flex items-center justify-between w-[55%] xl:hidden">
                        <h1 className="xl:hidden sm:block text-[30px] "> Exclusive </h1>
                    </div>
                </div>

                <div className="w-[55%] flex items-center justify-between">
                    <img src={logo} alt="" className="xl:w-[230px] xl:block xl:h-[70px] sm:hidden" />
                    <div className="xl:w-[45%] xl:flex items-center justify-between sm:hidden ">
                        <h1>Home</h1>
                        <h1>Contact</h1>
                        <h1>About</h1>
                        <ul>
                            <li>
                                <Link to={"/"} >
                                    sign up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="xl:w-[40%] flex items-center justify-between sm:w-[10%]">
                    <Dialog>
                        <DialogTrigger className="w-[60%]">
                            <div className="xl:flex items-center justify-around bg-[#F5F5F5] xl:w-[100%] sm:hidden">
                                <div className="py-[10px] text-gray-400 active:text-gray-600 cursor-pointer duration-100"> What are you looking for? </div>
                                <Search className="mr-[15px] " />
                            </div>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>

                                <DialogTitle>
                                    <div className="flex bg-gray-300 dark:bg-gra items-center py-[3px] justify-between mt-[15px] rounded-xl">
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

                </div>
            </div>
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
