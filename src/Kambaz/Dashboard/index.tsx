import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/html.jpg" width={200} />
            <div>
              <h5> CS1235 HTML </h5>
              <p className="wd-dashboard-course-title">
                HTML intro course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python.jpg" width={200} />
            <div>
              <h5> CS1236 Python </h5>
              <p className="wd-dashboard-course-title">
                Python intro course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java.jpg" width={200} />
            <div>
              <h5> CS1237 Java </h5>
              <p className="wd-dashboard-course-title">
                Java intro course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/databases.jpg" width={200} />
            <div>
              <h5> CS1238 Databases </h5>
              <p className="wd-dashboard-course-title">
                Databases intro course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/machinelearning.jpg" width={200} />
            <div>
              <h5> CS1239 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning intro course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/writing.jpg" width={200} />
            <div>
              <h5> CS1240 Advanced Writing </h5>
              <p className="wd-dashboard-course-title">
                Advanced writing skills  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

      </div>
    </div>
);}
