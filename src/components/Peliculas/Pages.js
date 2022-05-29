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

const Pages = ({ page, setPage }) => {
    const handlePageChange = async p => {
        console.log(p);
        setPage(p)
    }

    return (
        <FiltrosStyled>
            <Button onClick={() => handlePageChange(1)}>1</Button>
            <Button onClick={() => handlePageChange(2)}>2</Button>
            <Button onClick={() => handlePageChange(3)}>3</Button>
        </FiltrosStyled>
    )
}

export default Pages