'use strict';

const inherits = require('inherits');
const lookup = require('../lib/viewsize').lookup;

function Father() {
  this.lastname = 'Tung';
}

Father.prototype.name = function() {
  return this.firstname + this.lastname;
};

inherits(Child, Father);
function Child() {
  Father.call(this);
  this.firstname = 'Ben'
}

var c = new Child();

console.log(c.name());

console.log(typeof lookup(c, 'fdfdfdfdname'));

console.log(lookup(c, 'name').call(c));
