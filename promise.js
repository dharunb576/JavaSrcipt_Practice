// function waitInQueue{
//     return new Promise((resolve,reject)=>)
// }

// function buy()
// {
//     waitInQueue()
// }



const data = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const ans = "Ramm"
        if(ans){
            resolve(ans)
        }
        else{
            reject("No data")
        }
    },2000)
})

data
    .then((nam)=>{
    console.log(nam)
})
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("The Final State")
    })
