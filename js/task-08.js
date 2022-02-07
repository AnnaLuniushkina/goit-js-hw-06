const formEl = document.querySelector(".login-form");
console.log(formEl);

formEl.addEventListener('submit', handleSubmit);



function handleSubmit(event) {
    event.preventDefault();
    const {
    elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    alert("Увага! Усі поля повинні бути заповнені.");
    } 
    const objValue = { email: email.value, password: password.value };
    console.log(objValue);
    event.currentTarget.reset();
}