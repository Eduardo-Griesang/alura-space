import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav-item'>
                <img src='../assets/icones/home-ativo.png' alt='inicio'/>
                <li className='font-face-GS'>Início</li>
            </ul>

            <ul className='nav-item'>
                <img src='../assets/icones/mais-vistas-inativo.png' alt='Mais vistos'/>
                <li className='font-face-GS'>Mais Vistas</li>
            </ul>

            <ul className='nav-item'>
                <img src='../assets/icones/mais-curtidas-inativo.png' alt='Mais curtidas'/>
                <li className='font-face-GS'>Mais Curtidas</li>
            </ul>

            <ul className='nav-item'>
                <img src='../assets/icones/novas-inativo.png' alt='Novas'/>
                <li className='font-face-GS'>Novas</li>
            </ul>

            <ul className='nav-item'>
                <img src='../assets/icones/surpreenda-me-inativo.png' alt='Surpreenda-me'/>
                <li className='font-face-GS'>Surpreenda-me</li>
            </ul>
        </nav>
    )
}

export default Navigation