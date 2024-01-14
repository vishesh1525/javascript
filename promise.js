// // // const promiseone= new Promise(function(resolve,reject)
// // // {
// // //     setTimeout(function() {
// // //         console.log("ASYNC task complted");
// // //         resolve()
// // //     }, 1000);
// // // });


// // // promiseone.then(()=>
// // // {
// // //     console.log("complted");
// // // })
 
// // // const promisethree=new Promise((resolve,reject)=>
// // // {
// // //     setTimeout(function()
// // //     {
// // //         resolve({username:"Chai",email:"chaiexample.com"})

// // //     },1000)
// // // }).then((user)=>
// // // {
// // //     console.log(user);
// // // })


// const promisefour=new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         let error=true;
//         if(error)
//         {
//             resolve({username:"hitesh",password:"123"})

//         }
//         else{
//             reject("Eroor something is stopping")
//         }
//     })
// })

// const ans=promisefour.then((user)=>
// {
//    console.log(user);
//    return user.username
// }).then((username)=>
// {
//    console.log(username);
// }).catch((err)=>
// {
//     console.log(err);
// })
// .finally(()=>
// {
//     console.log("the function is complete");
// })


// async function consumepromisefive(){
//     const response=await promisefour//its a object not a function 
//     console.log(response);
// }

// consumepromisefive();


// async function getallusers()
// {
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data)
//     }catch(error)
//     {
//         console.log("E:",error);
//     }

// }

// getallusers();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
{
    return response.json();
})
.then((data)=>
{
    console.log(data);
})
.catch((err)=>
{
   console.log(error);
})