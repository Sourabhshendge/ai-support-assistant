function ChatInput({
  question,
  setQuestion,
  askQuestion,
  loading
}) {

  return (

    <div className="
      flex
      gap-4
    ">

      <textarea
        rows="3"
        value={question}
        onChange={(e) =>
          setQuestion(
            e.target.value
          )
        }
        placeholder="
          Ask questions about uploaded documents...
        "
        className="
          flex-1
          bg-slate-900
          border
          border-slate-800
          rounded-2xl
          p-4
          text-white
          outline-none
          resize-none
        "
      />

      <button
        onClick={askQuestion}
        disabled={loading}
        className="
          bg-blue-600
          hover:bg-blue-700
          rounded-2xl
          px-6
          text-white
          font-medium
          transition
        "
      >
        Ask
      </button>

    </div>
  );
}

export default ChatInput;