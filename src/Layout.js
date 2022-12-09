import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div>     
              <Link  to="/"></Link>           
             <Link to="/chitiet"></Link>    
      </div>
      <Outlet />
    </>
  )
};

export default Layout;