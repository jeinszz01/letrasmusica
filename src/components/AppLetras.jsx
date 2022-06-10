import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letras from "./Letras"
import useLetras from "../hooks/useLetras"

const AppLetras = () => {
    const { alerta, letras, cargando } = useLetras()
    return (
        <>
            <header>Búsqueda de letras de Canciones</header>
            
            <Formulario />

            <main>
                { alerta ? <Alerta>{alerta}</Alerta> : 
                  letras ? <Letras /> : 
                  cargando ? 'Cargando...' :
                  <p className="text-center">Busca las letras de tu artista.</p> }
            </main>
        </>
    )
}

export default AppLetras