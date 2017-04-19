# Handlebars Morning Challenge

This is a morning challenge that will help you learn the basics of [Handlebars.js](http://handlebarsjs.com/) (a great templating engine with lots of in-built functionality).

### Getting Started

1. `git clone https://github.com/Jbarget/handlebars-morning-challenge.git`
2. `cd handlebars-morning-challenge`
3. `npm i`
4. `npm test`
5. 🌟🌟 and star the repo if you fancy 🌟🌟

### Setting the Scene
**Templating Engine ?**

Lets say you've got an app that sends your users an email with lots of information that the user has inputed. Eg. an appointment booking form (time, date of appointment, name, location, all that stuff...)

A *templating engine* can come to the rescue! It allows you to insert variables into the html output by compiling the information that has been inputed and the original html. Google away and you'll see what I mean!

![templating engine explanation](https://www.codeproject.com/KB/aspnet/JavaScript-View-Engine/templating-engine.png)

### Instructions

**The aim of the challenge is to make the tests pass by adding your code where appropriate.** (you will mainly need to edit code in `handlebars/message.hbs` and for registering the helper in test 3 in `handlebars/handlebars.js`). It might help to use `console.log` to show you the output in your terminal.

Good Luck! And remember Google is your best friend!

<br>
<br>

**NB.** I know the code isn't very *dry* but this is just for demonstration purposes!

**Stretch goal:** If you finish the original 3 tests you might have noticed that with each of the tests Handlebars still compiles values that are undefined.
If you havent already, add a `console.log(html)` between line 20/21 in `handlebars.js`.

eg. Test 2 still leaves a gap for the "title" and "post" in test 1 and the email in test 3.

![](https://cloud.githubusercontent.com/assets/11725595/13110977/19401400-d57b-11e5-8142-a33063807434.png)

It is possible to use in-built helpers in handlebars that would solve this problem. Similar to in JS you would say:
```
if (something) {
  console.log(something)
}
```
