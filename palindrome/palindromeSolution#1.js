// This function return true if the input word is palindrome else return false
function isPalindrome(word){
  if( word && typeof(word) === 'string'){
    return word.split('').reverse().join('') === word;
  }
}

// Palindrome Number Input
console.log(isPalindrome('kayak'))
console.log(isPalindrome('redivider'))
console.log(isPalindrome('deified'))
console.log(isPalindrome('civic'))
console.log(isPalindrome('radar'))
// Ramdon Input
console.log(isPalindrome('akib'))
console.log(isPalindrome('riyad'))
console.log(isPalindrome('abir'))



