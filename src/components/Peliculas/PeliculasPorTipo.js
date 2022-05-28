import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Pelicula from './Pelicula';
import Filtros from './Filtros';
import { obtenerPeliculaPorTipo, obtenerPeliculaPorTipoYFiltro } from '../../Fetch'

const PeliculasPorTipo = ({ titulo, tipo, filtros, setFiltros }) => {
    const [peliculas, setPeliculas] = useState([]);

    const setPeliculasPorFiltro = async filtro => {
        const res = await obtenerPeliculaPorTipoYFiltro(tipo, filtro)
        setPeliculas(res.data.results)
    }

    useEffect(() => {
        (async function(){
            const res = await obtenerPeliculaPorTipo(tipo)
            setPeliculas(res.data.results)
        })();
    }, [])

    return (
            <div className="mb-5">
                <div className="d-flex mb-3">
                    <h4 className='align-self-center'>{ titulo }</h4>
                    <Filtros filtros={filtros} setFiltros={setFiltros} setPeliculasPorFiltro={setPeliculasPorFiltro} />
                </div>
                <div className="scroll-movies">
                    {
                        peliculas.map(pelicula => (
                            <Link to={`/movie/${pelicula.id}`} className='mb-3 mx-1' style={{ flex: '0 0 auto', textDecoration: 'none', color: 'black' }} key={pelicula.id}>
                                <Pelicula pelicula={pelicula} />
                            </Link>
                        ))
                    } 
                </div>
            </div>
    )
}

export default PeliculasPorTipo;