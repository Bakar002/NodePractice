const os =require('os')
const user = os.userInfo()
console.log(user)
console.log(`the system uptime is ${os.uptime()} seconds`)



const currentos={
name:os.type(),
release:os.release(),
totalmemory:os.totalmem(),
freeMemory:os.freemem(),



}
console.log(currentos)