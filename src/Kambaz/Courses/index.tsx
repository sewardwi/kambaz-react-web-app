/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import CourseNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import { Route, Routes, useParams, useLocation } from 'react-router';  // Navigate
import { FaAlignJustify } from 'react-icons/fa';
import PeopleTable from './People/Table';
import * as coursesClient from './client';
import { useEffect, useState } from 'react';

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  const [users, setUsers] = useState<any[]>([]);
  const fetchPeople = async () => {
    const users = await coursesClient.findUsersForCourse(cid as string);
    setUsers(users);
  };
  useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split('/')[4]}
      </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h2>Piazza</h2>} />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<PeopleTable users={users}/>} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          </Routes>
        </div>
      </div>
    </div>
);}

// <div id="wd-courses">
//   <h2>Course 1234</h2>
//   <hr />
//   <table>
//     <tr>
//       <td valign="top">
//         <CourseNavigation />
//       </td>
//       <td valign="top">
//         <Routes>
//           <Route path="/" element={<Navigate to="Home" />} />
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />
//           <Route path="Assignments" element={<Assignments />} />
//           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//           <Route path="People" element={<h2>People</h2>} />
//         </Routes>
//       </td>
//     </tr>
//   </table>
// </div>