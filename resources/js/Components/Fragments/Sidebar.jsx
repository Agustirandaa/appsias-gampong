import ListItem from "@Elements/ListItem";
import {House, PersonBounding, Copy, ChevronCircle, User, People} from "@Icons";
import Button from "@Elements/Button";
import * as React from "react";


const links = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: House
    },
   
    {
        name: "Posting List",
        href: "/dashboard/posting",
        icon: Copy
    },
    {
        name: "Data Keluarga",
        href: "/dashboard/keluarga",
        icon: PersonBounding
    },
    {
        name: "Aparat Desa",
        href: "/dashboard/aparatdesa",
        icon: People
    },
]

export default function Sidebar({showSidebar, handleSidebar}) {
    const [active, setActive] = React.useState(() => {
        const saveIndex =  localStorage.getItem('activeIndex');
        return saveIndex !== null ? parseInt(saveIndex) : 0
    });

    const handleClick = (index) => {
        setActive(index);
        localStorage.setItem('activeIndex', index);
    }

    return (
        <div className={`fixed top-0 z-10 w-[17rem] h-screen transition-all px-4 space-y-5 bg-blue-600 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center gap-3 pt-7 ">
                <div className="p-8 bg-blue-500 rounded-full">
                    <User color={`text-white w-20`} />
                </div>
                    <span className="text-lg font-semibold text-white uppercase font-inter">Administrator</span>
            </div>


            <div className="space-y-3">
                <span className="text-xs tracking-wide text-gray-300 font-inter">Application</span>
                    <ul className="space-y-4">
                        {links.map((items, idx) => (
                             <ListItem key={idx} onClick={() => handleClick(idx)} 
                             href={items.href} 
                             variant={`text-gray-50 ${active === idx ? 'bg-blue-800' : ''}`}>
                                <items.icon color={`group-hover:text-white ${active === idx ? 'text-white' : ''  }`} size="20" />
                               {items.name}
                            </ListItem>
                        ))}
                    </ul>
            </div>

            <div className="absolute right-0 flex justify-center w-full bottom-10 md:hidden">
                <Button onClick={() => handleSidebar()}  variant={`bg-white border rounded-full px-1 py-1`}>
                    <ChevronCircle size={20} color={`text-red-500`} />
                </Button>
            </div>
        </div>
    )
}