import TextField from "@mui/material/TextField"

import gogle from "@/assets/gogle.png"
const SignUp = () => {
    return (
        <div>
            <div className="xl:w-[35%] m-auto flex items-center justify-between h-[90vh] sm:w-[90%]">
                <form>
                    <h1 className="xl:text-[45px] sm:text-[29px] mb-[10px] " > Log in to Exclusive </h1>
                    <h1 className="xl:text-[18px] sm:text-[14px] ">Enter your details below</h1>
                    <TextField id="standard-basic" label="Name" variant="outlined" sx={{ width: "100%", marginBottom: "px", marginTop: "20px" }} />
                    <TextField id="standard-basic" label="Email or phone number" variant="outlined" sx={{ width: "100%", marginBottom: "15px", marginTop: "20px" }} />
                    <TextField type="password" id="standard-basic" label="Password" variant="outlined" sx={{ width: "100%", marginBottom: "15px" }} />
                    <button className="p-[15px] w-[100%] mt-[15px] text-white bg-[#DB4444] " > Create Account </button>
                    <button className="p-[15px] flex items-center justify-center gap-4 w-[100%] mt-[15px] border " > <img src={gogle} alt="" className="w-[30px] " /> Sign up with Google </button>
                    <button className="p-[15px] flex items-center justify-center gap-4 w-[100%] mt-[15px] border " > Already have account?   </button>
                </form>
            </div>



        </div>


    )
}

export default SignUp



