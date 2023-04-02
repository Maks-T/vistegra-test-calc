import Calculator from './components/calculator/calculator';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ReducerProvider from './components/reducerProvider/reducerProvider';
import './App.css';

function App() {
  return (
    <ReducerProvider>
      <div className="App__wrapper">
        <div className="App">
          <Header />
          <main className="main">
            <Calculator />
          </main>
          <Footer />
        </div>
      </div>
    </ReducerProvider>
  );
}

export default App;
