const path =require('path')

console.log(path.sep)
const filepath=path.join('//folder','subfolder//','testing.txt');
console.log(filepath)
const basepath =path.basename(filepath);
console.log(basepath)
const absolute=path.resolve(__dirname,"folder","subfolder","testing.txt")
console.log(absolute )
