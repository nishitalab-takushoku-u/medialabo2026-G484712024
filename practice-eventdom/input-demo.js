let b = document.querySelector('#print');

b.addEventListener('click', greeting);

function greeting(){

  let i = document.querySelector('#shimei');

  let shimei = i.value;


  let aisatsu = 'こんにちは，' + shimei + 'さん';

  let p = document.querySelector('#message');

  p.textContent = aisatsu;
}