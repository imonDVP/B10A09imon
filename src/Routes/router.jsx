import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Profile from "../User Profile/Profile";
import Update from "../Update Profile/Update";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardContainer from "../CardContainer/CardContainer";
import Details from './../Details/Details';
import Register from './../Register/Register';
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import CategoryContainer from "../CategoryContainer/CategoryContainer";
import Banner from './../Banner/Banner';

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:async()=>{
                    const allDatares=await fetch('/ecoAdventures.json');
                    const allData=await allDatares.json();

                    const allCategoryres=await fetch('/categoryEcoAdventures.json');
                    const allCategory=await allCategoryres.json();
                    return {allData,allCategory}

                },
                children:[
                // {
                //     path:'/',
                //     element:<Banner></Banner>
                // },
                    {
                        path:'/',
                        element:<CardContainer></CardContainer>
                    },
                    {
                        path:'/',
                        element:<ButtonContainer></ButtonContainer>
                    },
                    {
                        path:'/category/:categoryname',
                        element:<CategoryContainer></CategoryContainer>,
                        loader:async()=>{
                            const allDatares=await fetch('/ecoAdventures.json');
                            const allData=await allDatares.json();
                            return {allData}
                        }
                    }
                ]
            },
            // {
            //     path:'/',
            //     element:<Banner></Banner>
            // },

            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
                
            },
            {
                path:'/update',
                element:<Update></Update>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:async({params})=>{
                    const res =await fetch("/ecoAdventures.json")
                    const data = await res.json()
                    const singleData = data.find(d=>d.ID == params.id)
                    return singleData
                }
            },
            {
                path:'/forgetpassword',
                element:<ForgetPassword></ForgetPassword>
            }
        ]
    }
])
export default router;