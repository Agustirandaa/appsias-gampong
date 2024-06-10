import Label from "@Elements/Input/Label";
import OptionSelect from "@Elements/Select/OptionSelect";

export default function Select(props) {
    const {label, name, value, children, onChange} = props
   
    return (
        <div className="space-y-2">
         
          {label && (
             <Label htmlFor={label}>{label}</Label>
          )}

          <select 
          onChange={onChange} 
          name={name} 
          value={value} 
          className="block w-full p-2 text-sm border border-blue-300 rounded-lg bg-inherit font-inter focus:outline-none focus:border-transparent focus:ring-indigo-300 focus:ring-1">
            {children}
          </select>
        </div>
    )
}



