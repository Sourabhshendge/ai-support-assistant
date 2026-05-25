function TypingLoader() {

  return (

    <div className="
      flex
      items-center
      gap-2
      text-slate-400
    ">

      <div className="
        w-2
        h-2
        rounded-full
        bg-blue-500
        animate-bounce
      " />

      <div className="
        w-2
        h-2
        rounded-full
        bg-blue-500
        animate-bounce
        delay-100
      " />

      <div className="
        w-2
        h-2
        rounded-full
        bg-blue-500
        animate-bounce
        delay-200
      " />

      <span className="ml-2">
        AI is thinking...
      </span>

    </div>
  );
}

export default TypingLoader;