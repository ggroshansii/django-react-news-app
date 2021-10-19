
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Splash from './components/User/Splash/Splash';
import Registration from './components/User/Registration/Registration';
import Login from './components/User/Login/Login';
import { useState } from 'react'

function App() {


const [state, setState] = useState({
  isAuth: null,
  page: 'splash',
})

let html;
switch (state.page) {
  case 'splash':
    html = <Splash setState={setState}/>
    break;
  case 'register':
    html = <Registration/>
    break;
  case 'login':
    html = <Login/>
    break;
  case 'content':
    html = <Main/>
  }


  return (
    <div className="App">
    <Header/>
    {html}
    <Footer/>
    </div>
  );
}

export default App;
