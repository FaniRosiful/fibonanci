var fib="0,1"; 
function nextAngka(a,b) 
{ 
 if(b<100){ 
  a=(a+b); 
  fib+=", "+a; 
  nextAngka(b,a); 
 } 
} 
nextAngka(0,1); 
console.log(fib);
