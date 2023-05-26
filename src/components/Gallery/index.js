import './Gallery.css'

import pictures from './galery.json'
import Tags from '../Tags'

const Gallery = () => {
    return(
        <section className='gallery-tags'>
            <h2>Navegue pela galeria</h2>

            <Tags />

            <ul className='photos'>
                {pictures.map((picture) => {
                    return (
                        <li className='pic' key={picture.id}>
                            <img src={picture.imagem} alt={picture.titulo}/>

                            <section className='pic-info'>
                                <h2>{picture.titulo}</h2>
                                <section>
                                    <p>{picture.creditos}</p>

                                </section>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Gallery