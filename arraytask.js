// 1.
let array1=["apple","banana","cherry","date"];
// array1.splice(2,1);
console.log(array1);
// array1.splice(1,2);
// console.log(array1);
// array1.splice(0,1,"orange","grape");
// console.log(array1);
array1.splice(0,0,"kiwi","melon");
console.log(array1);

// 2.
let array2=[1,2,3,4,5];
console.log(array2);
console.log(array2.slice(0,6));
console.log(array2.slice(2));
console.log(array2.slice(1,4));
console.log(array2.slice(2,6));
console.log(array2.find((num)=>num==3));

// 3.
let array3=[1,2,3,4,5];
console.log(array3.findIndex((num)=>num==3));

// 4.
let arr4=[1,2,3];
let arr5=[4,5,6];
console.log(arr4.concat(arr5));

// 5.
let arr6=[1,2,3,4,5];
console.log(arr6.length);
arr6.unshift(70);
console.log(arr6.length);



// 6.
arr7=[1,2,3,4,5];
console.log(arr7.shift());

// 7.
for(let i=1;i<=10;i++){
    console.log(i);    
}

// 8.
let arr8=['apple','cow','bat'];
console.log(arr8.sort());

// 9.
let arr9=[20,30,40];
console.log(arr9.find((num)=>num>20));

// 10.
let arr10=[2,3,5,7];
console.log(arr10.includes(5));

// 11.
let person={
    name:"Shruthi",
    age:20,
    gender:"female"
};
for(let key in person){
    console.log(key + ":" +  person[key]);  
}
