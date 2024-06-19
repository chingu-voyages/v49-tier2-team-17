import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.REACT_APP_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

const makeAPIRequest = async (color, context) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {role: "user", content: `Create a palette and description based on the color ${color} and the context ${context}.
                                  The palette should have 4 colors.
                                  Each color in the palette should include both the color name and the hex code.
                                  The description should have 40 words. Write your output in JSON
                                  with a key called "palette" containing an array of objects where each object has "color_name" and "hex_code"
                                  and another key called "description" containing the palette description with no hexadecimal codes.`},
      ],
      model: "llama3-8b-8192",
    });

    return (completion.choices[0]?.message?.content || "");

  } catch (error) {
    console.error(error);
  }
}

export default makeAPIRequest;