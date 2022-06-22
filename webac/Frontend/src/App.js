import './App.css';
import Welcome from './components/Welcome';
import Home from './components/Home';
import LoginPeserta from './components/LoginPeserta';
import RegisterPeserta from './components/RegisterPeserta';
import LoginOrganization from './components/LoginOrganization';
import RegisterOrganization from './components/RegisterOrganization';
import Content from './components/Content';
import Riwayat from './components/Riwayat';
import ProfilePeserta from './components/ProfilePeserta';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Welcome />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/peserta" element={<LoginPeserta />}/>
      <Route exact path="/organization" element={<LoginOrganization />}/>
      <Route exact path="/register-peserta" element={<RegisterPeserta />}/>
      <Route exact path="/register-organization" element={<RegisterOrganization />}/>
      <Route exact path="/login-peserta" element={<LoginPeserta />}/>
      <Route exact path="/login-organization" element={<LoginOrganization />}/>
      <Route exact path="/content" element={<Content />}/>
      <Route exact path="/riwayat" element={<Riwayat />}/>
      <Route exact path="/profile-peserta" element={<ProfilePeserta />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
