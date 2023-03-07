const fs = require('fs');
const path = require('path')

const notes = path.resolve(__dirname, 'notes.txt')

// synchronous
const dataSyncronous = fs.readFileSync(notes, 'utf-8');
console.log(dataSyncronous);

// asynchronous
const fileReadCallback = (error, dataAsynchronous) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }

    console.log(dataAsynchronous);
};

fs.readFile(notes, 'utf-8', fileReadCallback);