import './assets/style/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
