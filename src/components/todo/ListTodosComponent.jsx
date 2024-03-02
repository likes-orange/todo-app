import React from 'react';

function ListTodosComponent() {
    const date = new Date();
    const targetDate = new Date(date.getFullYear(), date.getMonth()+2, date.getDay());

    const todos = [
        {id: 1, description: "Learn Spring Boot", done: false, targetDate: targetDate},
        {id: 2, description: "Learn React JS", done: false, targetDate: targetDate},
        {id: 3, description: "Learn AWS", done: false, targetDate: targetDate},
    ];

    return (
        <div className="ListTodosComponent">
            <h2>Things You Want To Do</h2>
            <div className="container">
                <table className="table">
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>Description</td>
                        <td>Completed</td>
                        <td>Target Date</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(todo =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{(todo.done) ? 'YES' : 'NO'}</td>
                                <td>{todo.targetDate.toDateString()}</td>
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