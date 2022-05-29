import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'

import { acortarTitulo } from '../../helpers/functions'

const Pelicula = ({ pelicula }) => {
    return (
        <Card title={pelicula.title} style={{ maxWidth: '180px', maxHeight: '350px', background: '#182952', color: 'white', overflowY: 'hidden' }}>
            <CardImg src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
            <CardBody>
                <h6>{ acortarTitulo(pelicula.title) }</h6>
                <p>{ pelicula.release_date }</p>
            </CardBody>
        </Card>
    )
}

export default Pelicula