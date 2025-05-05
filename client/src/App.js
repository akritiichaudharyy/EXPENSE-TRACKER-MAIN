import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'element= {<HomePage />} />
      <Route path='/Register'element= {<Register />} />
      <Route path='/login'element= {<Login />} />
    </Routes>
    </>
  );
}

export default App;
