var express = require('express');
var router  = express.Router();
var dbf   = require('../models/dbf');



router.get('/people', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayPersonDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/people', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayPersonInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/people/create', function(req, res){
    res.render('createPersonForm.ejs', {action: '/person/people/create'});
});


router.post('/people/create', function (req, res) {
    dbf.Insert( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                dbf.GetByID(result.insertId, function(err, result){

                    res.render('displayPersonInfoSnippet.ejs', {rs: result, personid: result.personid});

                });
            }
            else {
                res.send('Student was not inserted.');
            }
        }
    );
});


router.get('/people/delete', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayDeletePersonDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/people/delete', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.Delete(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the template along with the original student id in case there were no results
                res.render('displayDeleteInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/cardio', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayCardioPersonDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/cardio', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetCardioByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayCardioPersonInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/cardio/total', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayCardioTotalDropDownAJAX.ejs', {rs: result});
        }
    );
});


// View a single persons information
router.post('/cardio/total', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetTotalByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayCardioTotalInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});


router.get('/cardio/create', function(req, res){
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('createCardioForm.ejs', {rs: result, action: '/person/cardio/create'});
        }
    );
});



router.post('/cardio/create', function (req, res) {
    dbf.CardioInsert( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                dbf.GetByID(result.insertId, function(err, result){

                    res.render('displayCardioInfoSnippet.ejs', {rs: result, personid: result.personid});

                });
            }
            else {
                res.send('Student was not inserted.');
            }
        }
    );
});



router.get('/cardio/delete', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayDeleteCardioDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/cardio/delete', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetCardioByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayDeleteCardioInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});


// View a single persons information
router.post('/cardio/delete', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.CardioDelete(req.body.Day, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayDeletedCardioInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/lifting', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayLiftingDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/lifting', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetLiftingByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayLiftingInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/lifting/create', function(req, res){
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('createCardioForm.ejs', {rs: result, action: '/person/lifting/create'});
        }
    );
});



router.post('/lifting/create', function (req, res) {
    dbf.LiftingInsert( req.body, function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);

            if(typeof result.insertId !== 'undefined') {
                dbf.GetByID(result.insertId, function(err, result){

                    res.render('displayLiftingInfoSnippet.ejs', {rs: result, personid: result.personid});

                });
            }
            else {
                res.send('Student was not inserted.');
            }
        }
    );
});



router.get('/food', function (req, res) {
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('displayFoodDropDownAJAX.ejs', {rs: result});
        }
    );
});



router.post('/food', function (req, res) {
    if(req.body.personid == null) {
        res.send("The personid parameter was not provided")
    }
    else {
        dbf.GetFoodByID(req.body.personid, function (err, result) {
                if (err) throw err;

                // Send result to the tem
                // plate along with the original student id in case there were no results
                console.log(req.body.personid);
                //req.session.person_id = req.body.personid;
                res.render('displayFoodInfoSnippet.ejs', {rs: result, personid: req.body.personid});
            }
        );
    }
});



router.get('/food/create', function(req, res){
    dbf.GetAllView(function (err, result) {
            if (err) throw err;
            res.render('createFoodForm.ejs', {rs: result, action: '/person/food/create'});
        }
    );
});



router.post('/food/create', function (req, res) {
    dbf.FoodInsert( req.body, function (err, result) {
            if (err) {
                throw err;
            }

            else {
                res.render('displayFoodCreateInfoSnippet.ejs', {rs: result, personid: result.personid});
            }
        }
    );
});



router.get('/about', function(req, res){
    res.sendFile('about.html', {root: './public'});
});



module.exports = router;