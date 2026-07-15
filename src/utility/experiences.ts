import type {CSSProperties} from "react"

const FALL_START: (year: number) => Date = (year: number) => new Date(year, 8, 1)
const FALL_END: (year: number) => Date = (year: number) => new Date(year, 11, 31)
const WINTER_START: (year: number) => Date = (year: number) => new Date(year, 0, 1)
const WINTER_END: (year: number) => Date = (year: number) => new Date(year, 3, 30)
const SPRING_START: (year: number) => Date = (year: number) => new Date(year, 4, 1)
const SPRING_END: (year: number) => Date = (year: number) => new Date(year, 7, 31)

export interface Experience {
    company: string
    role: string
    team?: string
    start: Date
    end: Date
    img?: string
    style?: CSSProperties
}

export const EXPERIENCES: Experience[] = [
    {
        company: "Tuq Inc.",
        role: "Junior Developer",
        team: "Core Team",
        start: SPRING_START(2024),
        end: SPRING_END(2024),
        img: "/tuq-logo.png",
        style: {
            backgroundColor: "#8e1721",
            color: "#FCF6E1",
        },
    },
    {
        company: "University of Waterloo",
        role: "MATH 136 Marker",
        start: FALL_START(2024),
        end: FALL_END(2024),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "Propel Holdings",
        role: "Software Developer Intern",
        team: "Web Team",
        start: WINTER_START(2025),
        end: WINTER_END(2025),
        img: "/propel-holdings-logo.png",
        style: {
            backgroundColor: "#001730",
            color: "#FCF6E1",
        },
    },
    {
        company: "Vivid Seats Inc.",
        role: "Fullstack Engineering Co-op",
        team: "B2C Web-Distribution Team",
        start: FALL_START(2025),
        end: FALL_END(2025),
        img: "/vividseats-logo.png",
        style: {
            backgroundColor: "#8F1564",
            color: "#FCF6E1",
        },
    },
    {
        company: "UW Quizbowl Club",
        role: "Web Master",
        start: WINTER_START(2026),
        end: WINTER_END(2026),
        img: "/uwqb-logo.jpg",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "Cresta Intelligence",
        role: "Fullstack Engineering Co-op",
        team: "Voice AI Infra Team",
        start: SPRING_START(2026),
        end: SPRING_END(2026),
        img: "/cresta-logo-white.gif",
        style: {
            backgroundColor: "#205BE4",
            color: "#FCF6E1",
        },
    },
]

export const SCHOOL_TERMS: Experience[] = [
    {
        company: "UWaterloo Academic Term",
        role: "1A",
        start: FALL_START(2023),
        end:   FALL_END(2023),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "1B",
        start: WINTER_START(2024),
        end:   WINTER_END(2024),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "2A",
        start: FALL_START(2024),
        end:   FALL_END(2024),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "2B",
        start: SPRING_START(2025),
        end:   SPRING_END(2025),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "3A",
        start: WINTER_START(2026),
        end:   WINTER_END(2026),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "3B",
        start: FALL_START(2026),
        end:   FALL_END(2026),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "4A",
        start: FALL_START(2027),
        end:   FALL_END(2027),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
    {
        company: "UWaterloo Academic Term",
        role: "4B",
        start: WINTER_START(2028),
        end:   WINTER_END(2028),
        img: "/uwaterloo-logo.png",
        style: {
            backgroundColor: "#FED34C",
        },
    },
]

export const TIMESPAN: {start: Date, end: Date} = [...EXPERIENCES, ...SCHOOL_TERMS].reduce(
    (span: {start: Date, end: Date}, exp: Experience) => {
        return {
            start: span.start < exp.start ? span.start : exp.start,
            end: span.end > exp.end ? span.end : exp.end,
        }
    },
    {start: EXPERIENCES[0].start, end: EXPERIENCES[0].end},
)

export const MONTHS: number = (TIMESPAN.end.getFullYear() - TIMESPAN.start.getFullYear()) * 12 + (TIMESPAN.end.getMonth() - TIMESPAN.start.getMonth()) + 2
