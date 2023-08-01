const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

for (const item of categoryItems) {
  const categoryName = item.firstElementChild.textContent;
  const elementsCount = item.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
}
