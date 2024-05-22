// src/TestAI.js

import React, { useState } from "react";
import { getCompletion } from "../OpenAIService/OpenAIService";

const TestAI = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const result = await getCompletion(input);
      setOutput(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <textarea value={input} onChange={handleInputChange} rows="5" cols="50" placeholder="Enter your prompt here" />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <br />
      {output && (
        <div>
          <h2>Output:</h2>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
};

export default TestAI;
