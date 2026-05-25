function Loader() {

  return (

    <div className="
      flex
      items-center
      gap-3
      text-slate-400
    ">

      <div className="
        w-4
        h-4
        border-2
        border-blue-500
        border-t-transparent
        rounded-full
        animate-spin
      " />

      <span>Loading...</span>

    </div>
  );
}

export default Loader;