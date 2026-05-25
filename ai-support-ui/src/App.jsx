import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LoginPage from
"./pages/LoginPage";

import DashboardPage from
"./pages/DashboardPage";

import UploadPage from
"./pages/UploadPage";

import ChatPage from
"./pages/ChatPage";

function App() {

  const token =
    localStorage.getItem("token");

  return (

    <Routes>

      <Route
        path="/"
        element={
          <Navigate to="/login" />
        }
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/dashboard"
        element={
          token
            ? <DashboardPage />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/upload"
        element={
          token
            ? <UploadPage />
            : <Navigate to="/login" />
        }
      />

      <Route
        path="/chat"
        element={
          token
            ? <ChatPage />
            : <Navigate to="/login" />
        }
      />

    </Routes>
  );
}

export default App;