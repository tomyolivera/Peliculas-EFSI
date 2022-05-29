import React from 'react'
import { Link } from 'react-router-dom'
import Pelicula from './Pelicula'

const LinkPeliculas = ({ pelicula }) => {
    return  <Link to={`/movie/${pelicula.id}`} className='mb-3 mx-1' style={{ flex: '0 0 auto', textDecoration: 'none', color: 'black' }} key={pelicula.id}>
                <Pelicula pelicula={pelicula} />
            </Link>
}

export default LinkPeliculas