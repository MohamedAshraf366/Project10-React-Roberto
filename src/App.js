import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home';



function App() {
  return (
    <BrowserRouter basename='/Project10-React-Roberto'>

    <Routes>
      <Route path='/' element = {<Home />} />
    </Routes>
    </BrowserRouter>
    
    
    
  );
}

export default App;



