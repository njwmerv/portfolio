import {useEffect, useState} from "react"

interface TextStreamProps {
    texts: string[]
    duration?: number
    textClassName?: string
}

export default function TextStream({
    texts,
    duration = 3000,
    textClassName = "",
}: TextStreamProps) {
    const [index, setIndex] = useState(0)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIndex(prev => (prev + 1) % texts.length)
        }, duration)
        
        return () => clearTimeout(timeout)
    }, [duration, index, texts.length])
    
    return (
        <p className={textClassName}>{texts[index]}</p>
    )
}