import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <section className='head'>

            <figure className='head-title'>
                <img  src='#' alt=''/>
                <h1>Alura Space</h1>
            </figure>

            <section className='search'>
                <input type='text' placeholder='O que voce procura?' className='head-search'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' style={{color: "#8B78E5"}}/>
            </section>

        </section>
    )
}

export default Header