import './Gallery.css'

const Gallery = () => {
    return(
        <section className='gallery-tags'>
            <h2>Navegue pela galeria</h2>
            <div>
                <h3>Busque por tags:</h3>

                <button>Estrelas</button>
                <button>Galáxias</button>
                <button>Lua</button>
                <button>Planetas</button>
            </div>
        </section>
    )
}

export default Gallery