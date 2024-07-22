import * as React from "react";
import { Link, useForm, usePage } from "@inertiajs/react"
import FlashMessage from "@Fragments/FlashMessage"
import Button from "@Elements/Button"

export default function AuthLayouts({title, children }) {
    const { flash } = usePage().props
    const { post } = useForm({});

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

    
    const handleSubmit = (event) => {
        event.preventDefault();
        post('/auth/forgot-password');
    }

    return (
        <>
            {flash.error && <FlashMessage color="red-500" message={flash.error}/>}
            {flash.success && <FlashMessage color="blue-500" message={flash.success}/>}
           
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

                            <form 
                                onSubmit={handleSubmit}
                                className="py-4 space-y-5 x-6 md:px-20 md:space-y-8">
                                    <span className="font-inter"> Apa anda lupa password ? </span>
                                    <Button
                                        type="submit"
                                        variant="underline underline-offset-4 font-semibold text-blue-600">
                                        Send Email
                                    </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}