import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollect3";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection = new TodoCollection("Adam", todos);
let collection2 = new TodoCollection("Adam's Completed Tasks Deleted", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
collection.getTodoItems(true).forEach(item => item.printDetails())
console.log(`${collection2.userName}'s Todo List`);
collection2.removeComplete();
collection2.getTodoItems(true).forEach(item => item.printDetails())
