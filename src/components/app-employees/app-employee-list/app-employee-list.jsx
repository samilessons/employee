import { Component } from "react";
import AppEmployeeItem from "../app-employee-item/app-employee-item";

export default class AppEmployeeList extends Component {
  render() {
    const { data, onDelete } = this.props;
    const employees = data.map(item => {
      return <AppEmployeeItem
        key={item.id}
        {...item}
        onDelete={() => onDelete(item.id)}
      />;
    });
  
    return (
      <>
        {
        data.length ? 
          <div className="block">
            {employees}
          </div>
          :
          null
        }
      </>
    );
  }
}