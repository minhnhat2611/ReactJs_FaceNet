import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>     
              <Link  to="/"></Link>           
             <Link to="/about"></Link>    
      </div>
      <Outlet />
    </>
  )
};

export default Layout;