import './index.css';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProjectPage from './Pages/ProjectsPage.jsx';
import {Routes, Route} from 'react-router';
import {PROJECT_PAGE_ROUTE} from './Utility/routes.js';

export default function App() {
    console.log('MARI API URL:', import.meta.env.VITE_BACKEND_API_URL);
    // Render

    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={PROJECT_PAGE_ROUTE} element={<ProjectPage />} />
            </Routes>
        </>
    )
};

