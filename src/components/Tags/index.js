import './Tags.css'

const Tags = ( {func} ) => {

    function changeTag (i){
        const filtro = i.target.innerHTML

        if (filtro === "Remover") {
            func("")
        } else {
            func(filtro)
        }
    }

    return (
        <ul className='tags'>
                <h3>Busque por tags:</h3>

                <section>
                    <button onClick={changeTag}>Remover</button>
                    <button onClick={changeTag}>Estrelas</button>
                    <button onClick={changeTag}>Galáxias</button>
                    <button onClick={changeTag}>Lua</button>
                    <button onClick={changeTag}>Planetas</button>
                </section>
        </ul>
    )
}

export default Tags