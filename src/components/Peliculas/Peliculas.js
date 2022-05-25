import React, { useState } from 'react'
import PeliculasPorTipo from './PeliculasPorTipo';

import './Peliculas.css'

const Peliculas = () => {
    const [filtrosPeliculasActuales] = useState(["En streaming", "En televisión", "En alquiler", "En cines"]);
    const [filtrosUltimasPeliculas] = useState(["En alquiler", "En cines"]);

    return (
        <div>
            <PeliculasPorTipo titulo="Peliculas Actuales" tipo="now_playing" filtros={filtrosPeliculasActuales} />
            <PeliculasPorTipo titulo="Mas Populares" tipo="top_rated" filtros={filtrosUltimasPeliculas} />
            <PeliculasPorTipo titulo="Lo que viene" tipo="upcoming" filtros={filtrosUltimasPeliculas} />
        </div>
    )
}

export default Peliculas