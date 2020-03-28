var x = 10;
var y = 20;
var big;

if(x > y){
    big = x;
}else{
    big = y;
}

big = x > y ? x : y;

// condition?true:false;

console.log(big);

var x = 15;
x += 10;

if(x > 20){
    console.log("x is greater than 20");
}else if(x > 10){
    console.log("x is between 10 and 20");
}else{
    console.log("x is less than 20");
}