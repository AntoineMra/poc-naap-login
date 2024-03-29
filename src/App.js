

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Choice } from './views/UserChoices';
import { Login } from './views/Login';
import { Redirected } from './views/Redirected';
import { Register } from './views/Register';
import { ASD } from './views/ASD';
import { Professional } from './views/Professional';
import { FinalRoute } from './views/FinalRoute'; 
import { Name } from './views/Name';
import {FOLLOW} from './views/Follow';
import {ForgottenPSW} from './views/ForgottenPSW';
import {NewsPage} from './views/NewsPage';
import {Events} from './views/Events';
import {Parameters} from './views/Parameters';
import {Tips} from './views/Tips';
import {Accounts} from './views/Account';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/redirected' element={<Redirected />} />
          <Route path='/register' element={<Register />} />
          <Route path='/name' element={<Name />} />
          <Route path='/userChoice' element={<Choice />} />
          <Route path='/NEUROATYPIQUE' element={<ASD />} />
          <Route path='/Professionel' element={<Professional />} />
          <Route path='/FinalRoute' element={<FinalRoute />} />
          <Route path='/Follow' element={<FOLLOW />} />
          <Route path='/ForgottenPSW' element={<ForgottenPSW />} />
          <Route path='/MainInApp' element={<NewsPage />} />
          <Route path='/Events' element={<Events/>} />
          <Route path='/tips' element={<Tips/>} />
          <Route path='/settings' element={<Parameters/>} />
          <Route path='/account' element={<Accounts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
