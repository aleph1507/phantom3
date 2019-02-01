let url = 'https://www.e-nabavki.gov.mk/PublicAccess/home.aspx#/notices';
let gridURL = 'https://www.e-nabavki.gov.mk/Services/Notices.asmx/GetGridData';
const querystring = require('querystring');

let postData = querystring.stringify({
    'draw': 1,
    'columns[0][data]': 'ProcessNumber',
    'columns[0][name]': '',
    'columns[0][searchable]': true,
    'columns[0][orderable]': true,
    'columns[0][search][value]': '',
    'columns[0][search][regex]': false,
    'columns[1][data]': 'ContractingInstitutionName',
    'columns[1][name]': '',
    'columns[1][searchable]': true,
    'columns[1][orderable]': true,
    'columns[1][search][value]' : '',
    'columns[1][search][regex]': false,
    'columns[2][data]': 'Subject',
    'columns[2][name]': '',
    'columns[2][searchable]': true,
    'columns[2][orderable]': true,
    'columns[2][search][value]': '',
    'columns[2][search][regex]': false,
    'columns[3][data]': 'GoodsWorksServices',
    'columns[3][name]': '',
    'columns[3][searchable]': true,
    'columns[3][orderable]': true,
    'columns[3][search][value]': '',
    'columns[3][search][regex]': false,
    'columns[4][data]': 'EntityProcedureType',
    'columns[4][name]': '',
    'columns[4][searchable]': true,
    'columns[4][orderable]': true,
    'columns[4][search][value]': '',
    'columns[4][search][regex]': false,
    'columns[5][data]': 'AnnouncementDate',
    'columns[5][name]': '',
    'columns[5][searchable]': true,
    'columns[5][orderable]': true,
    'columns[5][search][value]': '',
    'columns[5][search][regex]': false,
    'columns[6][data]': 'FinalDay',
    'columns[6][name]': '',
    'columns[6][searchable]': true,
    'columns[6][orderable]': true,
    'columns[6][search][value]': '',
    'columns[6][search][regex]': false,
    'columns[7][data]': 'Documents',
    'columns[7][name]': '',
    'columns[7][searchable]': false,
    'columns[7][orderable]': false,
    'columns[7][search][value]': '',
    'columns[7][search][regex]': false,
    'order[0][column]': 5,
    'order[0][dir]': 'desc',
    'start': 0,
    'length': 10,
    'search[value]': '',
    'search[regex]': false,
    'Discriminator': '{"ContractingInstitution":"","EauctionOnly":false,"TypeOfPublicContract":"","Status":1,"OngoingComplitedStatus":"","TypeOfProcedure":0,"ProcessNumber":"","IsSmallPublicProcurement":false,"EprocurementOnly":false,"PrivatePartnershipOnly":false,"ContractingInstitutionName":null,"Subject":"","PeriodFrom":"","PeriodTo":"","SmallOnly":false,"BigOnly":false,"LotSubject":"","OfferType":""}'
});

let options = {
    hostname: 'e-nabavki.gov.mk',
    port: 443,
    path: '/Services/Notices.asmx/GetGridData',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'ASP.NET_SessionId=ugxalwphcudbiqho3nerisuo; _ga=GA1.3.1646186469.1548772728; _gid=GA1.3.1923499183.1548772728; _gat=1',
        'Host': 'www.e-nabavki.gov.mk',
        'Origin': 'https://www.e-nabavki.gov.mk',
        'Pragma': 'no-cache',
        'Referer': 'https://www.e-nabavki.gov.mk/PublicAccess/home.aspx',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest',
        'value': ''
    }
};

module.exports = {
    options,
    postData,
    gridURL
};

