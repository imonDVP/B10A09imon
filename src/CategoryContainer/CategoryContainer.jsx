import { useEffect, useState } from "react";
import {useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "../CategoryCard/CategoryCard";


const CategoryContainer = () => {
    const {allData}=useLoaderData();
    const params=useParams();
    console.log(params);
    const {categoryname}=params;
    console.log(categoryname);
    console.log(allData)
    // console.log(typeof allData)
    // const categoryData=[...allData]
    // console.log(categoryData)

    const [data,setData]=useState([]);
    console.log(data)
    useEffect(()=>{
        if(data){
            const filterByCategory=[...allData].filter((item)=>item.CategoryName===categoryname)
            setData(filterByCategory);
        }else{
            setData(data);
        }
    },[allData,categoryname])
    console.log(data)



    
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {
                data.map((item)=><CategoryCard className="" key={item.ID} item={item}></CategoryCard>)
            }
        </div>
    );
};

export default CategoryContainer;