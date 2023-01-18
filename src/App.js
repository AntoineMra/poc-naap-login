import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Choice } from './views/UserChoices';
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';
import { Register } from './views/Register';
<<<<<<< HEAD
import { ASD } from './views/ASD';
import { Professional } from './views/Professional';
import { Curious } from './views/Curious'; 
=======
import {RegisterTwo} from './views/RegisterTwo';
>>>>>>> Kylian

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userChoice' element={<Choice />} />
<<<<<<< HEAD
          <Route path='/ASD' element={<ASD />} />
          <Route path='/Professional' element={<Professional />} />
          <Route path='/Curious' element={<Curious />} />
=======
          <Route path='/registerTwo' element={<RegisterTwo />} />
>>>>>>> Kylian
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
