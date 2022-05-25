import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    color: black;

    &:hover {
        background-color: #ddd;
    }
`

const Filtros = ({ filtros }) => {
    return (
        <div className="d-flex mx-3">
            {
                filtros.map(f => (
                    <Button color="primary">{ f }</Button>
                ))
            }
        </div>
    )
}

export default Filtros