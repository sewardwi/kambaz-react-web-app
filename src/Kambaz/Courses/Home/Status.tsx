export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div style={{ display: "flex", marginBottom: "10px"}}>
        <button style={{ marginRight: "5px" }}>Unpublish</button> <button>Publish</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1px"}}>
        <button>View Course Notifications</button>
        <button>Import Existing Content</button>
        <button>Import from Commons</button>
        <button>Choose Home Page</button>
        <button>View Course Stream</button>
        <button>New Announcement</button>
        <button>New Analytics</button>
      </div>
    </div>
);}