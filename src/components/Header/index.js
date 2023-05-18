import './Header.css';

const Header = () => {
    return (
        <section className='head'>
            <figure className='head-title'>
                <img  src='#' alt=''/>
                <h1>Alura Space</h1>
            </figure>
            <section className='head-search-border'>
                <input type='text' placeholder='O que voce procura?' className='head-search pink'/>
            </section>
        </section>
    )
}

export default Header