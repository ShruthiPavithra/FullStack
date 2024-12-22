

function sum(a,b,c,callback){
    total=a+b+c;
    console.log(total);
    callback(total);

    
}
function average(total){
    avg=total/3;
    console.log(avg);
    
}
sum(5,2,1,average);