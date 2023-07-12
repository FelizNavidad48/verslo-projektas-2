export function InterviewTextArea({id, placeholder, disabled, value}){

    return (
        <div className="w-full h-full">
            <textarea id={id} name="interviewtextarea" value={value}  disabled={disabled} placeholder={placeholder} className="w-full h-full disabled:bg-white bg-black disabled:text-black text-white drop-shadow-xl py-2 px-2 rounded-md text-xl" ></textarea>
        </div>
    )
}
export function InterviewTextAreaG({ id, placeholder, disabled}){

    return (
        <div className="w-full h-full">
            <textarea id={id}  name="interviewtextarea" disabled={disabled} placeholder={placeholder} className="w-full h-full disabled:bg-zinc-300 bg-black disabled:text-black text-white drop-shadow-2xl py-2 px-2 rounded-md text-xl" ></textarea>
        </div>
    )
}

export function InterviewTextAreaGradient({ id, placeholder, disabled}){
   
    return (
        <div className="w-full h-full">
            <textarea  id={id}  disabled={disabled} placeholder={placeholder} className="bg-gradient-to-r from-black from-70% to-97% to-blue-900 w-full h-full disabled:bg-slate-100 bg-black disabled:text-black text-white drop-shadow-2xl placeholder:text-gray-200 py-2 px-2 rounded-2xl text-xl" ></textarea>
        </div>
    )
}

