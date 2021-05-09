function revStr(str){
  
  if(str && typeof str === 'string') {
    
  let reverseStr = '';
  
  for(let i = str.length - 1; i >= 0; i--){
    reverseStr += str[i];
  }
  
  return reverseStr;
    
  }

}

