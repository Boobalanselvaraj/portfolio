import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'experience',
                element: <Experience />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'skills',
                element: <Skills />,
            },
            {
                path: 'education',
                element: <Education />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);
