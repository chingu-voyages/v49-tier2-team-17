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
                                  The description should have 40 words. Return a JSON object with
                                  a key called "palette" containing an array of objects where each object has "color_name" and "hex_code"
                                  and another key called "description" containing the palette description with no hexadecimal codes.
                                  Here is a sample output given the color "#ff6ba9" and the context "Coordinate colors for a logo representing a music store".
                                  {
                                    "palette": [
                                                {"color_name": "Rouge Fever", "hex_code": "#ff6ba9"},
                                                {"color_name": "Midnight Sky", "hex_code": "#333"},
                                                {"color_name": "Warm Groove", "hex_code": "#f2c464"},
                                                {"color_name": "Vinage Vinyl", "hex_code": "#666"},
                                               ],
                                    "description": "This vibrant palette combines the fiery spirit of the music world with the warmth of a Vinyl record. Rouge Fever is the star of the show, while Midnight Sky provides a cozy contrast. Warm Groove adds a hint of golden nostalgia, while Vintage Vinyl grounds the palette with a touch of sophistication."
                                  }`
        },
      ],
      model: "llama3-8b-8192",
    });

    return (completion.choices[0]?.message?.content || "");

  } catch (error) {
    console.error(error);
  }
}

export default makeAPIRequest;