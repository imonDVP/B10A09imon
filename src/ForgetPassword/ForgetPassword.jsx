import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";



const ForgetPassword = () => {
    const contextValue=useContext(authContext);
    // console.log(contextValue);
    const {forgetEmail,handlegoForgetPage}=contextValue;
    // const propEmail=handlegoForgetPage()
    console.log(forgetEmail)
    // setForgetemail(forgetEmail)
    const handleOnSubmit=(e)=>{
        e.preventDefault();
        // window.location.href = 'https://mail.google.com'
        // window.open("https://mail.google.com", "_blank");
        handlegoForgetPage(forgetEmail)
    }


    return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
            <div className="text-center">
            <h1 className="text-5xl font-bold">Reset now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleOnSubmit} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input name="email" value={forgetEmail} type="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">

                    <button  className="btn btn-primary">Reset password</button>

                </div>
            </form>
            </div>
        </div>
    </div>
    );
};

export default ForgetPassword;