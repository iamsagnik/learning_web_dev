let a = 5;
let b = 3.7;

const pi = 3.1428;
const c = 2.9782 * (10**8);

let userName = 'anupam';

// arrays
let cars = [ 'punch', 'alto', 'creta', 'tavera']

for (let i=0; i<cars.length; i++) {
  let u = document.querySelector('#myUl');
  let l = document.createElement('li');
  l.innerText = cars[i].toUpperCase();
  u.append(l);
}

// Objects 
// this syntax is also known as JSON
// JSON stands for Javascript Object Notation
// it is very popular among developers 
// mostly used for data transfer
const user_1 = {
  // key : value
  "name": "Sagnik",
  "age": 19,
  "cars_owning": cars
}
// in python it is called Dictionary
b = 3.8;
console.log(b);


let el = document.querySelector("body");
 el.children[3].remove();
 el.children[3].remove();
 console.log(el.children[3]);
