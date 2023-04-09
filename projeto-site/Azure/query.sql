--select * from usuario;

--drop table usuario;

create table usuario(
        id int identity(1,1) primary key,
        nome varchar(50),
        email varchar(50),
		senha varchar(50),
        data_usuario datetime default current_timestamp 
);

-- drop table usuario;

insert into usuario (nome, email, senha) values ('Marcelo Santos', 'marcelolsantos30@gmail.com', 'Mr321456');

select * from usuario;