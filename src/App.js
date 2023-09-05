import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/homePage/Home';
import Emailing from './components/emailPage/signUp';

function App() {
  const [homeCss, setHomeCss] = useState("displayNone");
  const [signupCss, setSignupCss] = useState("");

  return (
    <>
      <div className={signupCss}>
        <Emailing setHomeCss={setHomeCss} />
      </div>
      <div className={homeCss}>
        < Home setHomeCss={setHomeCss} setSignupCss={setSignupCss} />
      </div>
    </>
  );
}

export default App;
