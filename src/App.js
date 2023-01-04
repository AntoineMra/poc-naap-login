import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';
import { Register } from './views/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
