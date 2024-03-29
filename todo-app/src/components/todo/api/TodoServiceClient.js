import axios from "axios";


const todoServiceClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);

export const fetchTodosByUsername = (username) => todoServiceClient.get(`/users/${username}/todos`);