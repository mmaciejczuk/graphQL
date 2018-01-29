//https://www.youtube.com/watch?v=lAJWHHUz8_8
const express = require('express')
const graphqlHTTP = require('express-graphql')
const app = express()

const schema = require('./schema')

app.use('/grapql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000)
console.log('Listening ...')
