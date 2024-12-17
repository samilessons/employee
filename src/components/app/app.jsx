import "./app.css";

import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployeeList from "../app-employees/app-employee-list/app-employee-list";
import AppAddNewEmployee from "../app-add-employee/app-add-new-employee";

export default function App() {
  const data = [
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
  ];

  return (
    <div className="app">
      <AppInfo />
      <div className="search-and-filter block">
        <h3>Search or Filter</h3>
        <AppSearch />
        <AppFilter/>
      </div>
      <AppEmployeeList data={data} />
      <AppAddNewEmployee/>
    </div>
  );
}