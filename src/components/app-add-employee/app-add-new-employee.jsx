import { Component } from "react";
import "./app-add-new-employee.css";

export default class AppAddNewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: ""
    };
  }

  onInputValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { name, salary } = this.state;
    return (
      <div className="add-new-employee block">
        <h3>Add new Employee</h3>

        <form className="add-new-employee-group">
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Employee name"
            onChange={this.onInputValueChange}
          />
          <input
            type="text"
            name="salary"
            value={salary}
            placeholder="Employee salary"
            onChange={this.onInputValueChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}