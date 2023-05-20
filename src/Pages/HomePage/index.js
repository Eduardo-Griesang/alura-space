import './HomePage.css'

import Banner from "../../Banner"
import Header from "../../components/Header"
import Navigation from "../../components/Navigation"

const HomePage = () => {
    return (
        <>
            <Header />

            <section className='first-section'>
                <Navigation />
                <Banner />
            </section>
        </>
    )
}

export default HomePage