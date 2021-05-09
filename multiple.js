function multipleOf(value, limit){
  for(let i = 1; true ; i++){
    
    if(i * value > limit) break;
    
    console.log(i * value)
    
  }
}


multipleOf(3, 100)
