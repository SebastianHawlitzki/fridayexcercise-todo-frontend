import React, {useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {ToDo} from "./ToDo";


export default function Doing() {

    const {id} = useParams()

    const [toDoList, setToDoList] = useState<ToDo[]>([]);

    const [status, setStatus] = useState<string>("OPEN");

    const [toDo, setToDo] = useState<ToDo>();

//    const statusFilter = toDoList.filter((status) => toDo.status.includes(status));

    (async () => {
        try {
            const response = await axios.put("/api/todo" + id)
            setToDoList(response.data)
        } catch (e: any) {
            console.error(e.message);
        }
    })();



    return (

            <div className={"doing-list"}>
                <ul>
                    {toDoList.map(toDo =>
                        <li key={toDo.id}> ToDo: {toDo.description}  Status: {toDo.status}
                        </li>)}
                </ul>
            </div>

    );

}
