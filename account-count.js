
const golos = require('golos-js')

async function getAccountCount( ) {
    return new Promise((resolve, reject) => {
        golos.api.getAccountCount(function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}

async function main( ) {
    console.log('Hello! Now I find out how many accounts are registered in the GOLOS...')
    console.log('Account count is ' + await getAccountCount( ) + ' !!!')
    process.exit(0)
}

main( )
