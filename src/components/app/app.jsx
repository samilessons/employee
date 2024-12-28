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
          salary: 1100,
          increase: false,
          rise: false
        },
        {
          id: 2,
          name: "Alex Shepard",
          salary: 950,
          increase: false,
          rise: false
        }
      ],
      term: "",
      filter: "all"
    };
    this.employeeId = 3
  }

  onDeleteEmployee = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    });
  }

  onAddNewEmployee = (name, salary) => {
    this.setState(({ data }) => {
      return {
        data: [
          ...data,
          {
            id: this.employeeId++,
            name,
            salary,
            increase: false,
            rise: false
          }
        ]
      }
    });
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    }));
  }

  onEmployeeSearch = (items, term) => {
    if (term.length === 0) return items;

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onUpdateSearch = (term) => {
    this.setState({ term });
  }

  onEmployeeFilter = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter(item => item.rise);
      case "salary":
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  }

  onFilterSelect = (filter) => {
    this.setState(({ filter }));
  }

  render() {
    const { data, term, filter } = this.state;
    const {
      onUpdateSearch,
      onFilterSelect,
      onEmployeeFilter,
      onEmployeeSearch,
      onDeleteEmployee,
      onToggleProp,
      onAddNewEmployee
    } = this;
    const employees = data.length;
    const increased = data.filter(e => e.increase).length;
    const visibleData = onEmployeeFilter(onEmployeeSearch(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-and-filter block">
          <h3>Search or Filter</h3>
          <AppSearch onUpdateSearch={onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
        </div>
        <AppEmployeeList
          data={visibleData}
          onDelete={onDeleteEmployee}
          onToggleProp={onToggleProp}
        />
        <AppAddNewEmployee onAdd={onAddNewEmployee} />
      </div>
    );
  }
}