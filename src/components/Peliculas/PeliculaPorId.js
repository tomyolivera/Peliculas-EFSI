import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router'
import { obtenerPeliculaPorId } from '../../Fetch';

import Pelicula from './Pelicula';
import PeliculaDetalle from './PeliculaDetalle';

const PeliculaPorId = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState({});

    useEffect(() => {
        (async function(){
            const res = await obtenerPeliculaPorId(id);
            setPelicula(res.data);
        })();
    }, [id])

    return (
        <div>
            {/* <Link to="/" className="btn btn-secondary">Volver</Link><br /> */}
            <PeliculaDetalle pelicula={pelicula} />
        </div>
    )
}

export default PeliculaPorId