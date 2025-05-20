import { Button, Form, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuClipboardPenLine } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="flex-grow-1 me-3" style={{ maxWidth: "400px" }}>
          <InputGroup className="me-1 float-start" size="lg">
            <InputGroup.Text id="wd-search-assignment" className="bg-white border-end-0">
              <CiSearch className="position-relative" style={{ bottom: "1px" }} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search"
              aria-label="Search"
              aria-describedby="wd-search-assignment"
              id="wd-search-assignment-input"
              className="border-start-0"
            />
          </InputGroup>
        </div>
        <div>
          <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Assignment 
          </Button>
          <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
            Group 
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-assignments-title p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS <AssignmentsControlButtons /></div>
          <ListGroup className="wd-assignment-list rounded-0">
            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />

              <LuClipboardPenLine className="mx-3 fs-2 text-success" />

              <div className="flex-grow-1">
                <h2><b><a href="#/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-reset text-decoration-none" >
                  A1 - ENV + HTML
                </a></b></h2>
                <span className="wd-assignment-list-item-details">
                  Multiple Modules | <b>Not available until</b> May 6 at 12:00 am |<br />
                  <b>Due</b> May 13 at 11:59 pm | 100 pts
                </span>
              </div>

              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              
              <LuClipboardPenLine className="mx-3 fs-2 text-success" />

              <div className="flex-grow-1">
                <h2><b><a href="#/Kambaz/Courses/1234/Assignments/124"
                  className="wd-assignment-link text-reset text-decoration-none" >
                  A2 - CSS + BOOTSTRAP
                </a></b></h2>
                <span className="wd-assignment-list-item-details">
                  Mutiple Modules | <b>Not available until</b> May 13 at 12:00 am |<br />
                  <b>Due</b> May 20 at 11:59 pm | 100 pts
                </span>
              </div>

              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              
              <LuClipboardPenLine className="mx-3 fs-2 text-success" />

              <div className="flex-grow-1">
                <h2><b><a href="#/Kambaz/Courses/1234/Assignments/124"
                  className="wd-assignment-link text-reset text-decoration-none" >
                  A3 - JAVASCRIPT + REACT
                </a></b></h2>
                <span className="wd-assignment-list-item-details">
                  Mutiple Modules | <b>Not available until</b> May 20 at 12:00 am |<br />
                  <b>Due</b> May 27 at 11:59 pm | 100 pts
                </span>
              </div>

              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
);}


// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <input placeholder="Search for Assignments"
//              id="wd-search-assignment" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button>
//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button> </h3>
//       <ul id="wd-assignment-list">
//         <li className="wd-assignment-list-item">
//           <a href="#/Kambaz/Courses/1234/Assignments/123"
//              className="wd-assignment-link" >
//             A1 - ENV + HTML
//           </a> <br />
//           Mutiple Modules | <b>Not available until</b> May 6 at 12:00 am |<br />
//           <b>Due</b> May 13 at 11:59 pm | 100 pts
//         </li>
//         <li className="wd-assignment-list-item">
//           <a href="#/Kambaz/Courses/1234/Assignments/124"
//              className="wd-assignment-link" >
//             A2 - CSS + BOOTSTRAP
//           </a> <br />
//           Mutiple Modules | <b>Not available until</b> May 13 at 12:00 am |<br />
//           <b>Due</b> May 20 at 11:59 pm | 100 pts
//         </li>
//         <li className="wd-assignment-list-item">
//           <a href="#/Kambaz/Courses/1234/Assignments/125"
//              className="wd-assignment-link" >
//             A3 - JAVASCRIPT + REACT
//           </a> <br />
//           Mutiple Modules | <b>Not available until</b> May 20 at 12:00 am |<br />
//           <b>Due</b> May 27 at 11:59 pm | 100 pts
//         </li>
//       </ul>
//     </div>
// );}
