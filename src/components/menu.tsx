
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import CustomizedSwitches from './switch';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';




export default function TemporaryDrawer({ toggleTheme, theme, DrawerList }) {
    const theme1 = useSelector((state) => state.theme.mode)
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <Menu onClick={toggleDrawer(true)}></Menu>
            <Drawer open={open} onClose={toggleDrawer(false)} className=''>
                {DrawerList}
            </Drawer>
        </>
    );
}
