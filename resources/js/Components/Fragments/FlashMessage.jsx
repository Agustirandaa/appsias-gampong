import { Exclamation, Close } from "@Icons";
import * as React from "react";
import Button from "@Elements/Button";

export default function FlashMessage({message, color, action = false}) {

    const [show, setShow] = React.useState(true);

   const handleClick = () => {
        setShow(false);
    }
    
    
    return (
        <div className={`absolute z-50 w-full max-w-sm p-4 bg-white border rounded-lg shadow-sm right-2 top-2 shadow-${color} ${ show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'} transition-all duration-300 ease-out`}>
            <div className="flex items-center">
            <Exclamation color={`text-${color}`} size="27" />
            <div className={`flex items-center justify-between w-full ms-3`}>
                <span className={`text-sm font-inter text-${color}`}> 
                    {message}
                </span>
            </div>

           {action && (
             <Button onClick={() => handleClick()} variant={`rounded-md px-2 py-2 ms-2 font-semibold text-[15px] text-blue-600 font-inter`}>
             <Close color={`text-red-500`} size="20" />
             </Button>
           )}

            </div>
        </div>
    )
}