import {useEffect, useState} from 'react';
import PillButton from '../PillButton.jsx';
import PreviewCell from '../PreviewCell.jsx';
import {navBarHeight} from '../../Helpers/Constants.js';
import {openInNewTab} from '../../Helpers/Helpers.js';
import backgroundImage from './pixel-galaxy.png';
import {API_URL, GET_PROJECTS_ROUTE, GET_TOP_THREE_PROJECTS, PROJECT_PAGE_ROUTE} from '../../utility/routes.js';

export default function HomePage(){

    // Instance Variables

    const [projectsList, setProjectsList] = useState([]);

    const experiencesList = [
        {
            title:'UWaterloo',
            imageUri:'/uwaterloo-logo.png',
            description:(
                <>
                    <strong>Computer Science, Co-op Program</strong>
                    <p>Sep 2023 - Apr 2028</p>
                </>
            )
        },
        {
            title:'Tuq Inc.',
            imageUri:'/tuq-logo.png',
            description:(
                <>
                    <strong>Junior Developer</strong>
                    <p>May 2024 - Aug 2024</p>
                </>
            )
        },
        {
            title:'Propel Holdings',
            imageUri:'/propel-holdings-logo.jpg',
            description:(
                <>
                    <strong>Software Developer Intern</strong>
                    <p>Jan 2025 - Apr 2025</p>
                </>
            )
        }
    ];

    // Helpers

    async function fetchProjects(){
        const URL = `${API_URL}${GET_PROJECTS_ROUTE}${GET_TOP_THREE_PROJECTS}`;
        const response = await fetch(URL);
        if(!response.ok){
            console.log('Failed to fetch projects:', response.statusText);
            return;
        }
        const record = await response.json();
        if(!record){
            console.log('Projects not found');
            return;
        }
        setProjectsList(record);
    }

    // Effects

    useEffect(() => {
        fetchProjects();
    }, []);

    // Render

    return (
        <div>
            bruh
        </div>
    );
}
