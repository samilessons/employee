import { Component } from "react";
import "./app-info.css"

export default class AppInfo extends Component {
  render() {
    const { employees, increased } = this.props;
    return (
      <div className="app-info block">
        <h1>Data Agency LTD</h1>
        <h2>Employees Count: {employees}</h2>
        <h2>People who will recived a reward: {increased}</h2>
      </div>
    );
  }
}