console.log(`Welcome to the password validator tool!`);

const readline = require(`readline`);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

reader.question("What is your password?", function(answer){
    password = []



if(password.length < 10){
    console.log(`Your password has less than 10 characters.`);
} else if (password.length > 10){
    console.log(`This password is long enough.`);
}


	reader.close()
});