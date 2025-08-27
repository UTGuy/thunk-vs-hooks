import Employee from './Employee';
import { useFetchEmployeesQuery } from '../features/employeeApi';

export default function Employees() {
  const { data, error, isLoading } = useFetchEmployeesQuery(10);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: Failed to fetch employees</p>;

  return (
    <div>
      <h1>Employees</h1>
      <ul>
        {data.results.map((employee: any, index: number) => (
          <Employee
            key={index}
            picture={employee.picture.large}
            name={`${employee.name.first} ${employee.name.last}`}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </ul>
    </div>
  );
};