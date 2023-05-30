import './Gallery.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'

import pictures from './galery.json'
import Tags from '../Tags'
import Popular from '../Popular'
import { useState } from 'react'

const Gallery = () => {

    const [ tag, tagChange ] = useState("")

    function changeTag (index) {
        tagChange(index)
    }

    return(
        <section className='gallery-tags'>
            <h2>Navegue pela galeria</h2>

            <section className='gallery-wrapper'>
                <section>
                    <Tags func={changeTag}/>

                    {/* quando um botão de filtro é clicado a função 'changeTag' muda a const 'tag' */}
                    
                    {/* primeiro ele checa se a const 'tag' está vazia, se estiver ele faz o map do JSON pictures por inteiro, pois nenhuma tag estará selecionada */}

                    {/* se a const 'tag' não estiver vazia, primeiramente é feito um filter() fo JSON pictures procurando pela tag igual a da const 'tag'.
                    E com esses objetos encontrados pelo filter() é feito o map  */}
                    
                    <ul className='photos'>
                        {( tag === "" ) ? pictures.map((picture) => {
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
                                </li>)
                            })
                            : pictures.filter(picture => picture.tag.trim() === tag.trim()).map((picture => {
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
                                    </li>)
                            }))
                        }
                    </ul>
                </section>

                <Popular />
            </section>

        </section>
    )
}

export default Gallery