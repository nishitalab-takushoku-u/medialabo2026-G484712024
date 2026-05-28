// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
for(let s of data.results.shop){

        console.log("店舗名:", s.name);
        console.log("ジャンル:", s.genre.name);
        console.log("住所:", s.address);
        console.log("キャッチコピー:", s.catch);
        console.log("アクセス:", s.access);
        console.log("営業時間:", s.open);
        console.log("予算:", s.budget.name);
}

}


// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let old = document.querySelector('#result');
  if (old !== null) {
    old.remove();
  }

  let div = document.createElement('div');
  div.setAttribute('id', 'result');

  let body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', div);

  for(let shop of data.results.shop){

    let box = document.createElement('div');
    box.setAttribute('class', 'shop-box');
    div.insertAdjacentElement('beforeend', box);

    let h2 = document.createElement('h2');
    h2.textContent = shop.name;
    box.insertAdjacentElement('beforeend', h2);

    let tag1 = document.createElement('span');
    tag1.setAttribute('class', 'tag');
    tag1.textContent = shop.genre.name;
    box.insertAdjacentElement('beforeend', tag1);

    let tag2 = document.createElement('span');
    tag2.setAttribute('class', 'tag');
    tag2.textContent = shop.budget.name;
    box.insertAdjacentElement('beforeend', tag2);

    let p1 = document.createElement('p');
    p1.textContent = "住所: " + shop.address;
    box.insertAdjacentElement('beforeend', p1);

    let p2 = document.createElement('p');
    p2.textContent = "キャッチコピー: " + shop.catch;
    box.insertAdjacentElement('beforeend', p2);

    let p3 = document.createElement('p');
    p3.textContent = "アクセス: " + shop.access;
    box.insertAdjacentElement('beforeend', p3);

    let p4 = document.createElement('p');
    p4.textContent = "営業時間: " + shop.open;
    box.insertAdjacentElement('beforeend', p4);

  }
}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#kai');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

	let genre = document.querySelector('#yosou').value;

	let url =
	'https://www.nishita-lab.org/web-contents/jsons/hotpepper/' +
	genre +
	'.json';

	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

  let data = resp.data;

  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  printDom(data);
}


// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
