import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const Details = () => {
    const {AdventureTitle,Image,CategoryName,ShortDescription,Location,Duration,AdventureLevel,AdventureCost,SpecialInstructions,MaxGroupSize,EcoFriendlyFeatures,IncludedItems,} = useLoaderData();
    // console.log(AdventureTitle);
    const contextValue=useContext(authContext);
    // console.log(contextValue)



    const [time,setTime]=useState(false)
    // const navigate=useNavigate()
const handleTalkExpert=()=>{
        // const now = new Date();
        // // console.log(now)
        // const currentHour = now.getHours();
        // // console.log(currentHour)
        // const currentMinute = now.getMinutes();
        // // console.log(currentMinute);
    
        // const startTime = { hour: 10, minute: 0 }; // 10:00 AM
        // // console.log(startTime);
        // // console.log(startTime.hour);
        // const endTime = { hour: 20, minute: 0 }; // 8:00 PM
        // // console.log(endTime);
        // // console.log(endTime.minute);

        // const isTimeRange =
        //     (currentHour > startTime.hour || 
        //     (currentHour === startTime.hour && currentMinute >= startTime.minute)) &&
        //     (currentHour < endTime.hour || 
        //     (currentHour === endTime.hour && currentMinute <= endTime.minute));
        //     console.log(isTimeRange);
        // if (isTimeRange) {
        //     navigate('https://meet.google.com/landing')
        // } else {
        //     setShowModal(true);
        // }

        // =====OR======
        var date = new Date(); // current time
        var hours = date.getHours();
        var mins = date.getMinutes();
        var day = date.getDay();
        var totalMins = (hours * 60) + mins;
        var targetMins = 20 * 60
        var remainMins = targetMins - totalMins
        
        if(hours >= 10 && hours < 20) {
        // document.getElementById("text").innerHTML = "Yes Current time is between 11am to 8pm And " + remainMins + " mins left to be time 8pm";
        // console.log("Yes Current time is between 10am to 8pm And " + remainMins + " mins left to be time 8pm");
            setTime(true);
        }
        else {
        // document.getElementById("text").innerHTML = "There is " + remainMins + " mins left to be time 8pm";
        // console.log("There is " + remainMins + " mins left to be time 8pm");
            setTime(false);
        
        }
    }
    // console.log(time)
    const openGoogleMeet = () => {
        window.open("https://meet.google.com", "_blank");
    };
    useEffect(()=>{
        handleTalkExpert();
    },[])
    
    
    return (
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <h2 className="text-6xl font-bold"> Detailed Adventure Page </h2>
                    <img
                    src={Image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                    <h1 className="text-3xl font-semibold"> {AdventureTitle}</h1>
                    <h3 className=""><span className="text-green-400">CategoryName:</span>{CategoryName}</h3>
                    <p className=""><span className=" text-green-400">Location :</span>{Location}</p>
                    <p><span className=" text-green-400">Adventure Level:</span>{AdventureLevel}</p>
                    <p className=""><span className=" text-green-400">ShortDescription:</span>{ShortDescription}</p>
                    <p> <span className=" text-green-400">Eco Friendly Features :</span>
                    {
                        EcoFriendlyFeatures.map((feature,index)=>(
                            <ul className="list-disc list-inside ml-36">
                                <li key={index} className="">
                                    {feature}
                                </li>
                            </ul>
                        ))
                    }
                    </p>
                    <p> <span className=" text-green-400">Included Items :</span>
                    {
                        IncludedItems.map((feature,index)=>(
                            <ul className="list-disc list-inside ml-36">
                                <li key={index} className="">
                                    {feature}
                                </li>
                            </ul>
                        ))
                    }
                    </p>
                    <p> <span className=" text-green-400">Special Instructions :</span>
                    {
                        SpecialInstructions.map((feature,index)=>(
                            <ul className="list-disc list-inside ml-36">
                                <li key={index} className="">
                                    {feature}
                                </li>
                            </ul>
                        ))
                    }
                    </p>
                    <p><span className=" text-green-400">Travel Duration :</span>{Duration}</p>
                    <p><span className=" text-green-400">MaxGroup Size:</span>{MaxGroupSize}</p>
                    <p><span className=" text-green-400">Adventure Cost:</span>${AdventureCost}</p>
                    {/* <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-success skeleton rounded-full">Talk with Expert</button> */}
                    {/* <button onClick={()=>handleTalkExpert()} className="btn btn-success skeleton rounded-full">Talk with Expert</button> */}
                    {
                        time ? <button className="btn btn-success skeleton rounded-full" onClick={openGoogleMeet}>Talk with Expert via Google Meet</button> : 
                        <button className="btn btn-success skeleton rounded-full" onClick={()=>document.getElementById('my_modal_5').showModal()}>Talk with Expert</button> 
                    }
                    </div>
                </div>
                {/* {showModal && <p className="font-bold text-5xl text-red-700">Hello Modal</p>} */}
                {/* {showModal &&  <Modal></Modal>} */}




                {/* Modal */}
                <div>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg text-green-500">For Consultation</h3>
                            <p className="py-4">Contact on Google Meet between <span className="text-blue-700">10:00am - 8:00pm</span></p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn text-red-700">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
    );
};

export default Details;