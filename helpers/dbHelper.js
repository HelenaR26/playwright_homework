// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test_12345",
  database: "course_aqa_hillel",
});

connection.connect(function (err) {
  if (err) {
    console.log("error during connection to DB" + err.message);
  } else {
    console.log("successfully connected to DB");
  }
});

// //Create DB
// connection.query("CREATE DATABASE course_aqa_hillel", function (err) {
//   if (err) {
//     console.error(err.message);
//   } else {
//     console.log("DB created");
//   }
// });

// //Create Table mytable
// connection.query(
//   `CREATE TABLE mytable(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     age INT NOT NULL
//     )`,
//   function (err) {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log("Table created");
//     }
//   }
// );

// //Create Table Persons
// connection.query(
//   `CREATE TABLE Persons (
//     PersonID int primary key auto_increment,
//     LastName varchar(255),
//     FirstName varchar(255),
//     Address varchar(255),
//     City varchar(255)
// )`,
//   function (err) {
//     if (err) console.error(err.message);
//     else console.log("Table created");
//   }
// );

// //Add data to the Persons table
// connection.query(
//   `INSERT INTO Persons(LastName, FirstName) VALUES('KKKKK', 'DDDDD')`,
//   function (err) {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log("Data added");
//     }
//   }
// );

connection.query("SELECT * FROM Persons", function (err, results) {
  if (err) {
    console.error(err.message);
  } else {
    console.log(results);
  }
});

// in the end need to close connection
connection.end();