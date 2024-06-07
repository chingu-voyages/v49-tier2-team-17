import OpenAI  from "openai";



const openai = new OpenAI();



async function main() {
  const completion = await openai.chat.completions.create({
    
    messages: [
      {role: "system", content: `Create a palette and description based on user input. The palette should have 4 colors. Each color in the palette should include both the color name and the hex code.
                                 The description should have 40 words. Write your output in JSON with a key called "palette" 
                                 containing an array of objects where each object has "color_name" and "hex_code" and another key called "description" containing the palette 
                                 description with no hexadecimal codes.`},
      {role: "user", content:"I want a color palette with an elegant vibe for my wedding. #F9E79F"},  
    ],
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 85,
    top_p: 1,

  });
  console.log(completion.choices[0]);

}

main();