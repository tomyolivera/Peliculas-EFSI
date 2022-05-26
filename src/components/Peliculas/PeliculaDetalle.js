import React from 'react'
import { Col, Row } from 'reactstrap';

const PeliculaDetalle = ({ pelicula }) => {
    console.log(pelicula);
    return (
        <>
            <img className='backdrop_image' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${pelicula.backdrop_path}`} />
            <Row className='p-3 d-flex' style={{ position: 'relative' }}>
                <Col sm="12" md="6" lg="3">
                    <img src={`https://image.tmdb.org/t/p/w300/${pelicula.poster_path}`} />
                </Col>
                <Col sm="12" md="6" lg="9" style={{ width: '50%' }}>
                    <h1>{ pelicula.title }</h1> <hr />
                    <p><b>
                            { pelicula.release_date } | ({ pelicula.spoken_languages.map(lang => lang.iso_639_1.toUpperCase()).join(', ') }) | { pelicula.genres.map(genero => genero.name).join(', ') }
                            { pelicula.runtime ? ` | ${pelicula.runtime} min` : '' }
                            { pelicula.adult && <span> | <span className="mayor_edad">+18</span></span> }
                    </b></p>
                    <p><cite className="h6 text-muted">{ pelicula.tagline }</cite></p>
                    <>
                        <h5>Vista General</h5> 
                        <p>{ pelicula.overview }</p>
                    </>
                    
                </Col>
            </Row>
        </>
    )
}

export default PeliculaDetalle