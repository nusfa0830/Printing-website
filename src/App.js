import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />} />


        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
