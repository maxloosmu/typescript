"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollect3_1 = require("./todoCollect3");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"), new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"), new todoItem_1.TodoItem(4, "Call Joe", true)
];
let collection = new todoCollect3_1.TodoCollection("Adam", todos);
let collection2 = new todoCollect3_1.TodoCollection("Adam's Completed Tasks Deleted", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
collection.getTodoItems(true).forEach(item => item.printDetails());
console.log(`${collection2.userName}'s Todo List`);
collection2.removeComplete();
collection2.getTodoItems(true).forEach(item => item.printDetails());
