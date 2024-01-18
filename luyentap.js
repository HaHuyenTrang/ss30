// //bài 1
// function arr(arr){
//     var left = 0;
//     var right = arr.length - 1;
//     while (left < right) {
//       if (arr[left] !== arr[right]) {
//         return false;
//     console.log("false: " +arr);
//       }
  
//       left++;
//       right--;
//     }
//     console.log("true: " +arr);
//     return true;
//   }
  
// arr(arr=[1,2,3,2,1]);




// //bài 2
// let user = parseInt(prompt("nhập số nguyên dương bất kì: "));
// function number(user){
//     var oddIntegers = [];
//     var sum = 0;
    
//     for (var i = 1; i <= user; i += 2) {
//         oddIntegers.push(i);
//         sum += i;
//         console.log(sum);
//     }
//     console.log(oddIntegers);
    
//     if (sum % 2 === 0 && oddIntegers.length > 1) {
//         oddIntegers.pop();
//       sum -= oddIntegers[oddIntegers.length - 1];

//     }

// }


// number(user);




// //bài 3
// var letters = [];
// var numbers = [];
// var specials = [];


// let str = parseInt(prompt("nhập vào 1 chuỗi: "));

// function string(str){

//     for (var i = 0; i < str.length; i++) {
//         var char = str[i];
        
//         if (/[a-zA-Z]/.test(char)) {
//             letters.push(char);
//         console.log(letters);
//         } else if (/[0-9]/.test(char)) {
//         numbers.push(char);
//         console.log(numbers);
//         } else {
//         specials.push(char);
//         console.log(specials);
//         }
//     }
//     console.log(letters);
//     console.log(numbers);
//     console.log(specials);
    
// }

// string(str);



// //bài 4
// var numbers = [2, 3, 5, 7, 10, 13, 17, 20, 23];

// function isPrimeNumber(num) {
//     if (num <= 1) {
//       return false;
//     }
  
//     for (var i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
// }

  
//   for (var i = 0; i < numbers.length; i++) {
//     if (isPrimeNumber(numbers[i])) {
//       console.log(numbers[i]);
//     }
//   }




// //bài 6

// function countTriangles(arr) {
//   var count = 0;

//   for (var i = 0; i < arr.length - 2; i++) {
//     for (var j = i + 1; j < arr.length - 1; j++) {
//       for (var k = j + 1; k < arr.length; k++) {
//         if (arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
//           count++;
//         }
//       }
//     }
//   }
//   console.log("số tam giác: "+count);

//   return count;
// }

// countTriangles(arr=[1,2,3,4,5,6,7,8,9,10]);


//bài 7

function findSmallestSubarray(arr, targetSum) {
  var minLength = Infinity; // Khởi tạo độ dài mảng con nhỏ nhất
  var minSubarray = []; // Khởi tạo mảng con nhỏ nhất

  for (var start = 0; start < arr.length; start++) {
    var sum = 0; // Khởi tạo tổng của mảng con
    var length = 0; // Khởi tạo độ dài của mảng con


    for (var end = start; end < arr.length; end++) {
      sum += arr[end]; // Cộng phần tử vào tổng
      length++; // Tăng độ dài lên 1


      if (sum > targetSum && length < minLength) {
        minLength = length; // Cập nhật độ dài nhỏ nhất
        minSubarray = arr.slice(start, end + 1); // Cập nhật mảng con nhỏ nhất
        break; // Thoát vòng lặp bên trong
      }
    }
  }
  console.log(minSubarray);
  return minSubarray;
}
findSmallestSubarray(arr=[1,2,3,4,5,6], targetSum=12);