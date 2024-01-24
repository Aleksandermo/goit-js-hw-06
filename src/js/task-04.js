
const counterValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const handleClick = (action) => {
    let value = parseInt(counterValue.textContent);
    
    if (action === "decrement") {
        value -= 1;
    } else if (action === "increment") {
        value += 1;
    }

    counterValue.textContent = value;
};

decrementButton.addEventListener("click", () => handleClick("decrement"));
incrementButton.addEventListener("click", () => handleClick("increment"));

