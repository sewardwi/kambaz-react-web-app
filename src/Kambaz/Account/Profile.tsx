import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form>
        <Form.Control id="wd-username" 
                      className="mb-2"
                      placeholder="username"
                      defaultValue="alice"
        />
        <Form.Control id="wd-password" 
                      className="mb-2"
                      placeholder="password"
                      defaultValue="123"
        />
        <Form.Control id="wd-firstname" 
                      className="mb-2"
                      placeholder="first name"
                      defaultValue="Alice"
        />
        <Form.Control id="wd-lastname" 
                      className="mb-2"
                      placeholder="last name"
                      defaultValue="Wonderland"
        />
        <Form.Control type="date"
                      id="wd-dob" 
                      className="mb-2"
        />
        <Form.Control type="email"
                      id="wd-email" 
                      className="mb-2"
                      placeholder="email"
                      defaultValue="alice@wonderland.com"
        />
        <FormSelect id="wd-role" className="mb-2">
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </FormSelect>
        <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link>
      </Form>
    </div>
);}

{/* <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
    <input defaultValue="123"   placeholder="password" type="password"
            className="wd-password" /><br/>
    <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
    <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
    <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
    <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
    <select defaultValue="FACULTY" id="wd-role">
      <option value="USER">User</option>       <option value="ADMIN">Admin</option>
      <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
    </select><br/>
    <Link to="/Kambaz/Account/Signin" >Sign out</Link> */}
