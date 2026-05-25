import { Link } from "react-router-dom";

function Sidebar() {

  return (

    <div className="
      w-64
      h-screen
      bg-slate-900
      text-white
      fixed
      left-0
      top-0
      p-6
      flex
      flex-col
    ">

      <h1 className="
        text-2xl
        font-bold
        mb-10
      ">
        SupportMind AI
      </h1>

      <nav className="
        flex
        flex-col
        gap-4
      ">

        <Link
          to="/dashboard"
          className="hover:text-blue-400"
        >
          Dashboard
        </Link>

        <Link
          to="/upload"
          className="hover:text-blue-400"
        >
          Upload Documents
        </Link>

        <Link
          to="/chat"
          className="hover:text-blue-400"
        >
          AI Chat
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;