import './HomePage.css'

import Header from "../../components/Header"
import Navigation from "../../components/Navigation"
import Banner from '../../components/Banner'

const HomePage = () => {
    return (
        <>
            <Header />
            
            <main>
                <section className='first-section'>
                    <Navigation />
                    <Banner />
                </section>
            </main>
        </>
    )
}

export default HomePage