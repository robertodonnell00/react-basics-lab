import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';
import AddTaskForm from './components/Form';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority: "High", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority: "Medium", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "Low", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

    const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

    return (
      
    <div className="container">
      <h1>Tasky</h1>
          {taskState.tasks.map((task, index) => (              
                  <Task 
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    deadline={task.deadline}
                    priority={task.priority}
                    done={task.done}
                    markDone={() => doneHandler(index)}
                    deleteTask = {() => deleteHandler(index)}
                  />
            ))} 
            <AddTaskForm />
    </div>

        

  );

}


export default App;
