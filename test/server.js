const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { assert, should } = require('chai');

const items = [
  'one', 'deux', 'tres', 'vier', 'cinc', 'seis', 'nomwe',
];

chai.use(chaiHttp);

describe('server test', () => {
  it('should load page on GET', (done) => {
    chai
    .request(server)
    .get('/')
    .end((err, res) => {
      assert.equal(res.status, 200, ' expect 200');
      done();
    });
  });
  it('check todos exist', (done) => {
    chai
    .request(server)
    .get('/load')
    .end((err, res) => {
      assert.equal(res.status, 200, ' expect 200');
      assert.isFalse(res.body.includes('zero'), 'searched for "zero"');
      assert.isTrue(res.body.includes('one'), 'searched for "one"');
      assert.isTrue(res.body.includes('two'), 'searched for "two"');
      assert.isTrue(res.body.includes('three'), 'searched for "three"');
      assert.isTrue(res.body.includes('four'), 'searched for "four"');
      done();
    });
  });
  it('check save', (done) => {
    chai
    .request(server)
    .get('/save?data=newItem')
    .end((err, res) => {
      assert.equal(res.status, 200, ' expect 200');
      assert.isTrue(res.body.saved.newItem, 'searched for "newItem"');
      done();
    });
  });
  it('check added item is stored', (done) => {
    chai
    .request(server)
    .get('/load')
    .end((err, res) => {
      assert.equal(res.status, 200, ' expect 200');
      assert.isTrue(res.body.includes('newItem'), 'searched for "newItem"');
      done();
    });
  });
});
