import React from 'react'
import { Card, CardBody, CardHeader, CardImg, Col } from 'reactstrap'

const Pelicula = ({ pelicula }) => {
    return (
        <Col md="4" className='mb-3' style={{ flex: '0 0 auto' }}>
            <Card>
                <CardImg src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} height="300px" />
                <CardHeader>{ pelicula.title }</CardHeader>
                <CardBody>Fecha salida: { pelicula.release_date }</CardBody>
            </Card>
        </Col>
    )
}

export default Pelicula