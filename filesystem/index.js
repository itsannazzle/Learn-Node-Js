//const fs = require('fs');
import fs from 'fs';

const fileReadCallback = (error, data) => {
    if(error) {
        console.log('Gagal membaca berkas');
        console.log(error.message);
        return;
    }
    console.log(data);
};
//async
fs.readFile('./filesystem/notes.txt', 'UTF-8', fileReadCallback);

//sync
console.log(fs.readFileSync('./filesystem/notes.txt','utf-8'));

