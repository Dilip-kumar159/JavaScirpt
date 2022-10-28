// Here it is used same as Promises
// async and await are keywords

function placeOrder(drink){

    return new Promise((resolve, reject)=>{
        if(drink == 'coffee'){
            resolve('Order Has Been Placed')
        }else{
            reject('Order Cancelled!!')
        }
    })
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log('Order is  Processing')
        resolve(order)
    })
}

// Using asynce await
async function serveOrder(){

    try{
        let orderPlaced = await placeOrder('coffee');
    // let orderPlaced = await placeOrder('juice'); inorder to handlle the error, put it in try block
    console.log(orderPlaced)

    let orderProcessed = await processOrder(orderPlaced)
    console.log(orderProcessed)
    }catch(err){
        console.log(`Only Coffee is available and your ${err}`)
    }  
}

serveOrder()