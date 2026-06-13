import styles from "../styles/components/Button.module.css"

interface ButtonProps {
    label?: string
    onClick: () => void
    onHover?: () => void
    onMouseDown?: () => void
    textStyle?: string
    buttonStyle?: string
}

export default function Button({
    label,
    onClick,
    onHover,
    onMouseDown,
    textStyle = "",
    buttonStyle = "",
}: ButtonProps) {
    return (
        <button onClick={onClick} onMouseEnter={onHover} onMouseDown={onMouseDown} className={`${styles.button} ${buttonStyle}`}>
            <p className={`${styles.label} ${textStyle}`}>{label}</p>
        </button>
    )
}