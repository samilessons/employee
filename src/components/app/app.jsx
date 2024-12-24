import { Component } from "react";

import "./app.css";

import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployeeList from "../app-employees/app-employee-list/app-employee-list";
import AppAddNewEmployee from "../app-add-employee/app-add-new-employee";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "John Smith",
          salary: 1000,
          increase: false
        },
        {
          id: 2,
          name: "Alex Shepard",
          salary: 950,
          increase: false
        },
        {
          id: 3,
          name: "Tom Jackson",
          salary: 645,
          increase: false
        },
        {
          id: 4,
          name: "Adam Miller",
          salary: 1245,
          increase: false
        },
        {
          id: 5,
          name: "Mila Yohovich",
          salary: 877,
          increase: false
        },
      ]
    }
  }

  deleteEmployee = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex(item => item.id === id);
      
      // const before = data.slice(0, index);
      // const current = data.slice(index + 1);

      // const newState = [...before, ...current];

      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-and-filter block">
          <h3>Search or Filter</h3>
          <AppSearch />
          <AppFilter />
        </div>
        <AppEmployeeList
          data={this.state.data}
          onDelete={this.deleteEmployee}
        />
        <AppAddNewEmployee />
      </div>
    );
  }
}