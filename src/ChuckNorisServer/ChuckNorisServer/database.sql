CREATE DATABASE JokeStore 
 
GO 
 
USE JokeStore 
 
GO 
 
CREATE TABLE JokeCategory 
  ( 
     Id   BIGINT IDENTITY(1, 1) NOT NULL, 
     NAME NVARCHAR(50) NOT NULL, 
     PRIMARY KEY (Id) 
  )  
GO 
 
CREATE TABLE Joke 
  ( 
     Id          BIGINT IDENTITY(1, 1) NOT NULL, 
     Value       NVARCHAR(300) NOT NULL, 
     CategoryId  BIGINT NOT NULL,  
     PRIMARY KEY (Id), 
     FOREIGN KEY (CategoryId) REFERENCES JokeCategory(Id),  
  ) 
 
GO 
