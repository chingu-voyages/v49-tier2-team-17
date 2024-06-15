import React, { useState } from 'react';
import "./App.css";
import { Form } from "./Form/Form";
import { FormResults } from "./Form-Results/FormResults"
import { ColorResultsSquares } from "./ColorResultsSquares/ColorResultsSquares";


function App() {
  const [colors, setColors] = useState(["#FF5733", "#33FF57", "#3357FF", "#FF33A8"]);

  return (
    <div className="App">
      <div className="form-container">
        <Form />
        <FormResults />
      </div>
      <ColorResultsSquares colors={colors}/>
    </div>
  );
}

export default App;
