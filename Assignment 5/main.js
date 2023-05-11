function findPair(arr, num) {
  let pair = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let check = arr[i] + arr[j];
      if (check == num) {
        pair.push({ [arr[i]]: arr[j] });
      }
    }
  }
  return pair;
}
let ans = findPair([1, 2, 3, 4], 5);
console.log(ans);

function reverseString(str) {
  let len = str.length;
  let newstr = "";
  for (let i = len - 1; i >= 0; i--) {
    newstr += str[i];
  }
  return newstr;
}
console.log(reverseString("hello"));

function sumLargest(arr) {
  let max1 = 0;
  let max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
  }
  return max1 + max2;
}
console.log(sumLargest([1, 2, 3, 4]));

function filterStrings(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(filterStrings(["hi", "hello", "hey", "howdy"]));

function filterEven(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));

function pluck(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].name);
  }
  return newarr;
}
console.log(
  pluck([
    { name: "usman", age: 23 },
    { name: "Ali", age: 25 },
  ])
);

function isPalindrome(str) {
  let len = str.length;
  let newstr = "";
  for (let i = len - 1; i >= 0; i--) {
    newstr += str[i];
  }
  if (str == newstr) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isPalindrome("malam");

function mostFrequent(str) {
  let obj = {};
  let repeat = "";
  for (let i = 0; i < str.length; i++) {
    let check = str[i];
    if (!obj[check]) {
      obj[check] = 0;
    }
    obj[check]++;
    if (repeat == "" || obj[check] > obj[repeat]) {
      repeat = check;
    }
  }
  return repeat;
}
console.log(mostFrequent("hello"));

function stringLengths(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr.push(arr[i].length);
  }
  return newarr;
}
console.log(stringLengths(["hi", "hello", "hey", "howdy"]));

function firstGreater(arr) {
  let num = 0;
  for (let i = 0; i < 10; i++) {
    if (arr[i] > 10) {
      num = i;
      i = arr[i];
    }
  }
  return num;
}
console.log(firstGreater([1, 5, 15, 20]));
