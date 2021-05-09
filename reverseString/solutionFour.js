
function reverseString(str){
  
  function revStr(string) {
    
    return string.split('').reduce((reversed, charecter) => charecter + reversed , '');
    
  }
  
  if(str && typeof(str) === 'string') return revStr(str);
  
  
}



console.log(reverseString('Shorna'))
