const fs = require("fs").promises;


const readFile = (filename) => fs.readFile(filename, 'utf8');

// THEN-CATCH SOLUTION BELOW THIS LINE 

const readFilesThenCatch = () => {
    Promise.all([
        readFile('firstname.txt'),
        readFile('lastname.txt'),
        readFile('age.txt'),
        readFile('hobbies.txt')
    ])
    .then(([firstname, lastname, age, hobbies]) => {
        console.log(`${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${hobbies.trim()}`);
    })
    .catch(err => {
        console.error('Error reading files:', err);
    });
};

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
const readFilesAsyncAwait = async () => {
    try {
        const [firstname, lastname, age, hobbies] = await Promise.all([
            readFile('firstname.txt'),
            readFile('lastname.txt'),
            readFile('age.txt'),
            readFile('hobbies.txt')
        ]);
        console.log(`${firstname.trim()} ${lastname.trim()} is ${age.trim()} years old and his hobbies are ${hobbies.trim()}`);
    } catch (err) {
        console.error('Error reading files:', err);
    }
};


readFilesThenCatch();
readFilesAsyncAwait();



