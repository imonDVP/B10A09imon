
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation} from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({children}) => {
const {user,loading}=useContext(authContext);
const location=useLocation();
console.log(location)





// if(loading){
//     return <Loading></Loading>
// }

if(user && user?.email){
    return children;
}
return (
    <Navigate state={location.pathname} to='/login'></Navigate>
);
};

export default PrivateRoute;