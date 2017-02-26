var Handlebars = require("handlebars");
var fs = require('fs');

var source = fs.readFileSync(__dirname + "/message.html")
var template = Handlebars.compile(source.toString());

Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
  phoneNumber = phoneNumber.toString();
  return "+44 " + phoneNumber.substr(1,3) + " " + phoneNumber.substr(4,3) + " " + phoneNumber.substr(7,4);
});

function sayHello(){
  var obj = {
    title:"Hello World",
    post: "A bit of info about FAC!"
  }
  var html = template(obj);
  console.log(html);
  return html;
}

function listOutPeople(){
  var obj = {
    people: ["Dan Sofer", "Ines Teles", "Nelson Correira"]
  }
  var html = template(obj);
  return html;
}

function getInContact(){
  var obj = {
    email: "hello@foundersandcoders.com",
    number: '02035832442'
  }
  var html = template(obj);
  return html;
}

module.exports = {
  sayHello: sayHello,
  listOutPeople: listOutPeople,
  getInContact: getInContact
}
