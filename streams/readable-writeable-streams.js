const fs = require('fs')
const path = require('path')

var readingStream = fs.createReadStream(path.join(__dirname, '/readMe.txt'), 'utf-8')
var writingStream = fs.createWriteStream(path.join(__dirname, '/writeMe.txt'))

readingStream.on('data', (chunk) => {
    console.log('New Chunk is received: ')
    writingStream.write(chunk)
    readingStream.pipe(writingStream)
    // It is the same as that writingStream.write(chunk)
})