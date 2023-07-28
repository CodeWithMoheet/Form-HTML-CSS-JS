const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const answer = document.getElementById('answer');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    // errorDisplay.innerText = 'No error';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const answerValue = answer.value.trim();
    
    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }
    if (username2Value === '') {
        setError(username2, 'Username2 is required');
    } else {
        setSuccess(username2);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }
    if (phoneValue === '') {
        setError(phone, 'phonenumber is required');
    } else if (phoneValue.length < 10) {
        setError(phone, 'ph must be atleat 10 char.')

    } else {
        setSuccess(phone);
    }
    if (passwordValue === '') {
        setError(password, 'password is required');
    } else if (phoneValue.length < 10) {
        setError(password, 'password must be atleat 8 char.')

    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'please confirm  your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "password doesn't match")

    } else {
        setSuccess(password2);
    }
    if (answerValue === '') {
        setError(answer, 'answer is required');
    } else {
        setSuccess(answer);
    }
};