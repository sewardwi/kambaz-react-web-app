/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a: any) => a._id === aid && a.course === cid);

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h4>Assignment Name</h4></label><br />
      <Form>
        <Form.Control as="textarea" 
                      id="wd-name" 
                      style={{ height: "20px" }} 
                      defaultValue={assignment ? assignment.title : ""}
        />
        <br />
        <Form.Control as="textarea"
                      id="wd-description"
                      style={{ height: "100px" }}
                      defaultValue={assignment ? assignment.description : ""}
        />
        <br />
        <Form.Group as={Row} className="wd-points mb-3">
          <Form.Label column sm={2} className="text-sm-end">
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="number" 
                          id="wd-points" 
                          defaultValue={assignment ? assignment.points : 0} 
                          min={0} 
                          max={100} 
                          step={1}
            />
          </Col>
        </Form.Group>
        <br />
        <Form.Group as={Row} className="wd-group wd-css-styling-dropdowns">
          <Form.Label column sm={2} className="text-sm-end">
            Assignment Group
          </Form.Label>
          <Col sm={10}>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </Form.Select>
          </Col>
        </Form.Group>
        <br />
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
        <Form.Group as={Row} className="wd-assign-to wd-css-styling-dropdowns">
          <Form.Label column sm={2} className="text-sm-end">
            Assign
          </Form.Label>
          <Col sm={10} className="border rounded p-3 mb-3">
            <h6><b>Assign To</b></h6>
            <Form.Select id="wd-assign-to" defaultValue="EVERYONE">
              <option value="EVERYONE">Everyone</option>
              <option value="SPECIFIC_PEOPLE">Specific People</option>
            </Form.Select>
            <br />
            <h6><b>Due</b></h6>
            <Form.Control type="datetime-local" 
                          id="wd-due-date" 
                          defaultValue={assignment ? assignment.dueDateTime : ""} />
            <br />
            <Row>
              <Col>
                <h6><b>Available From</b></h6>
                <Form.Control type="datetime-local" 
                              id="wd-available-from" 
                              defaultValue={assignment ? assignment.availableDateTime : ""} />
              </Col>
              <Col>
                <h6><b>Until</b></h6>
                <Form.Control type="datetime-local" 
                              id="wd-available-to" 
                              defaultValue={assignment ? assignment.dueDateTime : ""} />
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
                id="wd-cancel">
          Save</Button>
        <Button variant="secondary" 
                size="lg" 
                className="me-1 float-end" 
                id="wd-cancel">
          Cancel</Button>
      </div>
    </div>
);}
