import React from 'react'
import Pelicula from './Pelicula'

const CargaPeliculas = () => {
    const pelicula = {
        title: '-------------',
        release_date: '00-00-0000',
    }

    return (
        <div className="scroll-movies">
            { Array(15).fill(pelicula).map((pelicula, i) => (
                <div key={i} className='mb-3 mx-1'>
                    <Pelicula pelicula={pelicula} />
                </div>
            ))}
        </div>
    )
}

export default CargaPeliculas