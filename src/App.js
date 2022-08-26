// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import PropTypes from 'prop-types';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1700);
  }

const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
}

  const toggleMode = (cls)=>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "Textutils - Dark Mode";

      // setInterval( ()=> {
      //   document.title = "Textutils is Amazing";
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "Textutils - Light Mode";

      // setInterval( ()=> {
      //   document.title = "Install Textutils";
      // }, 1500);
    }
  }

  return (
    <>

    <Router>

  <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar mode={mode}/>  */}

    {/* <Navbar title="TextUtils" mode={mode}/> */}

    <Alert alert={alert} />


    {/* <div className="container my-3">
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
    </div> */}


<div className="container my-3">
  {/* <About /> */}

  <Routes>
  <Route exact path="/about" element={<About showAlert={showAlert} heading="About" mode={mode}/>} />
  <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>} />
  </Routes>

{/* <About showAlert={showAlert} heading="About" mode={mode}/> */}
</div>
    

    </Router>

    
    </>

  );
}

export default App;