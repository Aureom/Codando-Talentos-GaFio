let carrouselCurrent = 1;

setInterval(() => {
    if(carrouselCurrent === 4) carrouselCurrent = 1;

    document.getElementById("carrousel-image").src = `assets/fiocruz-${carrouselCurrent}.jpg`

    carrouselCurrent++;
}, 5000);

/*function verifyLogin() {
    let emailInput = document.getElementById("email");
    let emailStatus = document.getElementById("email-status");
    let passwordInput = document.getElementById("password");
    let passwordStatus = document.getElementById("password-status");

    validateEmail(emailInput.value) ? emailStatus.textContent = "valido" : emailStatus.textContent = "n"
}*/

const submitButton = document.getElementById("form-button")
const emailInput = document.getElementById("email");
const emailStatus = document.getElementById("email-status");
emailInput.addEventListener('input', () => {
    if(validateEmail(emailInput.value)) {
        emailStatus.textContent = "Válido.";
        emailStatus.classList.add("valid-status");
        if(passwordStatus.classList.contains("valid-status")){
            submitButton.disabled = false;
        }
    }else{
        emailStatus.textContent = "Preencha este campo.";
        emailStatus.classList.remove("valid-status");
        submitButton.disabled = true;
    }
});

const passwordInput = document.getElementById("password");
const passwordStatus = document.getElementById("password-status");
passwordInput.addEventListener('input', () => {
    if(passwordInput.value.length > 8) {
        passwordStatus.textContent = "Válido.";
        passwordStatus.classList.add("valid-status");
        if(emailStatus.classList.contains("valid-status")){
            submitButton.disabled = false;
        }
    }else{
        passwordStatus.textContent = "Preencha este campo.";
        passwordStatus.classList.remove("valid-status");
        submitButton.disabled = true;
    }
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
}
















