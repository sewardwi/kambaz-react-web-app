/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const showProfileLink = (profileLink: string) => {
    return links.includes(profileLink);
  }

  const location = useLocation();
  const path = location.pathname;

  const activePath = (routePath: string) => {
    return path.startsWith(routePath);
  }

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {showProfileLink("Signin") && 
      <div>
        <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
          className={`list-group-item ${activePath("/Kambaz/Account/Signin") ? "active" : "text-danger"} border border-0`} > 
          Signin  </Link> <br/>
      </div>
      }
      {showProfileLink("Signup") && 
      <div>
        <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
          className={`list-group-item ${activePath("/Kambaz/Account/Signup") ? "active" : "text-danger"} border border-0`} > 
          Signup  </Link> <br/>
      </div>
      }
      {showProfileLink("Profile") && 
      <div>
        <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
          className={`list-group-item ${activePath("/Kambaz/Account/Profile") ? "active" : "text-danger"} border border-0`} > 
          Profile  </Link> <br/>
      </div>
      }
    </div>
);}