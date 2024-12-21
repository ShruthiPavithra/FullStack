let number=[10,"abc",30,null,undefined,true]
console.log(number);
console.log(number[1]);
number.push("zzz","qw")
number.push(["c",555])
console.log(number);
number.pop()
console.log("After pop",number);
number.shift()
console.log("After shift",number);
number.unshift(40,50)
console.log(number);
number.reverse()
console.log(number);
number.sort()
let array=[3,4,5,6]
console.log(array);
array.push("Pavithra")
console.log(array);
array.pop()
console.log("after pop",array);
array.shift()
console.log("after shift",array);
array.unshift("SASTRA");
console.log("after unshift",array);
array.push(["Pavithra",564,"tirunelveli"])
console.log(array.sort());
console.log(array.reverse());


console.log(array.at(1));
console.log(array.fill(1));
console.log(array.join("*"));
console.log(array.includes(6));
console.log(array.map((num=>num**2)));
console.log(array);
console.log(array.find(num=>num>3));
console.log(array.filter(num=>num>3));
console.log(array.every(num=>num>2));
console.log(array.findIndex(num=>num>3));
console.log(array.reduce((sum,num)=>sum+num,0));


let array1=[1,2,3,4,5,6,7,8,9,101];
console.log(array1.splice(2,2,99,88));
console.log(array1.splice(2,0,34,55));

console.log(array1);

const totalPrice = array.reduce((accumulator ,item) => {
    return accumulator += item;
  }, 1)
console.log(totalPrice);


console.log(array.some((num)=>num>100));

console.log(array.filter((num)=>num%2==0));
let age=[13,20,18,11];
console.log(age.find((num)=>num>18));
let fruits=["apple","orange","grapes","mango"];
console.log(fruits.includes("apple"));
let array2=[-90,99,78,45];
console.log(array2.reverse());
console.log(array2.sort((a,b)=>b-a));
console.log(array2.every((num)=>num>0));
let array3=['h'];
console.log(age.join('\t'));
let arr1=["hello"];
let arr2=["world"];
let arr3=arr1.concat(arr2);
console.log(arr3);
let arr4=[0,1,2,3,[4,5],[6,7],100]
console.log(arr4.flat(2));
console.log(arr4.slice(2,6));
