const form = document.querySelector('.signup-form');
const username = document.querySelector('#username');
console.log('hello')
// we will attach an event to the form and not only to the submit button, so it will react if the person hits enter as well as click the button
form.addEventListener('submit', e => {

e.preventDefault();
console.log(username.value)
})

// we will grab the event parameter e beacuse we will use it later
// the default option of submit is to refresh the page, we will prevent that default action
