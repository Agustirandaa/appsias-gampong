import Label from "./Label";
import Input from "./Input";

export default function InputForm(props) {
    const {label, name, value, type, icon, ...extraProps} = props
   
    return (
        <div className="space-y-2">
         
          {label && (
             <Label htmlFor={label}>{label}</Label>
          )}
            
            <div className="relative w-full">
                {icon ? (
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {icon}
                    </div>
                ) : null}
                
                <Input 
                type={type} 
                name={name} 
                value={value} 
                label={label} 
                variant={ icon ? 'ps-10' : ''}
                {...extraProps} />
                
            </div>
        </div>
    )
}