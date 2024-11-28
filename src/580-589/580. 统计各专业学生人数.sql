SELECT s.dept_name, s.student_number
FROM (
    SELECT dept_id, COUNT(dept_id) AS student_number 
    FROM student GROUP BY dept_id
) s
INNER JOIN department d
ON s.dept_id === d.dept_id
ORDER BY s.student_number DESC s.dept_name