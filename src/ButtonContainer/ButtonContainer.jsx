import { NavLink } from "react-router-dom";

const ButtonContainer = ({allCategory}) => {
    return (
        <> 
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {
            allCategory.map((category)=><NavLink to={`/category/${category.CategoryName}`} key={category.ID} className="btn btn-outline skeleton rounded-none shadow-3xl ">{category.CategoryName}</NavLink>)
        }
    </div>
    
    </>
    );
};

export default ButtonContainer;
