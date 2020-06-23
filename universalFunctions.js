const nodemailer = require('nodemailer');
const FCM = require('fcm-node')
const serverKey ='AAAAiq3eC30:APA91bFx95YQl0IoN20uI8QrV1a0gwFP58JMAbzKFFyRFnm1igFKkf3oSfWL4FJExMSyOGqNBqPXDE8EYb5u_9afKMm8HJ_fqulvhoAk562V1BCgpi23arNvtz2wtVepwq0csTvQ87ZE'
const fcm =new FCM(serverKey);
const Model=require('../models/user')




// for notification
exports.fcmForNotification=(deviceToken, data) =>{
        return new Promise((resolve, reject) => {
            let message = {
                to: deviceToken,
                notification: {
                    title: 'New Chat!',
                    body: data.message,
                    sound: "default",
                    badge: 0
                },
                data: data,
                priority: 'high'
            };
            fcm.send(message, function (err, result) {
                if (err) {
                    resolve(err);
                } else {
                    resolve(null, result);
                }
            });

        })
    };


//for auth
exports.checkAuthenticate=(req,res,next)=> {
    if(req.isAuthenticated()){
        return next()
    }else{
        return res.send('login first')
    }
}


// for auth
exports.checkNotAuthenticate=(req,res,next) =>{
    if(req.isAuthenticated()){
        return res.send('logout first')
    }else{
        return next()
    }
}


// for genrating token
exports.tokenGenrator= (done)=>{
    crypto.randomBytes(2,(err,buf)=>{
    let token = buf.toString('hex');
    done(err,token)
   })
}

//for sending OTP
// exports.nodemailerForOtp=(token,req,res)=>{
//     const smtpTransport=nodemailer.createTransport({
//         service:'Gmail',
//         auth:{
//             user:'nitinrana000111@gmail.com',
//             pass:process.env.GMAILPW
//         }
//     })
//     const mailOptions={
//         to:req.body.email,
//         from:'nitinrana000111@gmail.com',
//         subject:'OTP for Email verifiction',
//         text:'OTP : '+ token
//     }
//     smtpTransport.sendMail(mailOptions,(err)=>{
//         res.send('OTP sent');
//     })
// }

//Get Users from DB
exports.getData = (criteria, projection, options, callback) =>{
    Model.find(criteria, projection, options, callback);
};

//Insert User in DB
exports.create = (objToSave, callback)=> {
    new Models(objToSave).save(callback)
};

//Update price in DB
exports.findAndUpdate = (criteria, dataToSet, options, callback)=> {
    Model.findOneAndUpdate(criteria, dataToSet, options, callback);
};


exports.updateMultiple = (criteria, dataToSet, options, callback) =>{
    Model.update(criteria, dataToSet, options, callback);
};



exports.getPopulate = (criteria, project, options,populateArray, callback)=> {
    Model.find(criteria, project, options).populate(populateArray).exec(function (err, docs) {
        if (err) {
            return callback(err, docs);
        }else{
            callback(null, docs);
        }
    });
};

// for deleting the single entry
exports.deleteData=(criteria,callback)=>{
    Model.deleteOne(criteria,callback)
}