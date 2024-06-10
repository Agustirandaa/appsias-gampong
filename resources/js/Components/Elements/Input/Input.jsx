export default function Input(props) {
    const {type, name, label, value, variant, autocomplete = '', ...extraProps} = props;    
    return (
       <input 
        type={type}
        name={name}
        id={label}
        value={value}
        placeholder={`${label} anda ...`}
        autoComplete={autocomplete}
        className={`block w-full p-2 text-sm border border-blue-300 rounded-lg bg-inherit font-inter focus:outline-none focus:border-transparent focus:ring-indigo-300 focus:ring-1 placeholder:text-slate-400 ${variant}`}
        {...extraProps}
       />
    )
}