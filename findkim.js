function findKim(seoul){
  var index = 0;
  
  for(i=0; i<seoul.length; i++){
    if(seoul[i] == "kim"){
      index = i
    }
  }
  //함수를 완성하세요


  return "Kim " + index + "번 째 있다.";
}

console.log(findKim(["park", "lee", "kim"]));