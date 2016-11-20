var test = require("tape");
var handlebars = require("../handlebars/handlebars.js")

test("sayHello function prints 'Hello World'", function(t){
  var html = handlebars.sayHello();
  console.log(html);
  t.ok(html.indexOf("Hello World: A bit of info about FAC!") > -1, "Congrats! Good introduction!");
  t.end()
})

test("listOutPeople function prints a list of the best people in FAC", function(t){
  var html = handlebars.listOutPeople();
  var pattern = new RegExp(/<li>Nelson Correira<\/li>\s?<li>Dan Correira<\/li>\s?<li>Ines Correira<\/li>/);
  t.ok(html.search(/<li>Dan Sofer<\/li>\s{0,}<li>Ines Teles<\/li>\s{0,}<li>Nelson Correira<\/li>/) > -1, "YAY! thats correct!");
  t.end()
})

test("getInContact function prints FAC's contact details", function(t){
  var html = handlebars.getInContact();
  t.ok(html.indexOf("Please email hello@foundersandcoders.com or call +44 208 3583 2442 if you want to get in touch!") > -1, "Congrats! You printed out the email and formatted phone number!");
  t.end();
})
