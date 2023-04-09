CREATE TABLE [dbo].[usuario]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [nome] NCHAR(20) NOT NULL, 
    [email] NCHAR(60) NOT NULL, 
    [senha] NCHAR(10) NOT NULL
)


