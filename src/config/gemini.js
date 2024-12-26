

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }from "@google/generative-ai";
  
  const apiKey = "AIzaSyAG40Xa5IfQLG9X-8DP1RYMeLwPj694eZc";
//   process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    return (result.response.text())
  }
  
  export default run;