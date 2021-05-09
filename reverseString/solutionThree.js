function revStr(str){
  
  if(str && typeof str === 'string') {
    
  let reverseStr = '';
  
  for(let charecter of str){
    reverseStr = charecter + reverseStr;
  }
  
  return reverseStr;
    
  }
  
}

console.log(revStr('riyad'));
