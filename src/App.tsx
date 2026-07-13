import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
import styles from "./styles/App.module.css"
import HomePage from "./pages/HomePage.tsx"
import ProjectsPage from "./pages/ProjectsPage.tsx"
import DayNightBackground from "./components/DayNightBackground.tsx"
import {HOME_ROUTE, PROJECTS_ROUTE} from "./utility/routes.ts"

const LINKS: {label: string, link: string}[] = [
    {label: "Projects", link: PROJECTS_ROUTE,},
    // {label: "Experiences", link: EXPERIENCES_ROUTE,},
    // {label: "Other Stuff", link: OTHERS_ROUTE},
]

function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <div className={styles.name}>
                    <NavLink to={HOME_ROUTE} className={styles.navLink}>
                        NJWM
                    </NavLink>
                </div>
                
                <div className={styles.bar}></div>
                
                <div className={styles.notName}>
                    {LINKS.map(({label, link}: {label: string, link: string}) => {
                        return (
                            <div key={link} className={styles.otherLinks}>
                                <NavLink to={link} className={styles.navLink}>
                                    {label}
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </header>
    )
}

export default function App() {
    
    return (
        <BrowserRouter>
                <NavBar />
                
                <DayNightBackground />
                
                <main>
                    <Routes>
                        <Route path={HOME_ROUTE} element={<HomePage />} />
                        <Route path={PROJECTS_ROUTE} element={<ProjectsPage />} />
                        {/*<Route path={EXPERIENCES_ROUTE} element={<ExperiencesPage />} />*/}
                        {/*<Route path={OTHERS_ROUTE} element={<OthersPage />} />*/}
                    </Routes>
                </main>
        </BrowserRouter>
    )
}
