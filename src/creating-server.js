const http = require('http')

var server = http.createServer(function(request, response){
    console.log('Request was made: ' + request.url)
    response.writeHead(200, {'content-Type' : 'text/plain'})
    response.end('Hello World!!')
})

server.listen(3000, '127.0.0.1')
console.log('You are listening to port 3000')

