import fs from 'fs';
const readableStream = fs.createReadStream('./filesystem/notes.txt',{
    highWaterMark : 10
});

readableStream.on('readable',() => {
    setTimeout(() => {
        try{
            process.stdout.write(`${readableStream.read()}`);
        } catch(e){
            //console.log(e.message);
        }
    }, 1000);
    
});

readableStream.on('end', () => {
    console.log('\nDone');
});