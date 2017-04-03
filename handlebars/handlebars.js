var Handlebars = require("handlebars");
var fs = require('fs');

var source = fs.readFileSync(__dirname + "/message.hbs") // need to read the template from the file system
var template = Handlebars.compile(source.toString()); // need to call Handlebars.compile with the template file

Handlebars.registerHelper("formatPhoneNumber", function(phoneNumber) {
  phoneNumber = phoneNumber.toString();
  return "+44 " + phoneNumber.substr(1,3) + " " + phoneNumber.substr(4,3) + " " + phoneNumber.substr(7,4);
});

// In the function below you will see `var html = template(context)`
// This merges the template and the relevant data together to produce the html

function renderHtml(){
  var context = {
    title:"Hello World",
    post: "A bit of info about FAC!",
    people: ["Dan Sofer", "Ines Teles", "Nelson Correira"],
    email: "hello@foundersandcoders.com",
    number: '02035832442'
  }

  var html = template(context);
  return html;
}

module.exports = {
  renderHtml: renderHtml
}
