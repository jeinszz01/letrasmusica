import { useState, createContext} from 'react'
import axios from 'axios'

const LetrasContext = createContext()

const LetrasProvider = ({children}) => {
    
    const [alerta, setAlerta] = useState('')

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const [letras, setLetras] = useState('')
    const [cargando, setCargando] = useState(false)

    const busquedaLetra = async busqueda => {
        //console.log(busqueda)
        setCargando(true)
        try {
            const { artista, cancion } = busqueda 
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            // const respuesta = await axios.get(url) // no se necesario .get ya q es el default, mientras q con fetch necesitabamos otro await para el json con axios no.
            const { data } = await axios(url)
            setLetras(data.lyrics)
            setAlerta('')
        } catch (error) {
            setAlerta('Canción no encontrada')
        }
        setCargando(false)
    }
    
    return (
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letras,
                cargando,
                busqueda,
                setBusqueda
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider
}

export default LetrasContext