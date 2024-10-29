//
const jsonserver = require('json-server')

const todoServer = jsonserver.create()

//set up path for db.json.file
const router = jsonserver.router("db.json")

//create middleware 
const middleware = jsonserver.defaults()

//define port for running json-server
const PORT =  3001 || process.env.PORT

//use middleware,router
todoServer.use(middleware)
todoServer.use(router)

//run server in given port to resolve client request
todoServer.listen(PORT,()=>{
    console.log(`TODO server is started at port ${PORT} and waiting for cilent request!!`);
    
})
