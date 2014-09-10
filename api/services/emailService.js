
var nodemailer = require("nodemailer");

// create reusable transport method (opens pool of SMTP connections)



var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail", //using gmail service
    auth: {
        user: "emvento@gmail.com",
        pass: "anilsneh"
    }
});

// var smtpTransport = nodemailer.createTransport("SMTP",{
//     service: "hotmail", //using hotmail, live or outlook service
//     auth: {
//         user: "emvento@outlook.com",
//         pass: "rambotech12"
//     }
// });


exports.sendInviteEmail = function(options) {


var opts = {
    from: "Emvento <emvento@outlook.com>", // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: "Test email from Node", // plaintext body
    html: "<b>Hello world ✔</b>" // html body
};


    smtpTransport.sendMail(opts);
};



