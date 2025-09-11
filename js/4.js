const { default: axios } = require("axios")

const func1 = (some) => {
    document.getElementById('demo').innerHTML = some
}

const ref = document.getElementsByTagName('button')
// ref[0].addEventListener('click',() => {
//     var prom1 = new Promise((res, rej) => {
//     var x = 0;
//     if(x==0){
//         res("ok ")
//     }else{
//         rej('no')
//     }
// })

// prom1.then((value) => {
//     func1(value)
// })
// .catch((err) => {
//     func1(err)
// })

// }).


const getPromise = () => {
    return new Promise((res,rej) => {
        let x = 0;
        if(x == 0){
            res("ok correct")
        }else{
            rej('not corrcet')
        }
    })
}


ref[0].addEventListener('click',() => run())



const run = async () => {
    try {
        let val = await getPromise()
        func1(val)
    } catch (error) {
        func1(error)
    }
}