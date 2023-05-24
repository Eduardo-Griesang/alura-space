import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/home-ativo.png' alt='inicio'/>
                    <li>Início</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/mais-vistas-inativo.png' alt='Mais vistos'/>
                    <li>Mais Vistas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/mais-curtidas-inativo.png' alt='Mais curtidas'/>
                    <li>Mais Curtidas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/novas-inativo.png' alt='Novas'/>
                    <li>Novas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/surpreenda-me-inativo.png' alt='Surpreenda-me'/>
                    <li>Surpreenda-me</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navigation