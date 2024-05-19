import OpenAI from "openai";



const openai = new OpenAI();



async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {role: "system", content: "Create a palette based on user input. The palette should have 4 colors. Reply with a JSON array with hexidecimal color codes and a palette description." },
      {role: "user", content:"I want a color palette with an elegent vibe for my wedding. #73C6B6"},  
    ],
    model: "gpt-3.5-turbo",
    temperature: 1,
    max_tokens: 64,
    top_p: 1,

  });
  console.log(completion.choices[0]);

}

main();