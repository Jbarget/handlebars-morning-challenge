# Handlebars Morning Challenge

This is a morning challenge that will help you learn the basics of [Handlebars.js](http://handlebarsjs.com/) (a great templating engine with lots of in-built functionality).

**Templating Engine ?**

Lets say you've got an app that sends your users an email with lots of information that the user has inputed. Eg. an appointment booking form (time, date of appointment, name, location, all that stuff...)

A *templating engine* can come to the rescue! It allows you to insert variables into the html output by compiling the information that has been inputed and the original html. Google away and you'll see what I mean!

**The aim of the challenge is to make the tests pass by adding your code where appropriate.** (you will mainly need to edit code in `handlebars/message.html` and in `handlebars/handlebars.js` for registering the helper in test 3)

Start by cloning this repository (🌟🌟 and starring it if you fancy 🌟🌟).

To run the tests you'll need to install the dependencies using the command line with ```npm i``` and then run ```npm test```.

Good Luck! And remember Google is your best friend!

<br>
<br>

**NB.** I know the code isn't very *dry* but this is just for demonstration purposes!

**Stretch goal:** If you finish the original 3 tests you might have noticed that with each of the tests Handlebars still compiles values that are undefined.

eg. Test 2 still leaves a gap for the "title" and "post" in test 1 and the email in test 3.

![](https://cloud.githubusercontent.com/assets/11725595/13110977/19401400-d57b-11e5-8142-a33063807434.png)

It is possible to use in-built helpers in handlebars that would solve this problem. Similar to in JS you would say:
```
if (something) {
  console.log(something)
}
```
