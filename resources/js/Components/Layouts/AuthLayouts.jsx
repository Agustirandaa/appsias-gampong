import * as React from "react";
import { usePage } from "@inertiajs/react"
import FlashMessage from "@Fragments/FlashMessage"

export default function AuthLayouts({title, children }) {

    React.useEffect(() => {
        document.title = `Halaman | ${title}`;
        const hasRefreshed = sessionStorage.getItem('hasRefreshed');
        if (!hasRefreshed) {
            sessionStorage.setItem('hasRefreshed', 'true');
            window.location.reload();
        } else {
            sessionStorage.removeItem('hasRefreshed');
        }
    }, []);

    const {flash} = usePage().props

    return (
        <>
            {flash.error && <FlashMessage color="red-500" message={flash.error}/>}
           
            <div className="flex w-full min-h-screen justify-center items-center bg-gray-50 p-2.5 md:p-1.5 bg-gradient-walpaper">
                <div className="grid w-full max-w-5xl grid-cols-3 overflow-hidden bg-white rounded-lg shadow-lg shadow-gray-400 md:min-h-[65vh]">
                    <div className="hidden bg-blue-600 md:col-span-1 md:flex md:justify-center md:h-full md:items-center">
                        <img src="/images/login.png" alt="vektor login" />
                    </div>

                    <div className="col-span-3 p-3 space-y-8 md:col-span-2">
                        <h1 className="text-lg font-semibold text-blue-500 font-inter">
                            Gampong 
                            <span className="text-slate-950"> Mata ie</span>
                        </h1>
                        <div className="flex flex-col justify-center p-2 pb-10 md:pt-10 md:pb-20">
                            <h1 className="mb-5 text-2xl font-semibold text-center text-blue-500 font-inter md:text-3xl">
                                Halaman {title}
                            </h1>

                            {/* Form */}
                            {children}
                        
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}