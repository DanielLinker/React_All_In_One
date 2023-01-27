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

  let tasksForTodoList: Array<TaskType> = [
    {id: 1, title: 'HTML&CSS', isDone: true, },
    {id: 2, title: 'JS', isDone: true, },
    {id: 3, title: 'React', isDone: false, },
  ]

  const removeTasks = (tasksId: number) => {
    tasksForTodoList = tasksForTodoList.filter(tasks => tasks.id !== tasksId);
  }


  return (
      <div className="App">
        <Todolist title={todoListTitle}
                  tasks={tasksForTodoList}
                  removeTasks={removeTasks}/>
      </div>
  );
}


export default App;
