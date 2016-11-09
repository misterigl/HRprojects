var makeStationaryDancer = class extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  

  step() {  
    // check if moving dancer is nearby
      //explode

    super.step();

  }

  checkMovingDancer() {
  // go through movingDancer array in global scope
    // for every dancer compare the two locations
    // if within distance return true
  // else retun false
    var currentLocation = super.getCurrentLocation();
    for (var i = 0; i < movingDancers.length; i++) {
      // get dancer's position
      var checkDancer = movingDancers[i].getCurrentLocation();
      // check dancer's distance

    } 
  }
};
