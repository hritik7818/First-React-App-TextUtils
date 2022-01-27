import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router, Route, Routes, Switch
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // if (mode != "light") {
  //   console.log(mode);
  // }
  const [alertMessage, setAlertMessage] = useState(null);

  let capitalize = (word) => {
    return word.charAt(0).toUpperCase().concat(word.slice(1, word.length));
  }

  let toggleMode = (passedMode) => {
    if (mode !== passedMode) {
      setMode(passedMode);
      showAlert("Success", `${capitalize(passedMode)} Mode Enable !`)
    }
    else {
      setMode("light");
      showAlert("Success", `${capitalize(passedMode)} Mode Disable !`)
    }
  }
  let showAlert = (msgType, msg) => {
    setAlertMessage({
      msgType: msgType,
      msg: msg
    });
    setTimeout(() => setAlertMessage(null), 1500);
  }
  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alertMessage={alertMessage} mode={mode} />
        <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm mode={mode} alertMessage={alertMessage} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
