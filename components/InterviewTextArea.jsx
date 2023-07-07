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
            <textarea id={id}  name="interviewtextarea" disabled={disabled} placeholder={placeholder} className="w-full h-full disabled:bg-slate-100 bg-black disabled:text-black text-white drop-shadow-xl py-2 px-2 rounded-md text-xl" ></textarea>
        </div>
    )
}

