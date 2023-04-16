let arr = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
];
let arr2 = [[], [], []];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    arr2[i][j] = arr[j][i];
  }
}
document.write(arr2 + "&nbsp;&nbsp;&nbsp;");
console.log(arr2);
