const https = require('https');
const config = require('./config');
const env = require('./readVars');
let mail = require('./sendmail');
let relevant = [], sentIds = [];

setInterval(() => {
        // let relevant = [], sentIds = [];
        scrapeNabavki();
    },
    parseInt(env.interval, 10) * 1000
);

function scrapeNabavki() {
    let data = ``;
    //, relevant = [], sentIds = [];
    let req = https.request(config.options, (res) => {

        res.on('data', (d) => {
            data += d;
        });

        res.on('end', function() {
            relevant = [];
            data = JSON.parse(data).data;
            env.keywords.forEach((keyword) => {
                data.forEach(d => {
                    if(d.Subject.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
                        if(sentIds.indexOf(d.Id) === -1){
                            relevant.push(d);
                            sentIds.push(d.Id);
                            console.log(d);
                            mail.sendOglas(env.emails.toString(), d);
                        }
                    }
                });
            });
            // console.log('relevant: ', relevant);
        });
    });

    req.on('error', (e) => {
        console.log('Error: ', e);
    });

    req.write(config.postData);
    req.end();
}
