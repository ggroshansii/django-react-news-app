
import './App.css';
import Cookies from 'js-cookie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Splash from './components/User/Splash/Splash';
import Registration from './components/User/Registration/Registration';
import Login from './components/User/Login/Login';
import { useState, useEffect } from 'react'

function App() {

useEffect(()=> {
  const isAuth = Cookies.get('Authorization')
  if (!!isAuth) {
    setState(() => ({
      isAuth: true,
      page: 'content'
    }))
  } else {
    setState(() => ({
      isAuth: null,
      page: 'login'
    }))
  }
}, [])


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
    html = <Registration setState={setState}/>
    break;
  case 'login':
    html = <Login setState={setState}/>
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
