-- Write your query below
SELECT warehouse.name as warehouse_name, SUM(warehouse.units * products.width * products.length * products.height) as volume
FROM warehouse
INNER JOIN products
ON warehouse.product_id = products.product_id
GROUP BY warehouse.name;