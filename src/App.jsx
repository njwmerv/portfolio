import './index.css';
import NavBar from './Components/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx';
import {Routes, Route} from 'react-router';

export default function App() {

    // Render

    return (
        <>
            <NavBar />
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
        </>
    )
};

