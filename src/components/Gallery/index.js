import './Gallery.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

import pictures from './galery.json'
import Tags from '../Tags'
import Popular from '../Popular'

const Gallery = () => {
    return(
        <section className='gallery-tags'>
            <h2>Navegue pela galeria</h2>

            <section className='gallery-wrapper'>
                <section>
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
                                            <section className='pic-info-icons'>
                                                <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} />
                                                <FontAwesomeIcon icon={faArrowsUpDownLeftRight}  style={{color: "ffffff"}}/>
                                            </section>
                                        </section>
                                    </section>
                                </li>
                            )
                        })}
                    </ul>
                </section>

                <Popular />
            </section>

        </section>
    )
}

export default Gallery