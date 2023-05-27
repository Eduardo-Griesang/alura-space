import './Popular.css'

import popularImages from './popular.json'

const Popular = () => {
    return(
        <section className='popular'>
            <h2>Populares</h2>

            <ul>
                {popularImages.map((image) => {
                    return (
                        <img src={image.source} alt={image.titulo} className='popular-imgs'/>
                    )
                })}
            </ul>

            <button>Ver mais</button>
        </section>
    )
}

export default Popular