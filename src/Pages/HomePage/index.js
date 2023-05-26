import './HomePage.css'

import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Gallery from '../../components/Gallery'

const HomePage = () => {
    return (
        <body>
            <Header />
            
            <main>
                <section className='first-section'>
                    <Navigation />
                    <div>
                        <Banner />
                        <Gallery />
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </body>
    )
}

export default HomePage