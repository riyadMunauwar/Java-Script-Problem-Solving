function multipleOf(value, target){
  let multiple = 0;
  
  for(let i = 1; true ; i++){
    
    multiple = i + value;
    
    if(multiple > target) break;
    
    
    if(multiple === target) return true;
    
    
    
  }
  
  return false;
}


var res = multipleOf(3, 95)

console.log(res);
