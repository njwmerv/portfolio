import {useEffect, useState} from "react"
import styles from "../styles/pages/View.module.css"

const toastDuration: number = 4000

export default function ViewPage() {
    
    const [showToast, setShowToast] = useState<boolean>(true)
    
    useEffect(() => {
        let wakeLock: WakeLockSentinel | null = null
        let isMounted = true
        
        const requestWakeLock = async () => {
            try {
                const lock = await navigator.wakeLock.request("screen")
                
                if (!isMounted) {
                    lock.release()
                    return
                }
                
                wakeLock = lock
                // console.log("Screen Wake Lock is active!")
            }
            catch { /* empty */ }
        }
        
        requestWakeLock()
        
        const handleVisibilityChange = () => {
            if (document.visibilityState === "visible") {
                requestWakeLock()
            }
        }
        
        document.addEventListener("visibilitychange", handleVisibilityChange)
        
        const timer = setTimeout(() => {
            setShowToast(false)
        }, toastDuration)
        
        return () => {
            clearTimeout(timer)
            
            isMounted = false
            document.removeEventListener("visibilitychange", handleVisibilityChange)
            
            if (wakeLock !== null) {
                wakeLock.release()
                wakeLock = null
                // console.log("Screen Wake Lock released.")
            }
        }
    }, [])
    
    return (
        <div>
            {showToast && (
                <div className={styles.wakeLockToast}>
                    Screensaver mode active. Display will stay on.
                </div>
            )}
        </div>
    )
}