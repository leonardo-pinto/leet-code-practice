SELECT
    name, bonus
FROM
    Employee
LEFT JOIN Bonus using(empId)
WHERE bonus < 1000 OR bonus IS NULL;

-- https://leetcode.com/problems/employee-bonus/submissions/?envType=study-plan-v2&envId=top-sql-50