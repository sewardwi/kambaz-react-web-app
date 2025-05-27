/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />

      <ListGroup id="wd-modules-list" className="wd list-group fs-5 rounded-0">
        {modules
          .filter((module : any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray" key={module.id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1" key={lesson.id}>
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
);}

{/* <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />Week 1 <ModuleControlButtons /></div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to the course <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Learn what is Web Development <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />Week 2 <ModuleControlButtons /></div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Introduction to CSS <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Styling color and background color <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Styling dimensions and positions <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />Laying out content with CSS Bootstrap and Flex <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup> */}
