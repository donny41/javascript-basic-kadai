const btn = document.getElementById('btn');
const text01 = document.getElementById('text');

btn.addEventListener('click', () =>{
    setTimeout(() => {
        text01.textContent = "ボタンをクリックしました";            
    }, 2000);

})