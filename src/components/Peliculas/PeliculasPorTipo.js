import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Pelicula from './Pelicula';
import Filtros from './Filtros';
import { obtenerPeliculaPorTipo, obtenerPeliculaPorTipoYFiltro } from '../../Fetch'
import Pages from './Pages';

const PeliculasPorTipo = ({ titulo, tipo, filtros, setFiltros }) => {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    const setPeliculasPorFiltro = async filtro => {
        const res = await obtenerPeliculaPorTipoYFiltro(tipo, filtro)
        setPeliculas(res.data.results)
    }

    useEffect(() => {
        (async function(){
            setLoading(true)
            const res = await obtenerPeliculaPorTipo(tipo, page)
            setPeliculas(res.data.results)
            setLoading(false)
        })();
    }, [page])

    return (
            <div className="mb-5">
                <div className="d-flex mb-3">
                    <h4 className='align-self-center'>{ titulo }</h4>
                    <Filtros filtros={filtros} setFiltros={setFiltros} setPeliculasPorFiltro={setPeliculasPorFiltro} />
                    <Pages page={page} setPage={setPage} />
                </div>
                <div className="scroll-movies">
                    {
                        loading ? (<> Cargando... </>)
                        : peliculas.map(pelicula => (
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