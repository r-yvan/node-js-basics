const http = require('http')

var server = http.createServer(function(request, response){
    console.log('Request was made: ' + request.url)
    response.writeHead(200, {'content-Type' : 'application/json'})
    var obj = {
        name1 : 'Rubuto',
        job: 'Developer',
        age: 15
    }
    response.end(JSON.stringify(obj))
})

server.listen(3000, '127.0.0.1')
console.log('You are listening to port 3000')