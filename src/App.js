import './App.css';
import Calculator from './components/calculator/calculator';
import Header from './components/header/header';

function App() {
  return (
    <div className="App__wrapper">
      <div className="App">
        <Header />
        <main className="main">
          <div className="App_wrapper">
            <Calculator />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
