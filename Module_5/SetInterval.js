// Set Interval is also a Asynchronous Function

const { clearInterval } = require("timers")

console.log('Before')

function print(){
    console.log('Hi! This is Set Interval')
}

// setInterval(print, 2000)  It will run infinitely if we are not stoping it 


let timer = setInterval(print, 3000)

setTimeout(function(){
    clearInterval(timer)
}, 6000)

console.log('After')