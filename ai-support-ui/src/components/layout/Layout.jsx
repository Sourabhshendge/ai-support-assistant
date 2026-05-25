import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Layout({ children }) {

  return (

    <div className="
      bg-slate-950
      min-h-screen
    ">

      <Sidebar />

      <div className="ml-64">

        <Topbar />

        <div className="p-8">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;