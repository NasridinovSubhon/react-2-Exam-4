import { Link, NavLink, Outlet } from "react-router-dom"
import logo from "@/assets/logo.png"
import { ArrowDownUp, Box, Facebook, Heart, Instagram, LogOut, Search, SendHorizontal, ShoppingCart, Twitter, User } from "lucide-react"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import CustomizedSwitches from "@/components/switch"

import TemporaryDrawer from "@/components/menu"
import { useState } from "react"
import { useTheme } from "@/theme/theme-provider"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useAppDispatch, useAppSelector } from "@/app/hook"
import { SearProduct } from "@/app/productSl"


const Layout = () => {

    const [nav, SetNav] = useState(false)
    const [N_Hom_Med, Set_Nav_Hom_Me] = useState(false)
    const [N_Con_Med, Set_Nav_Con_Me] = useState(false)
    const [N_Abo_Med, Set_Nav_Abo_Me] = useState(false)
    const { theme, } = useTheme()

    const { dataId, loadCorLen, dataWish, data, dataSea, loadSear } = useAppSelector(state => state.prod) as any

    const dispatch = useAppDispatch()

    const DrawerList = (
        <ul className={`h-[100vh] dark:bg-black bg-white dark:text-white text-black  w-[100%] m-auto -mt-[0.59px] ${theme == "dark" ? "border-[#86b9d6] border-2 " : " border-[#180c85] border-2"} `} >

            <div className="w-[95%] m-auto mt-4 ">
                <NavLink to={"/"} className={({ isActive }) => `${isActive ? Set_Nav_Hom_Me(true) : Set_Nav_Hom_Me(false)}`}  >
                    <li className={` ${N_Hom_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500" : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 mb-3 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer  `}>
                        Home
                    </li>
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Con_Me(true) : Set_Nav_Con_Me(false)}`} to={"contact"} >
                    <li className={` ${N_Con_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500" : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 mb-3 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer  `} >
                        <h1 className="font-medium">
                            Contact
                        </h1>
                    </li>
                </NavLink>
                <NavLink className={({ isActive }) => `${isActive ? Set_Nav_Abo_Me(true) : Set_Nav_Abo_Me(false)}`} to={"about"} >
                    <div
                        className={` ${N_Abo_Med ? "bg-cyan-500/20 dark:bg-white-100/30  dark:hover:bg-violet-500 " : "bg-gray-100/80 dark:bg-gray-800/90 "}  w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80  hover:bg-blue-600/40 dark:hover:bg-white dark:hover:text-black hover:text-white transition-colors duration-200 cursor-pointer  `}>
                        <li>
                            About
                        </li>
                    </div>
                </NavLink>
            </div>
        </ul >
    );

    return (
        <div className="text-black" >
            <div className="dark:text-white text-black " >
                <div className="xl:w-[90%] m-auto mt-[20px] flex items-center justify-between sm:w-[90%]  ">
                    <div className="sm:flex items-center justify-between w-[25%] xl:hidden text-center">
                        <TemporaryDrawer DrawerList={DrawerList} />
                        <div className="sm:flex items-center justify-between w-[55%] xl:hidden">

                        </div>
                    </div>
                    <div className="w-[55%] flex items-center justify-between">
                        <img src={logo} alt="" className="xl:w-[230px]  dark:invert xl:block xl:h-[70px] sm:hidden" />
                        <div className="xl:w-[45%] xl:flex items-center justify-between sm:hidden ">
                            <ul className="flex items-center justify-between w-[100%] ">
                                <li>
                                    <NavLink to={"/"} className={({ isActive }) => `${isActive ? "border-b-2 border-black  dark:border-white "
                                        : ""}`}  >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) => `
                                ${isActive ? "border-b-2 border-black dark:border-white " : ""}
                                `} to={"contact"} >
                                        Contact
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive }) =>
                                        `${isActive ? "border-b-2 border-black dark:border-white " : ""}`
                                    } to={"about"} >
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="xl:w-[37%] flex items-center justify-between sm:w-[48%] ml-5">
                        <Dialog>
                            <DialogTrigger className="xl:w-[60%] sm:w-[230px]  xl:ml-0 sm:-ml-[150px] ">
                                <div className="flex  items-center  xl:w-[100%]   sm:w-[73%]   justify-between bg-gray-100 dark:bg-blue-800 px-4 py-2 rounded-xl cursor-pointer hover:shadow-md transition-all duration-200 border border-transparent hover:border-blue-300 dark:hover:border-blue-600">
                                    <span className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                                        Что вы ищете?
                                    </span>
                                    <Search className="h-5 w-5 text-gray-400 dark:text-gray-200" />
                                </div>
                            </DialogTrigger>
                            <DialogContent className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                                <form onSubmit={(e) => { e.preventDefault() }} >
                                    <DialogHeader>
                                        <DialogTitle>
                                            <div className="flex items-center gap-2 p-1 bg-blue-50 dark:bg-blue-900/30 rounded-xl border border-blue-100 dark:border-blue-700/50 shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 hover:shadow-md  mt-3 mb-2">
                                                <input
                                                    onInput={(el: any) => { dispatch(SearProduct(el.target.value)) }}
                                                    className="flex-1 border-none outline-none bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-base px-3 py-2 focus:ring-0"
                                                    placeholder="Поиск товаров..."
                                                />
                                                <Search
                                                    type="submit"
                                                    className="w-[35px] text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-100 dark:hover:bg-blue-800/30 mr-1" />
                                            </div>
                                        </DialogTitle>
                                    </DialogHeader>
                                    <div className="p-3 max-h-90 ">
                                        {dataSea.length === 0 ?
                                            data.slice(0, 5).map((e: any) => (
                                                <div key={e.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                                                    <Link to={"/info/" + e.id}>
                                                        <DialogClose className="w-full">
                                                            <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3">
                                                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center flex-shrink-0">
                                                                    <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="font-medium text-gray-900 dark:text-white truncate">
                                                                        {e.productName}
                                                                    </div>
                                                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                                        ${e.price}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                        </DialogClose>
                                                    </Link>
                                                </div>
                                            ))
                                            : loadSear ?
                                                <div className="flex justify-center py-6">
                                                    <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                                : dataSea.slice(0, 5).map((e: any) => (
                                                    <div key={e.id} className="border-b border-gray-100 dark:border-gray-700 last:border-0">
                                                        <Link to={"/info/" + e.id}>
                                                            <DialogClose className="w-full">
                                                                <button className="w-full text-left p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center gap-3">
                                                                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded flex items-center justify-center flex-shrink-0">
                                                                        <Search className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="font-medium text-gray-900 dark:text-white truncate">
                                                                            {e.productName}
                                                                        </div>
                                                                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                                            ${e.price}
                                                                        </div>
                                                                    </div>
                                                                </button>
                                                            </DialogClose>
                                                        </Link>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>

                        <div className="relative xl:block sm:hidden ">
                            <Link to={"wishlist"} >
                                <div className="bg-[#DB4444] dark:bg-white dark:text-black text-white w-[20px] h-[20px] rounded-full absolute -top-2 -right-2.5 flex items-center justify-center text-center">
                                    {dataWish.length || 0}
                                </div>
                                <Heart />
                            </Link>
                        </div>

                        <div className="relative xl:-ml-0 sm:-ml-16">
                            {
                                localStorage.getItem("accessToken") ?
                                    <Link to={"byId"}>
                                        <div className="bg-[#DB4444] dark:bg-white dark:text-black text-white w-[20px] h-[20px] rounded-full absolute -top-2 -right-2 flex items-center justify-center text-center">
                                            {loadCorLen ? <span className="w-3 h-3 border-2 border-white dark:border-black  border-t-transparent dark:border-t-transparent rounded-full animate-spin inline-block"></span> :
                                                dataId?.productsInCart?.length || 0
                                            }
                                        </div>
                                        <ShoppingCart />
                                    </Link> :
                                    <Link to={"login"}>
                                        <div className="bg-[#DB4444] dark:bg-white dark:text-black text-white w-[20px] h-[20px] rounded-full absolute -top-2 -right-2 flex items-center justify-center text-center">

                                            <h1 className="text-[13px]" > ❌ </h1>

                                        </div>
                                        <ShoppingCart />
                                    </Link>
                            }
                        </div>

                        <Popover>
                            <PopoverTrigger className="z-10" ><User className="xl:ml-0 sm:ml-3 " /></PopoverTrigger>
                            <PopoverContent className="z-10 bg-[#251f1f]  mt-[20px] text-white xl:w-[170px]  sm:w-[200px] " >
                                <div className=" mb-5 ">
                                    <CustomizedSwitches theme={theme} />
                                </div>
                                <ul className="">
                                    <NavLink to={"acount"} className={({ isActive }) => `${isActive ? SetNav(true) : SetNav(false)} dark:bg-[#000000] z-10 dark:text-white bg-white text-black `}>
                                        <li className="flex items-center gap-6" >
                                            <User className={` ${nav ? "dark:border-cyan-300 border-3 border-white w-[25px] h-[25px] " : ""} rounded-full text-white `} />
                                            <h1 className="text-white">Account</h1>
                                        </li>
                                    </NavLink>
                                </ul>
                                <div className="relative xl:hidden sm:block  mt-6">
                                    <Link to={"wishlist"} className="flex items-center gap-6" >
                                        <div className="bg-[#DB4444] dark:bg-white dark:text-black text-white w-[20px] h-[20px] rounded-full absolute -top-2 left-2.5 flex items-center justify-center text-center ">
                                            {dataWish.length || 0}
                                        </div>
                                        <Heart />
                                        <span>Wishlist</span>
                                    </Link>
                                </div>
                                <Link to={"/"}
                                >
                                    <div
                                        onClick={() => localStorage.clear()}
                                        className="flex items-center gap-6 mt-6" >
                                        <LogOut />
                                        <h1>Logout</h1>
                                    </div>
                                </Link>
                                <div className="flex items-center gap-6 mt-6" >
                                    <Box />
                                    <h1>My Order</h1>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>

                </div>
                <hr className="mt-4" />
                <Outlet />
                <footer className="dark:bg-gray-900 bg-black  border-white border-2  text-white py-10   w-full  xl:mb-0 sm:-mb-[200px]  ">
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
        </div >

    )
}

export default Layout
