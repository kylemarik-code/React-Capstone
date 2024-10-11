import About from '../components/About'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import "../styles/core.css"

function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Highlights />
                <Testimonials />
                <About />
            </main>
            <Footer />
        </>
    );
}

export default Home;