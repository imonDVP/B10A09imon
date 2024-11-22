import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";


const Update = () => {
    const contextValue=useContext(authContext);
    const {setUser,profileUpdate}=contextValue;
    const [errMessage,setErrMessage]=useState('');
    const navigate = useNavigate();
        const handleSubmit = (e) => {
            e.preventDefault();
            //get form data
            const form = new FormData(e.target);
            const name = form.get("name");
            const photo = form.get("photo");
            console.log(name);
            console.log(photo)

            profileUpdate(name,photo)
            .then(() => {
                navigate('/profile');
            })
            .catch((error) => {
                console.log(error);
                setErrMessage(error.message);
            });
        };


    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">
                Update your account
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
                    type="text"
                    name="photo"
                    placeholder="photo-url"
                    className="input input-bordered"
                    required
                    />
                </div>
                {/* email input  */}
                {/* <div className="form-control">
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
                </div> */}

                {/* <div className="form-control">
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
                </div> */}
                {/* {errMessage && <label className="label">{errMessage}</label>} */}

                <div className="form-control mt-6">
                    <button className="btn btn-neutral text-white bg-success rounded-full skeleton">Update</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Update;