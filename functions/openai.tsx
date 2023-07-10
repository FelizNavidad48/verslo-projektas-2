const OPENAI_API_KEY = "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"
const { Configuration, OpenAIApi } = require("openai");
import { retrieveDataById } from "./database";
var messageArray = [{role: "system", content: "You will need to simmulate a job interview."}];
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
var qa = ["default"];


export const initialCompletion = async (id : string) =>{ 

  let array = retrieveDataById(id);
  var inputCompany  = array[0]
  var inputPosition = array[1]
  var inputQuestion = array[2]
  var amount = array[3]

   var input = "Imagine you are a hiring manager at " + inputCompany + " and you are interviewing me for " + inputPosition +" position. Firstly understand what tasks does " + inputPosition + " do. What one specific "+ inputQuestion +" question would you ask? Use one sentence. From this point the user is the interviewee and you are the interviewer. Be very specific and give a lot of details in your question.";
    messageArray.push({role: "user", content: input});
    const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: messageArray,
  });
  qa.push(input);
  var element = document.getElementById("gptResponse0")!;
  messageArray.push({role: "assistant", content: chatCompletion.data.choices[0].message.content});
  
  messageArray.push({role: "assistant", content: chatCompletion.data.choices[0].message.content});
  qa.push(chatCompletion.data.choices[0].message.content);
  element.innerHTML = chatCompletion.data.choices[0].message.content;
}
//
export const nextCompletion = async (id:number) =>{
    
    var userResponse = ((document.getElementById("userResponse")) as HTMLInputElement).value;
    qa.push(userResponse);

    messageArray.push({role: "user", content: userResponse});
    messageArray.push({role: "system", content: "Generate next question, make sure it is not related with the previous question. Unless you do not understand the answer. Continue your role as an interviewer and answer with only the question without interacting with the user. "});
     const chatCompletion = await openai.createChatCompletion({
     model: "gpt-3.5-turbo",
     messages: messageArray,
   });
   
   var element = document.getElementById("gptResponse"+(id-1))!;
   //var elementUserRespone = document.getElementById("gptResponse" +(id-2)!)!;
   messageArray.push({role: "assistant", content: chatCompletion.data.choices[0].message.content});
   //elementUserRespone.innerHTML = userResponse
   element.innerHTML = chatCompletion.data.choices[0].message.content;
   qa.push(chatCompletion.data.choices[0].message.content);
 }

 