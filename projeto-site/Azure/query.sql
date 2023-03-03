select * from usuario;

drop table usuario;

create table usuario(
        cpf int identity(1,1) primary key,
        nome varchar(50),
        login varchar(50),
	senha varchar(50),
        data_usuario datetime default current_timestamp 
);
