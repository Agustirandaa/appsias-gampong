export default function Label({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className={`font-inter font-semibold text-slate-950`}>
            {children}
        </label>
    )
}