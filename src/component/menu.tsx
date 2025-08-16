
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import CustomizedSwitches from './switch';



export default function TemporaryDrawer({ toggleTheme, theme }) {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <div className={`w-[200px] dark:bg-[#000000ed] z-10 dark:text-white bg-white text-black h-[100vh]  -mt-[0.59px] ${theme == "dark" ? "border-[#c8d556] border-2 " : " border-[#180c85] border-2 "} `} >
            <CustomizedSwitches toggleTheme={toggleTheme} theme={theme} />
            <div className="w-full mt-2 pl-4 py-2 rounded-lg  border-l-2 border-gray-800 dark:border-gray-200  dark:hover:bg-gray-600 bg-gray-100/80 dark:bg-gray-800/90  hover:bg-blue-600 hover:text-white  transition-colors duration-200 cursor-pointer">
                <h1 className="font-medium">Home</h1>
            </div>
            <div className="w-full mt-2 pl-4 py-2 rounded-lg border-l-2 border-gray-800 dark:border-gray-200 dark:hover:bg-gray-600bg-gray-100/80 dark:bg-gray-800/90 hover:bg-blue-600 hover:text-white transition-colors duration-200 cursor-pointer">
                <h1 className="font-medium">Contact</h1>
            </div>
            <div className="w-full mt-2 pl-4 py-2 rounded-lg   border-l-2 border-gray-800 dark:border-gray-200   dark:hover:bg-gray-600  bg-gray-100/80 dark:bg-gray-800/90   hover:bg-blue-600 hover:text-white   transition-colors duration-200 cursor-pointer">
                <h1 className="font-medium">About</h1>
            </div>
            <div className="w-full mt-2 pl-4 py-2 rounded-lg  border-l-2 border-gray-800 dark:border-gray-200  dark:hover:bg-gray-600 bg-gray-100/80 dark:bg-gray-800/90  hover:bg-blue-600 hover:text-white  transition-colors duration-200 cursor-pointer">
                <h1 className="font-medium">Sign Up</h1>
            </div>
            <Divider />
        </div >
    );

    return (
        <div className=''>
            <Menu onClick={toggleDrawer(true)}></Menu>
            <Drawer open={open} onClose={toggleDrawer(false)} className=''>
                {DrawerList}
            </Drawer>
        </div>
    );
}