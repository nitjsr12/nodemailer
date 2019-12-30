var nodemailer = require('nodemailer');
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.post('/mail', function (req, res) {
    // res.sendFile(path.join(__dirname + '/about.html'));
    console.log('requensting body...', req.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'analtix12@gmail.com',
            pass: 'Halo123@06'
        }
    });

    let mailOptions = {
        from: 'analtix12@gmail.com',
        to: 'rsmca06@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!' + JSON.stringify(req.body)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });


    res.json({ message: 'email ssend successfullly' });
});
router.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

router.get('/sitemap', function (req, res) {
    res.sendFile(path.join(__dirname + '/sitemap.html'));
});

//add the router
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');