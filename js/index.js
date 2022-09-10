let root = document.querySelector('#root');

let h = document.createElement('h3');
h.textContent = "Welcome";

root.append(h);

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
