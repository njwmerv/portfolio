export const PROJECTS = [
	{   "name": "Tic-Tac-Toe",
		"image": "/tic-tac-toe.png",
		"link": "https://github.com/njwmerv/tictactoe-python",
		"description": "Tic-tac-toe implemented in Python, playable in the command line.",
		"tags": [
			"Python",
			"Game"
		]
	},
	{
		"name": "Pong",
		"image": "/pong.png",
		"link": "https://github.com/njwmerv/pong",
		"description": "Pong recreated in Pygame, where you can 1v1 your friend.",
		"tags": [
			"Python",
			"Game",
			"Pygame"
		]
	},
	{
		"name": "Juman Ping",
		"image": "/juman-ping.png",
		"link": "https://github.com/njwmerv/juman-ping",
		"description": "2D platformer game for the PC, where players create and break their own platforms.",
		"tags": [
			"Python",
			"Pygame",
			"Object-Oriented Programming",
			"Game"
		],
		"topThree": true
	},
	{
		"name": "Biquadris",
		"image": "https://i.imgur.com/Qm72NmX.png",
		"link": "https://github.com/njwmerv/biquadris",
		"description": "Variation on classic Tetris, where 2 players duel each other, taking turns by placing 1 block at a time and attacking each other by clearing their board.",
		"tags": [
			"C++",
			"Object-Oriented Programming",
			"Game"
		]
	},
	{
		"name": "Portfolio Website",
		"image": "https://i.imgur.com/o5P365H.png",
		"link": "https://github.com/njwmerv/portfolio",
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
		"topThree": true
	},
	{
		"name": "Godot Platformer",
		"image": "https://i.imgur.com/8EtQ8ZN.png",
		"link": "https://github.com/njwmerv/godoing",
		"description": "Simple 2D platformer made with the Godot game engine to learn how to use it.",
		"tags": [
			"Game",
			"Godot",
			"GDScript"
		]
	},
	{
		"name": "Top Wiki",
		"image": "https://i.imgur.com/B15YQei.png",
		"link": "https://github.com/njwmerv/top-wiki",
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
		"image": "https://avatars.githubusercontent.com/u/6777169?s=280&v=4",
		"link": "https://github.com/njwmerv/htn-be-chal",
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
		"image": "https://i.imgur.com/eRUEpRo.png",
		"link": "https://github.com/njwmerv/world-gen",
		"description": "Exploration of realistic procedural world generation using Perlin noise in C++, which lets users continuously scroll across a map that expands as they move around.",
		"tags": [
			"C++",
			"Object-Oriented Programming",
			"Procedural Generation",
			"Multi-threaded Programming"
		],
		"topThree": true
	},
	{
		"name": "Space Simulator",
		"image": "https://i.imgur.com/IFo2zKO.png",
		"link": "https://github.com/njwmerv/space-sim",
		"description": "2D space simulation of movement of celestial bodies with C++ and OpenGL",
		"tags": [
			"C++",
			"Object-Oriented Programming",
			"OpenGL"
		]
	},
	{
		"name": "Salita",
		"image": "https://i.imgur.com/qXjDqXS.png",
		"link": "https://github.com/njwmerv/salita",
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
			"Game Development"
		]
	},
	{
		"name": "Todo Wolff",
		"image": "https://i.imgur.com/7RI4ZfB.png",
		"link": "https://github.com/njwmerv/todo-wolff",
		"description": "Discord helper bot to track your to-do list and send reminders.",
		"tags": [
			"JavaScript",
			"Express.js",
			"SQLite"
		]
	},
	{
		"name": "Hydro Homies",
		"image": "https://i.imgur.com/Zw7DAOa.png",
		"link": "https://github.com/njwmerv/HydroHomies",
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
		]
	},
	{   "name": "Brainfuck JIT Compiler",
		"image": "https://i.imgur.com/yNgDEuP.png",
		"link": "https://github.com/njwmerv/jit_brainfuck",
		"description": "Just-in-Time Compiler for Brainfuck",
		"tags": [
			"C",
			"Makefile",
			"Assembly (x86)",
			"Low-level",
		],
	},
	{
		"name": "Xerlang",
		"image": "https://i.imgur.com/jK5xpOq.png",
		"link": "https://github.com/njwmerv/xerlang",
		"description": "My own C-like programming language building more on a course I previously took.",
		"tags": [
			"C++",
			"Python",
			"Assembly (x86)",
			"Compiler Design",
			"Low-level",
		],
	},
].reverse();

const tags = PROJECTS.reduce((fullTags, project) => {
	const tags = project.tags.filter((tag) => !fullTags.includes(tag));
	return [...fullTags, ...tags];
}, []);

export const TAGS = tags.sort().map((tag) => { return {value: tag, label: tag}; });
