drop database if exists burgers_db;
create database burgers_db;

create table burgers
(
    id int not null AUTO_INCREMENT,
	name varchar(255) not null,
	devoured boolean default false,
	primary key (id)
)

