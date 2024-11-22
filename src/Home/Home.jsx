import { Outlet, useLoaderData } from "react-router-dom";
import CardContainer from "../CardContainer/CardContainer";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import Banner from "../Banner/Banner";
// import CategoryContainer from "../CategoryContainer/CategoryContainer";

const Home = () => {
    const {allData,allCategory}=useLoaderData();

    // console.log(allData)
    // console.log(allCategory)



    
    return (
        <div className=" space-y-5">
            <Banner></Banner>
            <CardContainer data={allData}></CardContainer>
            <ButtonContainer allCategory={allCategory}></ButtonContainer>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;