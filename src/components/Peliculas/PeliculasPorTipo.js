import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Pelicula from './Pelicula';
import Filtros from './Filtros';
import { obtenerPeliculaPorTipo } from '../../Fetch'

const PeliculasPorTipo = ({ titulo, tipo, filtros }) => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        (async function(){
            const res = await obtenerPeliculaPorTipo(tipo);
            setPeliculas(res.data.results);
        })();
    }, [])

    return (
            <div className="mb-5">
                <div className="d-flex mb-3">
<<<<<<< HEAD
                    <h4>{ titulo }</h4>
=======
                    <h4 className='align-self-center'>{ titulo }</h4>
>>>>>>> 2f36034 (diseño)
                    <Filtros filtros={filtros} />
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