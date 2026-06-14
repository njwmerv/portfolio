import type {CSSProperties} from "react";
import styles from "../styles/components/CareerTimeline.module.css"
import {TIMESPAN, MONTHS} from "../utility/experiences.ts";

const monthsWidth: number = 50
const startMonths: number = TIMESPAN.start.getFullYear() * 12 + TIMESPAN.start.getMonth()

interface TimestampProps {
    time: Date
    label: string
    style?: CSSProperties
}
const Timestamp = ({time, label, style = {}}: TimestampProps) => {
    const endMonths: number = time.getFullYear() * 12 + time.getMonth()
    const left: number = (endMonths - startMonths) * monthsWidth
    return (
        <div>
            <p className={styles.timestamp} style={{
                top: 0,
                left: `${left}px`,
                margin: 0,
                position: 'absolute',
                backgroundColor: "#000000",
                width: `${monthsWidth}px`,
                ...style,
            }}>
                {label}
            </p>
        </div>
    )
}

export default function CareerTimeline() {
    return (
        <div className={styles.calendar} style={{ width: `${MONTHS * monthsWidth}px`}}>
            <div className={styles.yearStamps}>
                <Timestamp label={"2023"} time={new Date(2023, 8)} style={{width: `${4 * monthsWidth}px`}} />
                <Timestamp label={"2024"} time={new Date(2024, 0)} style={{width: `${12 * monthsWidth}px`}} />
                <Timestamp label={"2025"} time={new Date(2025, 0)} style={{width: `${12 * monthsWidth}px`}} />
                <Timestamp label={"2026"} time={new Date(2026, 0)} style={{width: `${12 * monthsWidth}px`}} />
                <Timestamp label={"2027"} time={new Date(2027, 0)} style={{width: `${12 * monthsWidth}px`}} />
                <Timestamp label={"2028"} time={new Date(2028, 0)} style={{width: `${6 * monthsWidth}px`}} />
            </div>
            
            <div className={styles.monthStamps}>
                <Timestamp label={"Sep"} time={new Date(2023, 8)} style={{textAlign: "center",}} />
                <Timestamp label={"Jan"} time={new Date(2024, 0)} style={{textAlign: "center",}} />
                <Timestamp label={"Apr"} time={new Date(2024, 3)} style={{textAlign: "center",}} />
                <Timestamp label={"Jul"} time={new Date(2024, 6)} style={{textAlign: "center",}} />
                <Timestamp label={"Oct"} time={new Date(2024, 9)} style={{textAlign: "center",}} />
                <Timestamp label={"Jan"} time={new Date(2025, 0)} style={{textAlign: "center",}} />
                <Timestamp label={"Apr"} time={new Date(2025, 3)} style={{textAlign: "center",}} />
                <Timestamp label={"Jul"} time={new Date(2025, 6)} style={{textAlign: "center",}} />
                <Timestamp label={"Oct"} time={new Date(2025, 9)} style={{textAlign: "center",}} />
                <Timestamp label={"Jan"} time={new Date(2026, 0)} style={{textAlign: "center",}} />
                <Timestamp label={"Apr"} time={new Date(2026, 3)} style={{textAlign: "center",}} />
                <Timestamp label={"Jul"} time={new Date(2026, 6)} style={{textAlign: "center",}} />
                <Timestamp label={"Oct"} time={new Date(2026, 9)} style={{textAlign: "center",}} />
                <Timestamp label={"Jan"} time={new Date(2027, 0)} style={{textAlign: "center",}} />
                <Timestamp label={"Apr"} time={new Date(2027, 3)} style={{textAlign: "center",}} />
                <Timestamp label={"Jul"} time={new Date(2027, 6)} style={{textAlign: "center",}} />
                <Timestamp label={"Oct"} time={new Date(2027, 9)} style={{textAlign: "center",}} />
                <Timestamp label={"Jan"} time={new Date(2028, 0)} style={{textAlign: "center",}} />
                <Timestamp label={"Apr"} time={new Date(2028, 3)} style={{textAlign: "center",}} />
                <Timestamp label={"June"} time={new Date(2028, 5)} style={{textAlign: "center",}} />
            </div>
            
            
        </div>
    )
}