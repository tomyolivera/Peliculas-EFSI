import React from 'react'
import { Col, Row } from 'reactstrap';

const PeliculaDetalle = ({ pelicula }) => {
    console.log(pelicula);
    return (
        <>
            <img style={{ position: 'absolute', opacity: '30%' }} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${pelicula.backdrop_path}`} width="90%" />
            <Row className='p-3 d-flex' style={{ position: 'relative' }}>
                <Col sm="12" lg="2">
                    <h1>{ pelicula.title }</h1>
                    <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} />
                </Col>
                <Col sm="12" lg="10">
                    <p style={{ width: '50%' }}><b>Overview</b>: { pelicula.overview }</p>
                    <p>{ pelicula.adult && '+18' }</p>
                </Col>
            </Row>
        </>
    )
}

export default PeliculaDetalle