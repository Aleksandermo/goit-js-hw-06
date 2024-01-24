const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", () => {

    const inputValue = textInput.value.trim();
    const requiredLength = parseInt(textInput.getAttribute('data-length'));


if (inputValue.length === requiredLength) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
} else {
    textInput.classList.remove('valid');
    textInput.classList.add('invalid');
}
});