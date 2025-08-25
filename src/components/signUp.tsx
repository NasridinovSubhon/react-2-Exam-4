import gogle from "@/assets/gogle.png";
import { Input } from "./ui/input";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/app/hook";
import { registerAcount } from "@/app/productSl";

const SignUp = () => {

  const dispatch = useAppDispatch()

  function handleregis(e: any) {
    e.preventDefault()
    const obj: any = {
      userName: e.target["userName"].value,
      phoneNumber: e.target["phoneNumber"].value,
      email: e.target["email"].value,
      Password: e.target["Password"].value,
      confirmPassword: e.target["confirmPassword"].value,
    }
    console.log(obj);

    dispatch(registerAcount(obj))
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="xl:w-[35%] sm:w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 space-y-4">
        <h1 className="text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white">Log in to Exclusive</h1>
        <p className="text-gray-500 dark:text-gray-300">Enter your details below</p>

        <form onSubmit={handleregis} className="space-y-4">
          <Input name="userName" placeholder="userName" className="w-full" />
          <Input name="phoneNumber" type="number" placeholder="phoneNumber" className="w-full" />
          <Input name="email" placeholder="email" className="w-full" />
          <Input name="Password" type="password" placeholder="Password" className="w-full" />
          <Input name="confirmPassword" type="password" placeholder="confirmPassword" className="w-full" />

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Create Account
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 border border-gray-300 dark:border-gray-600 rounded-lg py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            <img src={gogle} alt="Google" className="w-6 h-6" />
            Sign up with Google
          </button>


        </form>


        <Link to={"/login"}>
          <h1 >have acount Login </h1>
        </Link>


      </div>
    </div >
  );
};

export default SignUp;
