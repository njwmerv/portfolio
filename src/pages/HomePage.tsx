import styles from "../styles/pages/Home.module.css"

export default function HomePage() {
    return (
        <div className={styles.main}>
            <div className={styles.frame}>
                INTRO
            </div>
            
            <hr />
            
            <div className={styles.frame}>
                PROJECTS
            </div>
            
            <hr />
            
            <div className={styles.frame}>
                EXPERIENCES
            </div>
            
            <hr />
            
            <div className={styles.frame}>
                OTHER STUFF
            </div>
        </div>
    )
}