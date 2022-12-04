// Require the package

const QRCode = require("qrcode");

// Creating the data
let data = {
  name: "Employee Name",
  age: 27,
  department: "Police",
  id: "aisuoiqu3234738jdhf100223",
};

// Converting the data into String format
let stringdata = JSON.stringify(data);

let json = {
  arr: "link",
};
// Converting the data into base64
QRCode.toDataURL(stringdata, function (err, code) {
  if (err) return console.log("error occurred");
  json.qr = code;
});

console.log(json);
