import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 8px 12px;
    border: none;
    color: black;
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

const Filtros = ({ filtros, setFiltros, setPeliculasPorFiltro }) => {
    const handleClick = async filtro => {
        filtros.map(f => f.active = false)
        let f = filtros.find(f => f.titulo === filtro.titulo).active = true
        setFiltros({...filtros, f})
        await setPeliculasPorFiltro(filtro.group);
    }

    return (
        <FiltrosStyled>
            {
                filtros.map((f, i) => (
                    <Button key={i} onClick={() => handleClick(f)} className={f.active ? 'filtro-activo' : ''}>{ f.titulo }</Button>
                ))
            }
        </FiltrosStyled>
    )
}

export default Filtros