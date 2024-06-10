export default function OptionSelect(props) {
    const {value = '', children, ...extraProps} = props
    return (
        <option value={value} {...extraProps}>
            {children}
        </option>
    )
}