import React, {useEffect, useState} from "react";
import {ToDo, ToDoDTO} from "./ToDo";
import axios from "axios";
import {Link} from "react-router-dom";


export default function ToDoHomePage() {


    //GET all ToDo's

    const [toDoList, setToDoList] = useState<ToDo[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("/api/todo")
                setToDoList(response.data)
            } catch (e: any) {
                console.error(e.message);
            }
        })();


    }, [])

    //POST  ToDos without id


    const [toDo, setToDo] = useState<string>("");

    const onSubmit = () => {
        const toSend: ToDoDTO = {description: toDo, status: "OPEN"}

        axios.post("/api/todo", toSend)
            .then(response => {
                return response.data
            })
            .catch(error => console.error(error))

    }

    // //GET ToDos by ID edit/details
 /*
    const [toDoId, setToDoId] = useState<string>("");

    (async () => {
        try {
            const response = await axios.get("/api/todo" + toDoId )
            setToDoId(response.data.id)
        } catch (e: any) {
            console.error(e.message);
        }
    })();
  */

    //PUT new ToDo advanced




// Details Link neben oder unter ToDo für jedes List-Element
// <Link to = {"/details/" + toDoId}>Details<Link/>
// ToDo: <Doing/> <Done/>
    return (
        <div>

            <div className={"header"}>
                <header><h1>ToDo-Aufgabe</h1></header>
            </div>

            <div className={"header-todo"}><h2>ToDo's</h2></div>
            <div className={"toDo-list"}>
                <ul>
                    {toDoList.map(toDo =>
                        <li key={toDo.id}> ToDo: {toDo.description} <br/> Status: {toDo.status}
                           <br/> <Link to = {"/details/" + toDo.id}>Details</Link>
                            <br/>
                            <Link to = {"/edit/" + toDo.id}>Edit</Link>
                        </li>)}
                </ul>
                <form onSubmit={onSubmit}>
                    <input type="text" onChange={(toDo) => setToDo(toDo.target.value)}/>
                    <button >Add</button>
                </form>
            </div>


        </div>
    );
}
