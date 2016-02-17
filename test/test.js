var test = require("tape");
var handlebars = require("../example/handlebars.js")

test("sayHello function prints 'Hello World'", function(t){
  var html = handlebars.sayHello();
  console.log(html);
  t.ok(html.indexOf("Hello World: A bit of info about FAC!") > -1, "Congrats! Good introduction!");
  t.end()
})

test("listOutPeople function prints a list of the best people in FAC", function(t){
  var html = handlebars.listOutPeople();
  console.log(html);
  t.ok(html.indexOf("<li>Dan Sofer</li> <li>Ines Teles</li> <li>Nelson Correira</li>"), "YAY! thats correct!");
  t.end()
})

test("getInContact function prints FAC's contact details", function(t){
  var html = handlebars.getInContact();
  console.log(html);
  t.ok(html.indexOf("Please email hello@foundersandcoders.com if you want to get in touch!"), "Congrats! You printed out the email!");
  t.end();
})
