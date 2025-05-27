// import { Button, Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1234 React JS </Card.Title>
//                   <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Full Stack software developer  </Card.Text>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/html.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1235 HTML </Card.Title>
//                   <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     HTML intro course  </Card.Text>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1236 Python </Card.Title>
//                   <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Python intro course  </Card.Text>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/java.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1237 Java </Card.Title>
//                   <Card.Body className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Java intro course  </Card.Body>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/databases.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1238 Databases </Card.Title>
//                   <Card.Body className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Databases intro course  </Card.Body>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/machinelearning.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1239 Machine Learning </Card.Title>
//                   <Card.Body className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Machine Learning intro course  </Card.Body>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           <Col className="wd-dashboard-course" style={{ width: "260px"}}>
//             <Card>
//               <Link to="/Kambaz/Courses/1234/Home"
//                     className="wd-dashboard-course-link text-decoration-none text-dark" >
//                 <Card.Img variant="top" src="/images/writing.jpg" width="100%" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1240 Advanced Writing </Card.Title>
//                   <Card.Body className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     Advanced writing skills  </Card.Body>
//                   <Button variant="primary"> Go </Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>
//         </Row>

//       </div>
//     </div>
// );}

import { Link } from "react-router-dom";
import * as db from "../Database";
import { Button, Card, Col, Row } from "react-bootstrap";
export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name} </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description} </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}