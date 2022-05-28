import React, { useState } from 'react'
import PeliculasPorTipo from './PeliculasPorTipo';

import './Peliculas.css'

const Peliculas = () => {
    const [filtrosPeliculasActuales, setFiltrosPeliculasActuales] = useState([
        {titulo: "En streaming", group: 'streaming', active: false},
        {titulo: "En televisión", group: 'on-tv', active: false},
        {titulo: "En alquiler", group: 'for-rent', active: false},
        {titulo: "En cines", group: 'in-theatres', active: false}
    ]);
    const [filtrosUltimasPeliculas, setFiltrosUltimasPeliculas] = useState([
        {titulo: "En alquiler", group: 'for-rent', active: false},
        {titulo: "En cines", group: 'in-theatres', active: false}
    ]);
    const [peliculas] = useState([
        {
            titulo: 'Películas Actuales',
            tipo: 'now_playing',
            filtros: filtrosPeliculasActuales,
            setFiltros: setFiltrosPeliculasActuales
        },
        {
            titulo: 'Más Populares',
            tipo: 'top_rated',
            filtros: filtrosUltimasPeliculas,
            setFiltros: setFiltrosUltimasPeliculas
        },
        {
            titulo: 'Lo que viene',
            tipo: 'upcoming',
            filtros: filtrosPeliculasActuales,
            setFiltros: setFiltrosUltimasPeliculas
        },
    ]);

    return (
        <div>
            {
                peliculas.map((pelicula, i) => (
                    <div key={i}>
                        <PeliculasPorTipo {...pelicula} />
                    </div>
                ))
            }
        </div>
    )
}

export default Peliculas