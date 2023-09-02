
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark')
        showAlert("Dark mode has been enabled", "success")
        document.title = "Dark Mode"
      }
      else{
        setMode('light')
        showAlert("Light mode has been enabled", "success")
        document.title = "Light Mode"
      }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
  }

  return (
    <>
    <Router>
      <Navbar title="Text-Utils" about_text="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert text={alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Textform showAlert={showAlert} heading="Enter your text" mode={mode}/>
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
