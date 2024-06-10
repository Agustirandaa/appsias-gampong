import {useState} from "react";
import Button from "@Elements/Button";
import Label from "@Elements/Input/Label";
import Input from "@Elements/Input/Input";
import {Eye, EyeSlash} from "@Icons";

export default function InputFormPassword(props) {
    const {label, name, value, type, icon, autocomplete, ...extraProps} = props
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="space-y-2">
           
            <Label htmlFor={label}>{label}</Label>
            
            <div className="relative w-full">
                {icon ? (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {icon}
                    </div>
                ) : null}

                <Input 
                type={showPassword ? `text` : `password`} 
                name={name} 
                label={label} 
                value={value} 
                variant={ icon ? 'ps-10' : ''}
                autocomplete={autocomplete} 
                {...extraProps}/>
                
                <Button onClick={() => handleShowPassword()} variant={`absolute inset-y-0 right-0 flex items-center px-3`}>
                    {showPassword ? <Eye color={`text-red-600`} /> : <EyeSlash color={`text-blue-600`} />}
                </Button>
            
            </div>
        </div>
    )
}