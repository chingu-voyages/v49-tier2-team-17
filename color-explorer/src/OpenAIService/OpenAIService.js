// src/openaiService.js

import axios from "axios";

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

if (!apiKey) {
  console.error("API key is not defined. Check your .env file.");
}

const openaiService = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`
  }
});

export const getCompletion = async (prompt) => {
  console.log("Prompt:", prompt);

  const requestPayload = {
    model: "text-davinci-003", // Ensure this is a valid model you have access to
    prompt: prompt,
    max_tokens: 60
  };

  console.log("Request Payload:", requestPayload);

  try {
    const response = await openaiService.post("/completions", requestPayload);
    console.log("Response:", response);
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error fetching completion:", error.response ? error.response.data : error);
    throw error;
  }
};
