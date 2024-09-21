const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') res.write('Hello World!!')
})

server.listen(3000, () => {
    console.log('server is running on port 3000')
})