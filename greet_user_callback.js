const readline = require('readline-sync');

function logIN(callback){
    setTimeout(()=>{
        console.log("Login Successful!");
        callback();
    },1000);
}

function askUN(callback){
    setTimeout(()=>{
        let username=readline.question("Enter your username : ");
        callback(username);
    },2000);
}

function greeting(username){
    setTimeout(()=>{
        console.log(`Welcome to the dashboard, ${username}!`);
    },1000);
}

logIN(()=>{
    askUN((username)=>{
        greeting(username);
    });
});