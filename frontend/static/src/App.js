
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

const [state, setState] = useState({
  isAuth: null,
  page: 'splash',
})

const [currentArticles, setCurrentArticles] = useState([])

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

useEffect(() => {
  grabArticles()
}, [])

async function grabArticles() {
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    }
    const response = await fetch('/api/articles/')
    const data = await response.json()
    if (response.ok === false) {
      console.log("R",response)
      console.log("D", data)
    } else {
      console.log("success", data)
      setCurrentArticles(data);
    }
}

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
    html = <Main currentArticles={currentArticles}/>
  }


  return (
    <div className="App">
    <Header currentArticles={currentArticles}/>
    {html}
    <Footer/>
    </div>
  );
}

export default App;
