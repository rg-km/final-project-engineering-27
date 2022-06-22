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

function App() {
  return (
    <div>
      {/* <div className="welcome">
        <Welcome />
      </div> */}
      {/* <div className="home">
        <Home />
      </div> */}
      {/* <div className="content">
        <Content />
      </div> */}
      {/* <div className="riwayat">
        <Riwayat />
      </div> */}
      <div className="ProfilePeserta">
        <ProfilePeserta />
      </div>
      {/* <div className="profile-peserta">
        <ProfilePeserta />
      </div> */}
      {/* <div className="login-peserta">
        <LoginPeserta/>
      </div> */}
      {/* <div className="register-peserta">
        <RegisterPeserta/>
      </div> */}
      {/* <div className="login-organization">
        <LoginOrganization/>
      </div> */}
      {/* <div className="register-organization">
        <RegisterOrganization/>
      </div> */}
    </div>
  );
}

export default App;
