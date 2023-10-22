SELECT
  product_name, year, price
FROM
  Sales
INNER JOIN
  Product using(product_id);

-- https://leetcode.com/problems/product-sales-analysis-i/description/?envType=study-plan-v2&envId=top-sql-50