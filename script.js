var script = {};

script.intro = {
  promt: ' What do you teach \n you bastard' + '   1) Text\n 2)Gis and Mapping',
  result: function (choice) {
   if (choice === '1') {
    choice.ltc = 'textGame';
    return 'textGame';
  }
 else if (choice == '2')  {
   return textGame;
   choice.ltc = 'GIS'

 }
 else {
   return 'intro';
 }
}
}

script.textGame = {
  promt: ' Teach textGame: \n press Enter',
  result: function (choice) {
   return 'afterclass' ;
}
}




script.GIS = {
  promt: 'Teach GIS: \n press Enter',
  result: function (choice) {
   if (choice ==='1') {
     return afterclass;

   }
 else {
   return 'intro';
 }
}
}

script.afterClass = {
  promt: function () {
    var p = '';
    if (choices.ltc === 'textGame') {

    }else {
      return 'intro';
    }
  }
  }

  module.exports = script;
