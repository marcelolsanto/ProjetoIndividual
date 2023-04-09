CREATE TABLE [dbo].[usuario] (
    [Id]    INT NOT NULL,
    [nome]  NCHAR (20) NOT NULL,
    [email] NCHAR (60) NOT NULL,
    [senha] NCHAR (10) NOT NULL,
    [dt_usuario] DATETIME NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY CLUSTERED ([Id] ASC)
);
GO
EXEC sp_addextendedproperty @name = N'MS_Description',
    @value = N'DEFAULT_GENERATED',
    @level0type = N'SCHEMA',
    @level0name = N'dbo',
    @level1type = N'TABLE',
    @level1name = N'usuario',
    @level2type = N'COLUMN',
    @level2name = N'dt_usuario'