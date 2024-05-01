//solution
function isPalindrome(x) {
    if (x < 0) {
      return false; 
    }
    
    const original = x;
    let opposite = 0;
    
    while (x > 0) {
      const digit = x % 10;
      opposite = opposite * 10 + digit;
      x = Math.floor(x / 10);
    }
    
    return original === opposite;
  }

  
console.log(isPalindrome(121)); //the output will be true
console.log(isPalindrome(-121));//the output will be false
