import './App.css';
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
            <Footer />
        </>
    );
}

export default App;
