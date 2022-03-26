const listItemsByClassEl = document.querySelectorAll('.item');

function showNumberOfCategories(arrayOfItem) {
  console.log(`Number of categories: ${arrayOfItem.length}`);
}

function showInfoAboutCategories(arrayOfItem) {
  const array = Array.from(arrayOfItem);
  array.map(item => {
    console.log(
      `Category: ${item.querySelector('h2').textContent} \nElements: ${
        item.querySelectorAll('li').length
      }`,
    );
  });
}

showNumberOfCategories(listItemsByClassEl);
showInfoAboutCategories(listItemsByClassEl);
