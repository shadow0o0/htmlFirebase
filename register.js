const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
e.preventDefault();

const name = registerForm['name'].value;
const email = registerForm['email'].value;
const password = registerForm['password'].value;

firebase.auth().createUserWithEmailAndPassword(email, password)
.then((userCredential) => {
const user = userCredential.user;
user.updateProfile({
displayName: name
}).then(() => {
window.location.replace('index.html');
}).catch((error) => {
alert(error.message);
});
})
.catch((error) => {
alert(error.message);
});
});