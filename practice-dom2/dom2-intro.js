function changeDom() {

  let y = document.createElement('li');

  y.textContent = 'ヨット';

  let kazoeuta = document.querySelector('ul#kazoeuta');

  kazoeuta.insertAdjacentElement('beforeend', y);



  let i = document.querySelector('img#bluemoon');

  i.setAttribute(
    'src',
    'https://www.nasa.gov/wp-content/uploads/2023/03/187_1003705_americas_dxm.png'
  );



  let a = document.createElement('a');

  a.textContent = '拓殖大学';

  a.setAttribute(
    'href',
    'https://www.takushoku-u.ac.jp'
  );

  let p = document.querySelector('p#takudai');

  p.insertAdjacentElement('beforeend', a);



  let mochi = document.querySelector('#mochi');

  mochi.remove();



  let u = document.createElement('ul');


  let l = document.createElement('li');

  l.textContent = '赤';

  u.insertAdjacentElement('beforeend', l);



  l = document.createElement('li');

  l.textContent = '緑';

  u.insertAdjacentElement('beforeend', l);



  l = document.createElement('li');

  l.textContent = '青';

  u.insertAdjacentElement('beforeend', l);



  let primary = document.querySelector('p#primary');

  primary.insertAdjacentElement('afterend', u);
}


let b = document.querySelector('button#henkou');

b.addEventListener('click', changeDom);