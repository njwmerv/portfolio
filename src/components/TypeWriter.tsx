import { useState, useEffect } from "react"
import styles from "../styles/components/TypeWriter.module.css"

interface TypewriterProps {
    text: string
    delay?: number
    resets?: boolean
    resetTimer?: number
    textClassName?: string
    cursor?: string
}

export default function TypeWriter({
    text,
    delay = 100,
    resets = false,
    resetTimer = 500,
    textClassName = "",
    cursor = "|",
}: TypewriterProps) {
    const [currentText, setCurrentText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        let timeout
        
        if (currentIndex >= text.length && resets) {
            timeout = setTimeout(() => {
                setCurrentText("")
                setCurrentIndex(0)
            }, resetTimer || (5 * delay))
        }
        else if (currentIndex < text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, delay)
        }
        else timeout = setTimeout(() => {}, 0)
        
        return () => clearTimeout(timeout)
    }, [currentIndex, delay, resetTimer, resets, text])
    
    return (
        <span className={`${textClassName} ${styles.container}`}>
            <span className={styles.ghost}>{text + cursor}</span>
            
            <span className={styles.text}>
                {currentText}<span className={`${styles.cursor} ${styles.blink}`}>{cursor}</span>
            </span>
        </span>
    )
}