## LunchBadger Interview Assignment
### Todo App Project

#### installation

```
git clone git@github.com:geekfreak/lbTodo.git
cd lbTodo
npm install
npm start
```

#### Create a todo list web application
- All project code should be in a Github repo and shared with us once complete

- Use Semantic-UI for the visual interface http://semantic-ui.com/

- Have an input field to add a new todo item
  - DIsplay an alert if a duplicate todo item is added


- Have a list of created todo items

- Each todo item consists of a label and a delete button

- The delete button removes the todo item from the list

- Have a “save” button that performs a call out to a server with a parameter being the label of all todo items
separated by commas.
  - For example, if there’s two todo items: (“sell inventory” and “roll for initiative”), the server request
call will be “sell inventory, roll initiative” with the link:
http://localhost/save?data=sell+inventory%2C+roll+initiative


- Optional: be able to modify a todo item (versus deleting and recreating the task)
- Optional: Use the YolkJS framework https://github.com/garbles/yolk

#### Server for todo app
- Set up an AWS EC2 instance

- Use Node with Express to listen for a save request:e.g. http://localhost/save?data=sell+inventory%2C+roll+initiative


- The “/save” handler returns a JSON response where each label is an object key that has a boolean value of
true:
```
  {
  “saved”: {
    “sell inventory”: true,
    “roll initiative”: true
    }
  }
```

- Write unit tests for client and server
- Write a benchmark that adds 1000 items and then deletes all items

- Optional: save the list to a database (e.g. Redis) and have a “/load” server endpoint to restore a saved list

### Documentation
- Write a project overview description (1 -2 paragraphs)
- Write a short news article (roughly 3 paragraphs) that advertises the project
- Write code docs to allow other programmers understand the functions
  - Optionally use https://esdoc.org
- Write an app testing checklist for QA
- Optional: create a Trello board to track your own progress
- Optional: use Promises or RxJS (https://github.com/Reactive-Extensions/RxJS)
