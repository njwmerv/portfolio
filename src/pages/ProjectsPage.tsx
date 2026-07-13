import {type ChangeEvent, useMemo, useState} from "react"
import Select from "react-select"
import styles from "../styles/pages/Projects.module.css"
import ProjectCell from "../components/ProjectCell.tsx"
import {type Project, PROJECTS, TAGS} from "../utility/projects.ts"
import type {MultiValue, StylesConfig} from "react-select"

type OptionType = { label: string, value: string }

const tags: OptionType[] = TAGS.map((aTag) => ({
    label: `${aTag.name} (${aTag.count})`, value: aTag.name,
}))

const tagInput: StylesConfig = {
    control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "1rem",
    }),
    multiValue: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "1rem",
    }),
}

export default function ProjectsPage() {
    
    const [searchString, setSearchString] = useState<string>('')
    const [selectedTags, setSelectedTags] = useState<MultiValue<OptionType>>([])
    
    const filteredProjects: Project[] = useMemo(() => {
        const safeTags = selectedTags || []
        
        if (!searchString && safeTags.length === 0) return PROJECTS
        
        let filtered: Project[] = [...PROJECTS]
        
        if (searchString) {
            const lowerSearch = searchString.toLowerCase()
            filtered = filtered.filter((aProject: Project) => aProject.name.toLowerCase().includes(lowerSearch))
        }
        
        if (safeTags.length > 0) {
            const selected: string[] = safeTags.map((aOption: OptionType) => aOption.value)
            filtered = filtered.filter((aProject: Project) => selected.every((tag: string) => aProject.tags.includes(tag)))
        }
        
        return filtered
    }, [searchString, selectedTags])
    
    return (
        <div className={styles.contentContainer}>
            <div className={styles.filtersContainer}>
                <div className={styles.searchContainer}>
                    <input name="search"
                           className={styles.searchInput}
                           value={searchString}
                           onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchString(e.target.value)}
                           placeholder="Search for a project..."
                    />
                </div>
                
                <div className={styles.tagContainer}>
                    <Select className="basic-single"
                            isMulti={true}
                            options={tags}
                            value={selectedTags}
                            placeholder="Select tags..."
                            onChange={(newValue: MultiValue<unknown>) => setSelectedTags((newValue || []) as MultiValue<OptionType>)}
                            styles={tagInput}
                            closeMenuOnSelect={false}
                    />
                </div>
            </div>
            
            {filteredProjects.length === 0 ?
                <p className={styles.empty}>That doesn&#39;t exist... (YET!)</p>
                :
                <div className={styles.grid}>
                    {filteredProjects.map((aProject: Project, i: number) => (
                        <ProjectCell key={`project-${i}`} project={aProject} />
                    ))}
                </div>
            }
        </div>
    )
}