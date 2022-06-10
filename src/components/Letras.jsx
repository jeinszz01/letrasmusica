import useLetras from "../hooks/useLetras"

const Letras = () => {
    const { letras, cargando, busqueda } = useLetras()
    const { artista, cancion } = busqueda
    return (
        cargando ? 'Cargando..' : 
        
        <>
            <div className="nombreCancion">{cancion}</div>
            <div className="nombreArtista">Canción de <span>{artista}</span></div>
            <div className="letra">
                {letras}
            </div>
        </>
    )
}

export default Letras