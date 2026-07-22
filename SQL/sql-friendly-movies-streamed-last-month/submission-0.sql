-- Write your query below
SELECT DISTINCT content.title 
FROM content
INNER JOIN tv_program
ON content.content_id = tv_program.content_id
WHERE content.kids_content = 'Y' AND content.content_type = 'Movies' AND tv_program.program_date LIKE '2020-06%';