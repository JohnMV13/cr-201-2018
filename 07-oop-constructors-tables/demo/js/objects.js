'use strict';

var car = {
  color: 'Blue',
  make: 'Tesla',
  model: 'Model 3',
  year: 2018,
  vin: 'ALKF5342ASkljASF31',

  honk: function() {
    console.log('honk!');
  },

  yearMakeModel: function() {
    return car.year + ' ' + car.make + ' ' + car.model;
  }
};

console.log(car);
car.honk();
console.log(car.yearMakeModel());

var minivan = {
  color: 'Tan',
  make: 'Honda',
  model: 'Odyssey',
  year: 2015,
  vin: 'who cares?',
  owners: ['Keith', 'Samantha'],
  serviceRecord: [],

  honk: function() {
    console.log(this.yearMakeModel() + ' says honk!');
  },

  yearMakeModel: function() {
    return this.year + ' ' + this.make + ' ' + this.model;
  }
};

minivan.vin = '1234ABCD';
minivan.owners.push('Jess');

console.log(minivan);
minivan.honk();
console.log(minivan.yearMakeModel());

function Vehicle(make, model, year) {
  if (typeof this === 'undefined') { console.error('Vehicle is a constructor! Use new!'); return; }
  if (arguments.length < 3) { console.error('Make, Model and Year are required!'); }

  this.make = make;
  this.model = model;
  this.year = year;

  this.owners = [];
  this.serviceRecord = [];

  this.honk = function() {
    console.log(this.yearMakeModel() + ' says honk!');
  };

  this.yearMakeModel = function() {
    return this.year + ' ' + this.make + ' ' + this.model;
  };
}


var leaf = new Vehicle('Nissan', 'Leaf', 2018);
console.log(leaf);
leaf.honk();
console.log(leaf.yearMakeModel());

// Have to use new!
// Vehicle('THis', 'won\'t', 'work');
