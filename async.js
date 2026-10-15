// // console.log("1")

const { reject } = require("async")

// // setTimeout(()=> console.log("2"),2000)
// // console.log("3")


// const Mypro = new Promise((resolve,reject) => {
//     const error = false;
//     if(!error)
//     {
//         resolve("Yes!")
        
        
//     }else{
//         reject("No!")
        
        
//     }
// })

// console.log(Mypro)


isHalwaThere = true

function waitInQueue()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=> {
            if(isHalwaThere)
            {
                console.log("Sema daa")
                resolve("buy it")
            }
            else{
                reject("Halwa Over")
            }
        },1000)
    })
}
async function buyHalwa()
{
    try{
        let res = await waitInQueue()
    console.log(res)
    }
    catch(error){
            console.log("Halwa Gaali")
    }
}
buyHalwa()  