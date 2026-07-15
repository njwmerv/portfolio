import styles from "../styles/components/ProjectCell.module.css"
import type {Project} from "../utility/projects.ts"
import {useMediaQuery} from "../hooks/useMediaQuery.tsx"

interface ProjectCellProps {
    project: Project
}

export default function ProjectCell({
    project,
}: ProjectCellProps) {
    const isMobile: boolean = useMediaQuery("max-width: 768px")
    
    return (
        isMobile ? (
            <div className={styles.container}>
                <div className={styles.content}>
                    <img alt={project.name}
                         src={project.img}
                         className={styles.image}
                    />
                    
                    <div className={styles.right}>
                        <p className={styles.title}>{project.name}</p>
                        
                        <div className={styles.description}>{project.description}</div>
                        
                        <div className={styles.tagsContainer}>
                            {project.tags.map((tag: string, i: number) => {
                                return (
                                    <div className={styles.tag} key={`${project.name}-${i}`}># {tag}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
        : (
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.title}>{project.name}</p>
                    
                    <img alt={project.name}
                         src={project.img}
                         className={styles.image}
                    />
                    
                    <div className={styles.description}>{project.description}</div>
                    
                    <div className={styles.tagsContainer}>
                        {project.tags.map((tag: string, i: number) => {
                            return (
                                <div className={styles.tag} key={`${project.name}-${i}`}># {tag}</div>
                            )
                        })}
                    </div>
                </div>
                
                {/*{project.url ?*/}
                {/*    <PillButton buttonStyle={styles.button}*/}
                {/*                label={buttonText}*/}
                {/*                onPress={() => openInNewTab(projectLink)}*/}
                {/*    />*/}
                {/*    :*/}
                {/*    null*/}
                {/*}*/}
            </div>
        )
    )
}