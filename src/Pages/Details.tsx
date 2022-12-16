import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ToDo, ToDoDTO} from "../components/ToDo";
import axios from "axios";


export default function Details() {
    const {id} = useParams()

    const initialState: ToDo = {
        id: "",
        description: "",
        status: ""
    }

    const [toDo, setToDo] = useState<ToDo>(initialState);

    useEffect(() => {
    (async () => {
        try {
            const response = await axios.get("/api/todo/" + id )
            setToDo(response.data)
        } catch (e: any) {
            console.error(e.message);
        }
    })();

    }, [])
    return (

        <div>
            <h2>{toDo.description}</h2>
            <p>{toDo.status}</p>
        </div>
    );
}
