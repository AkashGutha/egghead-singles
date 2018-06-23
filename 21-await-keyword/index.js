
// await ?
// problem: make 3 network calls one after another in order

async function getData(){
    let res = await longNetworkCall()
    console.log(`${res} from 1st call`)

    res = await longNetworkCall()
    console.log(`${res} from 2nd call`)
    
    res = await longNetworkCall()
    console.log(`${res} from 3rd call`)
}

function longNetworkCall(){
    return new Promise((resolve)=>{
        setTimeout(() => resolve('data'), 1000)
    })
}

getData()
