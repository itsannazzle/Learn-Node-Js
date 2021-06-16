import fs from 'fs';

const writeableStream = fs.createWriteStream('./filesystem/FromWriteSream.txt');

writeableStream.write('Ini merupakan teks baris pertama!\n');
writeableStream.write('Ini merupakan teks baris kedua!\n');
writeableStream.end('Akhir dari writable stream!');