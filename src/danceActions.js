var lineUp = function (dancers) {
  /*
  stop dancers' movement with global vatiable
  divide window width by number of dancers + 1 (=spacing)
  iterate through dancers, 
    move top left of each dancer to line at left: spacing * (1 + index)
                                            top: 80% of body heigth
  */
  var spacing = $('body').width() / (dancers.length + 1);
  var lineHeight = $('body').height() * 0.8;

  for (var i = 0; i < dancers.length; i++) {
    // dancers[i].setPosition(lineHeight, spacing * (i + 1));
    dancers[i].$node.animate({ 'left': (spacing * (i + 1)), 'top': lineHeight }, 'slow' );
  }
};

var randomizePosition = function (dancers) {
  // iterate through all dancers and position them randomly 
};



