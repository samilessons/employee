import "./app-filter.css";

export default function AppFilter() {
  return (
    <div className="app-filter">
      <button className="active_btn" type="button">All Employees</button>
      <button type="button">Promotion</button>
      <button type="button">Salary &gt; 1000$</button>
    </div>
  );
}