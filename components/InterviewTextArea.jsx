export default function InterviewTextArea({id, placeholder, disabled}){

    return (
        <div className="w-full h-full">
            <textarea id={id} name="interviewtextarea" disabled={disabled} placeholder={placeholder} className="w-full h-full disabled:bg-black disabled:text-white drop-shadow-xl py-2 px-2 rounded-md text-xl" ></textarea>
        </div>
    )
}