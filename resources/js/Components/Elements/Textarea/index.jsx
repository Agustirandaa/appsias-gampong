import Label from "@Elements/Input/Label";

export default function Textarea(props) {
    const {label, name, value, onChange, maxLength} = props
   
    return (
        <div className="space-y-2">
         
          {label && (
             <Label htmlFor={label}>{label}</Label>
          )}

          <textarea 
          name={name} 
          value={value} 
          onChange={onChange}
          maxLength={maxLength} 
          rows={5}
          className="block w-full p-2 text-sm border border-blue-300 rounded-lg bg-inherit font-inter focus:outline-none focus:border-transparent focus:ring-indigo-300 focus:ring-1 placeholder:text-slate-400"></textarea>
          
        </div>
    )
}