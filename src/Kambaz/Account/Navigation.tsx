import { Link, useLocation } from 'react-router-dom';
export default function AccountNavigation() {
  const location = useLocation();
  const path = location.pathname;

  const activePath = (routePath: string) => {
    return path.startsWith(routePath);
  }

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kambaz/Account/Signin" id="wd-account-signin-link"
        className={`list-group-item ${activePath("/Kambaz/Account/Signin") ? "active" : "text-danger"} border border-0`} > Signin  </Link> <br/>
      <Link to="/Kambaz/Account/Signup" id="wd-account-signup-link"
        className={`list-group-item ${activePath("/Kambaz/Account/Signup") ? "active" : "text-danger"} border border-0`} > Signup  </Link> <br/>
      <Link to="/Kambaz/Account/Profile" id="wd-account-profile-link"
        className={`list-group-item ${activePath("/Kambaz/Account/Profile") ? "active" : "text-danger"} border border-0`} > Profile  </Link> <br/>
    </div>
);}