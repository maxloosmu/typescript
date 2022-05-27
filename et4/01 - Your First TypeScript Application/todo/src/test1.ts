import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollect1";

let todos: TodoItem[] = [
  new TodoItem(1, "Buy Flowers"), new TodoItem(2, "Get Shoes"),
  new TodoItem(3, "Collect Tickets"), new TodoItem(4, "Call Joe", true)];

let collection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));

let nextId = 1;
todoItem = collection.getTodoById(nextId);
while (todoItem) {
  todoItem.printDetails();
  nextId++;
  todoItem = collection.getTodoById(nextId);
}


