import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { convertirTiempo } from '../../helpers/functions';

const PeliculaDetalle = ({ pelicula }) => {
    return (
        <div className='w-100'>
            <img alt={pelicula.title} className='backdrop_image' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${pelicula.backdrop_path}`} />

            <Row className='p-3 d-flex' style={{ position: 'relative' }}>
                <Col xs="12" md="4" lg="3">
                    <Link to="/" className="btn btn-secondary mb-3">Volver</Link><br />
                    <img alt={pelicula.title} className="detail_image" src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
                </Col>
                <Col xs="12" md="8" lg="9" style={{ width: '60%' }}>
                    <h1>{ pelicula.title }</h1> <hr style={{ height: '2px', background: 'black' }} />
                    <p>
                        <b>{ pelicula.release_date } | </b> {/* Fecha De Salida */}
                        <b>({ pelicula.spoken_languages.map(lang => lang.iso_639_1.toUpperCase()).join(', ') }) | </b> {/* Idiomas */}
                        <b>{ pelicula.genres.map(genero => genero.name).join(', ') } | </b> {/* Generos */}
                        <b>{ convertirTiempo(pelicula.runtime) }</b> {/* Duración */}
                        <b>{ pelicula.adult && <span> | <span className="mayor_edad">+18</span></span> }</b> {/* Es +18 */}
                    </p>
                    <h5><cite className="text-muted">{ pelicula.tagline }</cite></h5>
                    <>
                        <h3>Vista General</h3> 
                        <h6>{ pelicula.overview }</h6>
                    </>
                </Col>
            </Row>
        </div>
    )
}

export default PeliculaDetalle