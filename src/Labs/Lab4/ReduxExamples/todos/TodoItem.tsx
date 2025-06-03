import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item key={todo.id} className="d-flex border justify-content-between align-items-center py-1 fs-4">
      {todo.title}
      <div>
        <Button className="btn btn-primary me-2" onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </Button>
        <Button className="btn btn-danger" onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </Button>
      </div>
    </ListGroup.Item>
);}