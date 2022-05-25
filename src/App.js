import Header from './components/Layouts/Header';
import Peliculas from './components/Peliculas/Peliculas';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                {/* <Buscador /> */}
                <Peliculas />
            </div>
        </div>
    )
}

export default App;