import {useEffect, useState} from "react"

export function useMediaQuery(query: string): boolean {
    const QUERY: string = "(" + query + ")"
    const [matches, setMatches] = useState<boolean>(false)
    
    useEffect(() => {
        const mediaQueryList: MediaQueryList = window.matchMedia(QUERY)
        
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMatches(mediaQueryList.matches)
        
        const documentChangeHandler = (event: MediaQueryListEvent) => {
            setMatches(event.matches)
        }
        
        // Attach listener
        mediaQueryList.addEventListener("change", documentChangeHandler)
        
        // Cleanup
        return () => {
            mediaQueryList.removeEventListener("change", documentChangeHandler)
        }
    }, [QUERY])
    
    return matches
}