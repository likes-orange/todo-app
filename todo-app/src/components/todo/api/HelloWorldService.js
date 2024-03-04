import axios from "axios";

const helloWorldClient = axios.create(
    {
        baseURL: "http://localhost:8080"
    }
);
export const fetchHelloWorld = () => helloWorldClient.get("hello-world-bean");

export const fetchHelloWorldByUsername = (username) => helloWorldClient.get(`hello-world/path-variable/${username}`);
