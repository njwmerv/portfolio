import {useState} from "react"
import styles from "../styles/components/CaptionedImage.module.css"

interface CaptionedImageProps {
    alt: string
    img: string
    caption: string
}

export default function CaptionedImage({
    alt,
    img,
    caption,
}: CaptionedImageProps){
    
    const [showCaption, setShowCaption] = useState<boolean>(false)
    
    const toggleCaption = () => setShowCaption(!showCaption)
    
    return (
        <div className={styles.imgWrapper} onMouseDown={toggleCaption}>
            <img alt={alt} src={img} loading="lazy" />
            
            <div className={`${styles.overlay} ${showCaption ? styles.show : ''}`}>
                <p>{caption}</p>
            </div>
        </div>
    )
}