
const golos = require('golos-js')

async function makePromise(func) {
    return new Promise((resolve, reject) => {
        func(function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}

async function getAccountCount( ) {
    return await makePromise(golos.api.getAccountCount)
}

async function main( ) {
    console.log('Hello! Now I find out how many accounts are registered in the GOLOS...')
    console.log('Account count is ' + await getAccountCount( ) + ' !!!')
    process.exit(0)
}

main( )
