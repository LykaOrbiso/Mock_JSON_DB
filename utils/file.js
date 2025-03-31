const fs = require('fs');
const filePath = require('./database.json');


async function readData(){
    try{
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    }catch(error){
        throw new Error('Internam Server Error');

    }
}
async function writeData(data){
    try{
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    }catch(error){
        throw new Error('Internam Server Error');

    }
}

module.exports = { readData,
     writeData };