// const maxPairs = array => {
//   let sum = 0;

//   array.sort((a, b) => a - b);

//   for (let i = 0; i < array.length; i += 2) {
//     sum += array[i];
//   }

//   return sum;
// };

// const array1 = [1, 3, 2, 4]; // 4
// const array2 = [2, 4, 2, 8, 4, 3]; // 2

// console.log(maxPairs(array1));
// console.log(maxPairs(array2));

// const nextLetter = (letters, target) => {
//   const merged = [...letters, target];

//   const sorted = [
//     ...new Set(merged.sort((a, b) => a.charCodeAt() - b.charCodeAt())),
//   ];

//   const index = sorted.indexOf(target);
//   if (index === sorted.length - 1) {
//     return sorted[0];
//   }
//   return sorted[index + 1];
// };

const nextLetter = (letters, target) => {
  const map = new Map();

  letters.forEach(letter => {
    map.set(letter.charCodeAt() - 97, letter);
  });

  const targetCode = target.charCodeAt() - 97;

  let index = targetCode;
  while (index < 25) {
    index = targetCode + 1;
    if (map.has(index)) {
      return map.get(index);
    }
    index += 1;
  }

  return map.get(Math.min(...map.keys()));
};

const letters1 = ['a', 'b', 'c'];
const target1 = 'b';

const letters2 = ['r', 'y'];
const target2 = 'z';

console.log(nextLetter(letters1, target1)); // c
console.log(nextLetter(letters2, target2)); // r
