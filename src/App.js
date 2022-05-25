import AppRouter from './AppRouter';
import Header from './components/Layouts/Header';

const App = () => {
    return (
        <div>
            <Header />
            <div className="my-4 px-3">
                <AppRouter />
            </div>
        </div>
    )
}

export default App;