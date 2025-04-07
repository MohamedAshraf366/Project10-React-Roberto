import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
