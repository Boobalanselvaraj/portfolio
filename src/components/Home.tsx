import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';

const Home = () => {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
        </div>
    );
};

export default Home;
