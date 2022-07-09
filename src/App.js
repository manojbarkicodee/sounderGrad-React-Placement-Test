import logo from './logo.svg';
import './App.css';
import Slides from './components/Slides';
import {slides} from "./components/data/data"
function App() {
  
  return (
    <div className="App">
     <Slides slides={slides}/>
    </div>
  );
}

export default App;
