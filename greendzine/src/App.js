import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Employee from './components/user/user';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
  <Routes>
        <Route exact path="/" element={<Dashboard/> }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/employee" element={<Employee/>} />
  </Routes>
  </Router>
  )
}

export default App;
