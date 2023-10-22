SELECT
  customer_id, COUNT(*) as count_no_trans
FROM
  Visits
LEFT JOIN
  Transactions using(visit_id)
WHERE
  amount IS NULL
GROUP BY customer_id;

--https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/description/?envType=study-plan-v2&envId=top-sql-50