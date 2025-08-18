import { Link, NavLink, Outlet } from "react-router-dom"
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
import { useState } from "react"



const cart = [
    {
    }
]

const Layout = () => {

    const [nav, SetNav] = useState(false)
    const [N_Hom_Med, Set_Nav_Hom_Me] = useState(false)
    const [N_Con_Med, Set_Nav_Con_Me] = useState(false)
    const [N_Abo_Med, Set_Nav_Abo_Me] = useState(false)
    const [N_Sig_Med, Set_Nav_Sig_Me] = useState(false)

    const theme = useSelector((state) => state.theme.mode);

    const DrawerList = (

        <ul className={`h-[100vh] w-[200px] -mt-[0.59px] ${theme == "dark" ? "border-[#c8d556] border-2 " : " border-[#180c85] border-2 "} `} >
            <div className="flex items-center justify-baseline w-[100%] relative">
                <CustomizedSwitches toggleTheme={toggleTheme} theme={theme} />
                <NavLink to={"login"} className={({ isActive }) => `${isActive ? SetNav(true) : SetNav(false)} dark:bg-[#000000ed] z-10 dark:text-white bg-white text-black `}>
                    <li>
                        <User className={` ${nav ? "dark:border-white border-3 border-black w-[25px] h-[25px] " : ""} rounded-full absolute right-2 top-3`} />
                    </li>
                </NavLink>
            </div>
            <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Hom_Me(true) : Set_Nav_Hom_Me(false)}`} to={"home"} >
                <li className={` ${N_Hom_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500" : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer`}>
                    Home
                </li>
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Con_Me(true) : Set_Nav_Con_Me(false)}`} to={"contact"} >
                <div
                    className={` ${N_Con_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500" : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer`}>
                    <li>
                        <h1 className="font-medium">
                            Contact
                        </h1>
                    </li>
                </div>
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Abo_Me(true) : Set_Nav_Abo_Me(false)}`} to={"about"} >
                <div
                    className={` ${N_Abo_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500 " : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer`}>
                    <li>
                        About
                    </li>
                </div>
            </NavLink>
            <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Sig_Me(true) : Set_Nav_Sig_Me(false)}`} to={"/"} >
                <li className={` ${N_Sig_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500" : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer`}>
                    sign up
                </li>
            </NavLink>
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
                                <NavLink className={({ isActive }) => `${isActive ? "border-b-2 border-black"
                                    : ""}`} to={"home"} >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => `
                                ${isActive ? "border-b-2 border-black" : ""}
                                `} to={"contact"} >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    `${isActive ? "border-b-2 border-black" : ""}`
                                } to={"about"} >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    `${isActive ? "border-b-2 border-black" : ""}`} to={"/"} >
                                    sign up
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="xl:w-[45%] flex items-center justify-between sm:w-[10%] ml-5">
                    <Dialog>
                        <DialogTrigger className="w-[55%]">
                            <div className="xl:flex items-center justify-between dark:bg-[#4779c5] bg-[#F5F5F5] xl:w-full sm:hidden px-4 py-2 rounded-lg cursor-pointer hover:shadow-md transition-shadow duration-200">
                                <div className="text-gray-400 active:text-gray-600 duration-100">
                                    What are you looking for?
                                </div>
                                <Search className="ml-2 text-gray-500 dark:text-gray-200" />
                            </div>
                        </DialogTrigger>

                        <DialogContent className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                            <DialogHeader>
                                <DialogTitle>
                                    <div className="flex items-center gap-3 py-2 px-3 bg-blue-500/20 dark:bg-blue-500/40 rounded-xl">
                                        <Search className="text-gray-500 dark:text-gray-200" />
                                        <Input
                                            className="w-full border-none outline-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300"
                                            placeholder="Search Cart"
                                        />
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

        </div >
    )
}

export default Layout
