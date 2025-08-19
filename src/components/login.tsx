import { Api } from "@/utils/config";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";

const Login = () => {
  const navigate = useNavigate();

  async function login(userName: string, password: string) {
    try {
      const { data } = await Api.post("Account/login", { userName, password });
      if (data.data) {
        localStorage.setItem("accessToken", data.data);
        navigate("/");
      }
      return data;
    } catch (err) {
      console.error("Login failed:", err);
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const userName = (form.elements.namedItem("Name") as HTMLInputElement).value;
    const password = (form.elements.namedItem("Password") as HTMLInputElement).value;
    login(userName, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black px-4">
      <div className="xl:w-[35%] sm:w-full max-w-md bg-white dark:bg-gray-700 shadow-xl rounded-xl p-8 space-y-6">
        <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white">Log in to Exclusive</h1>
        <p className="text-gray-500 dark:text-gray-300">Enter your details below</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="Name"
            placeholder="Name"
            className="w-full"
          />
          <Input
            name="Password"
            type="password"
            placeholder="Password"
            className="w-full"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Log In
          </button>

          <p className="text-center text-gray-500 dark:text-gray-300">
            Don't have an account?{" "}
            <Link to="/signUp" className="text-red-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
