import fs, { write } from 'fs';
//read stream
const readableStream = fs.createReadStream('./filesystem/input.txt',{
    highWaterMark : 15
});

readableStream.on('readable', () => {
    try{
        process.stdout.write(`${readableStream.read()}\n`);
    }catch(e){

    }
});

readableStream.on('end',() =>{
    console.log('\nDone');
});

//write stream
const writeableStream = fs.createWriteStream('./filesystem/QuizOutput.txt');

writeableStream.write('consectetur adipiscing elit\n, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam\n, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nExcepteur sint occaecat cupidatat non proident,\nsunt in culpa qui officia deserunt mollit anim id est laborum.');
writeableStream.end('Done');
