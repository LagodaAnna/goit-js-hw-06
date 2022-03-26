const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

function createListItemEl(options) {
  return options.map(option => {
    const element = document.createElement('li');
    element.textContent = option;
    element.classList.add('item');

    return element;
  });
}

function addToUlToDOM(arrayOfElements, idSelector) {
  document.querySelector(idSelector).append(...arrayOfElements);
}

const listItemEl = createListItemEl(ingredients);
addToUlToDOM(listItemEl, '#ingredients');



// function createItemsEl(options, itemName) {
//   return options.map(() => document.createElement(itemName));
// }

// function createItemsElWithContext(options, itemName, callback) {
//   return callback(options, itemName).map((element, index) => {
//     element.textContent = options[index];
//     return element;
//   });
// }

// function addClass(nameOfClass, options) {
//   return options.map(element => {
//     element.classList.add(nameOfClass);
//     return element;
//   });
// }

// function addToDOM(options, idSelector) {
//   document.querySelector(idSelector).append(...options);
// }

// const listItemEl = createItemsElWithContext(ingredients, 'li', createItemsEl);
// addClass('item', listItemEl);
// addToDOM(listItemEl, '#ingredients');
