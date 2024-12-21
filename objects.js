// object literal
let obj1={
    name:"Shruthi",
    age:20
};
console.log(obj1);

// object constructor
let obj2=new Object();
obj2.name="Shruthi",
obj2.age=20
console.log(obj2);

// Accessing obj prop
let obj3={
        name:"Shruthi",
        age:20
    };
console.log(obj3.name);
console.log(obj3["age"]);

// modifying obj prop
console.log(obj3.age=21);

// adding prop
obj3.color="blue";
console.log(obj3);

// removing prop
delete obj3.age;
console.log(obj3);

// prop exists or not
console.log("age" in obj3);
let obj4={
    name:"Shruthi"
};
let obj5={
    age:20
};
let obj6={...obj4,...obj5};
console.log(obj3);

// object methods
let obj7={
    sum:function(){
        a=2;
        b=3;
        console.log(a+b);        
    },
}
obj7.sum();

// returns the obj's keys as an array
console.log(Object.keys(obj7));

// returns the obj's values as an array
console.log(Object.values(obj7));

// Returns an array of the object's key-value pairs as subarrays.
console.log(Object.entries(obj7));
let obj8={name:"shruthi"};
let obj9={age:20};
Object.assign(obj9,obj8);
console.log(obj9);
Object.freeze(obj8);
obj8.age=20;
console.log(obj8);
Object.seal(obj8);
obj8.color="blue";
obj8.name="Pavithra";
console.log(obj8);
console.log(Object.is(0,-0));
let obj10={greet:function(){
    console.log("Hello");
}
};
let obj11=Object.create(obj10);
obj11.greet();

// hasownproprty
console.log(obj10.hasOwnProperty("name"));
console.log(obj10.hasOwnProperty("age"));
console.log(Object.hasOwn(obj10,"name"));
console.log(Object.hasOwn(obj10,"age"));

let sub={
    name:"Data Structures",
    mark:89,
    display:function(){
        console.log(`details: ${this.name} ${this.mark}`);      
    }
}
sub.display();
