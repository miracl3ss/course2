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

let btn_log = document.getElementById("btn_log");
let btn_reg = document.getElementById("btn_reg");

function registerUser(){
	email = document.getElementById('signUpEmail').value;
    password = document.getElementById('signUpPassword').value;
    confPassword = document.getElementById('signUpConfirmPassword').value;
    if(password == confPassword) {
        localStorage.setItem('newUserEmail', email);
        localStorage.setItem('newUserPassword', password);
    }
}//registerUser

function loginUser(){
    email = document.getElementById('signInEmail').value;
    password = document.getElementById('signInPassword').value;
	const registeredUser     = localStorage.getItem("newUserEmail");
	const registeredPassword = localStorage.getItem("newUserPassword");

	const validUser     = email == registeredUser;
	const validPassword = password == registeredPassword;

	if(validUser && validPassword){
        console.log('u did it');
		document.location.replace('pages/recEmotion.html');
	}
    else if(!validUser)     return `email ${email} has not been registered. `;
	else if(!validPassword) return `Incorrect password for email ${email}`;
}//loginUser

btn_log.addEventListener('click', () => loginUser());
btn_reg.addEventListener('click', () => registerUser());