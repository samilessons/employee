import "./app.css";

import AppInfo from "../app-info/app-info";
import AppSearch from "../app-search/app-search";
import AppFilter from "../app-filter/app-filter";
import AppEmployeeList from "../app-employees/app-employee-list/app-employee-list";
import AppAddNewEmployee from "../app-add-employee/app-add-new-employee";

export default function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-and-filter block">
        <h3>Search or Filter</h3>
        <AppSearch />
        <AppFilter/>
      </div>
      <AppEmployeeList />
      <AppAddNewEmployee/>
    </div>
  );
}