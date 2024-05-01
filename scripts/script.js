// BLOB
let blob = document.getElementById("blob");
let textsWelcome = document.querySelectorAll(".textOnWelcome");
let signUpForm = document.querySelector("#main");
let card = document.getElementById('card');
let swapCard = document.getElementById('formToSignUp');


blob.addEventListener('click', () => {
    textsWelcome.forEach(element => {
        element.classList.add('fade-out')
    });
    signUpForm.setAttribute('style', 'z-index: 2');
    blob.setAttribute('style', 'width: 35vw; height: 60vh; animation: none; border-radius: 50px;');
    blob.classList.add('no-pseudo');
    let active = document.querySelectorAll('.fade-in');
    active.forEach((el) => {
        el.classList.add('active') 
    });
});
swapCard.addEventListener('click', () => {
    if(card.classList.contains('container') !== false){
        card.classList.remove('container');
        swapCard.innerText = 'first time';
        swapCard.classList.remove('backTitle');
        swapCard.setAttribute('style', 'transform: rotateY(0)');
        blob.setAttribute('style', 'width: 35vw; height: 60vh; animation: none; border-radius: 50px;');
    } else {
        swapCard.innerText = 'already registered';
        swapCard.setAttribute('style', 'transform: rotateY(180deg)');
        card.classList.add('container');
        swapCard.classList.add('backTitle');
        blob.setAttribute('style', 'width: 35vw; height: 70vh; animation: none; border-radius: 50px;');
    };
})



