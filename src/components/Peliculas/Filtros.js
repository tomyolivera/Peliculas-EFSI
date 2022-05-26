import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    color: black;
<<<<<<< HEAD

    &:hover {
        background-color: #ddd;
    }
`

const Filtros = ({ filtros }) => {
    return (
        <div className="d-flex mx-3">
            {
                filtros.map((f, i) => (
                    <Button key={i} color="primary">{ f }</Button>
                ))
            }
        </div>
=======
    border-radius: 20px;
    background-color: transparent;

    &:hover {
        background: linear-gradient(to right,  #7045AF, #E14594);
        color:white;
    }
`

const FiltrosStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    border-radius: 20px;
    border: 1px solid black;
    margin-left: 10px;
`

const Filtros = ({ filtros }) => {
    return (
        <FiltrosStyled>
            {
                filtros.map((f, i) => (
                    <Button key={i}>{ f }</Button>
                ))
            }
        </FiltrosStyled>
>>>>>>> 2f36034 (diseño)
    )
}

export default Filtros