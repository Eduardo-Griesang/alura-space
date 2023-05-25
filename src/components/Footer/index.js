import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return(
        <div className='foot'>
            <div>
                <a href='https://www.instagram.com/eduardo_griesang/'>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} />
                </a>

                <a href='https://twitter.com/EGriesang'>
                    <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} />
                </a>

                <a href='https://www.linkedin.com/in/eduardo-griesang-0b779921b/'>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} />
                </a>
            </div>

            <h3>Desenvolvido por Eduardo</h3>
        </div>
    )
}

export default Footer