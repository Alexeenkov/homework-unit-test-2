export default function sortByHealth(array) {
  return array.sort((a, b) => b.health - a.health);
}

// Первая реализация, пока не узнал про метод .sort() у массивов )))
// Решил оставить на память, пусть будет )

// export default function quickSortByHealth(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   const less = [];
//   const greater = [];
//   const lastElement = array.pop();
//   const pivot = lastElement.health;

//   for (const i of array) {
//     if (i.health <= pivot) {
//       less.push(i);
//     } else {
//       greater.push(i);
//     }
//   }

//   return quickSortByHealth(greater).concat(lastElement, quickSortByHealth(less));
// }