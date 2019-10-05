import React, {useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes';
import firebase from './fire';

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
    });
  }, [])
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> 
    <div>
      <Routes />
    </div>
    </BrowserRouter>

  );
}

export default App;
