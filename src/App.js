import AppRouter from './AppRouter';
import Header from './components/Layouts/Header';
import Buscador from './components/Layouts/Buscador';

const App = () => {
    return (
        <div>
            <Header />
            <Buscador />
            <div className="my-4 px-3">
                <AppRouter />
            </div>
        </div>
    )
}

export default App;