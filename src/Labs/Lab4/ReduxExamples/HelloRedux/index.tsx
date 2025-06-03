/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux"; // useDispatch
export default function HelloRedux() {
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <div id="wd-hello-redux">
      <h3>Hello Redux</h3>
      <h4>{message}</h4> <hr />
    </div>
  );
}
