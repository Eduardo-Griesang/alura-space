import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/home-ativo.png' alt='inicio'/>
                    <li className='font-face-GS'>Início</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/mais-vistas-inativo.png' alt='Mais vistos'/>
                    <li className='font-face-GS'>Mais Vistas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/mais-curtidas-inativo.png' alt='Mais curtidas'/>
                    <li className='font-face-GS'>Mais Curtidas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/novas-inativo.png' alt='Novas'/>
                    <li className='font-face-GS'>Novas</li>
                </a>
            </ul>

            <ul>
                <a href='#' className='nav-item'>
                    <img src='../assets/icones/surpreenda-me-inativo.png' alt='Surpreenda-me'/>
                    <li className='font-face-GS'>Surpreenda-me</li>
                </a>
            </ul>
        </nav>
    )
}

export default Navigation