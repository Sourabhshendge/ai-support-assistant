function Topbar() {

  return (

    <div className="
      h-16
      bg-slate-800
      border-b
      border-slate-700
      flex
      items-center
      justify-between
      px-8
      text-white
    ">

      <h2 className="font-semibold">
        AI Customer Support Platform
      </h2>

      <button
        onClick={() => {

          localStorage.clear();

          window.location.href = "/login";
        }}
        className="
          bg-red-500
          px-4
          py-2
          rounded-lg
          hover:bg-red-600
        "
      >
        Logout
      </button>

    </div>
  );
}

export default Topbar;