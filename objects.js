// const mysym=Symbol("key1");

// const jsuser={
//     name:"vishesh",
//     link:"href",
//     location:"jaipur",
//     isloggedin:false,
//     [mysym]:"visheh"
// }
// console.log(typeof(jsuser[mysym]));


const tinderuser=new Object();
// tinderuser.id="123abc"
// tinderuser.name="sammy"
// tinderuser.isloggedin=false;

// console.log(tinderuser);


const regularuser=
{
    email:"vishesh",
    username:
    {
        id:"13",
        name:
        {
            fullnme:"visheshpgowda",
            halfname:"bghjji"
        }
    }
}

console.log(regularuser.username.name.halfname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign(obj1,obj2)
console.log(obj3);