const arr = [1, 2, 3, 4, 5];
const k = 3;

let start = 0;
let end = start + k;
let result = [];

let iniSum = arr.slice(start, end + 1).reduce((total, val) => total + val, 0);
result.push(iniSum);
start = start + 1;
end = end + 1;
for (start; end <  arr.length; end++) {
  result.push(result[result.length - 1] - arr[start - 1] + arr[end]);
  start = start + 1;
}
console.log(result);