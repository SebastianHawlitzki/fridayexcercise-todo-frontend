import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoHomePage from "./components/ToDoHomePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Root from "./Pages/Root";
import Details from "./Pages/Details";
import Edit from "./Pages/Edit";
import Doing from "./components/Doing";



export default function App() {
  return (

    <div>
<BrowserRouter>
    <ToDoHomePage/>
    <Routes>
        <Route path={"/"} ></Route>
        <Route path={"/details/:id"} element={<Details/>}></Route>
        <Route path={"/edit/:id"} element={<Edit/>}></Route>
        <Route path={"/doing/:id"} element={<Doing/>}></Route>
    </Routes>

</BrowserRouter>


    </div>
  );
}


