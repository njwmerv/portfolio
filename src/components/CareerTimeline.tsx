import type {CSSProperties} from "react";
import styles from "../styles/components/CareerTimeline.module.css"
import {TIMESPAN, MONTHS, EXPERIENCES} from "../utility/experiences.ts";

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
            top: 0,
            left: `${offset}px`,
            margin: 0,
            position: "absolute",
            width: `${monthsWidth}px`,
            ...style,
        }}>
            <p className={styles.timestamp}>{label}</p>
        </div>
    )
}

interface DurationProps {
    start: Date
    end: Date
    label: string
    description: string
    style?: CSSProperties
}
const Duration = ({start, end, label, description, style = {}}: DurationProps) => {
    const width: number = (durationInMonths(start, end) + 1) * monthsWidth - 8
    const offset: number = durationInMonths(TIMESPAN.start, start) * monthsWidth
    
    return (
        <div className={styles.durationContainer} style={{
            top: "66px",
            left: `${offset}px`,
            margin: 0,
            position: "absolute",
            width: `${width}px`,
            backgroundColor: "black",
            borderLeftWidth: 0,
            borderRadius: "1rem",
            ...style,
        }}>
            {label}
            {description}
        </div>
    )
}

export default function CareerTimeline() {
    return (
        <div className={styles.calendar} style={{ width: `${MONTHS * monthsWidth}px`}}>
            <div className={styles.yearStamps}>
                <Timestamp label={"2023"} time={new Date(2023, 8)}
                           style={{width: `${4 * monthsWidth}px`, borderLeftWidth: 0}}
                />
                <Timestamp label={"2024"} time={new Date(2024, 0)}
                           style={{width: `${12 * monthsWidth}px`, borderLeftWidth: 0}}
                />
                <Timestamp label={"2025"} time={new Date(2025, 0)}
                           style={{width: `${12 * monthsWidth}px`, borderLeftWidth: 0}}
                />
                <Timestamp label={"2026"} time={new Date(2026, 0)}
                           style={{width: `${12 * monthsWidth}px`, borderLeftWidth: 0}}
                />
                <Timestamp label={"2027"} time={new Date(2027, 0)}
                           style={{width: `${12 * monthsWidth}px`, borderLeftWidth: 0}}
                />
                <Timestamp label={"2028"} time={new Date(2028, 0)}
                           style={{width: `${6 * monthsWidth}px`, borderLeftWidth: 0}}
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
                <Timestamp label={"June"} time={new Date(2028, 5)}
                           style={{textAlign: "center", height: "calc(360px - 2rem)"}}
                />
            </div>
            
            <div className={styles.monthStamps}>
                {EXPERIENCES.map((exp, i) => {
                    if (i === 0) {
                        return (
                            <Duration start={exp.start} end={exp.end} label={exp.company} description={exp.role}
                                      style={{top: 0, backgroundColor: "#FAE100"}}
                            />
                        )
                    }
                    return (
                        <Duration start={exp.start} end={exp.end} label={exp.company} description={exp.role} />
                    )
                })}
            </div>
        </div>
    )
}