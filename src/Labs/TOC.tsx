import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
export default function TOC() {
  /*
  I had this code for using location from before as something I figured out.
  It is not the same as what is in the textbook but it is functionally equivalent.
  */
 
  const location = useLocation();
  const path = location.pathname;

  const activePath = (routePath: string) => {
    return path.startsWith(routePath);
  }

  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link to="/Labs" as={Link}>Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab1" as={Link} active={activePath("/Labs/Lab1")}>Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab2" as={Link} active={activePath("/Labs/Lab2")}>Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Labs/Lab3" as={Link} active={activePath("/Labs/Lab3")}>Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Kambaz" as={Link} active={activePath("/Kambaz")}>Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/sewardwi/kambaz-react-web-app">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
);}


// import { Link } from "react-router";

// export default function TOC() {
//   return (
//     <ul>
//       <li><Link to="/Labs">Labs</Link></li>
//       <li><Link to="/Labs/Lab1">Lab 1</Link></li>
//       <li><Link to="/Labs/Lab2">Lab 2</Link></li>
//       <li><Link to="/Labs/Lab3">Lab 3</Link></li>
//       <li><Link to="/Kambaz">Kambaz</Link></li>
//       <li><a href="https://github.com/sewardwi/kambaz-react-web-app" id="wd-github">Github</a></li>
//     </ul>
//   );
// }
