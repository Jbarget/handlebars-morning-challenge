var test = require("tape");
var handlebars = require("../handlebars/handlebars.js")

test("sayHello function prints 'Hello World'", function(t){
  t.plan(1);
  var html = handlebars.sayHello();
  t.ok(html.indexOf("Hello World: A bit of info about FAC!") > -1, "html should contain 'Hello World: A bit of info about FAC!'");
  t.end();
})

test("listOutPeople function prints a list of the best people in FAC", function(t){
  t.plan(1);
  var html = handlebars.listOutPeople();
  t.ok(html.search(/<li>Dan Sofer<\/li>\s{0,}<li>Ines Teles<\/li>\s{0,}<li>Nelson Correira<\/li>/) > -1, "html should contain 3 li elements each with Dan Sofer, Ines Teles and Nelson Correira ");
  t.end();
})

test("getInContact function prints FAC's contact details", function(t){
  t.plan(1);
  var html = handlebars.getInContact();
  t.ok(html.indexOf("Please email hello@foundersandcoders.com or call +44 203 583 2442 if you want to get in touch!") > -1, "html should contain the contact info for founders and coders");
  t.end();
})
