const chai = require('chai');
const assert = require('chai').assert;

const fs = require('fs');
const vm = require('vm');

vm.runInThisContext(fs.readFileSync(`${__dirname}/../src/app.js`));

todos = [];

const items = [
  'one', 'deux', 'tres', 'vier', 'cinc', 'seis', 'nomwe',
];

describe('Mocha is working', () => {
  it('this should always pass', () => assert.equal(1, 1));
});

describe('app.js is loaded', () => {
  it('todos is empty', () => assert.lengthOf(todos, 0, 'no items found'));
});

describe('adding todos', () => {
  items.forEach((item, index) => {
    it(`todos - ${item}`, () => {
      addTodo(item);
      assert.lengthOf(todos, index + 1, `${index} found`);
    });
  });
});

describe('get todo', () => {
  items.forEach((item, index) => {
    it(`todos - ${item}`, () => {
      const todo = getTodoByLabel(item);
      const expected = `<a href="#" class="item"><button class="btndelete red basic ui button">X</button><span class='todolabel'>${item}</span></a>`;
      assert.equal(todo, expected, `${item} matched`);
    });
  });
});

describe('removing todos', () => {
  items.forEach((item, index) => {
    it(`todos - ${item}`, () => {
      rmTodo(item);
      assert.lengthOf(todos, items.length - index - 1, `${index} found`);
    });
  });
});

describe('get removed todo', () => {
  items.forEach((item, index) => {
    it(`todos - ${item}`, () => {
      assert.isFalse(todos.includes(item), `${item} missing`);
    });
  });
});
