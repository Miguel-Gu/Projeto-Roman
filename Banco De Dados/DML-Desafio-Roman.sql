USE Desafio_Roman
GO

INSERT INTO TipoUsuario (nomeTipoUsuario)
VALUES ('Administrador'),('Professor')
GO

INSERT INTO EQUIPE(nomeEquipe)
VALUES ('Desenvolvimento'),('Redes'),('Multimidia')
GO

INSERT INTO USUARIO (IdTipoUsuario, senha, email, UserName)
VALUES (1,'adm12345','adm@email.com','saulo'), (2,'gustavo123','gustavo@email.com','gustavo'), (2,'matheus123','matheus@email.com','matheus'), (2,'jhon1234','jhon@email.com','jhon')
GO

INSERT INTO PROFESSOR (IdUsuario, IdEquipe)
VALUES (2, 1), (3, 2), (4, 3)
GO

INSERT INTO TEMA (nomeTema)
VALUES ('Gestão'), ('HQs')
GO 

INSERT INTO PROJETO(IdTema, IdProfessor, nomeProjeto)
VALUES  ( 1, 2, 'Projeto de Controle de Estoque'), ( 2, 1, 'Projeto de Listagem de Personagens')
GO