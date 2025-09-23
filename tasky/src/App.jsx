import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Clean the dishes"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold the laundry"/>
      <Task title="Tidy" deadline="Today" description="Tidy the house"/>
    </div>
  );
}


export default App;
