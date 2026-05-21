function keisan() {
    let h = document.querySelector('input[name="left"]'); 

    k=h.value 
    let n = Number(k);
    let m = document.querySelector('input[name="right"]');
    kk = m.value 
    let nn = Number(kk)
    kotae = n+nn; 
    p = document.querySelector('span#answer');
    p.textContent = kotae 

}

let b = document.querySelector('button#calc');
 b.addEventListener('click', keisan);