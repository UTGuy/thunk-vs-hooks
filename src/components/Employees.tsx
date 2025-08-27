import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeesThunk } from '../features/employeeSlice';
import type { RootState, AppDispatch } from '../store';

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
            <li key={index}>
              <img src={employee.picture.large} alt={`${employee.name.first} ${employee.name.last}`} />
              <p>{`${employee.name.first} ${employee.name.last}`}</p>
              <p>{employee.email}</p>
              <p>{employee.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };