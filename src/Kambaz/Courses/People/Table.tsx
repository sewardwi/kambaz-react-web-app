import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
    <Table striped>
      <thead>
      <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
      </thead>

      <tbody>

      <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Tony</span>{" "}
            <span className="wd-last-name">Stark</span></td>
        <td className="wd-login-id">001234561S</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2020-10-01</td>
        <td className="wd-total-activity">10:21:32</td>
      </tr>
      
      <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Steve</span>{" "}
            <span className="wd-last-name">Rogers</span></td>
        <td className="wd-login-id">001</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2019-04-26</td>
        <td className="wd-total-activity">03:01:32</td>
      </tr>

      <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">James</span>{" "}
            <span className="wd-last-name">Bond</span></td>
        <td className="wd-login-id">007</td>
        <td className="wd-section">MI5</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2021-08-08</td>
        <td className="wd-total-activity">02:43:32</td>
      </tr>

      <tr><td className="wd-full-name text-nowrap">
            <FaUserCircle className="me-2 fs-1 text-secondary" />
            <span className="wd-first-name">Natasha</span>{" "}
            <span className="wd-last-name">Romanoff</span></td>
        <td className="wd-login-id">009375982D</td>
        <td className="wd-section">S101</td>
        <td className="wd-role">STUDENT</td>
        <td className="wd-last-activity">2019-04-26</td>
        <td className="wd-total-activity">03:01:32</td>
      </tr>

      </tbody>
    </Table>
    </div>
);}