const {readFileSync,writeFileSync}=require('fs');
const firstFile=readFileSync('./folder/first.txt','utf8')
const secondFile=readFileSync('./folder/second.txt','utf8')
writeFileSync('./folder/resultant.txt',`Here is the resultant file: ${firstFile},${secondFile}`,{

    flag:'a'
}
)

console.log(firstFile,secondFile);


// same as above
// const fs=require('fs');
// fs.readFileSync