import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const contextValue=useContext(authContext);
    const {handleRegister,setUser,profileUpdate}=contextValue;
    const [error,setError] = useState("")
    const [errMessage,setErrMessage]=useState('');
    const navigate = useNavigate();
        const handleSubmit = (e) => {
            console.log(e);
            e.preventDefault();
            //get form data
            const name = e.target.name.value
            const photo = e.target.photo.value
            const email = e.target.email.value
            const password = e.target.password.value
            // console.log({name,email,photo,password})
            if(password.length < 6){
                setError("Password must contain at least 6 characters")
                return
            }
            if(!/[a-z]/.test(password)){
                setError("Password must contain at least one lowercase letter")
                return;
            }
            if(!/[A-Z]/.test(password)){
                setError("Password must contain at least one uppercase letter")
                return;
            }


            handleRegister(email,password)
            .then((result) => {
                console.log(result)
                const user = result.user;
                console.log(user)
                setUser(user);
                e.target.reset();
                navigate('/');
                profileUpdate(name,photo)
                .then(() => {
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                    // alert(error.message)
                    console.log(error.message)
                    setErrMessage(error.message);
                });
            })
            .catch((error) => {
                const errorMessage=error.message;
                const errorCode=error.code;
                console.log(errorMessage);
            });
        };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                Register your account
                </h2>
                <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Name</span>
                    </label>
                    <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                    />
                </div>
                {/* {error.name && (
                    <label className="label text-sx text-red-500">{error.name}</label>
                )} */}

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Photo URL</span>
                    </label>
                    <input
                    name="photo"
                    type="text"
                    placeholder="photo-url"
                    className="input input-bordered"
                    required
                    />
                </div>
                {/* email input  */}
                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Email</span>
                    </label>
                    <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                    <span className="label-text">Password</span>
                    </label>
                    <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    />
                </div>
                {/* {errMessage && <label className="label">{errMessage}</label>} */}

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-neutral text-white bg-success rounded-full skeleton">Register</button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                </form>
                <p className="text-center font-semibold">
                Already Have An Account ?{" "}
                <Link className="text-red-500" to="/login">
                    Login
                </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;