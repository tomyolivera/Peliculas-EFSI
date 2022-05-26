import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'

const Pelicula = ({ pelicula }) => {
    return (
        <Card style={{ maxWidth: '150px' }}>
            <CardImg src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
            <CardBody>
                <h6>{ pelicula.title }</h6>
                <p>{ pelicula.release_date }</p>
            </CardBody>
        </Card>
    )
}

export default Pelicula