// /* eslint-disable react-hooks/exhaustive-deps */
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
import { enrollUser } from "./reducer";
// import * as userClient from "../Account/client";
import * as courseClient from "../Courses/client";
import * as enrollmentsClient from "./client";
// import { useEffect } from "react";
// import * as userClient from "../Account/client";

export default function Dashboard(
  { courses, course, setCourse,
    updateCourse, fetchCourses, enrolling, setEnrolling,
    updateEnrollment }: 
  { 
    courses: any[]; 
    course: any; 
    setCourse: (course: any) => void;
    updateCourse: () => void; 
    fetchCourses: () => void;
    enrolling: boolean;
    setEnrolling: (enrolling: boolean) => void;
    updateEnrollment: (courseId: string, enrolled: boolean) => void
  }) {

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const { enrollments, showEnrollments } = useSelector((state: any) => state.enrollmentsReducer);
  // const fetchEnrollments = async () => {
  //   const enrollments = await enrollmentsClient.findEnrollments();
  //   dispatch(setEnrollments(enrollments));
  // };
  // useEffect(() => {
  //   fetchEnrollments();
  // }, []);

  const isFaculty = currentUser.role == "FACULTY";
  const isAdmin = currentUser.role == "ADMIN";
  // const publishedCourses = courses
  //           .filter((course) =>
  //             enrollments.some(
  //               (enrollment: { user: any; course: any; }) =>
  //                 enrollment.user === currentUser._id &&
  //                 enrollment.course === course._id
  //                 ))

  // const isEnrolled = (course: any) => {
  //   return enrollments.some(
  //               (enrollment: { user: any; course: any; }) =>
  //                 enrollment.user === currentUser._id &&
  //                 enrollment.course === course._id
  //                 )
  // }

  // const addNewCourse = async () => {
  //   const newCourse = await userClient.createCourse(course);
  //   // setCourses([ ...courses, newCourse ]);
  //   await enroll(newCourse._id);
  //   dispatch(addCourse(newCourse));
  //   await fetchEnrollments();
  // };
  // const addNewCourse = async () => {
  //   const newCourse = await userClient.createCourse(course);
    
  //   await enrollmentsClient.enrollUserInDb(newCourse._id, currentUser._id);
    
  //   dispatch(addCourse(newCourse));
  //   await fetchEnrollments(); // This will now include the new enrollment
  // };
  const addNewCourse = async () => {
    const newCourse = await courseClient.createCourse(course);
    await enrollmentsClient.enrollUserInDb(newCourse._id, currentUser._id);
    
    dispatch(addCourse(newCourse));
    dispatch(enrollUser({courseId: newCourse._id, userId: currentUser._id}));
    
    // Refresh courses from server
    await fetchCourses();
  };

  const deleteCourseHere = async (courseId: string) => {
    const status = await courseClient.deleteCourse(courseId);
    console.log(status); // to get rid of the warning
    // setCourses(courses.filter((course) => course._id !== courseId));
    dispatch(deleteCourse(courseId));
  };

  // const enroll = async (courseId: string) => {
  //   // await enrollmentsClient.enrollUserInDb(courseId, currentUser._id);
  //   await userClient.enrollIntoCourse(currentUser._id, courseId);
  //   dispatch(enrollUser({courseId: courseId, userId: currentUser._id}));
  // }

  // const unenroll = async (courseId: string) => {
  //   // await enrollmentsClient.unenrollUserInDb(courseId, currentUser._id);
  //   await userClient.unenrollFromCourse(currentUser._id, courseId);
  //   dispatch(unenrollUser({courseId: courseId, userId: currentUser._id}));
  // }
  
  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">
          Dashboard
          <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        </h1>
        {/* <button className="btn btn-primary"
                id="wd-enrollments-toggle"
                onClick={() => dispatch(toggleShowEnrollments())}>
          Enrollments
        </button> */}
      </div>
      <hr />
      {(isFaculty || isAdmin) && 
      <div>
        <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} // () => dispatch(addCourse(course))
                  > Add </button>
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

      <h2 id="wd-dashboard-published">Published Courses {/*({publishedCourses.length})*/}</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {/* {(showEnrollments ? courses : publishedCourses) */}
          {courses
          .map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
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

                    {(isFaculty || isAdmin) &&
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourseHere(course._id);
                      }} className="btn btn-danger float-end"
                      id="wd-delete-course-click">
                      Delete
                    </button>
                    }

                    {(isFaculty || isAdmin) &&
                    <button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </button>
                    }

                    {/* {isEnrolled(course) 
                      ? <Button variant="danger" className="mt-2" 
                          onClick={(event) => {
                            event.preventDefault();
                            unenroll(course._id);
                          }}>
                          Unenroll</Button>
                      : <Button variant="success" className="mt-2"
                          onClick={(event) => {
                            event.preventDefault();
                            enroll(course._id);
                          }}>
                          Enroll</Button>
                    } */}
                    {enrolling && (
                      <button onClick={(event) => {
                                event.preventDefault();
                                updateEnrollment(course._id, !course.enrolled);
                              }}
                              className={`btn ${ course.enrolled ? "btn-danger" : "btn-success" } float-end`} >
                        {course.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}
                    
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
);}