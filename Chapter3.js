//question 1:  Given three numbers x, y, and p, compute (xˆy) % p. (This is modular exponentiation.)

// Here, x is the base, y is exponent, and p is the modulus.

// Modular exponentiation is a type of exponentiation performed over a modulus, which is useful in computer science and used in the field of public-key encryption algorithms.

// At first, this problem seems simple. Calculating this is a one-line solution, as shown here:

// 1  function modularExponentiation ( base, exponent, modulus ) {
// 2          return Math.pow(base,exponent) % modulus;
// 3  }
// This does exactly what the question asks. However, it cannot handle large exponents.

// Remember that this is implemented with encryption algorithms. In strong cryptography, the base is often at least 256 bit (78 digits).

// Consider this case, for example:

// Base: 6x1077, Exponent: 27, Modulus: 497

// In this case, (6x1077)27 is a very large number and cannot be stored in a 32-bit floating point.

// There is another approach, which involves some math. One must observe the following mathematical property:

// For arbitrary a and b,

// c % m = (a  b) % m
// c % m = [(a % m)  (b % m)] % m
// Using this mathematical property, you can iterate 1 to the exponent, recalculating each time by multiplying the current modulus value with the last.

// Here is the pseudocode:

// 1  Set value = 1, current exponent = 0.
// 2  Increment current exponent by 1.
// 3  Set value = (base  value) mod modulus until current
// exponent is reached exponent
// Example: Base: 4, Exponent: 3, Modulus: 5

// 4ˆ3 % 5 = 64 % 5 = 4
// value = (lastValue x base ) % modulus:
// value = (1 x 4) % 5 = 4 % 5 = 4 
// value = (4 x 4) % 5 = 16 % 5 = 1
// value = (1 x 4) % 5 = 4 % 5 = 4
// Finally, here is the code:

//  1  function modularExponentiation ( base, exponent, modulus ) {
//  2          if (modulus == 1) return 0;
//  3
//  4          var value = 1;
//  5
//  6          for ( var i=0; i<exponent; i++ ){
//  7                  value = (value * base) % modulus;
//  8          }
//  9          return value;
// 10  }
// Time Complexity: O(n)

// The time complexity is O(n) where n is equal to the exponent value.


function modularExponentiation(base, exponent, modulus) {
   if (modulus == 1) return 0;
   
   var value = 1;
   base = base % modulus; // Update base if it is more than or equal to modulus
   
   while (exponent > 0) {
       // If exponent is odd, multiply base with the result
       if (exponent % 2 == 1) {
           value = (value * base) % modulus;
       }
       // exponent must be even now
       exponent = Math.floor(exponent / 2);
       base = (base * base) % modulus; // Square the base
   }
   return value;
}



// Question 2: Print all primes less than n.

// To do this, use the isPrime function covered in this chapter. Simply iterate from 0 to n and print any prime numbers where isPrime evaluates to true.

//  1  function allPrimesLessThanN(n){
//  2          for (var i=0; i<n; i++) {
//  3                  if (isPrime(i)){
//  4                          console.log(i);
//  5                  }
//  6          }
//  7  }
//  8
//  9  function isPrime(n){
// 10      if (n <= 1) return false;
// 11      if (n <= 3) return true;
// 12 
// 13      // This is checked so that we can skip
// 14      // middle five numbers in below loop
// 15      if (n%2 == 0 || n%3 == 0) return false;
// 16
// 17      for (var i=5; i*i<=n; i=i+6){
// 18          if (n%i == 0 || n%(i+2) == 0)
// 19             return false;
// 20      }
// 21
// 22      return true;
// 23  }
// 24
// 25  allPrimesLessThanN(15);
// 26
// 27  // prints 2, 3, 5, 7, 11, 13
// Time Complexity: O(nsqrt(n))

// This is because isPrime (covered earlier in this chapter) with a time complexity of O(sqrt(n)) is run n times.

  function allPrimesLessThanN(n) {
    for (var i = 0; i < n; i++) {
      if (isPrime(i)) {
        console.log(i);
      }
    }
  }

// Question 3: Check for a set of prime factors.





// Let's define ugly numbers as those whose only prime factors are 2, 3, or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included.

// To do this, divide the number by the divisors (2, 3, 5) until it cannot be divided without a remainder. If the number can be divided by all the divisors, it should be 1 after dividing everything.

//  1  function maxDivide (number, divisor) {
//  2          while (number % divisor == 0) {
//  3                  number /= divisor;
//  4          }
//  5          return number;
//  6  }
//  7
//  8  function isUgly (number){
//  9          number = maxDivide(number, 2);
// 10          number = maxDivide(number, 3);
// 11          number = maxDivide(number, 5);
// 12          return number === 1;
// 13  }
// Iterate this over n, and now the list of ugly numbers can be returned.

//  1  function arrayNUglyNumbers (n) {
//  2          var counter = 0, currentNumber = 1, uglyNumbers = [];
//  3
//  4          while ( counter != n ) {
//  5
//  6                  if ( isUgly(currentNumber) ) {
//  7                          counter++;
//  8                          uglyNumbers.push(currentNumber);
//  9                  }
// 10
// 11                  currentNumber++;
// 12          }
// 13
// 14          return uglyNumbers;
// 15  }
// Time Complexity for maxDivide(number, divisor):

// O(logdivisor(number))

// The time complexity of maxDivide is a logarithmic function which depends on divisor and the number. When testing primes of 2, 3, and 5, the logarithmic of 2 (log2 (n)) yields the highest time complexity.

// Time Complexity for isUgly: O(log2(n))

// Time Complexity for arrayNUglyNumbers: O(n(log2(n)))

// The isUgly function is limited by the time complexity of maxDivide(number, 2). Hence, arrayNUglyNumbers has n times that time complexity.


   function maxDivide(number, divisor) {
      while (number % divisor == 0) {
          number /= divisor;
      }
      return number;
  }
  
  function isUgly(number) {
      number = maxDivide(number, 2);
      number = maxDivide(number, 3);
      number = maxDivide(number, 5);
      return number === 1;
  }
  
  function arrayNUglyNumbers(n) {
      var counter = 0, currentNumber = 1, uglyNumbers = [];
  
      while (counter != n) {
          if (isUgly(currentNumber)) {
              counter++;
              uglyNumbers.push(currentNumber);
          }
          currentNumber++;
      }
  
      return uglyNumbers;
  }
 