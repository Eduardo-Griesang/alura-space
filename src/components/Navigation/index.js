import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav-item'>
                <li>Início</li>
            </ul>

            <ul className='nav-item'>
                <li>Mais Vistas</li>
            </ul>

            <ul className='nav-item'>
                <li>Mais Curtidas</li>
            </ul>

            <ul className='nav-item'>
                <li>Novas</li>
            </ul>

            <ul className='nav-item'>
                <li>Surpreenda-me</li>
            </ul>
        </nav>
    )
}

export default Navigation