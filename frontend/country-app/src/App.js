import './App.css';
import Home from './components/Homepage';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      	<Routes>
			<Route path="/" element ={ <Home />} />
      	</Routes>
    </div>
  );
}

export default App;
