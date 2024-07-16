import * as React from "react";
import Sidebar from "@Fragments/Sidebar";
import NavbarDashboard from "@Fragments/NavbarDashboard";
import FlashMessage from "@Fragments/FlashMessage"
import { usePage } from "@inertiajs/react";

export default function({children, title}) {
    const [showSidebar, setShowSidebar] = React.useState(true);
    const [isScreenSmall, setIsScreenSmall] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    React.useEffect(() => {
        document.title = `Halaman | ${title}`;
        isScreenSmall ? setShowSidebar(false) : setShowSidebar(true);
        // console.log(isScreenSmall);
    }, [isScreenSmall]);

    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    const { flash } = usePage().props
    return (
      <>
        
        {flash.success && <FlashMessage color="blue-600" message={flash.success} action={true} />}

        <Sidebar showSidebar={showSidebar} handleSidebar={handleSidebar} />
        <div className="bg-white w-full h-screen absolute right-0 md:max-w-[calc(100vw-17rem)] ">
            <NavbarDashboard handleSidebar={handleSidebar} />
            <div className="p-4">
                <div className="w-full px-5 py-5">
                    <span className="block text-xs font-semibold text-gray-600 uppercase font-inter">Overview</span>
                    <span className="text-lg font-semibold text-blue-600 uppercase font-inter">{title}</span>
                </div>

                <div className="md:px-5">
                     {children}
                </div>
            </div>
        </div>
      </>
    )
}