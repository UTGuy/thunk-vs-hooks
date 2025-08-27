import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesThunk } from '../features/employeeSlice';
import type { RootState, AppDispatch } from '../store';
import Employee from './Employee';

export default function Employees() {
    const dispatch = useDispatch<AppDispatch>();
    const { employees, loading, error } = useSelector((state: RootState) => state.employees);
  
    useEffect(() => {
      dispatch(fetchEmployeesThunk());
    }, [dispatch]);
  
    return (
      <div>
        <h1>Employees</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
          {employees.map((employee: any, index: number) => (
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