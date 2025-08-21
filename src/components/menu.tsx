
import { useTheme } from '@/theme/theme-provider';
import Drawer from '@mui/material/Drawer';


import { Menu } from 'lucide-react';
import { useState } from 'react';




export default function TemporaryDrawer({ DrawerList }: any) {
    const [open, setOpen] = useState(false);
    const { theme } = useTheme()
    console.log(theme);


    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Menu className='dark:text-white text-black ' onClick={toggleDrawer(true)}></Menu>
            <Drawer open={open} onClose={toggleDrawer(false)} PaperProps={{
                sx: { width: 220 }
            }} >
                {DrawerList}
            </Drawer>
        </>
    );
}
