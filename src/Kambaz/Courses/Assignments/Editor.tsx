/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
// import * as db from "../../Database";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const assignment = assignments.find((a: any) => a._id === aid && a.course === cid);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [ formData, setFormData ] = useState({
    title: assignment ? assignment.title : "New Assignment",
    description: assignment ? assignment.description : "New Assignment Description",
    points: assignment ? assignment.points : 100,
    group: assignment ? assignment.group : "ASSIGNMENTS",
    dueDateTime: assignment ? assignment.dueDateTime : "",
    availableDateTime: assignment ? assignment.availableDateTime : "",
    untilDateTime: assignment ? assignment.untilDateTime : "",
  });

  const parseDateTime = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).replace(',', ' at');
  }

  const updateCreateAssignment = async (assignment: any) => {
    if (aid === "new") {
      const newAssignment = await assignmentsClient.createAssignment(assignment);
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(updatedAssignment));
    }
  }

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h4>Assignment Name</h4></label><br />
      <Form>
        <Form.Control as="textarea" 
                      id="wd-name" 
                      style={{ height: "20px" }} 
                      defaultValue={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
        />
        <br />
        <Form.Control as="textarea"
                      id="wd-description"
                      style={{ height: "100px" }}
                      defaultValue={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
        <br />
        <Form.Group as={Row} className="wd-points mb-3">
          <Form.Label column sm={2} className="text-sm-end">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" 
                          id="wd-points" 
                          defaultValue={formData.points} 
                          min={0} 
                          max={10000} 
                          step={1}
                          onChange={(e) => setFormData({...formData, points: e.target.value})}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} className="wd-group wd-css-styling-dropdowns">
          <Form.Label column sm={2} className="text-sm-end">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-group" defaultValue={formData.group}
              onChange={(e) => setFormData({...formData, group: e.target.value})}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
        {assignment && 
        <div>
          <Form.Group as={Row} className="wd-display-grade-as wd-css-styling-dropdowns">
            <Form.Label column sm={2} className="text-sm-end">
              Display Grade as
            </Form.Label>
            <Col sm={10}>
              <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                <option value="PERCENTAGE">Percentage</option>
                <option value="NUMBER">Number</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <br />
        <Form.Group as={Row} className="wd-submission-type wd-css-styling-dropdowns">
          <Form.Label column sm={2} className="text-sm-end">
            Submission Type
          </Form.Label>
          <Col sm={10} className="border rounded p-3 mb-3">
            <Form.Select id="wd-submission-type" defaultValue="ONLINE">
              <option value="ONLINE">Online</option>
              <option value="PHYSICAL">Physical</option>
            </Form.Select>
            <br />
            <b>Online Entry Options</b><br />
            <br />
            <Form.Check type="checkbox"
                        className="check-submission-type" 
                        id="wd-text-entry"
                        label="Text Entry"/>
            <br />
            <Form.Check type="checkbox"
                        className="check-submission-type" 
                        id="wd-website-url"
                        label="Website URL"/>
            <br />
            <Form.Check type="checkbox"
                        className="check-submission-type" 
                        id="wd-media-recordings"
                        label="Media Recordings"/>
            <br />
            <Form.Check type="checkbox"
                        className="check-submission-type" 
                        id="wd-student-annotation"
                        label="Student Annotation"/>
            <br />
            <Form.Check type="checkbox"
                        className="check-submission-type" 
                        id="wd-file-upload"
                        label="File Upload"/>
          </Col>
        </Form.Group>
        <br />
        </div>
        }
        <Form.Group as={Row} className="wd-assign-to wd-css-styling-dropdowns">
          <Form.Label column sm={2} className="text-sm-end">
            Assign
          </Form.Label>
          <Col sm={10} className="border rounded p-3 mb-3">
            {assignment &&
            <div>
            <h6><b>Assign To</b></h6>
              <Form.Select id="wd-assign-to" defaultValue="EVERYONE">
                <option value="EVERYONE">Everyone</option>
                <option value="SPECIFIC_PEOPLE">Specific People</option>
              </Form.Select>
              <br />
            </div>
            }
            <h6><b>Due</b></h6>
            <Form.Control type="datetime-local" 
                          id="wd-due-date" 
                          defaultValue={formData.dueDateTime} 
                          onChange={(e) => setFormData({...formData, dueDateTime: e.target.value})} />
            <br />
            <Row>
              <Col>
                <h6><b>Available From</b></h6>
                <Form.Control type="datetime-local" 
                              id="wd-available-from" 
                              defaultValue={formData.availableDateTime} 
                              onChange={(e) => setFormData({...formData, availableDateTime: e.target.value})} />
              </Col>
              <Col>
                <h6><b>Until</b></h6>
                <Form.Control type="datetime-local" 
                              id="wd-available-to" 
                              defaultValue={formData.untilDateTime}
                              onChange={(e) => setFormData({...formData, untilDateTime: e.target.value})} />
              </Col>
            </Row>
          </Col>
        </Form.Group>
      </Form>
      <hr />
      <div id="wd-assignments-editor-buttons" style={{ textAlign: 'right' }}>
        <Button variant="danger" 
                size="lg" 
                className="me-1 float-end" 
                id="wd-cancel"
                onClick={() => {
                  const newAssignment: any = {
                    _id: aid,
                    title: formData.title,
                    description: formData.description,
                    course: cid,
                    available: parseDateTime(formData.availableDateTime),
                    due: parseDateTime(formData.dueDateTime),
                    points: formData.points,
                    gradeDisplay: "PERCENTAGE",
                    submissionType: "ONLINE",
                    entryOptions: [],
                    assignTo: "EVERYONE",
                    dueDateTime: formData.dueDateTime,
                    availableDateTime: formData.availableDateTime,
                    untilDateTime: formData.untilDateTime,
                  };
                  updateCreateAssignment(newAssignment);
                  navigate(`/Kambaz/Courses/${cid}/Assignments`);
                }}
          >
          Save</Button>
        <Button variant="secondary" 
                size="lg" 
                className="me-1 float-end" 
                id="wd-cancel"
                onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
                >
          Cancel</Button>
      </div>
    </div>
);}
