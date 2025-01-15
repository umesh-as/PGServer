const jsonServer = require("json-server")
const PGServer = jsonServer.create()

const middleware = jsonServer.defaults()
const PORT = 3000

const route = jsonServer.router('db.json')

PGServer.use(middleware)
PGServer.use(route)

PGServer.listen(PORT,()=>{
    console.log(`PGServer started runnig at port: ${PORT} and its waiting for client request`);
    
})