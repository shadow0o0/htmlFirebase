const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
e.preventDefault();

const email = loginForm['email'].value;
const password = loginForm['password'].value;

firebase.auth().signInWithEmailAndPassword(email, password)
.then(() => {
window.location.replace('index.html');
})
.catch((error) => {
alert(error.message);
});
});