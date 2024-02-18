SELECT
  employee_unique.unique_id AS unique_id,
  employees.name AS name
FROM Employees employees
LEFT JOIN EmployeeUNI employee_unique
ON employees.id = employee_unique.id;
