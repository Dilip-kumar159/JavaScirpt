// Scenario is create a Coffee shop and only recieves coffee
function placeOrder(drink){
    return new Promise(function(resolve, reject){
        if(drink == 'coffee'){
            resolve('Order has received')
        }else{
            reject('Only Coffee is in Stock')
        }
    })
}

function processOrder(order){
    return new Promise((resolve)=>{
        console.log('Order is being Processed')
        resolve(`${order} is Served`)
    })
}

placeOrder('coffee').then((orderPlaced)=>{
    console.log(orderPlaced)
    let orderIsProcessed = processOrder(orderPlaced) // Caliing function inside after promise then
    return orderIsProcessed
}).then((orderProcessed)=>{
    console.log(orderProcessed)
}).catch((err)=>{
    console.log('Something Went Wrong')
})