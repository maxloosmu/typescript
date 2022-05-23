// Command Line Commands
// tsc test.ts
// node test.js
var daysInWeek = 7;
var person = "Ada Lovelace";
var isRaining = false;
var today = new Date();
var months = ["January", "February", "March"];
var notDefined = undefined;
var nothing = null;
var add = function (x, y) { return x + y; };
var calculator = {
    add: add, adds: adds
};
function adds(x) {
    x = x + x;
    if (x < 129) {
        return adds(x);
    }
    return x;
}
var everything = [daysInWeek, person, isRaining, today, months, notDefined, nothing, add, calculator, adds];
for (var _i = 0, everything_1 = everything; _i < everything_1.length; _i++) {
    var something = everything_1[_i];
    var type = typeof something;
    console.log(something, type);
}
console.log(adds(1));
