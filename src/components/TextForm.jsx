import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");
  function onChangeText(e) {
    text = e.target.value;
    setText(text);
  }
  function changeToUpperCase() {
    setText(text.toUpperCase());
    props.showAlert("Success", "Text is changed to upper case !");
  }
  function changeToLowerCase() {
    setText(text.toLowerCase());
    props.showAlert("Success", "Text is changed to Lower case !");

  }
  let clearText = () => {
    setText("");
    props.showAlert("Success", "Text Cleared !");
  };
  let capitalize = () => {
    let words = text.trim().toLowerCase().split(" ").filter(element => element.length > 0);
    let capitalizeText = [];
    words.forEach((element) => {
      capitalizeText.push(
        element[0].toUpperCase().concat(element.slice(1, element.length))
      );
    });
    setText(capitalizeText.join(" ").trim());
    props.showAlert("Success", "Text is Capitalized !");
  };
  let copyText = () => {
    let copyText = document.getElementById("text");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Success", "Text is Copied to Clipboard");
  }
  let removeExtraSpaces = () => {
    let newArray = text.split(/[ ]+/);
    setText(newArray.join(" ").trim());
    props.showAlert("Success", "Extra spaces is removed from the text");
  }

  let style1 = {};
  let style2 = {};
  let style3 = {};

  if (props.mode === "light") {
    style1 = {
      backgroundColor: "#ad5df4",
      color: "black"
    }
    style2 = {
      backgroundColor: "#9b26c1",
      color: "white"
    }
    style3 = {
      backgroundColor: "white",
      color: "black"
    }
  }
  else if (props.mode === "red") {
    style1 = {
      backgroundColor: "#ff3700",
      color: "white"
    }
    style2 = {
      backgroundColor: "#f44e4e",
      color: "white"
    }
    style3 = {
      backgroundColor: "#4f0000",
      color: "white"
    }
  }
  else if (props.mode === "green") {
    style1 = {
      backgroundColor: "#00af26",
      color: "white"
    }
    style2 = {
      backgroundColor: "#0cbf00",
      color: "white"
    }
    style3 = {
      backgroundColor: "#366d3f",
      color: "white"
    }
  }
  else if (props.mode === "blue") {
    style1 = {
      backgroundColor: "#1B1D5E",
      color: "white"
    }
    style2 = {
      backgroundColor: "#1a56ce",
      color: "white"
    }
    style3 = {
      backgroundColor: "#3c434c",
      color: "white"
    }
  }
  else if (props.mode === "dark") {
    style1 = {
      backgroundColor: "#141414",
      color: "white"
    }
    style2 = {
      backgroundColor: "#292d42",
      color: "white"
    }
    style3 = {
      backgroundColor: "white",
      color: "black"
    }
  }

  return (
    <>
      <div className="bg-violet-300 h-[520px]" style={style1}>
        <h1 className="px-96 py-2 text-3xl text-white bg-[#8B5CF6]" style={style2}>Enter the text below</h1>
        <div className="flex">
          <textarea
            name="text"
            id="text"
            rows="9"
            cols="100"
            placeholder="Enter text here"
            value={text}
            onChange={onChangeText}
            className="border-2 border-black rounded-lg flex outline-none my-5 ml-28 p-4 font-mono" style={style3} spellCheck="false"
          ></textarea>
          <div className="">
            <div className="mx-12 my-8 bg-fuchsia-600 text-white p-4 rounded-lg">
              <h1 className="font-medium">Words</h1>
              <h1 className="text-3xl">
                {text.split(" ").filter(element => element.length > 0).length}
              </h1>
            </div>
            <div className="mx-12 bg-fuchsia-600 text-white p-4 rounded-lg">
              <h1 className="font-medium">Characters</h1>
              <h1 className="text-3xl">{text.length}</h1>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 ml-28">
          <button
            onClick={changeToUpperCase} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Change to Upper case
          </button>
          <button
            onClick={changeToLowerCase} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Change to lower case
          </button>
          <button
            onClick={capitalize} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Capitalize
          </button>
          <button
            onClick={copyText} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Copy
          </button>
          <button
            onClick={removeExtraSpaces} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Remove Extra Spaces
          </button>
          <button
            onClick={clearText} disabled={text.length === 0}
            className="bg-violet-500 text-white p-4 rounded-lg border-2 border-black font-medium"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
