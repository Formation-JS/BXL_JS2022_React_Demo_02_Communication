import './App.css';
import Counter from './components/counter/counter';
import Header from './containers/header/header';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

export default App;
