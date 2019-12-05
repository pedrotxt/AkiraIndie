create database Akira;
use Akira;
create table usuario (
id int primary key auto_increment,
nome varchar(45),
login varchar(60),
senha varchar(16)
);