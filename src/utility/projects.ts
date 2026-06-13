export interface Tag {
    name: string
    count: number
}

export interface Project {
    name: string
    img: string
    url: string
    description: string
    tags: string[]
    top?: boolean
}

export const PROJECTS: Project[] = [
    {   "name": "Tic-Tac-Toe",
        "img": "/tic-tac-toe.png",
        "url": "https://github.com/njwmerv/tictactoe-python",
        "description": "Tic-tac-toe implemented in Python, playable in the command line.",
        "tags": [
            "Python",
            "Game"
        ]
    },
    {
        "name": "Pong",
        "img": "/pong.png",
        "url": "https://github.com/njwmerv/pong",
        "description": "Pong recreated in Pygame, where you can 1v1 your friend.",
        "tags": [
            "Python",
            "Game",
            "Pygame"
        ]
    },
    {
        "name": "Juman Ping",
        "img": "/juman-ping.png",
        "url": "https://github.com/njwmerv/juman-ping",
        "description": "2D platformer game for the PC, where players create and break their own platforms.",
        "tags": [
            "Python",
            "Pygame",
            "Object-Oriented Programming",
            "Game"
        ],
        "top": true
    },
    {
        "name": "Biquadris",
        "img": "https://i.imgur.com/Qm72NmX.png",
        "url": "https://github.com/njwmerv/biquadris",
        "description": "Variation on classic Tetris, where 2 players duel each other, taking turns by placing 1 block at a time and attacking each other by clearing their board.",
        "tags": [
            "C++",
            "Object-Oriented Programming",
            "Game"
        ]
    },
    {
        "name": "Portfolio Website",
        "img": "https://i.imgur.com/o5P365H.png",
        "url": "https://github.com/njwmerv/portfolio",
        "description": "My personal website with my projects and career so far. Please explore as much as you want :)",
        "tags": [
            "React",
            "Frontend",
            "Backend",
            "Database",
            "MERN",
            "MongoDB",
            "Express.js",
            "Node.js",
            "WebDev"
        ],
        "top": true
    },
    {
        "name": "Godot Platformer",
        "img": "https://i.imgur.com/8EtQ8ZN.png",
        "url": "https://github.com/njwmerv/godoing",
        "description": "Simple 2D platformer made with the Godot game engine to learn how to use it.",
        "tags": [
            "Game",
            "Godot",
            "GDScript"
        ]
    },
    {
        "name": "Top Wiki",
        "img": "https://i.imgur.com/B15YQei.png",
        "url": "https://github.com/njwmerv/top-wiki",
        "description": "Project that collects data from the top 25 Wikipedia articles of the week and analyzes the data in various ways.",
        "tags": [
            "Python",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Data Science",
            "Jupyter Notebook",
            "Web Scraping"
        ]
    },
    {
        "name": "HTN Backend Challenge",
        "img": "https://avatars.githubusercontent.com/u/6777169?s=280&v=4",
        "url": "https://github.com/njwmerv/htn-be-chal",
        "description": "Submission for a HTN Backend Organizer Challenge of an API that connects a SQL database containing user info to a client.",
        "tags": [
            "Python",
            "Flask",
            "SQL",
            "SQLite",
            "Backend"
        ]
    },
    {
        "name": "World Generator",
        "img": "https://i.imgur.com/eRUEpRo.png",
        "url": "https://github.com/njwmerv/world-gen",
        "description": "Realistic procedural world generation using Perlin noise in C++.",
        "tags": [
            "C++",
            "Object-Oriented Programming",
            "Procedural Generation",
            "Multi-threaded Programming"
        ],
        "top": true
    },
    {
        "name": "Space Simulator",
        "img": "https://i.imgur.com/IFo2zKO.png",
        "url": "https://github.com/njwmerv/space-sim",
        "description": "2D space simulation of movement of celestial bodies with C++ and OpenGL",
        "tags": [
            "C++",
            "Object-Oriented Programming",
            "OpenGL"
        ]
    },
    {
        "name": "Salita",
        "img": "https://i.imgur.com/qXjDqXS.png",
        "url": "https://github.com/njwmerv/salita",
        "description": "Wordle-inspired game for Tagalog, with varying word lengths supported.",
        "tags": [
            "React",
            "Tailwind",
            "Spring Boot",
            "Frontend",
            "Backend",
            "Fullstack",
            "MongoDB",
            "TypeScript",
            "Game Development",
        ],
        "top": true,
    },
    {
        "name": "Todo Wolff",
        "img": "https://i.imgur.com/7RI4ZfB.png",
        "url": "https://github.com/njwmerv/todo-wolff",
        "description": "Discord helper bot to track your to-do list and send reminders.",
        "tags": [
            "JavaScript",
            "Express.js",
            "SQLite"
        ]
    },
    {
        "name": "Hydro Homies",
        "img": "https://i.imgur.com/Zw7DAOa.png",
        "url": "https://github.com/njwmerv/HydroHomies",
        "description": "DeltaHacks 2026 project that gamifies water drinking to encourage healthy habits.",
        "tags": [
            "TypeScript",
            "Fullstack",
            "Expo",
            "Firebase",
            "React Native",
            "Python",
            "Tensor Flow",
            "Machine Learning"
        ],
        "top": true,
    },
    {   "name": "Brainfuck JIT Compiler",
        "img": "https://i.imgur.com/yNgDEuP.png",
        "url": "https://github.com/njwmerv/jit_brainfuck",
        "description": "Just-in-Time Compiler for Brainfuck",
        "tags": [
            "C",
            "Makefile",
            "Assembly (x86)",
            "Low-level",
        ],
        "top": true,
    },
    {
        "name": "Xerlang",
        "img": "https://i.imgur.com/jK5xpOq.png",
        "url": "https://github.com/njwmerv/xerlang",
        "description": "My own C-like programming language building more on a course I previously took.",
        "tags": [
            "C++",
            "Python",
            "Compiler Design",
            "Low-level",
        ],
        "top": true,
    },
].reverse()

export const TOP: Project[] = PROJECTS.filter((project: Project) => project.top)

const tags: Map<string, number> = PROJECTS.reduce((fullTags: Map<string, number>, project: Project) => {
    for (const tag of project.tags) fullTags.set(tag, (fullTags.get(tag) ?? 0) + 1)
    return fullTags
}, new Map())

export const TAGS: Tag[] = Array.from(tags, ([tag, count]) => {
    return { name: tag, count: count };
})

