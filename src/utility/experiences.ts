export interface Experience {
    company: string
    role: string
    team?: string
    start: Date
    end: Date
    img: string
    colour?: string
}

export const EXPERIENCES: Experience[] = [
    {
        company: "University of Waterloo",
        role: "Honours Computer Science, Co-op Program",
        start: new Date(2023, 8, 1),
        end: new Date(2028, 5, 30),
        img: "/uwaterloo-logo.png",
    },
    {
        company: "University of Waterloo",
        role: "MATH 136 Marker",
        start: new Date(2024, 8, 1),
        end: new Date(2024, 11, 31),
        img: "/uwaterloo-logo.png",
    },
    {
        company: "Tuq Inc.",
        role: "Junior Developer",
        team: "Core Team",
        start: new Date(2024, 4, 1),
        end: new Date(2024, 7, 31),
        img: "/propel-holdings-logo.jpg",
    },
    {
        company: "Propel Holdings",
        role: "Software Developer Intern",
        team: "Web Team",
        start: new Date(2025, 0, 1),
        end: new Date(2025, 3, 30),
        img: "/propel-holdings-logo.jpg",
    },
    {
        company: "Vivid Seats Inc.",
        role: "Fullstack Engineering Co-op",
        team: "B2C Web-Distribution Team",
        start: new Date(2025, 8, 1),
        end: new Date(2025, 11, 31),
        img: "/viviseats-logo.png",
    },
    {
        company: "UW Quizbowl Club",
        role: "Web Master",
        start: new Date(2026, 0, 1),
        end: new Date(2026, 3, 30),
        img: "/uwqb-logo.jpg",
    },
    {
        company: "Cresta Intelligence",
        role: "Fullstack Engineering Co-op",
        team: "Voice AI Infra Team",
        start: new Date(2026, 4, 1),
        end: new Date(2026, 7, 31),
        img: "/cresta-logo-white.gif",
    },
]

export const TIMESPAN: {start: Date, end: Date} = EXPERIENCES.reduce(
    (span: {start: Date, end: Date}, exp: Experience) => {
        return {
            start: span.start < exp.start ? span.start : exp.start,
            end: span.end > exp.end ? span.end : exp.end,
        }
    },
    {start: EXPERIENCES[0].start, end: EXPERIENCES[0].end},
)

export const MONTHS: number = (TIMESPAN.end.getFullYear() - TIMESPAN.start.getFullYear()) * 12 + (TIMESPAN.end.getMonth() - TIMESPAN.start.getMonth()) + 1
