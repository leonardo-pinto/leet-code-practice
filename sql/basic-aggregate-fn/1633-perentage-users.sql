SELECT r.contest_id, ROUND(100*COUNT(*)/(SELECT COUNT(*) FROM Users), 2) as percentage
FROM Register r
JOIN Users u
ON r.user_id = u.user_id
GROUP BY r.contest_id
ORDER BY percentage DESC, contest_id ASC

-- https://leetcode.com/problems/percentage-of-users-attended-a-contest/description/?envType=study-plan-v2&envId=top-sql-50