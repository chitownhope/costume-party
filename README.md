# costume-party

# SQL Commands for creating database + usesr
we create a db for a specific user in the db for that project.  htis is for security purposes!
```
create database costume_party;
create user 'tina'@'localhost' identified by 'yellowpencil';
grant all privileges on costume_party.* to 'tina'@'localhost';
```