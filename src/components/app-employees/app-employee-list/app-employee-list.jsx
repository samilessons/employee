import AppEmployeeItem from "../app-employee-item/app-employee-item";

export default function AppEmployeeList({ data }) {
  const employees = data.map(item => {
    // return <AppEmployeeItem
    //   name={item.name}
    //   salary={item.salary}
    // />
    return <AppEmployeeItem {...item} />;
  });

  return (
    <div className="block">
      {employees}
    </div>
  );
}