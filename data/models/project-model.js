// select p.id as projectId, p.name as projectName, p.description as projectDescription,
// a.id as actionId, a.description as actionDescription
// from project as p
// join action as a
// where p.id = a.fk
// group by a.description
// order by p.id
