export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table style={{ borderSpacing: '0 10px'}}>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option selected value="EXAMS">
                  EXAMS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="NUMBER">Number</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="ONLINE">Online</option>
              <option value="PHYSICAL">Physical</option>
            </select><br/>
            <br/>

            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-submission-type" id="wd-text-entry"/>
            <label htmlFor="wd-chkbox-comedy">Text Entry</label><br/>

            <input type="checkbox" name="check-submission-type" id="wd-website-url"/>
            <label htmlFor="wd-chkbox-drama">Website URL</label><br/>

            <input type="checkbox" name="check-submission-type" id="wd-media-recordings"/>
            <label htmlFor="wd-chkbox-scifi">Media Recordings</label><br/>

            <input type="checkbox" name="check-submission-type" id="wd-student-annotation"/>
            <label htmlFor="wd-chkbox-fantasy">Student Annotation</label><br/>

            <input type="checkbox" name="check-submission-type" id="wd-file-upload"/>
            <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" value={"Everyone"} /><br/>
            <br/>
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date"
                value="2024-05-13"
                id="wd-due-date"/><br/>
            <br/>
            <tr>
              <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input type="date"
                    value="2024-05-06"
                    id="wd-available-from"/><br/>
              </td>
              <td>
                <label htmlFor="wd-available-to">Until</label><br/>
              <input type="date"
                  value="2024-05-20"
                  id="wd-available-to"/><br/>
              </td>
            </tr>
          </td>
        </tr>
      </table>
      <hr />
      <div id="wd-assignments-editor-buttons" style={{ textAlign: 'right' }}>
        <button id="wd-cancel" style={{ marginRight: "5px" }}>Cancel</button>
        <button id="wd-save">Save</button>
      </div>
    </div>
);}
