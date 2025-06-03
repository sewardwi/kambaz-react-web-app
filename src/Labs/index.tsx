import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import { Provider } from "react-redux";
import store from "./store";
export default function Labs() {
  return (
    <Provider store={store}>
      <div id="wd-labs">
        <h1>William Seward SEC 04 41980</h1>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Navigate to="Lab1" />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2/*" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
        </Routes>
      </div>
    </Provider>
);}

// Components can import other components to aggregate the code snippets
// of the components into larger, more complex HTML content. Here the
// Labs component imports the Lab1 component as the first of a
// set of exercises that will be implemented in later chapters.
// The Lab1 function is invoked with the HTML syntax <Lab1/>
// which is replaced by HTML the function returns implemented in the
// Lab1 function
