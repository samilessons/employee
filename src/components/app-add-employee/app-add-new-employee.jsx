import { Component } from "react";
import "./app-add-new-employee.css";

export default class AppAddNewEmployee extends Component {
  render() {
    return (
      <div className="add-new-employee block">
        <h3>Add new Employee</h3>

        <div className="add-new-employee-group">
          <input type="text" placeholder="Employee name" />
          <input type="text" placeholder="Employee salary" />
          <button type="button">Add</button>
        </div>
      </div>
    );
  }
}