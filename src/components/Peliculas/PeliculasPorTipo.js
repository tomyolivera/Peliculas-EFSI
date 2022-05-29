import React, { useEffect, useState } from 'react'

import { obtenerPeliculaPorTipo, obtenerPeliculaPorTipoYFiltro } from '../../Fetch'
import Filtros from './Filtros';
import Pages from './Pages';
import LinkPeliculas from './LinkPeliculas';
import CargaPeliculas from './CargaPeliculas';

const PeliculasPorTipo = ({ titulo, tipo, filtros, setFiltros }) => {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    const setPeliculasPorFiltro = async filtro => {
        const res = await obtenerPeliculaPorTipoYFiltro(tipo, filtro)
        setPeliculas(res.data.results)
    }
    
    useEffect(() => {
        (async function(){
            setLoading(true)
            const res = await obtenerPeliculaPorTipo(tipo, page)
            setPeliculas(res.data.results)
            setTotalPages(res.data.total_pages)
            setLoading(false)
        })();
    }, [page])

    return (
            <div className="mb-5">
                <div className="d-flex">
                    <div className="d-flex mb-3">
                        <h4 className='align-self-center'>{ titulo }</h4>
                        <Filtros filtros={filtros} setFiltros={setFiltros} setPeliculasPorFiltro={setPeliculasPorFiltro} />
                    </div>
                    <Pages setPage={setPage} totalPages={totalPages} />
                </div>
                <div className="scroll-movies">
                    { loading ? <CargaPeliculas /> : peliculas.map(pelicula => <LinkPeliculas key={pelicula.id} pelicula={pelicula} />) } 
                </div>
            </div>
    )
}

export default PeliculasPorTipo;