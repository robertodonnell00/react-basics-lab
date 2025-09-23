import React from "react";

const AddTaskForm = (props) => {

    // Pick background color based on priority
    let bgColor = "";
    if (props.priority === "Low") {
        bgColor = "lightgreen";
    } else if (props.priority === "Medium") {
        bgColor = "orange";
    } else if (props.priority === "High") {
        bgColor = "red";
    } else {
        bgColor = "#5bb4c4"; // default
    }

  return (
      <form onSubmit={props.submit}>
            <label>
                Task title:
                <input type="text" name="title" required onChange={(event) => props.change(event)} />
            </label>
            <br/>
            <label>
                Due date:
                <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
            </label>
            <br/>
            <label>
                Details:
                <input type="text" name="description" onChange={(event) => props.change(event)} />
            </label>
            <label>
          Priority:
          <select name="priority" required onChange={(event) => props.change(event)}>
            <option value="">Select priority</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        </form>
  )
};

export default AddTaskForm;
