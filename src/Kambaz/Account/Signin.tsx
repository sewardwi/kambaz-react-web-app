/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import { Button, FormControl } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
      <FormControl defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             className="mb-2" placeholder="password" type="password" id="wd-password" />
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup"> Sign up </Link>
    </div>
);}


// import { Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h1>Signin</h1>
//       <Form.Control id="wd-username"
//              placeholder="username"
//              className="mb-2"
//              defaultValue="alice"/>
//       <Form.Control id="wd-password"
//              placeholder="password" type="password"
//              className="mb-2"
//              defaultValue="123"/>
//       <Link id="wd-signin-btn"
//             to="/Kambaz/Account/Profile"
//             className="btn btn-primary w-100 mb-2">
//             Signin </Link>
//       <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
//     </div>
// );}

// <div id="wd-signin-screen">
//   <h3>Sign in</h3>
//   <input placeholder="username" className="wd-username" /> <br />
//   <input placeholder="password" type="password" className="wd-password" /> <br />
//   <Link  to="/Kambaz/Dashboard" id="wd-signin-btn"> Sign in </Link> <br />
//   <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>
// </div>
