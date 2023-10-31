import {useEffect, useState} from "react";
import OneTodo from "./components/one-todo";
import {TodoType} from "../../type";

const Todo = () => {
    const [todoLsit, setTodoLsit] = useState<TodoType[]>([]);

    useEffect(() => {
        setTodoLsit([
            {
                title: "title1",
                content: "content1",
                state: true,
            },
            {
                title: "title2",
                content: "content2",
                state: false,
            },
            {
                title: "title3",
                content: "content3",
                state: false,
            },
        ]);
    }, []);

    return (
        <div>
            <h1>Todo Page</h1>
            {todoLsit.map((todo) => (
                <OneTodo key={todo.title} todo={todo}/>
            ))}
        </div>
    );
};
export default Todo;
