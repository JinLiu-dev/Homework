//1
function reverseNumber(num) {
  let ans = 0;
  while (num > 0) {
    ans *= 10;
    ans += num % 10;
    num /= 10;
    num = Math.floor(num);
  }
  return ans;
}
console.log(reverseNum(32243));
//2
function palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("nurses"));
//3
function combination(str) {
  let combinations = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      combinations.push(str.slice(i, j));
    }
  }
  return combinations;
}
console.log(combination("dog"));
// 4
function alphabeticalOrder(str) {
  return str.split("").sort().join("");
}
console.log(alphabeticalOrder("webmaster"));
//5
function inUppercase(str) {
  const s = str.split(" ");

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i][0].toUpperCase() + s[i].substr(1);
  }

  s.join(" ");
  return s;
}
console.log(capitalFirst("the quick brown fox"));
//6
function longestWord(str) {
  let words = str.split(" ");
  return words.reduce((champ, contender) => {
    contender.length > champ.length ? contender : champ;
  });
}
console.log(longestWord("Web Development Tutorial"));
//7
function countVowel(str1) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let x = 0; x < str1.length; x++) {
    if (vowels.indexOf(str1[x]) !== -1) {
      count += 1;
    }
  }
  return count;
}
console.log(countVowel("the quick brown fox"));
//8
function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}
console.log(isPrime(64));
//9
function getType(a) {
  return typeof a;
}
console.log(true);
//10
function identityMatrix(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    for (let j = 0; j < n; j++) {
      if (i == j) {
        result[i][j] = 1;
      } else {
        result[i][j] = 0;
      }
    }
  }
  return result;
}
console.log(identityMatrix(3));
//11
function greatestAndLowest2nd(arr) {
  arr.sort();
  return [arr[1], arr[arr.length - 2]];
}
console.log(greatestAndLowest2nd([1, 2, 3, 4, 5]));
//12
function isPerfectNumber(num) {
  let sum = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      sum += i + Math.floor(num / i);
    }
  }
  if (sum == 2 * num) {
    return true;
  }
  return false;
}
console.log(isPerfectNumber(6));
//13
function getFactors(num) {
  let result = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      result.push(i);
    }
  }
  let n = result.length;
  for (let i = n - 1; i >= 0; i--) {
    if (num / result[i] != result[i]) result.push(num / result[i]);
  }
  return result;
}
console.log(getFactors(6));
//14
function amountTocoins(num, arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (num >= arr[i]) {
      num = num - arr[i];
      ans.push(arr[i]);
      i--;
    }
  }
  return ans;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
//15
function power(b, y) {
  if (n == 0) return 1;
  else if (n % 2 == 0)
    return power(b, parseInt(n / 2, 10)) * power(b, parseInt(n / 2, 10));
  else return b * power(b, parseInt(n / 2, 10)) * power(b, parseInt(n / 2, 10));
}
console.log(power(3, 4));
//16
function uniqueStr(str) {
  let set = new Set(str);
  return [...set].join("");
}
console.log(uniqueStr("thequickbrownfoxjumpsoverthelazydog"));
//17
function occurence(str) {
  let freq = {};
  str.split("").forEach((i) => {
    if (!freq[i]) freq[i] = 0;
    freq[i] += 1;
  });
  return freq;
}
console.log(occurence("thequickbrownfoxjumpsoverthelazydog"));
//18
function binarySearch(arr, x) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);

    if (arr[mid] === x) return true;
    else if (arr[mid] < x) l = mid + 1;
    else r = mid - 1;
  }

  return false;
}
console.log(binarySearch([2, 4, 6, 8, 10], 8));
//19
function noGreater(arr, num) {
  return arr.filter((pivot, index) => {
    return pivot > num;
  });
}
console.log(noGreater([2, 4, 6, 8, 10], 8));
//20
function IDgen() {
  let id = 0,
    i,
    chr;
  if (this.length === 0) return id;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    id = (id << 5) - id + chr;
    id |= 0;
  }
  return id;
}
console.log(
  IDgen("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789")
);
// 28
function functionPass(func) {
  func();
}
// 29
function getName(func) {
  return func.name;
}
console.log(getFuncName(getFuncName));
