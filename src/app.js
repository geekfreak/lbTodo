
let todos = [];

/**
 * add todo to list, duplicates will throw an error.
 * @param {string} label the todo item label/description
 */
const addTodo = label => (todos.includes(label) ? alert('exists') : label && todos.push(label));

/**
 * remove todo from list
 * @param  {string} label the todo item label/description
 */
const rmTodo = label => (todos.includes(label) ? todos = todos.filter(el => el !== label) : alert('not found'));

/**
 * convert a given label in the html string needed for the todo item
 * @param  {string} label the todo item label/description
 * @return {string}       a DOM ready string
 */
const getTodoByLabel = label => `<a href="#" class="item"><button class="btndelete red basic ui button">X</button><span class='todolabel'>${label}</span></a>`;

/**
 * get list of DOM ready todos
 * @return {string} todos
 */
const getTodos = () => todos.map(getTodoByLabel).join('');

/**
 * saveTodos will persist the todos at the server
 */
const saveTodos = () => {
  // get getSaveUrl response from endpoint.
  // async / promises;
  fetch(getSaveURL()) // externalize
  .then((response) => {
    return response.json();
  })
  .catch(function (err) {
  // Error :(
  });
};

/**
 * getSaveURL convertes the stored todos to a format able to be sent to the
 * save endpoint on the server.
 *
 * @return {[type]} [description]
 */
const getSaveURL = () => {
  const encodedList = todos.join('%2C+').replace(/ /g, '+');
  return `http://localhost:3000/save?data=${encodedList}`;
};
