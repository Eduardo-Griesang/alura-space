import './Banner.css'

const Banner = () => {
    return(
        <figure className='banner'>
            <img src="../assets/banner.png" alt="Imagem da Terra vista do espaço" className='banner-img'/>
            <h2 className='font-face-GS'>A galeria mais completa de fotos do espaço!</h2>
        </figure>
    )
}

export default Banner