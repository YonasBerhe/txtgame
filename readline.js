var readline = require('readline');
var chalk = require('chalk');
var script = require('./script');
// console.log(chalk.blue('Hello World'));


var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

run('intro');

function run(name) {
var scene = script[name];

var prompt;

if (typeof scene.prompt === 'function') {
  // console.log(scene.prompt());
  prompt = scene.prompt();

} else {
  // console.log(scene.prompt);
  prompt = scene.prompt;

}

rl.question(prompt, function (choice) {
  if (scene.result) {
    var nextScene = scene.result(choice);
    run(nextScene);
  }else {
    rl.close();
  }
})

}

rl.question("What do you think of Node.js? ", function(answer) {
  // TODO: Log the answer in a database
  console.log(chalk.blue("Thank you for your valuable feedback:"), answer);

//close your connection
  rl.close();
});
