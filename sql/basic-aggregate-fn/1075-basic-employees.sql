SELECT project_id, ROUND(AVG(experience_years), 2) as average_years
FROM Employee
INNER JOIN Project using(employee_id)
GROUP BY (project_id);

-- https://leetcode.com/problems/project-employees-i/description/?envType=study-plan-v2&envId=top-sql-50