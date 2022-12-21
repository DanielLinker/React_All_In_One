import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";


export type TaskType = {
  id: number;
  title: string;
  isDone: boolean
}

function App() {

  const todoListTitle: string = 'Einkaufsliste'

  const tasksForTodoList: Array<TaskType> = [
    {id: 1, title: 'HTML&CSS', isDone: true, },
    {id: 2, title: 'JS', isDone: true, },
    {id: 3, title: 'React', isDone: false, },

  ]


  return (
      <div className="App">
        <Todolist title={todoListTitle}
                  tasks={tasksForTodoList}/>
      </div>
  );
}


export default App;
