function ChatMessage({
  role,
  content
}) {

  const isUser =
    role === "user";

  return (

    <div
      className={`
        flex
        ${isUser
          ? "justify-end"
          : "justify-start"
        }
      `}
    >

      <div
        className={`
          max-w-3xl
          px-5
          py-4
          rounded-2xl
          text-sm
          whitespace-pre-wrap
          leading-7

          ${isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-100"
          }
        `}
      >
        {content}
      </div>

    </div>
  );
}

export default ChatMessage;