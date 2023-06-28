const OPENAI_API_KEY = "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"
const { Configuration, OpenAIApi } = require("openai");
var messageArray = [{role: "system", content: "You will need to simmulate a job interview."}];
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
var qa = ["default"];



export const initialCompletion = async () =>{ 
   var inputCompany = ((document.getElementById("company")) as HTMLInputElement).value;
   var inputPosition = ((document.getElementById("position")) as HTMLInputElement).value;
   var inputQuestion = ((document.getElementById("typeQuestions")) as HTMLInputElement).value;
   var input = "Imagine you are a hiring manager at " + inputCompany + " and you are interviewing me for " + inputPosition +" position. Firstly understand what tasks does " + inputPosition + " do. What one specific "+ inputQuestion +" question would you ask? Use up to two sentences. From this point the user is the interviewee and you are the interviewer. Be very specific and give a lot of details in your question.";
    messageArray.push({role: "user", content: input});
    const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messageArray,
  });
  qa.push(input);
  var element = document.getElementById("response")!;
  messageArray.push({role: "assistant", content: chatCompletion.data.choices[0].message.content});
  
  element.innerHTML = chatCompletion.data.choices[0].message.content;
  qa.push(chatCompletion.data.choices[0].message.content);
}

export const nextCompletion = async () =>{ 
    var userResponse = ((document.getElementById("userResponse")) as HTMLInputElement).value;
    qa.push(((document.getElementById("userResponse")) as HTMLInputElement).value);
    messageArray.push({role: "user", content: userResponse});
    messageArray.push({role: "system", content: "Generate next question. Continue your role as an interviewer and answer with only the question without interacting with the user."});
     const chatCompletion = await openai.createChatCompletion({
     model: "gpt-3.5-turbo",
     messages: messageArray,
   });
   
   var element = document.getElementById("response")!;
   messageArray.push({role: "assistant", content: chatCompletion.data.choices[0].message.content});
   element.innerHTML = chatCompletion.data.choices[0].message.content;
   qa.push(chatCompletion.data.choices[0].message.content);
 }

 console.log(qa);