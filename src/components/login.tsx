import { Api } from "@/utils/config"
import TextField from "@mui/material/TextField"
import { useNavigate } from "react-router-dom"


const Login = () => {

  let navigate = useNavigate()

  async function login(userName: any, password: any) {
    const { data } = await Api.post("Account/login", { userName, password })
    if (data.data) {
      localStorage.setItem("accessToken", data.data)
      navigate("/")
    }
    return data
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    let userName = e.target["Name"].value
    let password = e.target["Password"].value
    login(userName, password)
  }

  return (
    <div>
      <div className="xl:w-[35%] m-auto flex items-center justify-between overflow-y-auto h-[90vh] sm:w-[90%]">
        <form onSubmit={handleSubmit} >
          <h1 className="xl:text-[45px] sm:text-[29px] mb-[10px] " > Log in to Exclusive </h1>
          <h1 className="xl:text-[18px] sm:text-[14px] ">Enter your details below</h1>
          <TextField name='Name' id="standard-basic" label="Name" variant="outlined" sx={{ width: "100%", marginBottom: "15px", marginTop: "20px" }} />
          <TextField name='Password' type="password" id="standard-basic" label="Password" variant="outlined" sx={{ width: "100%", marginBottom: "15px" }} />
          <button className="p-[15px] w-[100%] mt-[15px] text-[#DB4444]  " > Forget Password? </button>
          <button type="submit" className="p-[15px] w-[100%] mt-[15px] text-white bg-[#DB4444] " > Log In </button>
        </form>
      </div>
    </div>
  )
}

export default Login
