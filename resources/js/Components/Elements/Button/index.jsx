export default function Button(props) {
    const {variant = 'px-4 py-2', type = 'button', children, onClick = () => {} } = props
    return (
        <button
        type={type}
        onClick={onClick}
        className={`font-inter ${variant}`}
        >
            {children}
        </button>
    )
}
