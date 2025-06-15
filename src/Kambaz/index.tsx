/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
// import * as db from "./Database";
import { useEffect, useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { updateCourse } from "./Courses/reducer";
import EnrollmentProtectedRoute from "./Dashboard/EnrollmentProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  // const { courses } = useSelector((state: any) => state.courseReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const fetchCourses = async () => {
  //   try {
  //     const courses = await courseClient.fetchAllCourses();
  //     dispatch(setCourses(courses));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      console.log(courses);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    if(!currentUser) return;

    if (enrolling) {
     fetchCourses();
   } else {
     findCoursesForUser();
   }
  }, [currentUser, enrolling]);


  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  const currentId = currentUser ? currentUser._id : "placeholder";

  // const { courses } = useSelector((state: any) => state.courseReducer);
  const dispatch = useDispatch();

  // const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
    department: "placeholder", credits: 4, author: currentId
  });

  const updateCourseHere = async () => {
    await courseClient.updateCourse(course);
    // setCourses(courses.map((c) => {
    //     if (c._id === course._id) { return course; }
    //     else { return c; }
    // });
    // );
    dispatch(updateCourse(course));
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard/*" element={
              <ProtectedRoute>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  // addNewCourse={() => dispatch(addCourse(course))}
                  // updateCourse={() => dispatch(updateCourse(course))}
                  updateCourse={updateCourseHere}
                  fetchCourses={fetchCourses}
                  enrolling={enrolling} setEnrolling={setEnrolling}
                  updateEnrollment={updateEnrollment}/>
                </ProtectedRoute>
            } />
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <EnrollmentProtectedRoute>
                  <Courses courses={courses}/>
                </EnrollmentProtectedRoute>
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
);}

{/* <table width="100%">
  <tr>
    <td valign="top">
      <KambazNavigation />
    </td>
    <td valign="top">
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
        <Route path="/Courses/:cid/*" element={<Courses />} />
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
      </Routes>
    </td>
  </tr>
</table> */}
