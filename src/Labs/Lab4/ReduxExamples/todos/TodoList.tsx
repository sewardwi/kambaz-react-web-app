/* eslint-disable @typescript-eslint/no-explicit-any */
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}


// import { useState } from "react";
// import { ListGroup } from "react-bootstrap";
// import TodoForm from "./TodoForm";
// import TodoItem from "./TodoItem";
// export default function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
//   const addTodo = (todo: any) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   return (
//     <div className="w-50" id="wd-todo-list-redux">
//       <h2>Todo List</h2>
//       <ListGroup>
//         <TodoForm
//           todo={todo}
//           setTodo={setTodo}
//           addTodo={addTodo}
//           updateTodo={updateTodo}/>
//         {todos.map((todo) => (
//           <TodoItem
//             todo={todo}
//             deleteTodo={deleteTodo}
//             setTodo={setTodo} />
//         ))}
//       </ListGroup>
// <hr/></div>

// );}

{/* <div className="w-50">
  <h2>Todo List</h2>
  <ListGroup>
    <ListGroup.Item className="d-flex border justify-content-between align-items-center py-1 fs-4">
      <FormControl className="me-4" value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
      <Button className="btn btn-warning me-2" onClick={() => updateTodo(todo)}
              id="wd-update-todo-click"> Update </Button>
      <Button className="btn btn-success" onClick={() => addTodo(todo)}
              id="wd-add-todo-click"> Add </Button>
    </ListGroup.Item>
    {todos.map((todo) => (
      <ListGroup.Item key={todo.id} className="d-flex border justify-content-between align-items-center py-1 fs-4">
        {todo.title}
        <div>
          <Button className="btn btn-primary me-2" onClick={() => setTodo(todo)}
                  id="wd-set-todo-click"> Edit </Button>
          <Button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}
                  id="wd-delete-todo-click"> Delete </Button>
        </div>
      </ListGroup.Item>
    ))}
  </ListGroup><hr/>
</div> */}