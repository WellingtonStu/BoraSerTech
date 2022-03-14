const fs =require('fs');
const path =require('path');
const filePath = path.join('file.txt');
fs.readFile(filePath, 'utf-8', (err, data)=>{
    console.log('os dados do arquivo sao' , data);
    
});


 const  dados = path.join('file.txt');
 console.log('teste');
  fs.readFileSync(dados, 'utf-8', (err, data)=>{
    console.log('\n teste do segundo' , data);
  });
 
 