import { Link } from "@inertiajs/react";

export default function ListItem({href, children, variant, onClick = () => {} }) {
    return (
        <li 
         onClick={onClick}
         className="w-full hover:bg-blue-800">
            <Link 
                href={href}
                className={`flex rounded-full items-center w-full gap-3 py-2 text-[15px] ps-3 font-inter ${variant}`}>
                    {children}     
            </Link>             
        </li>
    )
}