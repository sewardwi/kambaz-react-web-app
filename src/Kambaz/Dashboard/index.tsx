/* eslint-disable @typescript-eslint/no-explicit-any */
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

// import { useState } from "react";
import { Link } from "react-router-dom";
// import * as db from "../Database";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
// import * as db from "../Database";
import { addCourse, deleteCourse } from "../Courses/reducer";
// import { useState } from "react";
import { enrollUser, unenrollUser, toggleShowEnrollments } from "./reducer";

export default function Dashboard({ courses, course, setCourse,
  updateCourse }: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  updateCourse: () => void; }) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments, showEnrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser.role == "FACULTY";
  const publishedCourses = courses
            .filter((course) =>
              enrollments.some(
                (enrollment: { user: any; course: any; }) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
                  ))

  const isEnrolled = (course: any) => {
    return enrollments.some(
                (enrollment: { user: any; course: any; }) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
                  )
  }
  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button className="btn btn-primary"
                id="wd-enrollments-toggle"
                onClick={() => dispatch(toggleShowEnrollments())}>
          Enrollments
        </button>
      </div>
      <hr />
      {isFaculty && 
      <div>
        <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addCourse(course))} > Add </button>
          <button className="btn btn-warning float-end me-2"
                  onClick={updateCourse} id="wd-update-course-click">
            Update
          </button>
        </h5>
        <br />
        <FormControl value={course.name} className="mb-2" 
          onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <FormControl value={course.description} // rows={3}
          onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
        <hr />
      </div>
      }

      <h2 id="wd-dashboard-published">Published Courses ({publishedCourses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showEnrollments ? courses : publishedCourses)
            .map((course) => (
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

                    {isFaculty &&
                    <button onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    }

                    {isFaculty &&
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    }

                    {isEnrolled(course) 
                      ? <Button variant="danger" className="mt-2" 
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(unenrollUser({courseId: course._id, userId: currentUser._id}));
                          }}>
                          Unenroll</Button>
                      : <Button variant="success" className="mt-2"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(enrollUser({courseId: course._id, userId: currentUser._id}));
                          }}>
                          Enroll</Button>
                    }
                    
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}