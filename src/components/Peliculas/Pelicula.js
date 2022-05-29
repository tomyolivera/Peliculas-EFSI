import React from 'react'
import { Card, CardBody, CardImg } from 'reactstrap'

const Pelicula = ({ pelicula }) => {
    return <Card title={pelicula.title} style={{ maxWidth: '190px', background: '#182952', color: 'white', overflowY: 'hidden' }}>
                {
                    pelicula.poster_path
                        ? <CardImg src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
                        : <div className="img_carga w-100 d-flex justify-content-center"><p className='align-self-center'>No Image</p></div>
                }
                <CardBody>
                    <h6>{ pelicula.title }</h6>
                    <p>{ pelicula.release_date }</p>
                </CardBody>
            </Card>
}

export default Pelicula