import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return ( 
        <div>
            <h1>Public layout</h1>
            <Outlet />
        </div>
     );
}
 
export default PublicLayout;