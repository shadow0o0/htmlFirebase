const logoutButton = document.querySelector('#logout');
logoutButton.addEventListener('click', () => {
firebase.auth().signOut().then(() => {
window.location.replace('login.html');
});
});

firebase.auth().onAuthStateChanged((user) => {
if (!user) {
window.location.replace('login.html');
}
});