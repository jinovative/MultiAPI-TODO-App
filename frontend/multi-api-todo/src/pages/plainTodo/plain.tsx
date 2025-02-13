import React, { useState } from "react";
import "./plain.css";
import CheckboxPrompt from "inquirer/lib/prompts/checkbox";

interface Todo {
    id: number;
    item: string;
    note: string;
    complete: boolean;
    deadline: string;
}

export default function Plain() {
    const [todos, setTodo] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });
    const [newTodo, setNewTodo] = useState({ item: "", note: "", deadline: "", complete: false });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setNewTodo((prev) => ({
            ...prev,
            [name]: value ?? "",
        }));
    };
    const handleAddTodo = () => {
        if (!newTodo.item || !newTodo.item.trim()) return;
        if (typeof newTodo.item !== "string") {
            console.error("Error: newTodo.item is not string", newTodo.item);
            return;
        }

        const todoToAdd: Todo = {
            id: Date.now(),
            item: newTodo.item,
            note: newTodo.note,
            deadline: newTodo.deadline,
            complete: false,
        };
        const updatedTodos = [todoToAdd, ...todos];
        setTodo([todoToAdd, ...todos]);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setNewTodo({ item: "", note: "", deadline: "", complete: false });
    };
    const handleDeleteTodo = (id: number) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodo(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };
    const toggleComplete = (id: number) => {
        const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, complete: !todo.complete } : todo));
        setTodo(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };
    return (
        <div>
            <div className="container">
                <div className="inner-container">
                    <div className="search">search</div>

                    <div className="contentBox">
                        <div>
                            <input
                                type="text"
                                name="item"
                                placeholder="what todo?"
                                value={newTodo.item}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="note"
                                placeholder="put some detail"
                                value={newTodo.note}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                type="date"
                                name="deadline"
                                placeholder="set deadline"
                                value={newTodo.deadline}
                                onChange={handleChange}
                            />{" "}
                        </div>
                        <div>
                            <button onClick={handleAddTodo}>add</button>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Note</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.map((todo) => (
                                    <tr key={todo.id}>
                                        <td>{todo.item}</td>
                                        <td>{todo.note}</td>
                                        <td>{todo.deadline}</td>
                                        <td>
                                            <button onClick={() => toggleComplete(todo.id)}>
                                                {todo.complete ? "Done" : "Not Yet"}
                                            </button>
                                        </td>
                                        <td>
                                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
