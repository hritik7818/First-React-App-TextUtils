import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  // if (mode != "light") {
  //   console.log(mode);
  // }
  const [alertMessage, setAlertMessage] = useState(null);
  let toggleModes = {
    toggleMode1: () => {
      if (mode !== "red") {
        setMode("red");
        showAlert("Success", "Red Theme is Enable !")
      }
      else {
        setMode("light");
        showAlert("Success", "Red Theme is Disable !")
      }
    },
    toggleMode2: () => {
      if (mode !== "green") {
        setMode("green");
        showAlert("Success", "Green Theme is Enable !")
      }
      else {
        setMode("light");
        showAlert("Success", "Green Theme is Disable !")
      }
    },
    toggleMode3: () => {
      if (mode !== "blue") {
        setMode("blue");
        showAlert("Success", "Blue Theme is Enable !")
      }
      else {
        setMode("light");
        showAlert("Success", "Blue Theme is Disable !")
      }
    },
    toggleMode4: () => {
      if (mode !== "dark") {
        setMode("dark");
        showAlert("Success", "Dark Mode Enable !")
      }
      else {
        setMode("light");
        showAlert("Success", "Dark Mode Disable !")
      }
    }
  };
  let showAlert = (msgType, msg) => {
    setAlertMessage({
      msgType: msgType,
      msg: msg
    });
    setTimeout(() => setAlertMessage(null), 1500);
  }
  return (
    <>
      <NavBar mode={mode} toggleModes={toggleModes} />
      <Alert alertMessage={alertMessage} mode={mode} />
      <TextForm mode={mode} alertMessage={alertMessage} showAlert={showAlert} />
    </>
  );
}

export default App;
