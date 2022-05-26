import React, { useState } from 'react'
import PeliculasPorTipo from './PeliculasPorTipo';

import './Peliculas.css'

const Peliculas = () => {
    const [filtrosPeliculasActuales] = useState(["En streaming", "En televisión", "En alquiler", "En cines"]);
    const [filtrosUltimasPeliculas] = useState(["En alquiler", "En cines"]);
    const [peliculas] = useState([
        {
            titulo: 'Películas Actuales',
            tipo: 'now_playing',
            filtros: filtrosPeliculasActuales
        },
        {
            titulo: 'Más Populares',
            tipo: 'top_rated',
            filtros: filtrosUltimasPeliculas
        },
        {
            titulo: 'Lo que viene',
            tipo: 'upcoming',
            filtros: filtrosPeliculasActuales
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