
// async is just syntactical sugar for 
// functions returning promises

function GetData(){
    return new Promise((resolve, reject) => {
        reject({
            message: 'this is the error'
        })
        resolve('this is the output')
    })
}

async function GetDataAsync(){
    throw new Error('this is the error');
    return 'this is the output'
}

GetDataAsync()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))
