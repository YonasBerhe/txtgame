var chalk = require('chalk');
//creating an empty object
var script = {};
var choices = {};

var message = chalk.blue('My name is whereto I will help you choose where you will work. ready? (Press Enter to continue)');

console.log(message);



script.start = {

  prompt: chalk.blue('Where do do you want to work today? 1) do you need to network 2) Need to focus'),
  result: choice => {
    choices.network = (choice !== '1');
      if (choices.network) {
        return 'watch';

      }else {
        return 'starbucks';
      }

  }

};
script.watch = {
  prompt: 'Go to co-working space check out meetup.com  (Press Enter to continue)',
  result: () => {
    return 'coworking';
  }
};

script.coworking = {
  prompt: '1) HUB 2) SURF',
  result: choice => {
    if (choice == '1' ) {

    }else {
      return 'meetup';
    }


    }
};

script.meetup = {
  prompt: 'Did you find a meetup?  (Press Enter to continue)',
  result: () => {
    return 'coworking';

  }
};

script.noway = {
  prompt: 'Go',
  result: () => {
    return 'meeting';

  }
};


script.meeting = {
  prompt: 'Who would you like to meet?',
  result: () => {
    prompt: 'Go'
    // return 'Thanks and go';

  }
};

script.starbucks = {
    prompt: 'focus at starbucks',
    result: () => {
    return 'yes'
    }
}



script.starbucks = {
    prompt: 'focus at starbucks',

}

module.exports = script;


//
// var hello =  [
//   'Hub',
//   'fifth',
//   'fifth',
//   'hello fifth',
//   'starbucks on fifth',
//   'starbucks on fifth',
//   'too fifth'
//
// ];

//
// var rand = hello[Math.floor(Math.random() * hello.length)];
//
// console.log(rand);
