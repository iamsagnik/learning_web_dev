let root = document.querySelector('#root');
console.log(root);

let box = document.createElement('input');
root.append(box);

// function to add element in page
let addElement = (el, cl, tx) => {
  let e = document.createElement(el);
  e.classList.add(cl);
  e.textContent = tx;
  root.append(e);
}

addElement('button', 'button-blue', 'Square');
addElement('button', 'button-orange', 'Sqr Root');

// fetch and api


let h = document.createElement('h3');
h.textContent = "Welcome";

root.append(h);

// DRY
// Don't Repeat Yourself

let fruits = [
  'mango',
  'apple',
  'banana',
  'grapes',
  'orange'
]


let u = document.createElement('ul');

for (let n = 0; n<fruits.length; n++) {
  let l = document.createElement('li');
  l.textContent = fruits[n];
  u.append(l);
}

root.append(u);
