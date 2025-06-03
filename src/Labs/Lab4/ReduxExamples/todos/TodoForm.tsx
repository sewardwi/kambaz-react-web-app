/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Button, FormControl, ListGroup } from "react-bootstrap";

// export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
//   todo: { id: string; title: string };
//   setTodo: (todo: { id: string; title: string }) => void;
//   addTodo: (todo: { id: string; title: string }) => void;
//   updateTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
//     <ListGroup.Item className="d-flex border justify-content-between align-items-center py-1 fs-4">
//       <FormControl className="me-4" value={todo.title}
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
//       <Button className="btn btn-warning me-2" onClick={() => updateTodo(todo)}
//               id="wd-update-todo-click"> Update </Button>
//       <Button className="btn btn-success" onClick={() => addTodo(todo)}
//               id="wd-add-todo-click"> Add </Button>
//     </ListGroup.Item>
// );}

import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroup.Item className="d-flex border justify-content-between align-items-center py-1 fs-4">
      <FormControl className="me-4" value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      <Button className="btn btn-warning me-2" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      <Button className="btn btn-success" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
    </ListGroup.Item>
);}
