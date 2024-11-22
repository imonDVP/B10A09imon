import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";



const Profile = () => {
    const contextValue=useContext(authContext);
    // console.log(contextValue)
    // console.log(contextValue.user)
    const profile=contextValue.user;
    const {displayName ,photoURL , email}=profile;
    // console.log(contextValue.user.displayName)
    return (
    <div className="card card-compact bg-base-300 w-96 shadow-2xl container mx-auto my-10">
        <figure>
            <img
            className="w-full"
            src={photoURL}
            alt="image" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{displayName}</h2>
            <p><span className="text-sky-600">Email:</span>{email}</p>
            <p><span className="text-sky-600">Account Creation Time:</span>{profile.metadata.creationTime}</p>
            <p><span className="text-sky-600">Last SignIn Time:</span>{profile.metadata.lastSignInTime}</p>
            <div className="card-actions justify-end">
            <NavLink to='/update'>
                <button className="btn btn-success skeleton rounded-full">Update Prfile</button>
            </NavLink>
            </div>
        </div>
    </div>
    );
};

export default Profile;