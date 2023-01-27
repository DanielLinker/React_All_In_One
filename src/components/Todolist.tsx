import React from "react";
import './Todolist.css'
import {MdAddTask} from "react-icons/md";
import {TaskType} from "../App";


type TodolistPropsType = {
    title:string
    tasks: Array<TaskType>
   removeTasks: (tasksId: number) => void
}
export function Todolist(props: TodolistPropsType)  {

    //Erstelle
    const tasksList = props.tasks.length

        ? <ul> {
        props.tasks.map((T: TaskType) => {


            return (
                <li key={T.id}>
                    <input type="checkbox" checked={T.isDone}/>
                    <span>{T.title}</span>
                    <button onClick={() => props.removeTasks(T.id)}>X</button>
                </li>
            )
    })
     }
    </ul> : <span>Task list is empty</span>
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input placeholder={"Add Tasks"}/>
                    <button>Hinzufügen
                        <MdAddTask/>
                    </button>
                </div>
                {tasksList}
                <div>
                    <button>All Tasks</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    )
}