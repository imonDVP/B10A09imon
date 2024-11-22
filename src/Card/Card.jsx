import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from './../../../tooth-treatment/src/components/AuthProvider/AuthProvider';


const Card = ({item}) => {
    // console.log(item);
    const contextValue=useContext(authContext)
    const {ID, AdventureTitle,Image,EcoFriendlyFeatures}=item;
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-4xl">
            <figure>
                <img
                src={Image}
                alt="Image"
                className="h-52 rounded-xl"/>
            </figure>
            <div className="card-body ml-5">
                <h2 className="card-title">{AdventureTitle}</h2>
                <h5 className="font-semibold text-green-600">Eco Friendly Features :</h5>
                    {
                        EcoFriendlyFeatures.map((feature)=>(
                            <ul class="list-disc list-inside">
                                <li className="">
                                    {feature}
                                </li>
                            </ul>
                        ))
                    }
                <div className="card-actions justify-end">
                <NavLink to={`/details/${ID}`}><button className="btn btn-primary skeleton rounded-full text-green-600">Detailed Adventure Page </button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card;