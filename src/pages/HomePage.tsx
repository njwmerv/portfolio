import styles from "../styles/pages/Home.module.css"
import TypeWriter from "../components/TypeWriter.tsx";
import TextStream from "../components/TextStream.tsx";

const GREETINGS: string[] = [
    "Hey! I'm:",
    "Kumusta! Ako si:",
    "Bonjour! Je m'appelle:",
    "你好！我叫:",
]

const DESCRIPTIONS: string[] = [
    "< Computer Science Student />",
    "< Software Developer />",
]

export default function HomePage() {
    return (
        <>
            <div className={styles.main}>
                <div className={`${styles.frame} ${styles.intro}`}>
                    <div className={`${styles.introSection} ${styles.headshotContainer}`}>
                        <img
                            src={"/2048me.jpg"}
                            alt={"Image of Mari Montoya"}
                            className={styles.headshot}
                        />
                    </div>
                    
                    <div className={`${styles.introSection} ${styles.introText}`}>
                        <TextStream
                            texts={GREETINGS}
                            duration={900}
                            textClassName={styles.greeting}
                        />
                        
                        <TypeWriter
                            text={"Mari Montoya"}
                            delay={100}
                            textClassName={styles.name}
                            cursor={"|"}
                        />
                        
                        <p className={styles.pronunciation}>(pronounced like "Mario" w/o the "o")</p>
                        
                        <TextStream
                            texts={DESCRIPTIONS}
                            textClassName={styles.descriptions}
                        />
                    </div>
                </div>
                
                <div className={styles.frame}>
                    PROJECTS
                </div>
                
                <div className={styles.frame}>
                    EXPERIENCES
                </div>
                
                <div className={styles.frame}>
                    OTHER STUFF
                </div>
            </div>
        </>
    )
}