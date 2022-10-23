const MI_CONSTANTE=20;
let x;
for (let index = 1; index < 100; index++) {
  if(index%3==0)
  {if(index%5==0){
    console.log("FizzBuzz");
  }else{console.log("Buzz");}

  }else if(index%5==0){console.log("fizz");}else{console.log(index);}
}