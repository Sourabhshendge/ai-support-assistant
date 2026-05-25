import { useState } from "react";
import api from "../services/api";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async () => {

    try {

      setLoading(true);

      const response = await api.post(
        "/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      window.location.href =
        "/dashboard";

    } catch (err) {

      if (
        err.response?.status === 401
      ) {
        setError("Invalid credentials");
      } else {
        setError("Server error");
      }

    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-950
    ">

      <div className="
        w-full
        max-w-md
        bg-slate-900
        border
        border-slate-800
        rounded-3xl
        p-10
        shadow-2xl
      ">

        <h1 className="
          text-4xl
          font-bold
          text-white
          mb-2
        ">
          SupportMind AI
        </h1>

        <p className="
          text-slate-400
          mb-8
        ">
          AI Customer Support Platform
        </p>

        <div className="
          flex
          flex-col
          gap-5
        ">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              bg-blue-600
              hover:bg-blue-700
              rounded-xl
              py-3
              text-white
              font-semibold
              transition
            "
          >
            {
              loading
                ? "Signing In..."
                : "Login"
            }
          </button>

          {
            error &&
            (
              <p className="
                text-red-400
              ">
                {error}
              </p>
            )
          }

        </div>

      </div>

    </div>
  );
}

export default LoginPage;