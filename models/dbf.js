var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

// Functions from student.js
/*
exports.GetAll = function(callback) {
    connection.query('select * from Student',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
} */

exports.GetAllView = function(callback) {
    connection.query('select ID, FirstAndLastName from PersonsView',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByID = function(personid, callback) {
    var query = 'select * from Person WHERE ID=' + personid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Insert = function(person_info, callback) {
    console.log(person_info);
    var query = 'INSERT INTO Person (FirstAndLastName, Age, StartWeight, Gender) VALUES (\'' + person_info.FirstAndLastName + '\', \'' + person_info.Age + '\', \'' + person_info.StartWeight + '\', \'' + person_info.Gender + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.Delete = function(personid, callback) {
    var query = 'Delete from Person WHERE ID=' + personid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.CardioDelete = function(day, callback) {
    var query = 'Delete from Cardio WHERE ID=' + day;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.Update = function(person_info, callback) {
    console.log(person_info);
    var query = 'Update Person (FirstAndLastName, Age, StartWeight, Gender) VALUES (\'' + person_info.FirstAndLastName + '\', \'' + person_info.Age + '\', \'' + person_info.StartWeight + '\', \'' + person_info.Gender + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.GetCardioByID = function(personid, callback) {
    var query = 'select Day, Time, Exercise from Cardio WHERE ID=' + personid;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetTotalByID = function(personid, callback) {
    var query = 'select * from CardioTotalView WHERE ID=' + personid
        ;
    console.log(personid);
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.CardioInsert = function(person_info, callback) {
    console.log(person_info);
    var query = 'INSERT INTO Cardio VALUES (\'' + person_info.Exercise + '\', \'' + person_info.Time + '\', \'' + person_info.Day + '\', \'' + person_info.ID + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.GetLiftingByID = function(personid, callback) {
    var query = 'SELECT * FROM Lifting WHERE ID=' + personid;
    console.log(personid);
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.LiftingInsert = function(person_info, callback) {
    console.log(person_info);
    var query = 'INSERT INTO Lifting VALUES (\'' + person_info.Day + '\',\'' + person_info.ID + '\',\'' + person_info.Exercise + '\', \'' + person_info.Weight + '\', \'' + person_info.Reps +  '\', \'' + person_info.Sets + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}


exports.GetFoodByID = function(personid, callback) {
    var query = 'SELECT * FROM FoodView WHERE ID=' + personid;
    console.log(personid);
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.FoodInsert = function(person_info, callback) {
    console.log(person_info);
    var query = 'SELECT InsertIntoBoth(\'' + person_info.Day + '\',\'' + person_info.DayWeight + '\',\'' + person_info.ID + '\', \'' + person_info.Food + '\', \'' + person_info.Calories + '\')';;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}