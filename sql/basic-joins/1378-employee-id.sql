SELECT 
  unique_id, name
FROM 
  Employees
LEFT JOIN
  EmployeeUNI using(id);

-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/description/?envType=study-plan-v2&envId=top-sql-50