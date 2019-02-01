const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nabavki.info2@gmail.com',
        pass: 'Nabavki.123'
    }
});

function translateVid(vidEn) {
    switch(vidEn) {
        case 'Goods':
            return 'Стоки';
        case 'Works':
            return 'Работни';
        case 'Services':
            return 'Услуги';
        default:
            return '';
    }
}

function translateTime(time) {
    let nt = new Date(time);
    console.log(`nt: ${nt.getDate()}/${nt.getMonth() + 1}/${nt.getFullYear()}`);
    return `${nt.getDate()}/${nt.getMonth() + 1}/${nt.getFullYear()}`;
}

function translatePostapka(poEn) {
    switch(poEn) {
        case 'RequestForProposal':
            return 'Барање за прибирање понуди';
        default:
            return 'Отворена постапка';
    }
}

function getMailText(oglas) {
    return `
        Број на оглас: ${oglas.ProcessNumber.trim()}\n
        Договорен орган: ${oglas.ContractingInstitutionName}\n
        Предмет на договорот: ${oglas.Subject}\n
        Вид на договорот: ${translateVid(oglas.GoodsWorksServices)}\n
        Вид на постапка: ${translatePostapka(oglas.EntityProcedureType)}\n
        Датум на објава: ${translateTime(oglas.AnnouncementDate)}\n
        Краен рок: ${translateTime(oglas.FinalDay)}\n
        `
}

function getMailOptions(string_emails, oglas) {
    return {
        user: 'nabavki.info@gmail.com',
        to: string_emails,
        subject: 'Oglas broj: ' + oglas.ProcessNumber,
        text: getMailText(oglas)
    }
}

async function sendOglas(string_emails, oglas) {
    // let info = await transporter.sendMail(getMailOptions(string_emails, oglas));
    // console.log("Message sent: %s", info.messageId);
    transporter.sendMail(getMailOptions(string_emails, oglas), function(error, info) {
        if(error) {
            console.log(error);
        } else {
            console.log(info.response);
        }
    });
}

module.exports = {
    sendOglas,
};
