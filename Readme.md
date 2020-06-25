The Universalfunction library exported as Node.js modules.


Installation Using npm:

    $ npm i  universalfunction

// Load the full build.

    var universalfunction = require('universalfunction');





//Documentation



//Sending notification to users 
//installation

    $ npm install fcm-node

//Usage

    const FCM = require('fcm-node');
    const serverKey = 'YOURSERVERKEYHERE'; //put your server key here
    const fcm = new FCM(serverKey);
 
    const message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
        to: 'registration_token', 
        collapse_key: 'your_collapse_key',
        
        notification: {
            title: 'Title of your push notification', 
            body: 'Body of your push notification' 
        },
        
        data: {  //you can send only notification or only data(or include both)
            my_key: 'my value',
            my_another_key: 'my another value'
        }
    };
    
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });




//Authentication with passport

//Installation

    $ npm i passport

//load passport

    const passport = require('passport')

    isAuthenticated()  //checks whether user authenticated or not

//usage

    checkAuthenticate=(req,res,next)=> {
        if(req.isAuthenticated()){
            return next()
        }else{
            return res.send('login first')
        }
    }//If user is authenticated(logged in) then passes to the next else returns back to login page



// for generating randon bytes with crypto

//Installation

    $ npm i crypto

//load crypto

    const crypto = require('crypto');


    crypto.randomBytes(Number,callback)//creates the random bytes


//usage

    tokenGenrator= (done)=>{
        crypto.randomBytes(2,(err,buf)=>{
        let token = buf.toString('hex');
        done(err,token)
    })
    }  //4a22
    //Number=2 and this then this number is converted into hexadecimal string




//Sending mail to the user with nodemailer
//installation

    $ npm i nodemailer

//load nodemailer

    const nodemailer = require("nodemailer")

//usage

    const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: '"" <xyz@abc.com>', // sender address
        to: 'name@domain.com, baz@blurdybloop.com', // list of receivers
        subject: 'Hello ', // Subject line
        text: 'Hello world ', // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });





//Database Queries

//Get Users from DB


    getData = (criteria, projection, options, callback) =>{
        Model.find(criteria, projection, options, callback);
    };

//Insert User in DB


    create = (objToSave, callback)=> {
        new Models(objToSave).save(callback)
    };

//Update User in DB


    //For updating one entry
    findAndUpdate = (criteria, dataToSet, options, callback)=> {
        Model.findOneAndUpdate(criteria, dataToSet, options, callback);
    };

    //for Updating multiple enteries
    updateMultiple = (criteria, dataToSet, options, callback) =>{
        Model.update(criteria, dataToSet, options, callback);
    };


// Populate from db


    getPopulate = (criteria, project, options,populateArray, callback)=> {
        Model.find(criteria, project, options).populate(populateArray).exec(function (err, docs) {
            if (err) {
                return callback(err, docs);
            }else{
                callback(null, docs);
            }
        });
    };

// delete entry from db


    // for deleting the single entry
    deleteData=(criteria,callback)=>{
        Model.deleteOne(criteria,callback)
    }

    // for deleting the multiple entries
    deleteData=(criteria,callback)=>{
        Model.deleteMany(criteria,callback)
    }