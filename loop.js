// for loop
for (let i=0;i<5;i++){
    console.log(i);
    
}
// while loop
let i=0;
while(i<5){
    console.log(i);
    i++;
    
}

// do while loop
let i1=0;
do{
    console.log(i1);
    i1++;
}while(i<5);

// for..in loop
const person={name:"John",age:20,city:"New York"};
for(let key in person){
    console.log(key+":"+person[key]);
    
}

const fruits=['apple','banana','cherry'];
for(let key in fruits){
    console.log(key+":"+fruits[key]);
    
}
