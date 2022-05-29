import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router'
import { obtenerPeliculaPorId } from '../../Fetch';

import PeliculaDetalle from './PeliculaDetalle';

const PeliculaPorId = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async function(){
            const res = await obtenerPeliculaPorId(id);
            setPelicula(res.data);
            setLoading(false);
        })();
    }, [id])

    return (
        loading ? <div>Cargando...</div> :
        <div>
            {/* <Link to="/" className="btn btn-secondary mb-3">Volver</Link><br /> */}
            <PeliculaDetalle pelicula={pelicula} />
        </div>
    )
}

export default PeliculaPorId