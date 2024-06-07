import React from "react";
import "./App.css";
import { Form } from "./Form/Form";
import ColorPickerListener from "./ColorPicker/ColorPickerListener";

function App() {
  const handleColorChange = (color) => {
    console.log("Selected color:", color);
  };

  return (
    <div className="App">
      <Form />
      <ColorPickerListener onChangeColor={handleColorChange} />
    </div>
  );
}

export default App;
