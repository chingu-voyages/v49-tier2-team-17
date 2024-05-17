/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Form/Form.js", "./src/Button/Button.js", "./src/Input/Input.js", "./src/LineDiv/LineDiv.js"],
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
        57: "57px"
      },
      fontFamily: {
        sometype: ['"Sometype Mono"', "monotype"]
      }
    }
  },
  plugins: []
};
