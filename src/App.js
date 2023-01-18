import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Choice } from './views/UserChoices';
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';
import { Register } from './views/Register';
import { ASD } from './views/ASD';
import { Professional } from './views/Professional';
import { Curious } from './views/Curious'; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
          <Route path='/register' element={<Register />} />
          <Route path='/userChoice' element={<Choice />} />
          <Route path='/ASD' element={<ASD />} />
          <Route path='/Professional' element={<Professional />} />
          <Route path='/Curious' element={<Curious />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
