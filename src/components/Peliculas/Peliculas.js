import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row } from 'reactstrap';
import Filtros from './Filtros';
import Pelicula from './Pelicula';

const api_key = "8cbcae6e6a57f619c72f01584c61e53c";
 
const Peliculas = () => {
    const [peliculasPopulares, setPeliculasPopulares] = useState([]);
    const [peliculasActuales, setPeliculasActuales] = useState([]);
    const [filtrosPeliculasActuales] = useState(["En streaming", "En televisión", "En alquiler", "En cines"]);
    const [filtrosPeliculasPopulares] = useState(["Peliculas", "Television"]);

    useEffect(() => {
        (async function(){
            let res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=en-US&page=1`);
            setPeliculasActuales(res.data.results);

            res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            setPeliculasPopulares(res.data.results);
        })();
    }, [])

    return (
        <div>
            <div className="d-flex mb-2">
                <h3>Peliculas Actuales</h3>
                <Filtros filtros={filtrosPeliculasActuales} />
            </div>
            <Row style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto'}}>
                {
                    peliculasActuales.map(pelicula => (
                        <Pelicula key={pelicula.id} pelicula={pelicula} />
                        ))
                    }
            </Row>

            <div className='d-flex mb-2'>
                <h3>Peliculas Populares</h3>
                <Filtros filtros={filtrosPeliculasPopulares} />
            </div>
            <Row style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', overflowX: 'auto'}}>
                {
                    peliculasPopulares.map(pelicula => (
                        <Pelicula key={pelicula.id} pelicula={pelicula} />
                    ))
                }
            </Row>
        </div>
    )
}

export default Peliculas