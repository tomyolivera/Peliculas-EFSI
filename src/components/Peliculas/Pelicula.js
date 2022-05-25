import React from 'react'
import { Card, CardBody, CardHeader, CardImg } from 'reactstrap'

const Pelicula = ({ pelicula }) => {
    return (
        <Card>
            <CardImg src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} height="250px" />
            <CardHeader>{ pelicula.title }</CardHeader>
            <CardBody>Fecha salida: { pelicula.release_date }</CardBody>
        </Card>
    )
}

export default Pelicula