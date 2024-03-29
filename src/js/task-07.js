const sizeControl = document.querySelector('#font-size-control');
let textElement = document.getElementById('text');

textElement.style.fontSize = `${sizeControl.value}px`

sizeControl.addEventListener("input", () => {
    
    const min = parseInt(sizeControl.getAttribute('min'));
    const max = parseInt(sizeControl.getAttribute('max'));
    const fontValue = parseInt(sizeControl.value);
    
    textElement.style.fontSize = fontValue + 'px';
});

