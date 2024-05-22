/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Form/Form.js", "./src/Button/Button.js", "./src/Input/Input.js", "./src/LineDiv/LineDiv.js", "./src/ColorSquare/ColorSquare.js", "./src/TestAI/TestAI.js", "./src/OpenAIService/OpenAIService.js"],
  theme: {
    extend: {
      borderRadius: {
        custom: "20px"
      },
      width: {
        214: "214px",
        353: "353px",
        967: "967px"
      },
      height: {
        0.75: "0.75px",
        1.5: "1.5px",
        57: "57px"
      },
      marginRight: {
        1000: "1000px"
      },
      fontFamily: {
        sometype: ['"Sometype Mono"', "monotype"]
      }
    }
  },
  plugins: []
};
