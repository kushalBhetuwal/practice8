import OpenAI from "openai";
import Configuration from 'openai';

const config = new Configuration({
    apiKey:process.env.OPEN_API_KEY,
});

const openai = new OpenAI(config);

async function main() {
    const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: "what is programming?",
        max_tokens: 70,
        temperature: 0,
      });
    
      console.log(completion.choices[0].text);
}

main();