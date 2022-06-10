import { useState } from 'react'
import useLetras from '../hooks/useLetras'

const Formulario = () => {

    const { setAlerta, busquedaLetra, busqueda, setBusqueda } = useLetras() //Destructuring a nuestro context

    // const [busqueda, setBusqueda] = useState({
    //     artista: '',
    //     cancion: ''
    // }) // Con el value de cada input se llenaran los campos.

    const handleSubmit = e => {
        e.preventDefault()
        // Se realiza este if si es q es un objeto
        if(Object.values(busqueda).includes('')) {
            setAlerta('Coloca nombre de artista y canción')
            return
        }
        busquedaLetra(busqueda)
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Busca por Artistas y Canciones</legend>

            <div className='form-grid'>
                <div>
                    <label>Artista</label>
                    <input type='text' name='artista' placeholder='Nombre del Artista' value={busqueda.artista}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                    />
                </div>
                <div>
                    <label>Canción</label>
                    <input type='text' name='cancion' placeholder='Nombre del tema' value={busqueda.cancion}
                            onChange={e => setBusqueda({
                                ...busqueda,
                                [e.target.name]: e.target.value
                            })}
                    />
                </div>
                <input type='submit' value='Buscar' />
            </div>
        </form>
    )
}

export default Formulario