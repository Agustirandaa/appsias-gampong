import * as React from "react";
import Button from "@Elements/Button";
import { Link, useForm, usePage } from "@inertiajs/react";
import { List, Chevron, Rocket, House } from "@Icons";


const itemsDropdown = [
    {
        name: "Beranda",
        href: "/",
        icon: House
    },
    {
        name: "Logout",
        href: "/logout",
        icon: Rocket
    },
]

export default function NavbarDashboard({handleSidebar}) {

    const { authNameLogin } = usePage().props

    const [showDropdown, setShowDropdown] = React.useState(false);
    const handleDropdown = () => {
        setShowDropdown(!showDropdown); 
    }

    const {post} = useForm();
    const handleLogout = (e) => {
        e.preventDefault();
        post('/dashboard/logout');
        localStorage.clear('activeIndex');
    }

    return (
        <nav className="flex justify-between w-full px-5 py-4 bg-white shadow-sm shadow-blue-100">
            <div className="flex items-center justify-between w-full gap-3">
               <div className="flex items-center gap-3">
                <Button onClick={() => handleSidebar()}  variant={`border-red-500 hover:bg-red-50 border rounded-md px-1 py-1 md:hidden`}>
                    <List size={20} />
                    </Button>
                    <h3 className="font-semibold font-inter text-slate-950">React Dashboard </h3>
               </div>

               <div className="relative">
                    <Button onClick={() => handleDropdown()} variant={`rounded-md flex items-center gap-3 font-semibold text-[15px] text-blue-600 font-inter`}>
                        {authNameLogin}
                        <Chevron size={16} />
                    </Button>
                    <div className={`absolute right-0 w-full p-2 mt-4 space-y-2 bg-white border rounded-lg shadow-md min-w-60 shadow-blue-100 ${showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} transition-all duration-300 ease-out`}>

                         {itemsDropdown.map((items, idx) => (
                            items.name === "Logout" ? (
                                <div key={idx}>
                                    <Button onClick={handleLogout} variant={`rounded-md hover:bg-blue-600 px-2 py-2 text-sm text-slate-900 flex items-center gap-3 w-full font-inter hover:text-white group`}>
                                    <items.icon size={16} color="text-slate-900 group-hover:text-white" />
                                        {items.name}
                                    </Button>
                                </div>
                            ) : (
                                <Link key={idx}
                                href={items.href} className="flex items-center gap-3 px-2 py-2 text-sm rounded-md text-slate-900 hover:text-white group hover:bg-blue-600 font-inter">
                                    <items.icon size={16} color="text-slate-900 group-hover:text-white" />
                                    {items.name}
                                </Link>
                            )
                         ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3"></div>
        </nav>
    )
}