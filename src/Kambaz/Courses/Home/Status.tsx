/* eslint-disable @typescript-eslint/no-explicit-any */
// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status">
//       <h2>Course Status</h2>
//       <div style={{ display: "flex", marginBottom: "10px"}}>
//         <button style={{ marginRight: "5px" }}>Unpublish</button> <button>Publish</button>
//       </div>
//       <div style={{ display: "flex", flexDirection: "column", gap: "1px"}}>
//         <button>View Course Notifications</button>
//         <button>Import Existing Content</button>
//         <button>Import from Commons</button>
//         <button>Choose Home Page</button>
//         <button>View Course Stream</button>
//         <button>New Announcement</button>
//         <button>New Analytics</button>
//       </div>
//     </div>
// );}

import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle, FaBell, FaHome } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { IoBarChartSharp } from "react-icons/io5";
import { IoMdMegaphone } from "react-icons/io";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role == "FACULTY";

  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      {isFaculty &&
        <div className="d-flex">
          <div className="w-50 pe-1">
            <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
              <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
          <div className="w-50">
            <Button variant="success" size="lg" className="w-100">
              <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
        </div>
      }
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaBell className="me-2 fs-5" /> Course Notifications </Button>
      {isFaculty && 
      <div>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
          <FaHome className="me-2 fs-5" /> Choose Home Page </Button>
      </div>
      }
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoBarChartSharp className="me-2 fs-5" /> View Course Stream </Button>
      {isFaculty &&<Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoMdMegaphone className="me-2 fs-5" /> New Announcement </Button>}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoBarChartSharp className="me-2 fs-5" /> New Analytics </Button>
    </div> 
);}