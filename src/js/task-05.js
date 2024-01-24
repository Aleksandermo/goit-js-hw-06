const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
nameInput.addEventListener("input", () => {
    if (nameInput.value.trim() === "") {
        nameOutput.textContent = "Anonymous";
    } else {
        nameOutput.textContent = nameInput.value.trim();
    }
});