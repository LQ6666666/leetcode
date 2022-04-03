SELECT v.customer_id ,COUNT(*) as count_no_trans  
FROM visits v
LEFT JOIN transactions t
ON v.visit_id = t.visit_id
WHERE t.transaction_id is NULL
GROUP BY v.customer_id;