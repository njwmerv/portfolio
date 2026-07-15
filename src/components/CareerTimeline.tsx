import * as React from "react"
import {type CSSProperties, useRef, useState} from "react"
import styles from "../styles/components/CareerTimeline.module.css"
import {TIMESPAN, MONTHS, EXPERIENCES, SCHOOL_TERMS, type Experience} from "../utility/experiences.ts"

const getNumDaysInMonth = (date: Date) => {
    switch (date.getMonth()) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            return 31
        case 3:
        case 5:
        case 8:
        case 10:
            return 30
        case 1:
            return (date.getFullYear() % 4 === 0 && date.getFullYear() % 100 !== 0) ? 29 : 28
        default:
            return 30
    }
}

const monthsWidth: number = 64

const durationInMonths = (start: Date, end: Date) => {
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
}

interface TimestampProps {
    time: Date
    label: string
    style?: CSSProperties
}
const Timestamp = ({time, label, style = {}}: TimestampProps) => {
    const offset: number = durationInMonths(TIMESPAN.start, time) * monthsWidth
    return (
        <div className={styles.timestampContainer} style={{
            left: `${offset}px`,
            width: `${monthsWidth}px`,
            ...style,
        }}>
            <p className={styles.timestamp}>{label}</p>
        </div>
    )
}

const Duration = ({
    company,
    role,
    team,
    start,
    end,
    img,
    style,
}: Experience) => {
    const width: number = (durationInMonths(start, end) + 1) * monthsWidth - 8
    const offset: number = durationInMonths(TIMESPAN.start, start) * monthsWidth
    
    return (
        <div className={styles.durationContainer} style={{
            left: `${offset}px`,
            width: `${width}px`,
            ...style,
        }}>
            <img src={img} alt={""} loading="lazy" draggable={false} />
            
            <p className={styles.durationLabel}>{company}</p>
            
            {team && <p className={styles.durationDescription}>{team}</p>}
            
            <p className={styles.durationDescription}>{role}</p>
        </div>
    )
}

export default function CareerTimeline() {
    const NOW: Date = new Date()
    const partialOffset: number = Math.floor(NOW.getDate() * monthsWidth / getNumDaysInMonth(NOW))
    const todayOffset: number = durationInMonths(TIMESPAN.start, NOW) * monthsWidth + partialOffset
    
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)
    
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return
        setIsDragging(true)
        startX.current = e.pageX - scrollContainerRef.current.offsetLeft
        scrollLeft.current = scrollContainerRef.current.scrollLeft
    }
    
    const handleMouseLeave = () => {
        setIsDragging(false)
    }
    
    const handleMouseUp = () => {
        setIsDragging(false)
    }
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return
        e.preventDefault()
        
        const x: number = e.pageX - scrollContainerRef.current.offsetLeft
        const walk: number = (x - startX.current)
        
        scrollContainerRef.current.scrollLeft = scrollLeft.current - walk
    }
    
    return (
        <div ref={scrollContainerRef}
             onMouseDown={handleMouseDown}
             onMouseLeave={handleMouseLeave}
             onMouseUp={handleMouseUp}
             onMouseMove={handleMouseMove}
             style={{
                 overflowX: "auto",
                 width: "100%",
                 cursor: isDragging ? "grabbing" : "grab",
                 userSelect: "none"
             }}
        >
            <div className={styles.calendar} style={{ width: `${MONTHS * monthsWidth}px`}}>
            <div className={styles.yearStamps}>
                <Timestamp label={"2023"} time={new Date(2023, 8)}
                           style={{width: `${4 * monthsWidth}px`}}
                />
                <Timestamp label={"2024"} time={new Date(2024, 0)}
                           style={{width: `${12 * monthsWidth}px`}}
                />
                <Timestamp label={"2025"} time={new Date(2025, 0)}
                           style={{width: `${12 * monthsWidth}px`}}
                />
                <Timestamp label={"2026"} time={new Date(2026, 0)}
                           style={{width: `${12 * monthsWidth}px`}}
                />
                <Timestamp label={"2027"} time={new Date(2027, 0)}
                           style={{width: `${12 * monthsWidth}px`}}
                />
                <Timestamp label={"2028"} time={new Date(2028, 0)}
                           style={{width: `${5 * monthsWidth}px`}}
                />
            </div>
            
            <div className={styles.monthStamps}>
                <Timestamp label={"Sep"} time={new Date(2023, 8)}
                           style={{textAlign: "center", borderLeftWidth: 0}}
                />
                <Timestamp label={"Jan"} time={new Date(2024, 0)}
                           style={{textAlign: "center", borderLeftStyle: "solid", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Apr"} time={new Date(2024, 3)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jul"} time={new Date(2024, 6)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Oct"} time={new Date(2024, 9)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jan"} time={new Date(2025, 0)}
                           style={{textAlign: "center", borderLeftStyle: "solid", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Apr"} time={new Date(2025, 3)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jul"} time={new Date(2025, 6)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Oct"} time={new Date(2025, 9)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jan"} time={new Date(2026, 0)}
                           style={{textAlign: "center", borderLeftStyle: "solid", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Apr"} time={new Date(2026, 3)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jul"} time={new Date(2026, 6)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Oct"} time={new Date(2026, 9)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jan"} time={new Date(2027, 0)}
                           style={{textAlign: "center", borderLeftStyle: "solid", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Apr"} time={new Date(2027, 3)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jul"} time={new Date(2027, 6)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Oct"} time={new Date(2027, 9)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Jan"} time={new Date(2028, 0)}
                           style={{textAlign: "center", borderLeftStyle: "solid", height: "calc(360px - 2rem)"}}
                />
                <Timestamp label={"Apr"} time={new Date(2028, 3)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
            </div>
            
            <div className={styles.schoolTerms}>
                {SCHOOL_TERMS.map((term: Experience, i: number) => <Duration key={`school-${i}`} {...term} />)}
            </div>
            
            <div className={styles.workTerms}>
                {EXPERIENCES.map((exp: Experience, i: number) => <Duration key={`work-${i}`} {...exp} />)}
            </div>
            
            <div className={styles.today} style={{left: `${todayOffset}px`}}>
                <p>Today</p>
            </div>
        </div>
        </div>
    )
}