const array=[1,1,1,3,2,5,2,5];

let count=0;
let count1=0;
let count2=0;
let count3=0;

for(let i=0;i<=array.length-1;i++)
{
if(array[i]==1){
count=count+1;
}
else if(array[i]==2){
count1=count1+1;
}
else if(array[i]==3){
count2=count2+1;
}
else if(array[i]==5){
count3=count3+1;

}
else{
console.log("Invalid");
}
}
const obj={"1":count,"2":count1,"3":count2,"5":count3};
console.log(obj);

