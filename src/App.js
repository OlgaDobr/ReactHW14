import logo from './logo.svg';
import './App.css';
import CurrentTime from './Components/CurrentTime';
import Timer from './Components/Timer';
import Transliterate from './Components/Transliterate';

function App() {
  return (
    <div className="App">
      <CurrentTime />
      <Timer/>
      <Transliterate/>
    </div>
  );
}

export default App;
