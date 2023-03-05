"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"]
    .get("https://jsonplaceholder.typicode.com/users/1")
    .then(function (res) {
    console.log("WOO!!!");
    printUser(res.data);
})["catch"](function (e) {
    console.log("ERROR!", e);
});
axios_1["default"]
    .get("https://jsonplaceholder.typicode.com/users")
    .then(function (res) {
    console.log("WOO!!!");
    res.data.forEach(printUser);
})["catch"](function (e) {
    console.log("ERROR!", e);
});
function printUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}
