/*
Fibonacci bottom-up and top-down
*/

// top-up apprach 
const fib = (num) => {
  let result; 
  let memo = {}; 
  if(memo[num]){
    return memo[num]; 
  }
  if(num === 1 || num === 2){
    result = 1; 
  } else {
    result = fib(num-1) + fib(num-2); 
  }
  memo[num] = result; 
  return result; 
};


//bottom-up approach 
const fib = (num) => { 
  if(num < 2){
    return num; 
  }
  let n1 = 1; 
  let n2 = 0;
  for(let i = 2; i < num; i++){
    let n0 = n1+n2; 
    n2 = n1; 
    n1 = n0; 
  } 
  return n1+n2; 
}