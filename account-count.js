
const golos = require('golos-js')
const config = require('./config.json')

async function getAccountCount( ) {
    return new Promise((resolve, reject) => {
        golos.api.getAccountCount(function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}

async function getAccountHistory(account, from, limit) {
    return new Promise((resolve, reject) => {
        golos.api.getAccountHistory(account, from, limit, function (err, res) {
            err ? reject(err) : resolve(res)
        })
    })
}

async function main( ) {
    console.log('Hello! Now I find out how many accounts are registered in the GOLOS...')
    console.log('Account count is ' + await getAccountCount( ) + ' !!!')
    try {
        console.log('Your account created in ' + (await getAccountHistory(config.account_name, 0, 0))[0][1].timestamp)
    } catch (e) {
        console.log('ERROR: ' + (
            e == "TypeError: Cannot read property '1' of undefined" ? 'write in the config an existing user' : e
        ))
    }
    process.exit(0)
}

main( )
