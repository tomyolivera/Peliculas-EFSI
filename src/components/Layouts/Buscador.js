import React from 'react'

const Buscador = () => {
    return (
        <div className="d-flex justify-content-center mt-3 buscador">
            <form className="form-inline" style={{ width: '50%' }}>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" />
            </form>
        </div>
    )
}

export default Buscador