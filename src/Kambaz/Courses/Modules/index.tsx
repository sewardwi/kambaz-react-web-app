export default function Modules() {
  return (
    <div>
      <button type="button"
              // onClick={() => alert("Life is Good!")}
              id="wd-collapse-all"
              style={{ marginRight: '5px' }}>
        Collapse All
      </button>
      <button type="button"
              // onClick={() => alert("Life is Good!")}
              id="wd-view-progress"
              style={{ marginRight: '5px' }}>
        View Progress
      </button>
      <select id="wd-select-one-publish" style={{ marginRight: '5px' }}>
        <option value="ALL">Publish All</option>
        <option value="SOME">Publish Some</option>
        {/* wasn't sure about the other options to put here */}
      </select>
      <button type="button"
              // onClick={() => alert("Life is Good!")}
              id="wd-add-module"
              style={{ marginRight: '5px' }}>
        + Module
      </button>


      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li>
      </ul>
    </div>
);}
