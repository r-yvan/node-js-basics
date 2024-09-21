const os = require('os')


var user = os.userInfo()
console.log(user)


var osUptime = os.uptime()
console.log(osUptime)


var currentOS = {
    OS_Type:  os.type(),
    Kernel_Version: os.release(),
    Total_Memory: os.totalmem(),
    Free_Memory: os.freemem()
}

console.log(currentOS)