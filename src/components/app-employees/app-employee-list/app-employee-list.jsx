import { Component } from "react";
import AppEmployeeItem from "../app-employee-item/app-employee-item";

export default class AppEmployeeList extends Component {
  render() {
    const { data } = this.props;
    const employees = data.map(item => {
      return <AppEmployeeItem key={item.id} {...item} />;
    });
  
    return (
      <div className="block">
        {employees}
      </div>
    );
  }
}