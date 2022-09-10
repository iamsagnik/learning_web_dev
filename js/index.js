let root = document.querySelector('#root');

let box = document.createElement('input');
root.append(box);

// function to add element in page
let addElement = (el, cl='', tx='') => {
  let e = document.createElement(el);
  if (cl) {
    e.classList.add(cl);
  }

  if (tx) {
   e.textContent = tx;
  }
  // root.append(e);
  return e;
}

let showResult = (r) => {
  let e = document.querySelector('.result');
  if (e) {
    e.remove();
  }

  let d = addElement('div', 'result');
  let p1 = addElement('p', '', 'Result');
  let p2 = addElement('p', 'digits', r);
  d.append(p1);
  d.append(p2);
  root.append(d);
}

// let m = addElement('button', 'button-blue', 'Square');
root.append(addElement('button', 'button-blue', 'Square'));

let n = addElement('button', 'button-orange', 'Sqr Root');
root.append(n);

// root.append(m);



let btns = document.querySelectorAll('button');
console.log(btns);

btns[0].addEventListener('click', () => {
  let v = parseInt(document.querySelector('input').value);
  let result = v*v;
  showResult(result);
})

btns[1].addEventListener('click', () => {
  let v = parseInt(document.querySelector('input').value);
  let result = Math.pow(v, 0.5);
  showResult(result);
})
// fetch and api


// let h = document.createElement('h3');
// h.textContent = "Welcome";
//
// root.append(h);

// DRY
// Don't Repeat Yourself

let fruits = [
  'mango',
  'apple',
  'banana',
  'grapes',
  'orange'
]

//
// let u = document.createElement('ul');
//
// for (let n = 0; n<fruits.length; n++) {
//   let l = document.createElement('li');
//   l.textContent = fruits[n];
//   u.append(l);
// }

// root.append(u);
