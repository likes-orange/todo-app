import React, {useEffect, useState} from 'react';
import {deleteTodoByUsernameAndId, fetchTodosByUsername} from "../../client/TodoServiceClient";
import {useAuth} from "../../security/AuthContext";
import {useNavigate} from "react-router-dom";

function ListTodosComponent() {

    const authContext = useAuth();
    const [todos, setTodos] = useState([]);
    const [deletedMessage, setDeletedMessage] = useState("");
    const navigate = useNavigate();

    function refreshList() {
        fetchTodosByUsername(authContext.username)
            .then((response) => {
                setTodos(response.data.filter((todo) => todo.done !== true))
            })
            .catch((error) => console.log(error));
    }

    function deleteTodo(id) {
        deleteTodoByUsernameAndId(authContext.username, id)
            .then(() => {
                console.log("Deleted successfully.");
                refreshList();
                setDeletedMessage(`Deleted todo id: ${id}`);
            })
            .catch((error) => console.log(error));
    }

    function updateTodo(id) {
        navigate(`/todos/${id}`);
    }

    useEffect(() => refreshList(), []);

    return (
        <div className="container">
            <h2>Things You Want To Do</h2>
            {deletedMessage && <div className="alert alert-warning">{deletedMessage}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Completed</td>
                        <td>Target Date</td>
                        <td>Delete</td>
                        <td>Update</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{(todo.done) ? 'YES' : 'NO'}</td>
                                <td>{todo.targetDate}</td>
                                <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id) }>delete</button></td>
                                <td><button className="btn btn-success" onClick={() => updateTodo(todo.id) }>update</button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent;