// #!/usr/bin/env Node;
// import chalk from 'chalk';
// import inquirer from 'inquirer';
// import gradient from 'gradient-string';
// import chalkAnimation from 'chalk-animation';
// import figlet from 'figlet';
// import { createSpinner} from 'nanospinner';

// console.log(chalk.bgGreen("hi mom"));
// let playerName;

// const sleep=(ms=2000)=> new Promise((res)=> setTimeout(res,ms));



// async function welcome(){
//     const rainbowTitle=chalkAnimation.rainbow(
//         'Who wants to be a js hero ?'
//     );
//     await sleep();
//     rainbowTitle.stop();
//     console.log(`

//     ${chalk.bgBlue('how to play')}
//     I am a process on your computer.
//     if you get  any question wrong I will be ${chalk.bgRed('killed')}
//     so get all question right...
//         `)
// }
// await welcome();
// async function askName(){
//     const ans= await inquirer.prompt({
//         name:'player_name',
//         type:'input',
//         message:'what is your name?',
//         default(){
//             return 'player'
//         }
//     })
//     playerName;
// }
// await askName();


// const cluster=require("cluster");
// const express=require("express");
// const os=require("os");
// const cpuNo=os.cpus().length;
// if (cluster.isMaster) {
//     console.log(`Master process ${process.pid} is running`);
  
//     for (let i = 0; i < cpuNo-6; i++) {
//       cluster.fork();
//     }
  
//     cluster.on('exit', (worker, code, signal) => {
//       console.log(`Worker process ${worker.process.pid} died. Restarting...`);
//       cluster.fork();
//     });
// }
// else {
//     const app = express();
  
//     // Configure your Express app
//     // ...
  
//     const server = app.listen(3000, () => {
//       console.log(`Worker process ${process.pid} is listening on port 3000`);
//     });
//   }
 

// const cluster=require("cluster");
// if(cluster.isMaster){
//     console.log("master",process.pid);
//     cluster.fork();
//     cluster.fork()
// }
// else{
//     console.log("worker",process.pid);
//     const http=require("http");
//     const server=http.createServer((req,res)=>{
//         if(req.url==='/'){
//             res.end("hello home");
//         }
//         else if(req.url==="/about"){
//             for (let i = 0; i < 50000000; i++) {
               
                
//             }
//             res.end("hello about");
//         }
//     })
//     server.listen(9000,()=>{
//         console.log("server is listning")
//     })
// }

const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("hello home");
    }

})
server.listen(9000,()=>{
    console.log("server is listning")
})