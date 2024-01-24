const categories = document.querySelectorAll('#categories .item');

// Policzenie i wypisanie liczby kategorii
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

// Iteracja przez każdy element li.item
categories.forEach(category => {

    // Znajdź nagłówek h2 w danym elemencie li.item
    const categoryName = category.querySelector(`h2`).textContent;

    // Znajdź wszystkie elementy li w obrębie danego li.item
    const itemsInCategory = category.querySelectorAll(`ul li`);

// Policzenie liczby elementów w danej kategorii
    const numberOfItemsInCategory = itemsInCategory.length;

    // Wypisanie nagłówka i liczby elementów w kategorii
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfItemsInCategory}`);
});
