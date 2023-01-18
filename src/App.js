import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Choice } from './views/UserChoices';
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';
import { Register } from './views/Register';
import {RegisterTwo} from './views/RegisterTwo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userChoice' element={<Choice />} />
          <Route path='/registerTwo' element={<RegisterTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
