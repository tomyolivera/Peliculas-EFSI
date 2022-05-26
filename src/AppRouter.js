import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PeliculaPorId from './components/Peliculas/PeliculaPorId'
import Peliculas from './components/Peliculas/Peliculas'

<<<<<<< HEAD

=======
>>>>>>> 2f36034 (diseño)
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Peliculas />} />
                <Route path='/movie/:id' element={<PeliculaPorId />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter