let fs = require('fs');

function trimStringArray(arr) {
    for(let i = 0; i<arr.length; i++) arr[i] = arr[i].trim();
    return arr;
}

let file_emails = 'emails.txt';
let file_settings = 'settings.txt';

let emails = trimStringArray(fs.readFileSync(file_emails, 'utf8').split(','));
let keywords = trimStringArray(fs.readFileSync(file_settings, 'utf8').split(','));
let interval = keywords.shift();

module.exports = {
    emails,
    keywords,
    interval
};